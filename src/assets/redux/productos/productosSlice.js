import { createSlice } from "@reduxjs/toolkit";
import {Productos, totalProductos} from "../../utils/Products.js"

const ESTADO_INICIAL = {
    productosPRUEBA: Productos,
    // Esto sirve para realizar la PAGINACIÓN
    totalProductos: totalProductos
}

export const productosSlice = createSlice({
    name:"productos",
    initialState: ESTADO_INICIAL,
    reducers: {
        // Método
        getProductos: (estado) => {
            return estado
        }
    }
})

export const {getProductos} = productosSlice.actions

export default productosSlice.reducer
