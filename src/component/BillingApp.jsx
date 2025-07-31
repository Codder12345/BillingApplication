import React, { useState } from "react";
import { useActionState } from "react";
 function BillingApp()
{
     const [GSTValue,setGSTvalue]=useState(0);
      
      let Quantity=0;
      let rate=0;


     let GSTPut= GSTValue==0?'claculate GST': GSTValue;
      const handelQuantity=(e)=>{
          Quantity=e.target.value;
          console.log(Quantity);
      }

     const handelRate=(e)=>{
           rate=e.target.value;
           console.log('handel rate',rate);
      }

       const handelGST=()=>{
          setGSTvalue((Quantity*rate)+(18/100)*(Quantity*rate));
          console.log(GSTValue);
      }
    return (<>
    <input type="text" name="Quantity" required onChange={(e)=>handelQuantity(e)}/>
    <input type="text" name="Rate" required  onChange={(e)=>handelRate(e)}/>
    <input type="submit" value={GSTPut} onClick={(e)=>handelGST(e)} />
    
    </>);
}export default BillingApp