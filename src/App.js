import React, {useState} from "react";
import Field from "./Components/Field";
import Keypad from "./Components/Keypad";
import Result from "./Components/Result";


const App = ()=>{
    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [result, setResult] = useState(null);
    
    return (
        <div className="App">
            <h1>React Calculator</h1>
            <Field setNum={setNum1} placeholder="Num 1"/>
            <Field setNum={setNum2} placeholder="Num 2" />
            <Keypad num1={num1} num2={num2} setResult={setResult}/>
            <Result result={result}/>
        </div>
    )
}

export default App;

