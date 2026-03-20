import {styled} from "styled-components"
import {motion} from "framer-motion"

// La etiqueta nav es para indicar que todo el contenido dentro de dicha etiqueta, son links y parte de navegación para el usuario
export const NavbarStyled = styled.nav`
    display: flex;
    width: 100%;
    background-color: #fdfdfd;
    justify-content: space-between;
    align-items: center;
    height: 85px;
    padding: 0rem 0rem 0rem 1rem;
    border-bottom: 1px solid #aeaeae ;
`
export const ImgContainer = styled.div`
    width: 280px;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    img{
        width: 190px;
        height: 150px;
        object-fit: contain;
    }
`

export const LinksContainer = styled.div`
    display: flex;
    width: 20%;
    justify-content: center;
    align-items: center;
    gap: 5px;
`

export const HomeBoton = styled(motion.button)`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fdfdfd;
    width: 100px;
    height: 40px;
    font-size: 17.5px;
    gap: 5px;
    cursor: pointer;
    border: none;
`

export const CartContainer = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 40px;
    font-size: 19px;
    cursor: pointer;
`
export const SesionBoton = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 40px;
    gap: 5px;
    font-size: 17.5px;
    cursor: pointer;
`