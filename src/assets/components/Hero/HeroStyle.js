import {styled} from "styled-components"
import {motion} from "framer-motion"

//Contenedor general del Hero
export const HeroStyle = styled.div`
    display: flex;
    margin: 0 auto;
    width: 80%;
    max-width: 1200px;
    justify-content: space-between;
    align-items: center;
`
export const ImgContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 400px;
    height: 200px;
    img{
        width: 700px;
        height: 400px;
    }
`
export const BusquedaContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    h2{
        font-size: 45px;
        font-weight: 400;
    }
`
export const BuscarContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    gap: 50px;
    input{
        background-color: #f0f0f0b4;
        border: 2px solid black;
        width: 280px;
        height: 30px;
        border-radius: 5px;
        font-size: 15px;
        padding: 3.5px 30px;
    }
`
export const LupaContainer = styled.div`
    position: absolute;
    bottom: 13px;
    left: 10px;
`

export const BotonBuscar = styled(motion.button)`
    display: flex;
    background-color: black;
    color: white;
    width: 80px;
    height: 20px;
    justify-content: center;
    align-items: center;
    padding: 20px 50px;
    border-radius: 8px;
    font-size: 15px;
    cursor: pointer;
    border: none;
`