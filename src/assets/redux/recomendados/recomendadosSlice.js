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