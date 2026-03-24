import {styled} from "styled-components"
import {motion} from "framer-motion"

export const ProductosWrapped = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 80%;
`
export const ProductosContainer = styled.div`
    display: flex;
    width: 100%;
    gap: 20px;
`
export const ProductosCard = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    min-width: 200px;
    min-height: 200px;
    border: 1px solid black;
`
export const ProductosImgContainer = styled.div`
    display: flex;
    width: 100px;
    height: 100px;
    img{
        width: 100px;
        height: 100px;
    }
`
export const ProductosInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`
export const ProductosButtomContainer = styled.div`
    display: flex;
    gap: 10px;
`