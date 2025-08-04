import    "./App.css"
import { CardProducto } from "./components/CardProducto"
import { Contador } from "./components/Contador"
import {HolaMundo} from "./components/HolaMundo"
import { MyRoutes } from "./routers/router"
const App = () => {
   const frutas = ["manzana","bana","pera"]
   const frutas2=["hola","como","estas"]
   const productos=[
    {nombre:"teclado0",precio:200,destacado:false},
    {nombre:"teclado1",precio:200,destacado:false},
    {nombre:"teclado2",precio:200,destacado:true},
    {nombre:"teclado3",precio:200,destacado:false},
    {nombre:"teclado4",precio:200,destacado:false},
    {nombre:"teclado5",precio:200,destacado:false}
  ]
  return (  
   
  <MyRoutes/>
  );
}

export default App;
 