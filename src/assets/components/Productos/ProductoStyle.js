import {styled} from "styled-components"
import {motion} from "framer-motion"

export const ProductosWrapped = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 80%;
`
export const ProductosContainer = styled.div`
    display: flex;
    min-width: 80%;
    justify-content: center;
    align-items: center;
    gap: 40px;
    flex-wrap: wrap;
    padding: 20px;
`
export const ProductosCard = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    min-width: 200px;
    min-height: 250px;
    border-top: 1px solid #9a9a9a62;
    border-left: 1px solid #9a9a9a62;
    box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.35);
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    padding: 1px 20px;
    h4, p{
        margin: 0;
    }
`
export const ProductosImgContainer = styled.div`
    display: flex;
    width: 220px;
    height: 100px;
    img{
        width: 220px;
        height: 100px;
    }
`
export const ProductosInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: flex-start;
    gap: 8px;
`
export const ProductosButtomContainer = styled.div`
    display: flex;
    gap: 10px;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`

export const ProductosBotonAgregar = styled(motion.button)`
    display: flex;
    width: 80px;
    height: 20px;
    padding: 1rem;
    justify-content: center;
    align-items: center;
    background-color: black;
    color: white;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease;
    &:hover{
        background-color:#ff7700;
    }
`