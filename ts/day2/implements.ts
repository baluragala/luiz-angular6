interface IMediaPlayer {
  play: () => void;
  pause: () => void;
  volume: (value: number) => boolean;
}

class MediaPlayer implements IMediaPlayer {
  play() {}
  pause() {}

  volume(value: number): boolean {
    return false;
  }
}
