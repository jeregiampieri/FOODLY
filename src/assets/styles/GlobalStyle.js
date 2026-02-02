import {createGlobalStyle} from "styled-components"

export const GlobalStyle = createGlobalStyle`

/* Variables globales para los colores de la aplicación */
:root{
    --orange-bg: #2f2618;
    --orange: #ff9d01;
    --magenta: #ff005c;
    --gray-bg: #2b2b2c;
    --btn-gradient: linear-gradient(83deg, #ffa100, #fb103d);
    --btn-gradient-secondary: linear-gradient(140deg, #3B3022, #3B2329);
}

/* Estilo usado para que el scroll sea smooth (más 'suave') */
html{
    scroll-behavior: smooth;
}

body{
    margin: 0;
    padding: 0;
    background-color: #131415;
    color: white;
    /* Estilo muy bueno para que no se haga un recuadro cada vez que se hace click sobre botones, etc */
    -webkit-tap-highlight-color: transparent;
    overflow-x: hidden;
}

a{
    text-decoration: none;
}

a:visited{
    color: white;
}

li{
    list-style: none;
}
`