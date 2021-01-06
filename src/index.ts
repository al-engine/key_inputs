export interface KeyInputsResult {
  keysPress: Array<string>;
  keysHold: Array<string>;
  isPressed: (key: string) => boolean;
  isHolded: (key: string) => boolean;
}
export default class KeyInputs {
  keysPress = Array<string>();
  keysHold = Array<string>();
  isPressed = (key: string) => {
    return this.keysPress.indexOf(key) !== -1;
  };
  isHolded = (key: string) => {
    return this.keysHold.indexOf(key) !== -1;
  };
  onKeydown = (event: KeyboardEvent) => {
    const index = this.keysHold.indexOf(event.key);
    if (index === -1) {
      this.keysPress.push(event.key);
      this.keysHold.push(event.key);
    }
  };
  onKeyup = (event: KeyboardEvent) => {
    const index = this.keysHold.indexOf(event.key);
    if (index != -1) {
      this.keysHold.splice(index, 1);
    }
  };
  init() {
    document.addEventListener('keydown', this.onKeydown, false);
    document.addEventListener('keyup', this.onKeyup, false);
  }
  clean () {
    document.removeEventListener('keydown', this.onKeydown, false);
    document.removeEventListener('keyup', this.onKeyup, false);
  }
  collect() : KeyInputsResult {
    const input = {
      keysPress: [...this.keysPress],
      keysHold: [...this.keysHold],
      isPressed: this.isPressed,
      isHolded: this.isHolded,
    };
    this.keysPress = [];
    return input;
  }
}