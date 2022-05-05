
import { useState } from "react"



export const ItemCount = ( {stockInitial, initial, onAdd}) => {

    const [ stock, setStock ] = useState(stockInitial)
    const [ contador, setContador] = useState(initial)
    const [ compra, setCompra] = useState(0)
    const [ confirmado, setConfirmado] = useState( false )



    const restar = () =>{
        if ( contador > 1 ){
            setContador( contador - 1)
        }
    }
    const sumar = () =>{
        if ( contador <  stock ) {
            setContador( contador + 1) 
        }
    }
    const comprar = () => {
        onAdd()
        
        if ( stock >= contador) {
            setStock( stock - contador)
            setContador( 1 ) 
            setCompra( contador )
            setConfirmado( true )
        }else  setContador( 'Sin stock')
    }

const close = () => {
    setConfirmado( false )
}

    console.log( `Stock Total = ${ stock } \n Cantidad Seleccionada  ${compra}`)

    if( !confirmado ) {
        return (
            <>
                <div className="itemCountContainer">
                    <h2>Sabana Arte Blanco</h2>
                    <div className="countContainer">
                        <button onClick={ restar } >-</button>
                        <p>  {contador}</p>
                        <button onClick={ sumar } >+</button>
                    </div>
                    <div>
                        <button onClick={ comprar } className="buttonOnAdd"  >contador al carrito</button>
                    </div>
                </div>
            </>
        )
        
    }else{
        return (
            <>
                <div className="itemCountContainer">
                    <h2>Sabana Arte Blanco</h2>
                    <div className="countContainer">
                        <button onClick={ restar } >-</button>
                        <p>  {contador}</p>
                        <button onClick={ sumar } >+</button>
                    </div>
                    <div>
                        <button onClick={ comprar } className="buttonOnAdd"  >contador al carrito</button>
                    </div>
                </div>
                <div className="modal">
                    <h2>cantidad seleccionada : <br />{compra}</h2>
                    <p>En stock { stock }</p>
                    <button onClick={ close } className="buttonClose"  >Cerrar</button>
                </div>
            </>
        )
    }

}