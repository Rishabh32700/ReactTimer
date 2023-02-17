import React from 'react'

const Display = ({time}) => {

  return (
    <>
        <span>{(time.h>= 10) ? time.h : "0"+time.h} : </span>
        <span>{(time.m>= 10) ? time.m : "0"+time.m} : </span>
        <span>{(time.s>= 10) ? time.s : "0"+time.s} : </span>
        <span>{(time.ms>= 10) ? time.ms : "0"+time.ms} </span>
    </>
  )
}

export default Display