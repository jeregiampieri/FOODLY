// Voy a importar Routes de la librería React-Router, para evitar conflictos la voy a renombrar
// Voy a importar Route
// Routes(ReactDomRoutes) => Esta herramienta permite interpretar lo que lee el browser router
import {Routes as ReactDomRoutes, Route} from "react-router-dom";

export const Routes = () => {
    return (
        <ReactDomRoutes>
            {/* Cada una de estas Route indica que cuando se lee el correspondiente path de la URL
            renderice el correspondiente componente. Ejemplo: cuando lee el path /login, renderiza el componente Login */}
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/login' element={<Login></Login>}></Route>
            <Route path='/register' element={<Register></Register>}></Route>
            <Route path='/mis-ordenes' element={<MisOrdenes></MisOrdenes>}></Route>
            <Route path='/felicitaciones' element={<Felicitaciones></Felicitaciones>}></Route>
            <Route path='/resumen/:orderId' element={<Resumen></Resumen>}></Route>
        </ReactDomRoutes>
    )
}