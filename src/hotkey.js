import { useEffect } from 'react'

const useHotkey = (hotkeys, override = true, callback) => {
  // Handle undefined array
  if (!hotkeys)
    throw new Error(
      'The first parameter to `useHotkey` must contain atleast one `KeyboardEvent.key` string.'
    )

  // Handle incorrect callback
  if (!callback || typeof callback !== 'function')
    throw new Error(
      'The second parameter to `useHotkey` must be a function that will be envoked when the keys are pressed.'
    )

  let hotkeys_arr = hotkeys.split('+')

  // console.log('hotkeys: ', hotkeys_arr)

  let keysPressed = {}

  // Handle key down event
  const handleKeyDown = (event) => {
    keysPressed[event.key] = true

    for (let i = 0; i < hotkeys_arr.length; i++) {
      const hotkey = hotkeys_arr[i]
      if (keysPressed[hotkey] && keysPressed[hotkeys_arr[i + 1]]) {
        if (override) {
          event.preventDefault()
        }
        callback()
      }
      // }
    }
  }

  // Handle key up event
  const handleKeyUp = (event) => {
    delete keysPressed[event.key]
  }

  // Key down event listener
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  })

  // Key up event listener
  useEffect(() => {
    window.addEventListener('keyup', handleKeyUp)

    return () => {
      window.removeEventListener('keyup', handleKeyUp)
    }
  })

  return null
}

export default useHotkey
