/**
 * GRAMMAR DEFENDER ENGINE - V2.5
 * - Cyber Drone Visuals (Angular Hexagon Space Pods with Thrusters)
 * - Anti-Overlap Drone Spacing & Staggered Altitude
 * - Rock-Solid Chapter Filtering (Based on Level ID range)
 * - Instant Stage A1 / A2 Switching
 */

class RetroAudioEngine {
  constructor() {
    this.ctx = null;
    this.enabled = true;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playLaser() {
    if (!this.enabled || !this.ctx) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'square';
    osc.frequency.setValueAtTime(820, now);
    osc.frequency.exponentialRampToValueAtTime(140, now + 0.09);
    gain.gain.setValueAtTime(0.18, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.09);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.09);
  }

  playHitCorrect() {
    if (!this.enabled || !this.ctx) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(520, now);
    osc.frequency.exponentialRampToValueAtTime(1040, now + 0.14);
    gain.gain.setValueAtTime(0.24, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.14);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.14);
  }

  playHitWrong() {
    if (!this.enabled || !this.ctx) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(160, now);
    osc.frequency.exponentialRampToValueAtTime(50, now + 0.24);
    gain.gain.setValueAtTime(0.3, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.24);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.24);
  }

  playStageClear() {
    if (!this.enabled || !this.ctx) return;
    [523.25, 659.25, 783.99, 1046.50].forEach((freq, idx) => {
      const now = this.ctx.currentTime + idx * 0.09;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now);
      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.15);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.15);
    });
  }
}

class GameApp {
  constructor() {
    this.canvas = document.getElementById('gameCanvas');
    this.ctx = this.canvas.getContext('2d');
    this.audio = new RetroAudioEngine();

    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.dpr = window.devicePixelRatio || 1;

    this.ship = { x: this.width / 2, y: this.height - 130, vx: 0, speed: 7.5 };
    this.lasers = [];
    this.drones = [];
    this.particles = [];
    this.stars = [];

    this.STATE_SELECT = 'SELECT';
    this.STATE_PLAYING = 'PLAYING';
    this.state = this.STATE_SELECT;

    this.currentStageKey = 'A1';
    this.currentFilter = 'all';
    this.currentLevelIndex = 0;
    this.currentQuestionIndex = 0;
    this.activeLevelData = null;
    this.activeQueue = [];
    this.currentQuestion = null;

    this.shield = 100;
    this.score = 0;
    this.streak = 0;
    this.mistakesCount = 0;
    this.timeCounter = 0;

    this.toast = { text: '', color: '#fff', timer: 0 };
    this.touchSlideActive = false;
    this.touchStartX = 0;
    this.shipStartX = 0;

    this.initStars();
    this.handleResize();
    window.addEventListener('resize', () => this.handleResize());

    this.setupUI();
    this.setupEventListeners();
    this.checkResumeSession();
    this.updateStageButtonState();
    this.renderLevelCards('all');

    requestAnimationFrame(() => this.loop());
  }

  getActiveStageDataset() {
    if (this.currentStageKey === 'A2') {
      return (window.STAGE_A2_DATA && window.STAGE_A2_DATA.levels && window.STAGE_A2_DATA.levels.length > 0)
        ? window.STAGE_A2_DATA
        : { stage: 'A2', levels: [] };
    }
    return (window.STAGE_A1_DATA && window.STAGE_A1_DATA.levels)
      ? window.STAGE_A1_DATA
      : { stage: 'A1', levels: [] };
  }

  handleResize() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.dpr = window.devicePixelRatio || 1;

    this.canvas.width = this.width * this.dpr;
    this.canvas.height = this.height * this.dpr;
    this.ctx.scale(this.dpr, this.dpr);

    this.ship.y = this.height - 130;
    this.ship.x = Math.max(30, Math.min(this.width - 30, this.ship.x));
    this.initStars();
  }

  initStars() {
    this.stars = [];
    const count = Math.floor((this.width * this.height) / 7500);
    for (let i = 0; i < count; i++) {
      this.stars.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        speed: 0.3 + Math.random() * 1.5,
        size: 1 + Math.random() * 1.8
      });
    }
  }

  saveCurrentPosition() {
    const session = {
      stageKey: this.currentStageKey,
      levelIdx: this.currentLevelIndex,
      questionIdx: this.currentQuestionIndex
    };
    localStorage.setItem('grammar_last_session', JSON.stringify(session));
  }

  checkResumeSession() {
    const raw = localStorage.getItem('grammar_last_session');
    if (!raw) return;
    try {
      const session = JSON.parse(raw);
      const stageData = (session.stageKey === 'A2') ? window.STAGE_A2_DATA : window.STAGE_A1_DATA;
      if (stageData && stageData.levels && stageData.levels[session.levelIdx]) {
        const lvl = stageData.levels[session.levelIdx];
        const banner = document.getElementById('resume-banner');
        const text = document.getElementById('resume-text');
        if (text && banner) {
          text.innerText = `[${session.stageKey}] ${lvl.id} • FRAGE ${session.questionIdx + 1}`;
          banner.classList.remove('hidden');

          document.getElementById('btn-resume-session').onclick = () => {
            this.audio.init();
            this.currentStageKey = session.stageKey;
            this.updateStageButtonState();
            this.startLevel(session.levelIdx, session.questionIdx);
          };
        }
      }
    } catch (e) {
      console.warn('Could not restore session', e);
    }
  }

  updateStageButtonState() {
    const btnA1 = document.getElementById('btn-stage-a1');
    const btnA2 = document.getElementById('btn-stage-a2');
    if (btnA1 && btnA2) {
      if (this.currentStageKey === 'A2') {
        btnA2.classList.add('active');
        btnA1.classList.remove('active');
      } else {
        btnA1.classList.add('active');
        btnA2.classList.remove('active');
      }
    }
    const stageData = this.getActiveStageDataset();
    const counter = document.getElementById('unlocked-counter');
    if (counter) {
      counter.innerText = `${stageData.levels.length} SECTORS`;
    }
  }

  // --- BULLETPROOF CHAPTER FILTERING ---
  // Uses exact Level IDs (e.g., LVL 1.01 - LVL 1.16 is K1-K4)
  renderLevelCards(filter = 'all') {
    this.currentFilter = filter;
    const container = document.getElementById('level-list-container');
    if (!container) return;
    container.innerHTML = '';

    const stageData = this.getActiveStageDataset();
    const levels = stageData.levels || [];
    const saved = this.loadProgress();

    levels.forEach((lvl, idx) => {
      if (filter !== 'all') {
        const idNum = parseFloat(lvl.id.replace(/[^\d.]/g, ''));
        
        if (this.currentStageKey === 'A1') {
          // A1: 1.01-1.16 (K1-K4), 1.17-1.34 (K5-K8), 1.35-1.48 (K9-K12), 1.49-1.59 (K13-K16)
          if (filter === 'K1-K4' && (idNum < 1.01 || idNum > 1.165)) return;
          if (filter === 'K5-K8' && (idNum < 1.169 || idNum > 1.345)) return;
          if (filter === 'K9-K12' && (idNum < 1.349 || idNum > 1.485)) return;
          if (filter === 'K13-K16' && (idNum < 1.489 || idNum > 1.595)) return;
        } else {
          // A2: 2.01-2.11 (K1-K4), 2.12-2.22 (K5-K8), 2.23-2.33 (K9-K12), 2.34-2.43 (K13-K16)
          if (filter === 'K1-K4' && (idNum < 2.01 || idNum > 2.115)) return;
          if (filter === 'K5-K8' && (idNum < 2.119 || idNum > 2.225)) return;
          if (filter === 'K9-K12' && (idNum < 2.229 || idNum > 2.335)) return;
          if (filter === 'K13-K16' && (idNum < 2.339 || idNum > 2.435)) return;
        }
      }

      const stars = saved[idx] || 0;
      let starStr = '☆☆☆';
      if (stars === 3) starStr = '★★★';
      else if (stars === 2) starStr = '★★☆';
      else if (stars === 1) starStr = '★☆☆';

      const card = document.createElement('div');
      card.className = 'level-card';
      card.innerHTML = `
        <div class="card-left">
          <div class="card-meta-row">
            <span class="level-pill">${lvl.id}</span>
            <span class="chapter-tag">${lvl.chapter}</span>
          </div>
          <div class="level-title-text">${lvl.title}</div>
        </div>
        <div class="card-stars ${stars > 0 ? 'has-stars' : ''}">${starStr}</div>
      `;

      card.addEventListener('click', () => {
        this.audio.init();
        this.startLevel(idx, 0);
      });

      container.appendChild(card);
    });
  }

  resetChipsToAll() {
    const chips = document.querySelectorAll('.chapter-chips .chip');
    chips.forEach(c => {
      if (c.dataset.filter === 'all') c.classList.add('active');
      else c.classList.remove('active');
    });
  }

  setupUI() {
    const btnA1 = document.getElementById('btn-stage-a1');
    const btnA2 = document.getElementById('btn-stage-a2');

    if (btnA1 && btnA2) {
      btnA1.addEventListener('click', () => {
        this.currentStageKey = 'A1';
        this.updateStageButtonState();
        this.resetChipsToAll();
        this.renderLevelCards('all');
      });

      btnA2.addEventListener('click', () => {
        if (!window.STAGE_A2_DATA || !window.STAGE_A2_DATA.levels || window.STAGE_A2_DATA.levels.length === 0) {
          alert('Stage A2 lädt... Bitte sicherstellen, dass die A2-Dateien geladen wurden.');
          return;
        }
        this.currentStageKey = 'A2';
        this.updateStageButtonState();
        this.resetChipsToAll();
        this.renderLevelCards('all');
      });
    }

    const executeJump = () => {
      const input = document.getElementById('jump-q-input');
      const val = parseInt(input.value, 10);
      const total = this.activeLevelData.questions.length;
      if (!isNaN(val) && val >= 1 && val <= total) {
        this.jumpToQuestion(val - 1);
        input.blur();
      } else {
        this.showToast(`Bitte 1 bis ${total} eingeben`, '#facc15', 80);
      }
    };

    document.getElementById('btn-jump-q').addEventListener('click', executeJump);
    document.getElementById('jump-q-input').addEventListener('keydown', (e) => {
      if (e.key === 'Enter') executeJump();
    });

    document.getElementById('btn-back-to-menu').addEventListener('click', () => {
      this.openLevelSelect();
    });

    const chips = document.querySelectorAll('.chapter-chips .chip');
    chips.forEach(chip => {
      chip.addEventListener('click', () => {
        chips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        this.renderLevelCards(chip.dataset.filter);
      });
    });

    document.getElementById('btn-resume').addEventListener('click', () => this.toggleCodex(false));
    document.getElementById('codex-close').addEventListener('click', () => this.toggleCodex(false));
    document.getElementById('btn-codex').addEventListener('click', () => this.toggleCodex(true));

    document.getElementById('btn-next-level').addEventListener('click', () => {
      document.getElementById('screen-victory').classList.add('hidden');
      const stageData = this.getActiveStageDataset();
      if (this.currentLevelIndex + 1 < stageData.levels.length) {
        this.startLevel(this.currentLevelIndex + 1, 0);
      } else {
        this.openLevelSelect();
      }
    });

    document.getElementById('btn-select-map').addEventListener('click', () => {
      document.getElementById('screen-victory').classList.add('hidden');
      this.openLevelSelect();
    });

    document.getElementById('btn-retry').addEventListener('click', () => {
      document.getElementById('screen-gameover').classList.add('hidden');
      this.startLevel(this.currentLevelIndex, 0);
    });

    document.getElementById('btn-fail-map').addEventListener('click', () => {
      document.getElementById('screen-gameover').classList.add('hidden');
      this.openLevelSelect();
    });
  }

  setupEventListeners() {
    window.addEventListener('keydown', (e) => {
      this.audio.init();
      if (e.key === ' ' && this.state === this.STATE_PLAYING) {
        if (document.activeElement.tagName !== 'INPUT') {
          this.fireLaser();
          e.preventDefault();
        }
      }
      if (e.key === 'ArrowLeft' || e.key === 'a') this.ship.vx = -this.ship.speed;
      if (e.key === 'ArrowRight' || e.key === 'd') this.ship.vx = this.ship.speed;
    });

    window.addEventListener('keyup', (e) => {
      if (['ArrowLeft', 'ArrowRight', 'a', 'd'].includes(e.key)) this.ship.vx = 0;
    });

    const track = document.getElementById('touch-steer-zone');
    track.addEventListener('touchstart', (e) => {
      this.audio.init();
      this.touchSlideActive = true;
      this.touchStartX = e.touches[0].clientX;
      this.shipStartX = this.ship.x;
      e.preventDefault();
    }, { passive: false });

    track.addEventListener('touchmove', (e) => {
      if (!this.touchSlideActive) return;
      const deltaX = (e.touches[0].clientX - this.touchStartX) * 1.8;
      this.ship.x = Math.max(30, Math.min(this.width - 30, this.shipStartX + deltaX));
      e.preventDefault();
    }, { passive: false });

    track.addEventListener('touchend', () => {
      this.touchSlideActive = false;
    });

    document.getElementById('btn-fire').addEventListener('touchstart', (e) => {
      this.audio.init();
      if (this.state === this.STATE_PLAYING) this.fireLaser();
      e.preventDefault();
    });

    this.canvas.addEventListener('pointerdown', (e) => {
      this.audio.init();
      if (this.state !== this.STATE_PLAYING) return;
      const rect = this.canvas.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const clickY = e.clientY - rect.top;

      this.drones.forEach(d => {
        if (Math.abs(d.x - clickX) < d.width / 1.5 && Math.abs(d.y - clickY) < 35) {
          this.ship.x = d.x;
          this.fireLaser();
        }
      });
    });
  }

  startLevel(idx, startQuestionIndex = 0) {
    this.currentLevelIndex = idx;
    const stageData = this.getActiveStageDataset();
    this.activeLevelData = stageData.levels[idx];
    this.currentQuestionIndex = startQuestionIndex;

    this.activeQueue = this.activeLevelData.questions.slice(startQuestionIndex);

    this.shield = 100;
    this.score = 0;
    this.streak = 0;
    this.mistakesCount = 0;
    this.lasers = [];
    this.drones = [];
    this.particles = [];
    this.ship.x = this.width / 2;

    document.getElementById('screen-level-select').classList.add('hidden');
    document.getElementById('touch-controls').classList.remove('hidden');
    document.getElementById('combat-hud-overlay').classList.remove('hidden');

    document.getElementById('hud-level-tag').innerText = `[${this.currentStageKey}] ${this.activeLevelData.id}`;
    document.getElementById('jump-total-label').innerText = `/ ${this.activeLevelData.questions.length}`;

    this.state = this.STATE_PLAYING;
    this.spawnNextWave();
  }

  jumpToQuestion(qIndex) {
    this.currentQuestionIndex = qIndex;
    this.activeQueue = this.activeLevelData.questions.slice(qIndex);
    this.lasers = [];
    this.drones = [];
    this.showToast(`GESPRUNGEN ZU FRAGE ${qIndex + 1}`, '#38bdf8', 60);
    this.spawnNextWave();
  }

  openLevelSelect() {
    this.state = this.STATE_SELECT;
    document.getElementById('touch-controls').classList.add('hidden');
    document.getElementById('combat-hud-overlay').classList.add('hidden');
    document.getElementById('screen-level-select').classList.remove('hidden');
    this.checkResumeSession();
    this.updateStageButtonState();
    this.renderLevelCards(this.currentFilter);
  }

  // --- SPACED & STAGGERED CYBER PODS ---
  spawnNextWave() {
    this.drones = [];
    this.lasers = [];

    if (this.activeQueue.length === 0) {
      this.handleLevelWin();
      return;
    }

    const jumpInput = document.getElementById('jump-q-input');
    if (document.activeElement !== jumpInput) {
      jumpInput.value = this.currentQuestionIndex + 1;
    }

    this.saveCurrentPosition();

    this.currentQuestion = this.activeQueue[0];
    const opts = this.shuffle([...this.currentQuestion.options]);
    const numOpts = opts.length;

    // Generous horizontal padding so pods never touch screen borders
    const sideMargin = 36;
    const availableWidth = this.width - (sideMargin * 2);
    const spacing = availableWidth / (numOpts - 1 || 1);

    // Compute dynamic width per drone to keep 12-16px clear gap between pods
    const droneWidth = Math.min(88, Math.max(68, (availableWidth / numOpts) - 14));
    const droneHeight = 44;

    opts.forEach((opt, i) => {
      // Stagger vertical height (V-formation / W-formation) to ensure zero horizontal crowding
      const yOffset = (i % 2 === 0) ? 0 : 42;

      this.drones.push({
        x: (numOpts === 1) ? this.width / 2 : sideMargin + (spacing * i),
        y: 125 + yOffset,
        text: opt,
        isCorrect: (opt === this.currentQuestion.correct),
        rule: this.currentQuestion.rule,
        speed: 0.95,
        width: droneWidth,
        height: droneHeight,
        pulseOffset: Math.random() * Math.PI
      });
    });
  }

  fireLaser() {
    this.lasers.push({
      x: this.ship.x,
      y: this.ship.y - 18,
      speed: 14
    });
    this.audio.playLaser();
  }

  handleDroneHit(drone) {
    if (drone.isCorrect) {
      this.audio.playHitCorrect();
      this.triggerExplosion(drone.x, drone.y, '#22c55e', 24);
      this.streak++;
      this.score += 100 * Math.min(this.streak, 5);
      document.getElementById('hud-score').innerText = `${this.score} PTS`;

      this.activeQueue.shift();
      this.currentQuestionIndex++;

      this.showToast('RICHTIG! KOMBO x' + this.streak, '#22c55e', 45);
      setTimeout(() => this.spawnNextWave(), 380);
    } else {
      this.audio.playHitWrong();
      this.triggerExplosion(drone.x, drone.y, '#ef4444', 32);
      this.shield = Math.max(0, this.shield - 15);
      this.streak = 0;
      this.mistakesCount++;

      this.showToast(drone.rule, '#facc15', 130);

      if (this.shield <= 0) {
        this.handleLevelFail();
      } else {
        setTimeout(() => this.spawnNextWave(), 1100);
      }
    }
  }

  handleLevelWin() {
    this.audio.playStageClear();
    this.state = this.STATE_SELECT;
    document.getElementById('touch-controls').classList.add('hidden');
    document.getElementById('combat-hud-overlay').classList.add('hidden');

    let stars = 1;
    if (this.mistakesCount === 0 && this.shield === 100) stars = 3;
    else if (this.shield >= 50) stars = 2;

    this.saveProgress(this.currentLevelIndex, stars);

    document.getElementById('victory-stars').innerText = stars === 3 ? '★★★' : (stars === 2 ? '★★☆' : '★☆☆');
    document.getElementById('victory-score').innerText = `SEKTOR SCORE: ${this.score}`;
    document.getElementById('victory-rule-desc').innerText = this.activeLevelData.ruleSummary;
    document.getElementById('screen-victory').classList.remove('hidden');
  }

  handleLevelFail() {
    this.state = this.STATE_SELECT;
    document.getElementById('touch-controls').classList.add('hidden');
    document.getElementById('combat-hud-overlay').classList.add('hidden');
    document.getElementById('gameover-hint').innerText = `Tipp: ${this.activeLevelData.ruleSummary}`;
    document.getElementById('screen-gameover').classList.remove('hidden');
  }

  loop() {
    this.timeCounter += 0.05;
    this.update();
    this.render();
    requestAnimationFrame(() => this.loop());
  }

  update() {
    this.stars.forEach(s => {
      s.y += s.speed;
      if (s.y > this.height) {
        s.y = 0;
        s.x = Math.random() * this.width;
      }
    });

    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.life--;
      if (p.life <= 0) this.particles.splice(i, 1);
    }

    if (this.toast.timer > 0) this.toast.timer--;

    if (this.state !== this.STATE_PLAYING) return;

    this.ship.x += this.ship.vx;
    this.ship.x = Math.max(30, Math.min(this.width - 30, this.ship.x));

    for (let i = this.lasers.length - 1; i >= 0; i--) {
      const l = this.lasers[i];
      l.y -= l.speed;

      for (let j = 0; j < this.drones.length; j++) {
        const d = this.drones[j];
        if (Math.abs(l.x - d.x) < d.width / 2 && Math.abs(l.y - d.y) < d.height / 2) {
          this.lasers.splice(i, 1);
          this.handleDroneHit(d);
          return;
        }
      }

      if (l.y < 85) this.lasers.splice(i, 1);
    }

    this.drones.forEach(d => {
      d.y += d.speed;
      if (d.y > this.height - 140) {
        this.shield = Math.max(0, this.shield - 10);
        this.spawnNextWave();
      }
    });
  }

  // --- RENDER CYBER POD / SPACE DRONE SHAPES ---
  drawCyberDrone(ctx, d) {
    const w = d.width;
    const h = d.height;
    const cut = 8; // Chamfered corner cut

    ctx.save();
    ctx.translate(d.x, d.y);

    // Glowing thruster plume under the drone
    const thrusterHeight = 6 + Math.sin(this.timeCounter * 4 + d.pulseOffset) * 3;
    ctx.fillStyle = 'rgba(56, 189, 248, 0.45)';
    ctx.beginPath();
    ctx.moveTo(-w * 0.22, h / 2);
    ctx.lineTo(0, h / 2 + thrusterHeight);
    ctx.lineTo(w * 0.22, h / 2);
    ctx.closePath();
    ctx.fill();

    // Drone Body (Angular Octagonal / Chamfered Cyber Pod)
    ctx.beginPath();
    ctx.moveTo(-w / 2 + cut, -h / 2);
    ctx.lineTo(w / 2 - cut, -h / 2);
    ctx.lineTo(w / 2, -h / 2 + cut);
    ctx.lineTo(w / 2, h / 2 - cut);
    ctx.lineTo(w / 2 - cut, h / 2);
    ctx.lineTo(-w / 2 + cut, h / 2);
    ctx.lineTo(-w / 2, h / 2 - cut);
    ctx.lineTo(-w / 2, -h / 2 + cut);
    ctx.closePath();

    ctx.fillStyle = 'rgba(12, 18, 36, 0.94)';
    ctx.fill();

    ctx.strokeStyle = '#38bdf8';
    ctx.lineWidth = 1.8;
    ctx.stroke();

    // Side armor detail accents
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.35)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(-w / 2 + cut + 2, -h / 2 + 3);
    ctx.lineTo(w / 2 - cut - 2, -h / 2 + 3);
    ctx.stroke();

    // Drone Text
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 15px -apple-system, BlinkMacSystemFont, "Segoe UI", monospace';
    ctx.textAlign = 'center';
    ctx.fillText(d.text, 0, 5);

    ctx.restore();
  }

  render() {
    const ctx = this.ctx;
    ctx.clearRect(0, 0, this.width, this.height);

    ctx.fillStyle = '#64748b';
    this.stars.forEach(s => {
      ctx.fillRect(s.x, s.y, s.size, s.size);
    });

    this.particles.forEach(p => {
      ctx.fillStyle = p.color;
      ctx.fillRect(p.x, p.y, p.size, p.size);
    });

    if (this.state !== this.STATE_PLAYING) return;

    // Mission Clause
    ctx.textAlign = 'center';
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 16px -apple-system, BlinkMacSystemFont, "Segoe UI", monospace';
    ctx.fillText(this.currentQuestion.sentence, this.width / 2, 88);

    // Draw Cyber Drones
    this.drones.forEach(d => {
      this.drawCyberDrone(ctx, d);
    });

    // Lasers
    ctx.fillStyle = '#38bdf8';
    this.lasers.forEach(l => {
      ctx.fillRect(l.x - 2, l.y, 4, 14);
    });

    // Defender Ship
    ctx.fillStyle = '#38bdf8';
    ctx.beginPath();
    ctx.moveTo(this.ship.x, this.ship.y - 18);
    ctx.lineTo(this.ship.x + 20, this.ship.y + 14);
    ctx.lineTo(this.ship.x, this.ship.y + 6);
    ctx.lineTo(this.ship.x - 20, this.ship.y + 14);
    ctx.closePath();
    ctx.fill();

    if (this.toast.timer > 0) {
      ctx.fillStyle = this.toast.color;
      ctx.font = 'bold 13px -apple-system, BlinkMacSystemFont, monospace';
      ctx.fillText(this.toast.text, this.width / 2, this.height - 145);
    }
  }

  toggleCodex(open) {
    const modal = document.getElementById('codex-modal');
    if (open && this.activeLevelData) {
      document.getElementById('codex-level-tag').innerText = `[${this.currentStageKey}] ${this.activeLevelData.id} • ${this.activeLevelData.chapter}`;
      document.getElementById('codex-title').innerText = this.activeLevelData.title;
      document.getElementById('codex-rule-box').innerText = this.activeLevelData.ruleSummary;
      document.getElementById('codex-example-box').innerText = this.activeLevelData.example;
      modal.classList.remove('hidden');
    } else {
      modal.classList.add('hidden');
    }
  }

  triggerExplosion(x, y, color, count) {
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 1.2 + Math.random() * 4.2;
      this.particles.push({
        x: x, y: y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: 18 + Math.random() * 18,
        size: 2 + Math.random() * 2.5,
        color: color
      });
    }
  }

  showToast(text, color, duration) {
    this.toast.text = text;
    this.toast.color = color;
    this.toast.timer = duration;
  }

  saveProgress(levelIdx, stars) {
    const key = `grammar_odyssey_${this.currentStageKey}`;
    let data = JSON.parse(localStorage.getItem(key) || '{}');
    data[levelIdx] = Math.max(data[levelIdx] || 0, stars);
    localStorage.setItem(key, JSON.stringify(data));
  }

  loadProgress() {
    return JSON.parse(localStorage.getItem(`grammar_odyssey_${this.currentStageKey}`) || '{}');
  }

  shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }
}

window.addEventListener('load', () => new GameApp());
