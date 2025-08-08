import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import {Home} from "../pages/home"
import {Login} from "../pages/login"
import {Page404} from "../pages/Page404"
import { UseEffectPage } from "../pages/UseEffectPage";
import { ImagenesPage } from "../pages/ImagenesPage";
import { RutasAnidadasPage } from "../pages/RutasAnidadasPage";
import { PerfilPage } from "../pages/PerfilPage";
import { ConfiguracionPage } from "../pages/ConfiguracionPage";
import { LayoutMain } from "../layouts/layoutMain";
 
export const MyRoutes = ()=>(
    <BrowserRouter> 
        <Routes>  
            //layout
            <Route path="/" element={<LayoutMain/> }>  
                //el index muestra como iniciante
                <Route index    element={<Home/>}/>
                <Route path="login" element={<Login/>}/> 
                <Route path="useeffect" element={<UseEffectPage/>}/>
                <Route path="imagenes" element={<ImagenesPage/>}/>
        
                <Route path="rutasanidadas" element={<RutasAnidadasPage/>}> 
                <Route index element={<Navigate to="perfil/10" replace/>}/>
                <Route path="perfil/:id"    element={<PerfilPage/>}/>
                <Route path="configuracion" element={<ConfiguracionPage/>}/>
                </Route>  
                //fin layout
            </Route>
            //paginas no encontradas
            <Route path="*" element={<Page404/>}/> 
        </Routes>
    </BrowserRouter>
) 
   