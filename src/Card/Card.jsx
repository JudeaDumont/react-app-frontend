import { useState } from "react";

export default function Card() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <img
                style={{ width: "15rem" }}
                src="https://images.unsplash.com/photo-1581299894007-aaa50297cf16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                alt="chef"
            ></img>
            <div>
                <p>chef</p>
                <p>{count}</p>
                <button
                    onClick={() => setCount(count + 1)}>
                    COOK
                </button>
                <input type="text"
                    onChange={
                        (e) => console.log(e.target.value)
                    }></input>
            </div>
        </div>
    )
}