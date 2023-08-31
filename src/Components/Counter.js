import React, { useState } from "react";
import '../Counter.css';

function Counter()
{
    let count=0;
    const [currentstate , updatestate]= useState (count);
    const handleClick=()=>{
        updatestate(currentstate+1);
    };
    return (
    <>
    <div className="Counter-parent">
        <div className="main-div">
            <h3>Counter</h3>
            <button onClick={handleClick}>{currentstate}</button>
        </div>
    </div>
    </>
    );
}

export default Counter;