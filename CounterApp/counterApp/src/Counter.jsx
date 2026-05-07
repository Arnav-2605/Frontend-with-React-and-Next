import { useState } from "react";
export default function Counter()
{
    const[count, setCount] = useState(0);

    function counterAdd(){
        setCount(count=>count+1)
    }

    function counterSub(){
        if(count <= 0){
            alert("Count can't be negative.")
            return;
        }
        setCount(count-1);
    }

    return(
        <>
            <h1>Counter App</h1>
            <h3>Count = {count}</h3>
            <button  onClick={counterSub}>-</button>
            <button onClick={counterAdd}>+</button>
        </>
    )
}