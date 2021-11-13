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
import useHotkey from 'react-hotkey-hook'
```

# Usage

```js
import './App.css'
import React from 'react'
import useHotkey from 'react-hotkey-hook'

function App() {
  const onKeyPress = () => {
    console.log('key pressed')
  }

  useHotkey('Control+a', true, onKeyPress)

  useHotkey('Shift+A', true, onKeyPress)

  return (
    <div className='container'>
      <h1>Example for React Hotkey Hook</h1>
    </div>
  )
}

export default App
```

# Options

`hotkeys` The combination of hotkeys. Follow the format above in the example. Make sure to make the

`overide` Prevents default event when true. True on default.

`callback` Function that will be envoked when the keys are pressed.

# License

MIT
