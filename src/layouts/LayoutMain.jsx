import { Outlet } from "react-router-dom";
import { CardList2 } from "../components/CardList2";
 
 export const LayoutMain =()=>
 {
     return ( 
         <div className="flex h-screen bg-amber-500 text-white">
            <header> 
                <CardList2/> 
                </header> 
            <main>
                <Outlet/> 
            </main>
         </div>
     );
 };