import { createSlice } from "@reduxjs/toolkit";
import { categorias } from "../../utils/Categorias";

const ESTADO_INICIAL = {
    categorias: categorias,
    categoriaSeleccionada: null
}

// Creación de los reducers para las categorias
export const categoriasSlice = createSlice({
    name:"categorias",
    initialState: ESTADO_INICIAL,
    reducers: {
        // Recordar que el reducer TOMA el estado ACTUAL, y le hace la actualización necesaria, en este caso, actualizo categoriaSeleccionada
        seleccionarCategoria: (state, action) => {
            return {
                ...state,
                categoriaSeleccionada: action.payload !== state.categoriaSeleccionada ? action.payload : null
            } 
        },
    }
})

export const {seleccionarCategoria} = categoriasSlice.actions

export default categoriasSlice.reducer
