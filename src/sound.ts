// Web Audio synthesizer for traditional Japanese atmosphere, battle effects, and BGM
class SoundMaster {
  private ctx: AudioContext | null = null;
  private bgmGain: GainNode | null = null;
  private sfxGain: GainNode | null = null;
  private isBgmEnabled: boolean = true;
  private bgmIntervalId: number | null = null;
  private bgmNoteIndex: number = 0;

  // Japanese Insen & Hirajoshi Scale Frequencies (Koto / Shamisen tuning)
  // D3, Eb3, G3, A3, C4, D4, Eb4, G4, A4, C5
  private readonly KOTO_SCALE: number[] = [
    146.83, 155.56, 196.00, 220.00, 261.63,
    293.66, 311.13, 392.00, 440.00, 523.25, 587.33
  ];

  // Melodic sequence pattern (indices into KOTO_SCALE)
  private readonly MELODY_PATTERN: number[] = [
    0, 2, 4, 3, 2, 5, 4, 2,
    1, 3, 5, 4, 3, 6, 5, 3,
    2, 4, 6, 5, 7, 6, 4, 2,
    0, 3, 2, 4, 1, 3, 0, 0
  ];

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
        this.sfxGain = this.ctx.createGain();
        this.sfxGain.gain.setValueAtTime(0.85, this.ctx.currentTime);
        this.sfxGain.connect(this.ctx.destination);

        this.bgmGain = this.ctx.createGain();
        this.bgmGain.gain.setValueAtTime(0.22, this.ctx.currentTime);
        this.bgmGain.connect(this.ctx.destination);
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // BGM Controls
  startBgm() {
    this.init();
    if (!this.ctx || !this.bgmGain || this.bgmIntervalId !== null) return;
    if (!this.isBgmEnabled) return;

    this.bgmNoteIndex = 0;
    // Step melody every 400ms (tempo = ~75 BPM)
    this.bgmIntervalId = window.setInterval(() => {
      this.playNextBgmNote();
    }, 420);
  }

  stopBgm() {
    if (this.bgmIntervalId !== null) {
      clearInterval(this.bgmIntervalId);
      this.bgmIntervalId = null;
    }
  }

  toggleBgm(): boolean {
    this.isBgmEnabled = !this.isBgmEnabled;
    if (this.isBgmEnabled) {
      this.startBgm();
    } else {
      this.stopBgm();
    }
    return this.isBgmEnabled;
  }

  get isBgmOn(): boolean {
    return this.isBgmEnabled;
  }

  // Synthesize a plucked Japanese string (Koto) note
  private playNextBgmNote() {
    if (!this.ctx || !this.bgmGain || !this.isBgmEnabled) return;
    const patternIdx = this.MELODY_PATTERN[this.bgmNoteIndex % this.MELODY_PATTERN.length];
    const freq = this.KOTO_SCALE[patternIdx] || 220;
    this.bgmNoteIndex++;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const overtone = this.ctx.createOscillator();
    const noteGain = this.ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(freq, now);

    // Subtle overtone creates metallic koto string character
    overtone.type = 'sine';
    overtone.frequency.setValueAtTime(freq * 2.01, now);

    // Pluck envelope: sharp attack, gentle harmonic decay
    noteGain.gain.setValueAtTime(0.001, now);
    noteGain.gain.linearRampToValueAtTime(0.18, now + 0.02);
    noteGain.gain.exponentialRampToValueAtTime(0.001, now + 0.65);

    osc.connect(noteGain);
    overtone.connect(noteGain);
    noteGain.connect(this.bgmGain);

    osc.start(now);
    overtone.start(now);
    osc.stop(now + 0.65);
    overtone.stop(now + 0.65);

    // Occasional subtle bass taiko stroke on beat 0 and 16
    if (this.bgmNoteIndex % 8 === 0) {
      this.playAmbientDrum();
    }
  }

  private playAmbientDrum() {
    if (!this.ctx || !this.bgmGain) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.frequency.setValueAtTime(95, now);
    osc.frequency.exponentialRampToValueAtTime(32, now + 0.35);

    gain.gain.setValueAtTime(0.18, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.38);

    osc.connect(gain);
    gain.connect(this.bgmGain);

    osc.start(now);
    osc.stop(now + 0.38);
  }

  // --- Sound Effects ---

  // Katana blade slash whoosh + metal slice
  playSlash() {
    if (!this.ctx || !this.sfxGain) return;
    const now = this.ctx.currentTime;

    // Noise buffer for swoosh wind
    const bufferSize = this.ctx.sampleRate * 0.15;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }
    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;

    // Highpass filter for razor blade sound
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(1400, now);
    filter.frequency.exponentialRampToValueAtTime(3200, now + 0.08);
    filter.Q.value = 3;

    const noiseGain = this.ctx.createGain();
    noiseGain.gain.setValueAtTime(0.4, now);
    noiseGain.gain.exponentialRampToValueAtTime(0.01, now + 0.14);

    noise.connect(filter);
    filter.connect(noiseGain);
    noiseGain.connect(this.sfxGain);

    noise.start(now);
    noise.stop(now + 0.15);

    // Metal chime ring
    const osc = this.ctx.createOscillator();
    const oscGain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(1860, now);
    osc.frequency.exponentialRampToValueAtTime(1200, now + 0.25);
    oscGain.gain.setValueAtTime(0.35, now);
    oscGain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);

    osc.connect(oscGain);
    oscGain.connect(this.sfxGain);
    osc.start(now);
    osc.stop(now + 0.25);
  }

  // Deep Taiko strike
  playDrum() {
    if (!this.ctx || !this.sfxGain) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.frequency.setValueAtTime(160, now);
    osc.frequency.exponentialRampToValueAtTime(38, now + 0.22);
    gain.gain.setValueAtTime(1.0, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.25);
    osc.connect(gain);
    gain.connect(this.sfxGain);
    osc.start(now);
    osc.stop(now + 0.25);
  }

  // Heavy strike (Kakari-musubi / Critical)
  playHeavyStrike() {
    if (!this.ctx || !this.sfxGain) return;
    this.playSlash();
    this.playDrum();

    // Deep bronze gong resonance
    const now = this.ctx.currentTime;
    [180, 270, 360, 540].forEach((freq) => {
      if (!this.ctx || !this.sfxGain) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now);
      gain.gain.setValueAtTime(0.28, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.8);
      osc.connect(gain);
      gain.connect(this.sfxGain);
      osc.start(now);
      osc.stop(now + 0.8);
    });
  }

  // Shinto Bell / Suzu chime
  playBell() {
    if (!this.ctx || !this.sfxGain) return;
    const now = this.ctx.currentTime;
    [880, 1320, 1760, 2640].forEach((f, idx) => {
      if (!this.ctx || !this.sfxGain) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(f, now);
      gain.gain.setValueAtTime(0.22 / (idx + 1), now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.6);
      osc.connect(gain);
      gain.connect(this.sfxGain);
      osc.start(now);
      osc.stop(now + 0.6);
    });
  }

  // Kakari-musubi Fever arpeggio
  playSpecial() {
    if (!this.ctx || !this.sfxGain) return;
    [523.25, 659.25, 783.99, 1046.5, 1318.5].forEach((f, idx) => {
      setTimeout(() => {
        if (!this.ctx || !this.sfxGain) return;
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(f, now);
        gain.gain.setValueAtTime(0.32, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.45);
        osc.connect(gain);
        gain.connect(this.sfxGain);
        osc.start(now);
        osc.stop(now + 0.45);
      }, idx * 60);
    });
  }

  // Damage / Recoil error sound
  playDamage() {
    if (!this.ctx || !this.sfxGain) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(240, now);
    osc.frequency.linearRampToValueAtTime(60, now + 0.25);
    gain.gain.setValueAtTime(0.65, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.25);
    osc.connect(gain);
    gain.connect(this.sfxGain);
    osc.start(now);
    osc.stop(now + 0.25);
  }

  // Fanfare for Stage Clear / Game Completion
  playFanfare() {
    if (!this.ctx || !this.sfxGain) return;
    const notes = [440, 523.25, 587.33, 659.25, 880];
    notes.forEach((f, idx) => {
      setTimeout(() => {
        if (!this.ctx || !this.sfxGain) return;
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(f, now);
        gain.gain.setValueAtTime(0.3, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.7);
        osc.connect(gain);
        gain.connect(this.sfxGain);
        osc.start(now);
        osc.stop(now + 0.7);
      }, idx * 110);
    });
  }
}

export const sound = new SoundMaster();
