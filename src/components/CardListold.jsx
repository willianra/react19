import { Icon } from "@iconify/react/dist/iconify.js"
import { Link } from "react-router-dom"

export const CardList =()=>{
        const urlImage='https://www.fincacasarejo.com/Docs/Noticias/orpington.jpg'
    const temasTeoria =[
        {title:"useEfect",
         to:"/useeffect"
        },
        {title:"imagenes",
            to:`/imagenes?src=${urlImage}`
        },
        {
            title:"rutas anidadas",
            to:"/rutasanidadas"
        }
    ]
    return (
        <div className="flex flex-col gap-4">
            {
                temasTeoria.map((item ,index)=>(
                 <Link to={item.to} key={index} className="group w-full bg-[#151515] p-4 
                 rounded-xl border border-green] flex justify-between 
                 hover:border-[#e776f3] cursor-pointer
                 ">
                    <h3 className="font-medium text-lg">{item.title}</h3>
                           <Icon className="group-hover:text-[#e776f3] cursor-pointer" icon="weui:arrow-filled" width="12" height="24" />
                 </Link>

                ))
            }
        </div>
    )
}