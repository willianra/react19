import { Icon } from "@iconify/react/dist/iconify.js";

export const CardList = ()=>{ 
    const temasTeoria = [
        {
        title:"useEffect",
        to:"/useffect"
        },
        {
        title:"imagenes",
          to:"/imagenes"
        } 
    ];
    return (
        <div className="flex flex-col gap-4">
            {
                temasTeoria.map((item,index)=>(
                 <link 
                 to={item.to} 
                 key={index} 
                 className="group w-full bg-[#151515] p-5 rounded-xl border-color[#333] flex justify-between border-3 hover:border-[#e776f3]"> 
                 <h3 className="font-medium text-lg">{item.title}</h3>
                 <Icon 
                 className="group-hover:text-[#e776f3]" icon="weui:arrow-filled" width="12" height="24" />
                 </link >
                ))
            }
        </div>
    )
}