import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import {ReactDOM } from "react-dom/client"
import {Provider} from "react-redux"
import { persistedStore, store } from './assets/redux/store.js'
import {PersistGate} from "redux-persist/integration/react"

createRoot(document.getElementById('root')).render(
    // Este componente es el PROVEEDOR, es decir, le va a proveer a toda la aplicación el store
    // Recordar que el store es el ALMACÉN que mantiene el estado GLOBAL de la aplicación, mientras que useState es un estado local,
    // es decir, nace y muere con el componente, en cambio, el estado global hace que cualquier componente pueda leer o escribir datos sobre él
    <Provider store={store}>
        <PersistGate persistor={persistedStore}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </PersistGate>
    </Provider>
)
