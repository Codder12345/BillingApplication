import { useState } from "react";
import '../App.css'
export const TodoList = () => {
  
    const [ tasks , setTasks] = useState(['buy milk'])
    const [ temptask, setTemptask] = useState('')

       
      
     
    const hnadleAddTask = (e) => {
      setTasks((prev)=> ( [ ...prev,temptask]))
      setTemptask('')
    }
      
  
  
      return(<>
      
  
        <div className="App1">
           <div> <h1 className="hed">Todo List</h1></div>
           
          <h3 className="task-title"> Add Task</h3> 
        <input type="text"  name="task" id="task" placeholder="Add TAsk" required value={temptask} onChange={(e)=>setTemptask(e.target.value)}  />
        {/* <input type="text" name="Rate"  id="d2"  placeholder="Enter Rate" required /> */}
        <input type="submit"  id="d3" onClick={(e)=>hnadleAddTask(e)} />
        </div>

        <div className="task" >
            <ul>
                {
                    tasks?.map((task,index)=>(
                      <li key={index}>
                        {
                          task
                        }
                      </li>
                    ))
                }
            </ul>
        </div>
         
      </>);
}

