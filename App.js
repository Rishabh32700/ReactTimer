import React, { useState } from "react";
import ButtonComp from "./ButtonComp";
import Display from "./Display";

const App = () => {
  const [time, setTime] = useState({h:0, m:0, s:0, ms:0})
  const [int, setInt] = useState(0)
  var updatedMiliSec = time.ms
  var updatedSeconds = time.s
  var updatedMinutes = time.m
  var updatedHours = time.h

  const Run = () =>{
    if(updatedMiliSec === 100){
      updatedSeconds++
      updatedMiliSec = 0
    }
    if(updatedSeconds === 60){
      updatedMinutes++
      updatedSeconds = 0
    }
    if(updatedMinutes === 60){
      updatedHours++
      updatedMinutes = 0
    }
    updatedMiliSec++
    return setTime({h:updatedHours, m:updatedMinutes, s:updatedSeconds, ms:updatedMiliSec})
  }

  const Start = () =>{
    setInt(setInterval(()=>{
      Run()
    }, 10)) 
    console.log("start", int);
  }

  const Reset = () =>{
    console.log("reset",int);
    clearInterval(int)
    return setTime({h:0, m:0, s:0, ms:0})
  }
  const Pause = () =>{
    clearInterval(int)
  }

  return (
    <>
      <Display time = {time} />
      <ButtonComp Start={Start} name="start"/>
      <ButtonComp Start={Pause} name="pause"/>
      <ButtonComp Start={Reset} name="reset"/>
    </>
  );
};

export default App;
