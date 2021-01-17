# Al engine
## Core

Module for handle key inputs in Al engine

```nashorn js
// creating instance
const keyInputs = new KeyInputs();
// then initiate
keyInputs.init();

// each frame collect a key data
const result = keyInputs.collect();

// collected data have arrays with pressed and hold key 
result.keysPress;
result.keysHold;

// and functions to check witch key was pressed and hold
result.isPressed('w');
result.isHolded(' ');

// you can clean listeners if needed
keyInputs.clean();
```