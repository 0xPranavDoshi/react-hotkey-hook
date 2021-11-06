function reactHotkey(hotkey: String, event: () => void) {
  window.onload = () => {
    console.log('Document loaded')
    document.addEventListener(
      'keydown',
      (event) => {
        var name = event.key
        if (event.ctrlKey && name === 'k') {
          event.preventDefault()
          console.log("Hello World!");      
        }
      },
      false
    ) 
  } 
}
  
export default reactHotkey