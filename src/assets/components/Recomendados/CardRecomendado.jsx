import { CardRecomendacionContainer } from "./CardsRecomendados"

export const CardRecomendado = (imagen, titulo, descripcion, precio) => {
    return(
        <CardRecomendacionContainer>
            <img src={imagen} alt={`Imagen de ${titulo}`} />
        </CardRecomendacionContainer>
    )
}