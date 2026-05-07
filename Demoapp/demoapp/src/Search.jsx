import { useState } from "react";
export default function Search() 
{
    const[find, setFind] = useState("");
    const name = ["asdf", "jklz", "qwer"];
    const student = name.filter();

    return(
        <div>
            <h2>Demo to show search</h2>
            <input type="text"
            placeholder="Enter key to search"
            value={find}
            onChange={(e) => setFind}></input>
        </div>
    )
}