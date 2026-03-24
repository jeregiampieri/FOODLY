import { scale } from "framer-motion"
import { CardRecomendacionBoton, CardRecomendacionContainer, CardRecomendacionImgContainer, CardRecomendacionInfoContainer } from "./CardsRecomendados"

// Acá estoy armando el componente CardRecomendado, que sería cada uno de los productos que aparece en la sección de recomendados
export const CardRecomendado = ({img, title, desc, price}) => {
    return(
        <CardRecomendacionContainer>
            <CardRecomendacionImgContainer>
                <img src={img} alt={`Imagen de ${title}`} />
            </CardRecomendacionImgContainer>
            <CardRecomendacionInfoContainer>
                <h4>{title}</h4>
                <p>{desc}</p>
                <p style={{color:"#ff7700", fontSize:"17.5px", fontWeight:800}}>${price}</p>
            </CardRecomendacionInfoContainer>
            <CardRecomendacionBoton whileHover={{scale: 1.05}}>Agregar</CardRecomendacionBoton>
        </CardRecomendacionContainer>
    )
}