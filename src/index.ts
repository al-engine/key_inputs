export interface KeyInputsResult {
  keysPress: Array<string>;
  keysHold: Array<string>;
  isPressed: (key: string) => boolean;
  isHolded: (key: string) => boolean;
}
export default class KeyInputs {
  keysPress = Array<string>();
  keysHold = Array<string>();
  onKeydown = (event: KeyboardEvent) => {
    const index = this.keysHold.indexOf(event.key);
    if (index === -1) {
      this.keysPress.push(event.key);
      this.keysHold.push(event.key);
    }
  };
  onKeyup = (event: KeyboardEvent) => {
    const index = this.keysHold.indexOf(event.key);
    if (index !== -1) {
      this.keysHold.splice(index, 1);
    }
  };
  init() {
    document.addEventListener('keydown', this.onKeydown, false);
    document.addEventListener('keyup', this.onKeyup, false);
  }
  clean() {
    document.removeEventListener('keydown', this.onKeydown, false);
    document.removeEventListener('keyup', this.onKeyup, false);
  }
  collect(): KeyInputsResult {
    const keysPress = [...this.keysPress];
    const keysHold = [...this.keysHold];
    const input = {
      keysPress: keysPress,
      keysHold: keysHold,
      isPressed: (key: string) => keysPress.indexOf(key) !== -1,
      isHolded: (key: string) => keysHold.indexOf(key) !== -1,
    };
    this.keysPress = [];
    return input;
  }
}
