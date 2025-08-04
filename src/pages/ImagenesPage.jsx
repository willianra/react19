import imagenLocal from "../assets/orbiton blue.webp"
export const ImagenesPage =()=>
{
    return ( 
        <main className="max-w-3xl mx-auto p-6 bg-orange-500 space-y-10">
            <h1 className="text-3xl font-bold text-center">IMAGENES CON REACT</h1>
             <section className="space-y-10"> 
                <h2 className="text-xl font-semibold">imagenes locales importadas</h2> 
                <img src={imagenLocal} alt="imagen" />

             </section>
        </main>
    );
};