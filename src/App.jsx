import React from 'react'
import UseEffect from './hooks/02-UseEffect'
import { CounterRef , StateMemo , TimerComponent , FocusInput , EffectRef , MultiRef , ConditionalRef , RefVsState} from './hooks/03-UseRef'

function checkAppCompConsole (){
  console.log(<App/>)
}

const App = () => {

  return (
    <RefVsState />
  )
}

checkAppCompConsole()

export default App
