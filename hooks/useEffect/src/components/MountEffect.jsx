import React, { useEffect }from 'react'

export default function MountEffect() {
    useEffect(() => {
        console.log("Component Mounted");
        
        return() => {
            console.log("Component Will Unmount");
        }
    },[]);
    return (
    <div>
      This is a only mount effect.
    </div>
  )
}
