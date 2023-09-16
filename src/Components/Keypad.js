import React from "react";
import solve from "./Solve";

const Keypad = (props)=>{

    
    

    return (
        <div className="Keypad">
            <button className="add" onClick={()=>{solve("+",props)}}>+</button>
            <button className="sub" onClick={()=>{solve("-",props)}}>-</button>
            <button className="mul" onClick={()=>{solve("*",props)}}>*</button>
            <button className="divide" onClick={()=>{solve("/",props)}}>/</button>
        </div>
    )
}

export default Keypad;