import { BotonBuscar, BuscarContainer, BusquedaContainer, HeroStyle, ImgContainer, InputBuscar, LupaContainer} from "./HeroStyle"
import pizzaImg from "../../img/pizzasImg.png"
import { BiSearchAlt } from "react-icons/bi";
import {Typewriter} from "react-simple-typewriter"
import { useState } from "react";

// Dentro del home, voy a colocar/importar el hero, ya que va a formar parte del mismo
export const Hero = () => {

    const [valor, setValor] = useState("")

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
                    <form>
                    <InputBuscar type="text" placeholder="Ej: Pizza a la piedra" 
                    // Acá estoy capturando el valor del input y lo coloco dentro del valor del useState
                    onChange={(e) => {setValor(e.target.value)}}
                    value={valor} />
                    <BotonBuscar whileHover={valor ? {
                        boxShadow: "inset 0 0 0 50px #ff7700",
                        transition:{
                            duration:0.1,
                            ease:"easeIn"
                        }}:{}} disabled={!valor}>
                        Buscar
                    </BotonBuscar>
                    </form>
                </BuscarContainer>
            </BusquedaContainer>
            <ImgContainer>
                <img src={pizzaImg} alt="Imagen de pizzas" />
            </ImgContainer>
        </HeroStyle>
    )
}