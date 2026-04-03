import { BotonesContainer, BotonesProductos, ProductosContainer, ProductosWrapped } from "./ProductoStyle"
import { Producto } from "./Producto"
import { useSelector } from "react-redux"
import { useEffect, useState } from "react"
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

    const [cantidadProductosSup , setCantidadProductosSup] = useState(8)
    const [cantidadProductosInf , setCantidadProductosInf] = useState(0)

    // Para actualizar los limites del paginado cada vez que hay un cambio en la categoriaSeleccionada
    useEffect(() =>{
        setCantidadProductosSup(8)
        setCantidadProductosInf(0)
    },[categoriaSeleccionada])

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
                        products.slice(cantidadProductosInf,cantidadProductosSup).map((producto) => {
                                return <Producto key={producto.id} {...producto}></Producto>
                            })
                    )
                }{
                }
              </ProductosContainer>
              <BotonesContainer>
                <BotonesProductos disabled={categoriaSeleccionada || cantidadProductosInf === 0}
                onClick={() => {setCantidadProductosSup(cantidadProductosSup - 8)
                                setCantidadProductosInf(cantidadProductosInf - 8)}}>-</BotonesProductos>
                <BotonesProductos disabled={categoriaSeleccionada || cantidadProductosSup >= totalProductos}
                onClick={() => {setCantidadProductosSup(cantidadProductosSup + 8)
                                setCantidadProductosInf(cantidadProductosInf +8)}}>+</BotonesProductos>
              </BotonesContainer>
        </ProductosWrapped>
    )
}