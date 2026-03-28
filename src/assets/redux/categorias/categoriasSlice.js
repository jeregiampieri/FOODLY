import { createSlice } from "@reduxjs/toolkit";
import { categorias } from "../../utils/Categorias";

const ESTADO_INICIAL = {
    categorias: categorias
}

// Creación de los reducers para las categorias
export const categoriasSlice = createSlice({
    name:"categorias",
    initialState: ESTADO_INICIAL,
    reducers: {
        getCategorias: estado => {
            return estado
        }
    }
})

export const {getCategorias} = categoriasSlice.actions

export default categoriasSlice.reducer
