import React from "react";

const ButtonComp = ({Start, name}) => {
  return (
    <>
      <div>
        <button onClick={()=>{
            Start()
        }}>{name}</button>
      </div>
    </>
  );
};

export default ButtonComp;
