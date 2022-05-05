

export const ItemDetail = ( { listaProductos} ) => {


    if(listaProductos){
        return (
            <>
                <article className="cardDetailContainer">
                    <h3> {listaProductos.name} </h3>
                    <div className="img"> { listaProductos.img }</div>
                    <p> {listaProductos.detalle} </p>
                </article>
            </>
        )
    }else{
        return <></>
    }
}