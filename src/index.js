import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistic = ({text, value}) => {
  return (
    <div>
      <p>{text}: {value}</p>
    </div>
  )
}

const Statistics = ({good, neutral, bad}) => {
  const totalScore = good + neutral*0 - bad
  const totalNumberOfScore = good + neutral + bad
  const averageScore = totalScore / totalNumberOfScore
  if ( totalNumberOfScore === 0 ) {
    return (
      <div>
        <p>no feedback given</p>
      </div>
    )  
  }
  return (
    <div>
      <Statistic text="good" value ={good} />
      <Statistic text="neutral" value ={neutral} />
      <Statistic text="bad" value ={bad} />
      <Statistic text="Average" value ={averageScore} /> 
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