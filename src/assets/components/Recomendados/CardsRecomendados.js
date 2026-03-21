import {styled} from "styled-components"
import {motion} from "framer-motion"

// Acá voy a colocar la lógica de las cartas de recomendación (INCLUYENDO su contenedor, ya que la idea es colocar todo lo relacionado
// en un mismo componente

export const CardsRecomendacionContainer = styled.div`
    display: flex;
    gap: 20px;
`
export const CardRecomendacionContainer = styled(motion.div)`
    display: flex;
    gap: 20px;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    width: 350px;
    height: 110px;
    border: 2px solid black;
    cursor: pointer;
`
export const CardRecomendacionImgContainer = styled.div`
    width: 100px;
    height: 80px;
    border-radius: 10px;
    img{
        width: 100px;
        height: 80px;
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
`