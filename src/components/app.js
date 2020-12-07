import React, { Component } from 'react';

// import Alignment from "./traditionalComponents/alignment"
// import Toggle from "./traditionalComponents/toggle"
// import Counter from "./traditionalComponents/counter"
// import Resizer from "./traditionalComponents/resizer"
// import Color from "./traditionalComponents/color"
// import Clock from "./traditionalComponents/clock"

// import Example from "./stateExample.js"
// import HookToggle from "./hooksToggle.js"
// import EffectExample from "./effectExample.js"
import Example from "./stateExample.js"
import HookToggle from "./hooksToggle.js"
import EffectExample from "./effectExample.js"

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        {/* <Alignment />
        <hr />
        <Toggle />
        <hr />
        <Counter />
        <hr />
        <Resizer />
        <hr />
        <Color />
        <hr />
        <Clock /> */}

        <Example />
        <hr />
        <HookToggle />
        <hr />
        <EffectExample />
      </div>
    );
  }
}
