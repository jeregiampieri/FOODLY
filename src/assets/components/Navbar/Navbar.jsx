import { CartContainer, ImgContainer, LinksContainer, NavbarStyled, HomeBoton, SesionBoton } from "./NavbarStyle"
import logoFoodly from '../../img/logoFoodly.png'
import { LiaHomeSolid } from "react-icons/lia";
import { FaCartShopping } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";

export const Navbar = () => {
    return (
        <NavbarStyled>
            <ImgContainer>
                <img src={logoFoodly} alt="Logo de Foodly" />
            </ImgContainer>
            <LinksContainer>
                <HomeBoton whileHover={{scale: 1.09,
                    color: "#db7c29",
                    transition: {
                        duration: 0.1,
                        ease: "easeIn"
                    }
                }}>
                    <LiaHomeSolid />
                    <a>Home</a>
                </HomeBoton>
                <CartContainer whileHover={{scale: 1.09, 
                    color:"#db7c29",
                    transition: {
                        duration: 0.1,
                        ease: "easeIn"
                    }
                }}>
                    <FaCartShopping/>
                </CartContainer>
                <SesionBoton whileHover={{scale: 1.05,
                    color:"#db7c29",
                    transition: {
                        duration: 0.1,
                        ease: "easeIn"
                    }
                }}>
                    <a>Inicio de Sesión</a>
                    <FaUserCircle/>
                </SesionBoton>
            </LinksContainer>
        </NavbarStyled>

    )
}
