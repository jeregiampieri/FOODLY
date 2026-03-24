import {styled} from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export const CategoriasContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100px;
`
export const CategoriaCard = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    align-items: center;
`
export const BordeDecoracion = styled.div`
    height: 5px;
    width: 30%;
    background-color: black;
    border-radius: 15px;
`
export const CategoriaCardImgContainer = styled.div`
    display: flex;
    height: 100px;
    width: 100px;
    img{
        height: 40px;
        width: 40px;
    }
`
