# React Hotkey Hook

A react hook which can execute any function for any keyboard shortcut.

# Installation

Install the package with npm or yarn with either of the following commands.

```
npm i react-hotkey-hook
```

```
yarn add react-hotkey-hook
```

Make sure to import the useHotkey hook from the library after it is installed

```js
import useHotkey from "react-hotkey-hook";
```

# Usage

```js
import "./App.css";
import React from "react";
import useHotkey from "react-hotkey-hook";

function App() {
  const onKeyPress = () => {
    console.log("key pressed");
  };

  useHotkey("Control+a", true, onKeyPress);

  useHotkey("Shift+A", true, onKeyPress);

  return (
    <div className="container">
      <h1>Example for React Hotkey Hook</h1>
    </div>
  );
}

export default App;
```

# Options

All options are optional and have a default value which you can override to change the behavior of the hook.

| Option     | Type         | Description                                                            |
| ---------- | ------------ | ---------------------------------------------------------------------- |
| `hotkeys`  | `string`     | The combination of hotkeys.                                            |
| `overide`  | `boolean`    | Optional Parameter. Prevents default event when true. True on default. |
| `callback` | `() => void` | Function that will be called when the combination of keys are pressed. |

# License

Distributed under the MIT License. See `LICENSE` for more information.
