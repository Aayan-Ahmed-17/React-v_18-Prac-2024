import React from 'react'
import UseEffect from './hooks/02-UseEffect'
import { CounterRef , StateMemo , TimerComponent , FocusInput , EffectRef , MultiRef , ConditionalRef , RefVsState} from './hooks/03-UseRef/01-Guess-Output'
import MouseTracker from './components/03-HOCs'


const App = () => {
  return (
    <MouseTracker 
      render={({x, y}) => (
        <p>Mouse position: {x}, {y}</p>
      )}
    />
  )
}

export default App
