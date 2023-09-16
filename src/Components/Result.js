import React from "react";



let resultDisplay = "";

const Result = (props)=>{

    
    
    
   
    if(props.result===null){
        
        resultDisplay = <div></div>
        
    }
    else if(isNaN(props.result)&&(props.result!==null)){
        
        resultDisplay = <div>
                            <p className="error">Error!</p>
                            <p>{props.result}</p>
                        </div>
        
    }
    else{
        
        resultDisplay = <div>
                            <p className="success">Success</p>
                            <p>Result: {props.result}</p>
                        </div>
        
    }


    return (
        <div className="Result">
            {resultDisplay}        
        </div>
    )
}


export default Result;