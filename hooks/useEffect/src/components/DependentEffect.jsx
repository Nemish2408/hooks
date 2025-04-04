import React, { useEffect, useState } from "react";

export default function DependentEffect() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("");

    useEffect(() => {
        console.log(`count changed to ${count}`);
    },[count]);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Click Me</button>
            <input value={name} onChange={(e) => setName(e.target.value) }  placeholder="Changing this won't trigger the effect"/>
        </div>
    );
}
