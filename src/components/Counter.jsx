import { useState } from "react";

export function Counter(){
    const [counter, setCounter] = useState(0);

    function increment(){
        setCounter(counter + 1);
        console.log('Incrementing');
    }

    return(
        <>
            <div>
                <h2>{counter}</h2>
                <button type="button" onClick={increment}>
                    Incremento
                </button>
            </div>
        </>
    )
}