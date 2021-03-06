
import { ItemListContainer } from "./ItemListContainer"
import { ItemDetailContainer } from "./ItemDetailContainer"
import { Carrito } from './Carrito'
import { Routes, Route} from "react-router-dom"

export const Main = () => {
    return(
        <main>
                <Routes>
                    <Route path="/" element={ <ItemListContainer/> } />
                    <Route path="/productos/:nombreCategoria" element={ <ItemListContainer/> }/>
                    <Route path="/productos/:id" element={ <ItemDetailContainer/> } />
                    <Route path="/carrito" element={ <Carrito/> } />
                </Routes>
        </main>
    )
}
