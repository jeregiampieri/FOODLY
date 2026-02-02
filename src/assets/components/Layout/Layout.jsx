import { useEffect } from "react";
import { LayoutStyled } from "./LayoutStyle.js"
import { useLocation } from "react-router-dom";

// El layout consiste en un GRAN contenedor para toda la aplicación, es decir, todo va estar dentro de él
export const Layout = ({children}) => {

    // useLocation devuelve un objeto, una de sus propiedades es el pathname, por lo cuál uso desestructuración
    // para poder almacenar dicho path(ruta) en la variable pathname
    const {pathname} = useLocation();

    // hago uso del useEffect, con dependencia en el pathname para que cada vez que el usuario navegue dentro de la aplicación
    // cada vez que se haga un cambio de path, la aplicación lleve al usuario al comienzo de la misma (por cada cambio del path)
    useEffect(() => {
        window.scrollTo(0,0);
    }, [pathname])

    return (
        <LayoutStyled>
            {children}
        </LayoutStyled>
    )
}