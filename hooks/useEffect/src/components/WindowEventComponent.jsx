import React,{useState, useEffect} from 'react'

export default function WindowEventComponent() {
  
    const[width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize',handleResize);
        };
    }, []);
  
    return (
    <div>
        Window Width: {width}px
    </div>
  )
}
