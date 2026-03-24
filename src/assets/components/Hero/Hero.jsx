import { BotonBuscar, BuscarContainer, BusquedaContainer, HeroStyle, ImgContainer, LupaContainer} from "./HeroStyle"
import pizzaImg from "../../img/pizzasImg.png"
import { BiSearchAlt } from "react-icons/bi";
import {Typewriter} from "react-simple-typewriter"

// Dentro del home, voy a colocar/importar el hero, ya que va a formar parte del mismo
export const Hero = () => {
    return (
        <HeroStyle>
            <BusquedaContainer>
                <h2>
                    <Typewriter words={['¿Qué categorías estás buscando?']}
                    loop={1}
                    cursor
                    cursorStyle='|'
                    typeSpeed={70}/>
                </h2>
                <BuscarContainer>
                    <LupaContainer>
                        <BiSearchAlt />
                    </LupaContainer>
                    <input type="text" placeholder="Ej: Pizza a la piedra" />
                    <BotonBuscar whileHover={{
                        boxShadow: "inset 0 0 0 50px #ff7700",
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