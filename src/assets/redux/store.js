import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {persistReducer} from "redux-persist"
import storage from "redux-persist/lib/storage"
import persistStore from "redux-persist/lib/persistStore"
import categoriasReducer from "./categorias/categoriasSlice"
import productosReducer from "./productos/productosSlice"

// Acá voy a combinar todos los reducers, es decir, todos los slices que utilice para tenerlos en un solo lugar
// Combinación de los REDUCERS
const reducers = combineReducers({
    categorias: categoriasReducer,
    productos: productosReducer,
    // Prueba de funcionalidad
    // juanito: () => "hola"
})

// Configuración necesaria para el persistReducer
const persistConfig = {
    key: "root",
    storage,
    // La idea de la whitelist es colocar lo que quiero almacenar en el localStorage (creería que generalmente sería el carrito)
    whitelist: []
}

// Declaración de los reducers que van a persistir (en este caso todos)
const persistedReducers = persistReducer(persistConfig,reducers)

// Van a ser persistentes todos los reducers que agregue en la combinación, con la diferencia que algunos van a estar siendo persistidos
// en el LocalStorage (navegador del usuario), mientras que otros no
export const store = configureStore({
    reducer: persistedReducers

});

// Hago persistente el store
export const persistedStore = persistStore(store)