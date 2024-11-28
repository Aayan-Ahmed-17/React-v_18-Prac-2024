import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const [timer, setTimer] = useState(0)

    //* Not working correctly
    // useEffect(()=>{

    //     setInterval(()=>{
    //     setTimer(prev => prev + 1)
    //     }, 1000)

    // },[])

    //* Will work correctly
    // useEffect(()=>{
    //     const seconds = setInterval(()=> {
    //         setTimer(prev => prev + 1)
    //     }, 1000)

    //     return () => {
    //         clearInterval(seconds)
    //     }
    // }, [])

  return (
    <h1>Count {timer}</h1>
  )
}

export default UseEffect
