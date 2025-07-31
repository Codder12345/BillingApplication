import React, { useState } from "react";
export default function BillingApplication()
{
    // Apply logics for calculate GSt
    const [GSTvalue,setGSTvalue]=useState(0);
     
      //  let Quantity=0;
      //  let rate=0;
       const [ Quantity , setQuantity] = useState(0)
       const [ rate , setRate] = useState(0)
       
     
      let GSTPut= GSTvalue==0? 'calulate GST 18%':GSTvalue;


    //   handel Event

       const handelQuantity=(e)=>{
          setQuantity(e.target.value)
          console.log(Quantity);
       }

       const handelRate=(e)=>
       {
          setRate(e.target.value)
          console.log(rate);
       }

       const handelGST=()=>{
          setGSTvalue((Quantity*rate)+(18/100)*(Quantity*rate));
          console.log(GSTvalue);
          setQuantity(0)
         setRate(0)

       }

    return(<>
      {/* //we take input rate and Quantity for calculate Gst with 18% ; */}

      <div className="App1">
         <div> <h1 className="hed">BillingApplication</h1></div>
         
        <h3 className="head1">Enter Quantity</h3> <h3  className="head1">Enter Rate</h3>
      <input type="text"  name="Quantity" id="d1" value={Quantity} placeholder="Enter Quantity" required onChange={(e)=>handelQuantity(e)} />
      <input type="text" name="Rate"  id="d2" value={rate} placeholder="Enter Rate" required onChange={(e)=>handelRate(e)}/>
      <input type="submit"  id="d3" value={GSTPut}  onClick={(e)=>handelGST(e)}/>
      </div>
       
    </>);
}