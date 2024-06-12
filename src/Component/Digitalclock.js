import React, { useState } from "react";

function Digitalclock(){
let [time, settime] = useState(new Date())

  setInterval(()=>{
    settime(new Date())
  },1000);

  return (
    <>
      {time.getHours()+":"+time.getMinutes()+":"+time.getSeconds()}
    </>
  );
}

export default Digitalclock;
