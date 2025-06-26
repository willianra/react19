import { useState } from "react"
import { Modal } from "./modal";
export const Contador=()=>{
const [state,setState]= useState(false);

    return (
        <div className="bg-amber-600 p-4 rounded-2x1">
            <h1>state de estado</h1>
            <button onClick={()=>setState(!state)}> 
               {state?"ocultar":"ver"} 
            </button> 
            {
                state && <Modal/>
            }
                   
        </div>
    )
}