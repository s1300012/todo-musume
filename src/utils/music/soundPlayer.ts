// src/utils/soundPlayer.ts
let bgmAudio: HTMLAudioElement | null = null;

export const onSound = (src: string) => {
  if (bgmAudio) {
    bgmAudio.pause();
    bgmAudio = null;
  }

  bgmAudio = new Audio(src);
  bgmAudio.loop = true;
  bgmAudio.volume = 0.5;

  bgmAudio
    .play()
    .catch((err) => console.warn("BGMの再生に失敗:", err));
};

export const stop = () => {
  if (bgmAudio) {
    bgmAudio.pause();
    bgmAudio.currentTime = 0;
    bgmAudio = null;
  }
};

export const playSE = (src: string) => {
  const seAudio = new Audio(src);
  seAudio.volume = 0.8;
  seAudio.play().catch((err) => console.warn("SEの再生に失敗:", err));
};
