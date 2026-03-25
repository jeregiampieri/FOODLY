import { ProductosContainer, ProductosWrapped } from "./ProductoStyle"
import { Productos as Products } from "../../utils/Products"
import { Producto } from "./Producto"

export const Productos = () => {
    return (
        <ProductosWrapped>
            <h2 style={{fontWeight:400}}>Productos</h2>
            <ProductosContainer>
                {
                    Object.entries(Products).map((array) => {
                        return array[1].map((producto) => {
                            return <Producto key={producto.id} {...producto}></Producto>
                        })
                    })
                }
              </ProductosContainer>
        </ProductosWrapped>
    )
}