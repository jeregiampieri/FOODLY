import { ProductosWrapped } from "./ProductoStyle"
import { Productos as Products } from "../../utils/Products"
import { Producto } from "./Producto"

export const Productos = () => {
    return (
        <ProductosWrapped>
            <h2 style={{fontWeight:400}}>Productos</h2>
            {
                Object.entries(Products).map((array) => {
                    array[1].map((producto) => {
                        return <Producto key={producto.id} {...producto}></Producto>
                    })
                })
            }
        </ProductosWrapped>
    )
}