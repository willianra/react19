export const CardProducto=({item})=>(
    <div className="text-white" >
        <h3>{item.nombre}</h3>
        <p>{item.precio}</p> 
        {
            item.destacado && <span>desctacado</span>
        }
    </div>
);