import { combineReducers } from "@reduxjs/toolkit";
import {persistReducer} from "redux-persist/es/persistReducer"
import {storage} from "redux-persist/lib/storage"

// Acá voy a combinar todos los reducers, es decir, todos los slices que utilice para tenerlos en un solo lugar
const reducers = combineReducers({
    productos: productosReducer,
    categorias: categoriasReducer
})

const persistConfig = {
    key: "root",
    storage,
    // La idea de la whitelist es colocar lo que quiero almacenar en el localStorage (creería que generalmente sería el carrito)
    whitelist: []
}

const persistedReducers = persistReducer(persistConfig,reducers)