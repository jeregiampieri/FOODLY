import { BotonBuscar, BuscarContainer, BusquedaContainer, HeroStyle, ImgContainer, LupaContainer} from "./HeroStyle"
import pizzaImg from "../../img/pizzasImg.png"
import { BiSearchAlt } from "react-icons/bi";

// Dentro del home, voy a colocar/importar el hero, ya que va a formar parte del mismo
export const Hero = () => {
    return (
        <HeroStyle>
            <BusquedaContainer>
                <h2>¿Qué categoría estás buscando?</h2>
                <BuscarContainer>
                    <LupaContainer>
                        <BiSearchAlt />
                    </LupaContainer>
                    <input type="text" placeholder="Ej: Pizza a la piedra" />
                    <BotonBuscar whileHover={{
                        color: "white",
                        borderColor: "#ff6600c5",
                        boxShadow: "inset 0 0 0 50px #ff6600c5",
                        transition:{
                            duration:0.1,
                            ease:"easeIn"
                        }
                    }}>
                        Buscar
                    </BotonBuscar>
                </BuscarContainer>
            </BusquedaContainer>
            <ImgContainer>
                <img src={pizzaImg} alt="Imagen de pizzas" />
            </ImgContainer>
        </HeroStyle>
    )
}