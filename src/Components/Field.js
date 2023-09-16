import React from "react";

const Field = (props)=>{
    
    return (
        <div className="Field">
            <input type="text" onChange={(e)=>{props.setNum(e.target.value)}} placeholder={props.placeholder}/>
        </div>
    )
}

export default Field;