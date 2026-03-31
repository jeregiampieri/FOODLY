import {styled} from "styled-components"
import {motion} from "framer-motion"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 80%;
`

export const CategoriasContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
`
export const BordeDecoracion = styled.div`
    min-height: 5px;
    width: 30%;
    background-image: linear-gradient(83deg, #a0a0a0, #000000);
    border-radius: 15px;
    flex-shrink: 0;
    transition: all 0.28s ease;
`

export const CategoriaCard = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-width: 110px;
    min-height: 130px;
    max-width: 110px;
    max-height: 130px;
    border: 2px solid ${({selected}) => selected ? `#ff7700` : `black`};
    border-radius: 5px;
    padding: 1rem;
    transition: all 0.28s ease;
    cursor: pointer;
    ${BordeDecoracion}{
        background-image: ${({selected}) => selected ? `linear-gradient(83deg, #ffa100, #fb103d);` : `#ff7700`};
        width: ${({selected}) => selected ? `35%` : `30%` }
    }
    &:hover{
        border: 2px solid #ff7700;
        ${BordeDecoracion}{
            background-image: linear-gradient(83deg, #ffa100, #fb103d);
            width: 35%;
        }
    }
`

export const CategoriaCardImgContainer = styled.div`
    display: flex;
    height: 55px;
    width: 55px;
    img{
        height: 55px;
        width: 55px;
    }
`
