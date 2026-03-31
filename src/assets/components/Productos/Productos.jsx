import { ProductosContainer, ProductosWrapped } from "./ProductoStyle"
import { Producto } from "./Producto"
import { useSelector } from "react-redux"

export const Productos = () => {

    const {productosPRUEBA} = useSelector((estado) => {
        return estado.productos
    })

    // Me traigo la categoriaSeleccionada en el estado global
    const {categoriaSeleccionada} = useSelector((estado) => estado.categorias)

    return (
        <ProductosWrapped>
            <h2 style={{fontWeight:400}}>Productos</h2>
            <ProductosContainer>
                {
                    //Object.entries me crea un array por cada relación propiedad:valor
                    Object.entries(productosPRUEBA).map((array) => {
                        if (categoriaSeleccionada){
                            if (array[0] === categoriaSeleccionada){
                                return array[1].map((producto) => {
                                    return <Producto key={producto.id} {...producto}></Producto>
                            })
                            }
                        }else{
                            return array[1].map((producto) => {
                            return <Producto key={producto.id} {...producto}></Producto>
                            })
                        }
                    })
                }
              </ProductosContainer>
        </ProductosWrapped>
    )
}