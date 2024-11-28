//?1 Create a component with a button that focuses on an input field when clicked:
//?2 Create a video player component where you can play/pause video using useRef:
//?3 Create a component that counts how many times it rendered without causing re-renders:
//?4 Create a color picker where clicking a button copies the color code to clipboard using useRef:
//?5 Create a scroll-to-top button that appears after scrolling down:

//*1
import React, { useEffect, useRef } from 'react'

const FocusInput = () => {
  const inputRef = useRef(null)

  function handleFocus (){
    inputRef.current.focus()
  }

  return (
    <div>
      <input type="text" ref={inputRef}/>
      <button onClick={handleFocus}>Focus</button>
    </div>
  )
}

//*3 
const CountRender = () => {
  const renderCount = useRef(0);
  
  useEffect(() => {
    renderCount.current += 1;
    console.log('Component has rendered:', renderCount.current, 'times');
  });

  return <div>Check console for render count</div>;
}

//*5
const MoveOnTop = () => {
  const buttonRef = useRef(null);
  
  useEffect(() => {
    window.onscroll = () => {
      if (window.pageYOffset > 300) {
        buttonRef.current.style.display = 'block';
      } else {
        buttonRef.current.style.display = 'none';
      }
    };
  }, []);

  return (
    <>
    <div className='bg-red-300 h-[70rem]'></div>
    <button 
      ref={buttonRef} 
      onClick={() => window.scrollTo(0, 0)}
      style={{ display: 'none' }}
      >
      Scroll to Top
    </button>
      </>
  );
};

export {FocusInput , CountRender , MoveOnTop}