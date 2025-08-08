import { useParams, useSearchParams } from "react-router-dom";
import imagenLocal from "../assets/orbiton blue.webp"
import { BtnVolver } from "../components/ui/buttons/btnVolver";
export const ImagenesPage =()=>
{  
    const [searhParams]=useSearchParams()
    const src=searhParams.get("src")
   
    return ( 
        <main className="max-w-3xl mx-auto p-6 bg-orange-500 space-y-10">
            <BtnVolver/> 
            <h1 className="text-3xl font-bold text-center">IMAGENES CON REACT</h1>
             <section className="space-y-10"> 
                <h2 className="text-xl font-semibold">imagenes url</h2> 
                <img src={src} alt="imagen" />
                 </section> 

                      <section className="space-y-10"> 
                <h2 className="text-xl font-semibold">imagenes locales importadas</h2> 
                <img src={imagenLocal} alt="imagen" />
                 </section> 

                 <section>  
                    <h2 className="text-xl font-semibold">imagenes url</h2>  
                    <img src="https://www.fincacasarejo.com/Docs/Noticias/orpington.jpg" alt="" />
                    <h2 className="text-xl font-semibold">imagen como fondo</h2>   
                     </section>
                    <section> 
                    <div className="flex h-64 bg-cover bg-center rounded-2xl items-center justify-center" style={{backgroundImage:"url('https://media.istockphoto.com/id/891758864/es/foto/pollitos-beb%C3%A9-en-la-granja.jpg?s=612x612&w=0&k=20&c=mWfzdNWJ-kOk4DaUh9myMwvSubJAzchmKYhpG6K5QEU=')"}}>
                    <span className="bg-black/60 px-4 py-2 rounded-2xl text-white">fondo con texto encima</span>
                    </div>
             </section> 
                <section>  
                    <h2 className="text-xl font-semibold">imagenes con lazy loading</h2>  
                    <img src="https://www.fincacasarejo.com/Docs/Noticias/orpington.jpg" alt="" loading="lazy" />
                     
                     </section>
        </main>
    );
};