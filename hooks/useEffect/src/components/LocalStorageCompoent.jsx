import React, { useState, useEffect } from 'react'

export default function LocalStorageCompoent() {
    
    const [name, setName] = useState("");

    useEffect(() => {
        localStorage.setItem("name",name)
    }, [name]);

    return (
        <div>
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter Your Name'/>
            <p>Name</p>
        </div>
    );
};
