function solve(operator,props){
    if(props.num1.length===0){
        props.setResult("Num 1 is empty");
    }
    else if(props.num2.length===0){
        props.setResult("Num 2 is empty");
    }
    else if(!isNaN(props.num1) && !isNaN(props.num2)){
        if(operator==="+"){
            props.setResult(Number(props.num1)+Number(props.num2))
        }
        else if(operator==="-"){
            props.setResult(Number(props.num1)-Number(props.num2));
        }
        else if(operator==="*"){
            props.setResult(Number(props.num1)*Number(props.num2));
        }
        else if(operator==="/"){
            props.setResult(Number(props.num1)/Number(props.num2));
        }
    }
    else if(isNaN(props.num1)){
        props.setResult("Num 1 not a number")
    }
    else if(isNaN(props.num2)){
        props.setResult("Num 2 not a number")
    }
}

export default solve;