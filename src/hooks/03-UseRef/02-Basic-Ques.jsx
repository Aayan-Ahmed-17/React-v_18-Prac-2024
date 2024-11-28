//?1 Create a component with a button that focuses on an input field when clicked:
//?2 Create a video player component where you can play/pause video using useRef:
//?3 Create a component that counts how many times it rendered without causing re-renders:
//?4 Create a color picker where clicking a button copies the color code to clipboard using useRef:
//?5 Create a scroll-to-top button that appears after scrolling down:

//*1
import React, { useRef } from 'react'

const FocusInput = () => {
  const inputRef = useRef(null)

  function handleFocus (){
    input.current.focus()
  }

  return (
    <div>
      <input type="text" ref={inputRef}/>
      <button onClick={handleFocus}>Focus</button>
    </div>
  )
}

export {FocusInput}