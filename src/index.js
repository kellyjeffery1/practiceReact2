import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <div>
        
        {good}
        <button onClick={() => setGood(good + 1)}>
          good
        </button>

        {neutral}
        <button onClick={() => setNeutral(neutral + 1)}>
         neutral
        </button>
        {bad}
        <button onClick={() => setBad(bad + 1)}>
        bad
        </button>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)