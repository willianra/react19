import { Icon } from "@iconify/react/dist/iconify.js";
import { useNavigate } from "react-router-dom";

export const BtnVolver =()=>
{
    const navigate = useNavigate()
    return ( 
        <button onClick={()=>navigate("/")} className="absolute top-4 left-4 bg-white text-black hover:bg-[#d5d5d5] p-3 rounded-full shadow-lg cursor-pointer">
<Icon icon="fluent:ios-arrow-24-filled" width="24" height="24" />
        </button>
    );
};