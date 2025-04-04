import React, { useState, useEffect, useMemo } from "react";

const ComplexDependencies = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("Alice");

    const [items, setItems] = useState(["apple", "banana"]);

    const [user, setUser] = useState({ id: 1, name: "Alice", role: "admin" });

    useEffect(() => {
        console.log("Effect with direct array/object dependencies ran");
    }, [items, user]);

    useEffect(() => {
        console.log("Effect with extracted primitive dependencies ran");
    }, [user.id, user.name, user.role]);

    const itemsKey = useMemo(() => items.join(","), [items]);

    useEffect(() => {
        console.log("Effect with memoized array dependency ran");
    }, [itemsKey]);

    useEffect(() => {
        console.log("Effect with stringified object dependency ran");
    }, [JSON.stringify(user)]);

    return (
        <div>
            <div>
                <button onClick={() => setCount((c) => c + 1)}>
                    Increment Count: {count}
                </button>
                <p>This won't trigger the effects that depend on arrays/objects</p>
            </div>

            <div>
                <button onClick={() => setItems([...items, "orange"])}>
                    Add Item to Array
                </button>
                <p>Current items: {items.join(", ")}</p>
            </div>

            <div>
                <button onClick={() => setUser({ ...user, name: name })}>
                    Update User Name
                </button>
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="New name"
                />
                <p>Current user: {JSON.stringify(user)}</p>
            </div>

            <div>
                <button onClick={() => setUser({ ...user })}>
                    Create New User Reference (Same Values)
                </button>
                <p>This will trigger the first effect but not the others</p>
            </div>
        </div>
    );
};

export default ComplexDependencies;
