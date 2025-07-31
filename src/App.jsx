import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import BillingApp from './component/BillingApp'
import BillingApplication from './BillingApplication'
import {TodoList} from './component/Todolist'
import Calculator from './component/Calculator'

function App() {

  return (
    <>
      {/* <BillingApp/> */}
     <div className='AppD1'>
    <div className='Appch'> <BillingApplication/></div>
     <div className='Appch'><TodoList/></div>
     
     </div> 
    
<div className='cal'>  <Calculator/></div>
      
    </>
  )
}

export default App
