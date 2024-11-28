//? ============Guess the output of example code given below================ 

// Example 1: Basic Counter with Ref
import React, {useState , useRef, useEffect } from 'react';

function CounterRef() {
  const countRef = useRef(0);
  
  const handleClick = () => {
    countRef.current += 1;
    console.log("Count is:", countRef.current);
  };

  return (
    <div>
      <button onClick={handleClick}>Increment</button>
      <p>Displayed count: {countRef.current}</p>
    </div>
  );
}
//? what happens to the display when you click the button multiple times?
//* Nothing will change in the output bcz useRef is used to store the value without causing re-render


//  Example 2: Previous State Tracking
function StateMemo() {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef();
  
  useEffect(() => {
    prevCountRef.current = count;
  }, [count]);
  
  const handleClick = () => {
    setCount(c => c + 1);
    console.log(prevCountRef.current)
  };

  return (
    <div>
      <button onClick={handleClick}>Update</button>
      <p>Previous: {prevCountRef.current}</p>
      <p>Current: {count}</p>
    </div>
  );
}
//? After clicking the button three times, what will be shown for "Previous" and "Current"?
//* prev == 2 & curr == 3 bcz useEffect is re-rendering our component every time oue count Changes and useRef is storing prev count and showing on to the compo as we specified

//  Example 3: Timer with Cleanup
function TimerComponent() {
  const [time, setTime] = useState(0);
  const timerRef = useRef();
  
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setTime(t => t + 1);
    }, 1000);
    
    return () => clearInterval(timerRef.current);
  }, []);
  
  return <div>Time: {time}</div>;
}
//? What happens to the timer when the component unmounts?
//* when the compo gets unmount it will stop the the timer bcz the cleanup func will run final time which will stop the timer through the id which is stored in timerRef.current

//  Example 4: Focus Management
// function FocusInput() {
//   const inputRef = useRef();
//   const countRef = useRef(0);
  
//   const handleFocus = () => {
//     countRef.current += 1;
//     inputRef.current.focus();
//     console.log("Focus count:", countRef.current);
//   };
  
//   return (
//     <div>
//       <input ref={inputRef} type="text" />
//       <button onClick={handleFocus}>Focus Input</button>
//     </div>
//   );
// }

//  Example 5: Ref Update in Effect
// function EffectRef() {
//   const [trigger, setTrigger] = useState(0);
//   const valueRef = useRef("initial");
  
//   useEffect(() => {
//     valueRef.current = "updated";
//     console.log("Effect ran, ref is:", valueRef.current);
//   }, [trigger]);
  
//   return (
//     <div>
//       <button onClick={() => setTrigger(t => t + 1)}>
//         Trigger Effect
//       </button>
//       <p>Ref value: {valueRef.current}</p>
//     </div>
//   );
// }

//  Example 6: Multiple Refs Interaction
// function MultiRef() {
//   const firstRef = useRef(0);
//   const secondRef = useRef(10);
  
//   const handleInteraction = () => {
//     firstRef.current += secondRef.current;
//     secondRef.current *= 2;
//     console.log("First:", firstRef.current);
//     console.log("Second:", secondRef.current);
//   };
  
//   return (
//     <div>
//       <button onClick={handleInteraction}>Interact</button>
//       <p>First: {firstRef.current}</p>
//       <p>Second: {secondRef.current}</p>
//     </div>
//   );
// }

//  Example 7: Conditional Ref Update
// function ConditionalRef() {
//   const [count, setCount] = useState(0);
//   const evenCountRef = useRef(0);
  
//   useEffect(() => {
//     if (count % 2 === 0) {
//       evenCountRef.current = count;
//     }
//   }, [count]);
  
//   return (
//     <div>
//       <button onClick={() => setCount(c => c + 1)}>
//         Increment ({count})
//       </button>
//       <p>Last even: {evenCountRef.current}</p>
//     </div>
//   );
// }

//  Example 8: Ref vs State Race
// function RefVsState() {
//   const [stateCount, setStateCount] = useState(0);
//   const refCount = useRef(0);
  
//   const handleClick = () => {
//     refCount.current += 1;
//     setStateCount(stateCount + 1);
//     console.log("Ref:", refCount.current);
//     console.log("State:", stateCount);
//   };
  
//   return (
//     <div>
//       <button onClick={handleClick}>Update Both</button>
//       <p>Ref count: {refCount.current}</p>
//       <p>State count: {stateCount}</p>
//     </div>
//   );
// }

export {CounterRef , StateMemo, TimerComponent}