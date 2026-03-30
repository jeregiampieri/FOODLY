import { createSlice } from "@reduxjs/toolkit";
import { obtenerRecomendados } from "../../utils/Products";

const ESTADO_INICIAL = {
    recomendados: obtenerRecomendados()
}

export const recomendadosSlice = createSlice({
    name:"recomendados",
    initialState: ESTADO_INICIAL,
    reducers:{
        randomRecomendado: (estado) => {
            return estado
        }
    }
})

export const {randomRecomendado} = recomendadosSlice.actions

// Recordar que con el export default puedo exportar con cualquier nombre (en el caso donde lo coloco en el store.js dentro del combineReducer)
// le estoy colocando como nombre recomendadosReducer
export default recomendadosSlice.reducer