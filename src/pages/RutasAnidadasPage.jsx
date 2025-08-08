import { NavLink, Outlet } from "react-router-dom";
import { BtnVolver } from "../components/ui/buttons/btnVolver";

export const RutasAnidadasPage =()=>
{ 
    const id=20;
    return ( 
        <div className="p-6 max-w-2xl mx-auto space-y-6  "> 
                <BtnVolver/>
        <h2 className="text-3xl font-bold text-center">panel de usuario</h2>
          
           <nav className="flex gap-4 justify-center">  
            <NavLink className={({isActive})=>isActive?"px-2 py-4 rounded-lg bg-black text-white font-semibold shadow":"px-4 py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-indigo-100"} to={`perfil/${id}`}> 
                perfil
            </NavLink> 
                  <NavLink className={({isActive})=>isActive?"px-2 py-4 rounded-lg bg-black text-white font-semibold shadow":"px-4 py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-indigo-100"} to="configuracion"> 
                configuracion
            </NavLink> 
              

           </nav>
           <section> 
            <Outlet/>
           </section>
        </div>
    );
};