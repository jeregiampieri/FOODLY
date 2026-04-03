import { BotonesContainer, BotonesProductos, ProductosContainer, ProductosWrapped } from "./ProductoStyle"
import { Producto } from "./Producto"
import { useSelector } from "react-redux"
import { useState } from "react"
import { products } from "../../utils/Products"

export const Productos = () => {

    const {productosPRUEBA} = useSelector((estado) => {
        return estado.productos
    })

    const {totalProductos} = useSelector((estado) => {
        return estado.productos
    })

    // Me traigo la categoriaSeleccionada en el estado global
    const {categoriaSeleccionada} = useSelector((estado) => estado.categorias)

    const [cantidadProductos , setCantidadProductos] = useState(0)

    return (
        <ProductosWrapped>
            <h2 style={{fontWeight:400, alignSelf:"flex-start"}}>Productos</h2>
            <ProductosContainer>
                {
                    categoriaSeleccionada ? (
                    //Object.entries me crea un array por cada relación propiedad:valor
                    Object.entries(productosPRUEBA).map((array) => {
                            if (array[0] === categoriaSeleccionada){
                                return array[1].map((producto) => {
                                    return <Producto key={producto.id} {...producto}></Producto>
                            })
                            }
                            return null
                    })) : (
                        products.slice(0,8).map((producto) => {
                                return <Producto key={producto.id} {...producto}></Producto>
                            })
                    )
                }
              </ProductosContainer>
              <BotonesContainer>
                <BotonesProductos disabled={categoriaSeleccionada}>-</BotonesProductos>
                <BotonesProductos disabled={categoriaSeleccionada}>+</BotonesProductos>
              </BotonesContainer>
        </ProductosWrapped>
    )
}