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
    padding: 0rem 1rem;
    width: 350px;
    height: 110px;
    box-shadow: 2px 4px 12px rgba(0, 0, 0, 0.55);
    cursor: pointer;
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