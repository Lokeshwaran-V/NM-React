import { useState } from "react";
import'./App';

function Count() {
    
    const [count, setCount] = useState(0);

    const select = (e) => {
        setCount(count+1);
    }

    return(
        <div className="App">
            <h1>Count : {count}</h1>
            <hr></hr>

            <button onClick={select}>Add count</button>
        </div>
    )
}

export default Count;