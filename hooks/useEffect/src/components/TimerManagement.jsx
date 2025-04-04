import React, { useState, useEffect } from 'react'

export default function TimerManagement() {

    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setSeconds(e => e + 1);
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <div>
            Timer: {seconds} seconds
        </div>
    )
}
