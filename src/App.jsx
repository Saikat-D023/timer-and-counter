import { useState, useRef } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [timer, setTimer] = useState(0)
  const [isTimerRunning , setTimerRunning] = useState(false)
  const myInterval = useRef(null)

  function timerChalu(){
    myInterval.current = setInterval(() =>{
      setTimer(c => c+1)
    },1000)
  }

  function timerBandh(){
    clearInterval(myInterval.current)
   // setTimer(0)
  }

  function toggleFunction(){
    if(isTimerRunning){
      timerChalu()
    }else{
      timerBandh()
    }
    setTimerRunning(!isTimerRunning)
  }

  return (
   <>
   {/* <h1>{count}</h1>
  <button onClick={()=>{
    setCount(count+1)
  }}>Counter barane wala</button>
  <button onClick={()=>{
    setCount(count-1)
  }}>Counter ghatane wala</button> */}
  <br></br>
  <button onClick={toggleFunction}>timer:</button>
  <h1>{timer}</h1>
   </>
  )
}

export default App
