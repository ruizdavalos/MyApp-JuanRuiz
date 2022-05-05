
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { ItemDetailContainer } from "./ItemDetailContainer"




export const Item = ( {id, name, img, price, listaProducto } ) => {

    const [ i, setI ] = useState()
    const navigate = useNavigate()
    const [on, setOn ] =  useState( false )


    const handleClick = () => {
        navigate( `/productos/${id}` ) 
        setOn( true )
    }

    if( on ){
        return(
            <>
                <ItemDetailContainer producto={id} listaProducto={listaProducto} />
            </>
        )
    }else{
        return (
            <>
                <article className="cardProductContainer">
                    <h3> {name} </h3>
                    <div className="img"> { img }</div>
                    <p>Precio :  { price }</p>
                    <button className="button" onClick={ handleClick }  >Detalle</button>
                </article>
            </>
        )
    }
    }

