import { BotonBuscar, BuscarContainer, BusquedaContainer, HeroStyle, ImgContainer, InputBuscar, LupaContainer} from "./HeroStyle"
import pizzaImg from "../../img/pizzasImg.png"
import { BiSearchAlt } from "react-icons/bi";
import {Typewriter} from "react-simple-typewriter"
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { seleccionarCategoria } from "../../redux/categorias/categoriasSlice";


// Dentro del home, voy a colocar/importar el hero, ya que va a formar parte del mismo
export const Hero = () => {

    const [valor, setValor] = useState("")
    const {categorias} = useSelector((estado) => {
            return estado.categorias
        })

    // Acá estoy llamando al hook dispatch para indicar el uso del reducer
    const dispatch = useDispatch()

    const handlerSubmit = (evento) =>{
        // Esto se usa para evitar el recargo de la página cada vez que le hacemos click al botón BUSCAR
        evento.preventDefault();
        // Para limpiar la data que viene del input
        const nuevaCategoria = valor.trim().toLowerCase().split(" ").join("")
        const categoriaEncontrada = categorias.find((categoria) => categoria.category.toLowerCase() === nuevaCategoria)
        if (categoriaEncontrada){
            dispatch(seleccionarCategoria(categoriaEncontrada.category))
        }else{
            alert("Categoría inexistente")
        }
        // Esto es para volver a vaciar el input luego de hacer click en BUSCAR, y de paso reseteamos el valor del useState
        setValor("")
    }

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
                    <InputBuscar type="text" placeholder="Ej: Pizzas a la piedra" 
                    // Acá estoy capturando el valor del input y lo coloco dentro del valor del useState
                    onChange={(e) => {setValor(e.target.value)}}
                    value={valor} />
                    <BotonBuscar whileHover={valor ? {
                        boxShadow: "inset 0 0 0 50px #ff7700",
                        transition:{
                            duration:0.1,
                            ease:"easeIn"
                        }}:{}} disabled={!valor}
                        onClick={(evento) => handlerSubmit(evento)}>
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