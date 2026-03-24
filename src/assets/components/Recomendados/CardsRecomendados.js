import {styled} from "styled-components"
import {motion} from "framer-motion"

// Acá voy a colocar la lógica de las cartas de recomendación (INCLUYENDO su contenedor, ya que la idea es colocar todo lo relacionado
// en un mismo componente

export const CardsRecomendacionContainer = styled.div`
    display: flex;
    gap: 20px;
    width: 100%;
    overflow-x: scroll;
    overflow-y: hidden;
    padding-bottom: 20px;
    padding-right: 20px;
    &::-webkit-scrollbar{
        height: 4px;
        width: 1px;
    }
    &::-webkit-scrollbar-track {
        background: white; /* Un gris muy clarito o transparente */
        border-radius: 10px; /* Bordes redondeados para que no sea tan tosca */
    }
    &::-webkit-scrollbar-thumb {
        background: #000000; /* Un gris un poco más oscuro para la barra en sí */
        border-radius: 10px; /* Bordes redondeados también aquí */
    }
`
export const CardRecomendacionContainer = styled(motion.div)`
    display: flex;
    gap: 20px;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    padding: 0rem 1rem;
    min-width: 350px;
    height: 110px;
    border-top: 1px solid #9a9a9a62;
    border-left: 1px solid #9a9a9a62;
    box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.35);
`
export const CardRecomendacionImgContainer = styled.div`
    width: 85px;
    height: 63px;
    border-radius: 10px;
    img{
        width: 70px;
        height: 65px;
    }
`
export const CardRecomendacionInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 90%;
    h4, p{
        margin: 5px;
    }
    h4{
        font-size: 19px;
    }
    p{
        color: #656565e0;
    }
`

export const CardRecomendacionBoton = styled(motion.button)`
    display: flex;
    width: 80px;
    height: 20px;
    padding: 1rem;
    justify-content: center;
    align-items: center;
    background-color: #ff7700;
    color: white;
    border-radius: 5px;
    border: none;
    cursor: pointer;
`