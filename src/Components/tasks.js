import React from "react";


const tasks = [
  {id:"1", text:"task one",isCompleted: false},
  {id:"2", text:"task Two",isCompleted: false},
  {id:"3", text:"task Three",isCompleted: false},
  {id:"4", text:"task Four",isCompleted: false},
  {id:"5", text:"task Five",isCompleted: false},
  {id:"6", text:"task Six",isCompleted: false},
  {id:"7", text:"task Seven",isCompleted: false},
  {id:"8", text:"task Eight",isCompleted: false}
]

function Tasks(){
         return(
          <>
           {tasks.map(task=>(
            <div className="card">
               <h4>{task.text}</h4>
            </div>
           ))}
          </>
        );
}

export default Tasks;