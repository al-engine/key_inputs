export interface KeyInputsResult {
  keysPress: Array<string>,
  keysHold: Array<string>
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
    };
    this.keysPress = [];
    return input;
  }
}