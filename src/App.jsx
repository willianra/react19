import    "./App.css"
import { CardProducto } from "./components/CardProducto"
import { Contador } from "./components/Contador"
import {HolaMundo} from "./components/HolaMundo"
const App = () => {
   const frutas = ["manzana","bana","pera"]
   const frutas2=["hola","como","estas"]
   const productos=[
    {nombre:"teclado0",precio:200,destacado:false},
    {nombre:"teclado1",precio:200,destacado:false},
    {nombre:"teclado2",precio:200,destacado:false},
    {nombre:"teclado3",precio:200,destacado:false},
    {nombre:"teclado4",precio:200,destacado:false},
    {nombre:"teclado5",precio:200,destacado:false}
  ]
  return (  
   <div className="bg-black h-screen"> 
    <h1 className="bg-red-600 p-4"></h1>
    <HolaMundo></HolaMundo> 
    <Contador></Contador>
    {
      frutas.map((item,index)=>{
        const texto="hola"
        return (<div key={index} className="text-white">
          {texto+""+index+" "+item}
        </div>)
      }) }
      {
      frutas2.map((item2,index2)=>(<div  key={index2} className="text-white">{item2}</div>))

    } 
    <span className="text-white">listar de productos productos </span>
    {
      productos.map((item3,index)=>(
        <CardProducto key={index} item={item3}/>
      ))
    }
   </div>
  
  );
}

export default App;
 