import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics = ({good, neutral, bad}) => {

  const totalScore = good + neutral*0 - bad
  const totalNumberOfScore = good + neutral + bad
  const averageScore = totalScore / totalNumberOfScore

  return (
    <div>
     <p>Total: {totalScore}</p>
     <p>Total Number Of Score: {totalNumberOfScore}</p>
     <p>Total Average: {averageScore}</p>
    </div>
  )
}
const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  return (
    <div>
      <h1>give feedback</h1>
      <div> 
        <button onClick={() => setGood(good + 1)}>
          good
        </button>
        <button onClick={() => setNeutral(neutral + 1)}>
         neutral
        </button>
        <button onClick={() => setBad(bad + 1)}>
        bad
        </button>
      </div>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )  
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)