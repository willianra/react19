import    "./App.css"
import { Contador } from "./components/Contador"
import {HolaMundo} from "./components/HolaMundo"
const App = () => {
   const frutas = ["manzana","bana","pera"]
   const frutas2=["hola","como","estas"]
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
   </div>
  
  );
}

export default App;
 