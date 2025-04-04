// import React, { useState, useEffect } from "react";

// export default function App () {
//   const [count, setCount] = useState(0);

//   function addCount () {
//     setCount(c => c +1)
//   }

//   useEffect(() => {
//     document.title = `Count: ${count}`;
//   }, [count]);


//   return (
//     <>
//       <p>Count: {count}</p>
//       <button onClick={ addCount }>Increase</button>
//     </>
//   )
// }

import React from 'react'
import BasicEffects from './components/BasicEffects'
import MountEffect from './components/MountEffect'
import DependentEffect from './components/DependentEffect'
import SubscriptionComponent from './components/SubscriptionComponent'
import DataFetchingComponent from './components/DataFetchingComponent'
import LocalStorageCompoent from './components/LocalStorageCompoent'
import WindowEventComponent from './components/WindowEventComponent'
import TimerManagement from './components/TimerManagement'
import FormValidationComponent from './components/FormValidationComponent'
import ComplexDependencies from './components/ComplexDependencies'

export default function App() {
  return (
    <div>
      {/* <MountEffect />
      <BasicEffects />
      <DependentEffect />
      {/* <SubscriptionComponent/> */}
      {/* <DataFetchingComponent/> */}
      {/* <LocalStorageCompoent />
      <WindowEventComponent />
      <TimerManagement/> */}
      <ComplexDependencies/>
      {/* <FormValidationComponent/> */}
    </div>
  )
}
