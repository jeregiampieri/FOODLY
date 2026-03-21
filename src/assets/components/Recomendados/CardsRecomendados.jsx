import { color } from "framer-motion"
import { CardRecomendacionContainer, CardRecomendacionImgContainer, CardRecomendacionInfoContainer, CardsRecomendacionContainer } from "./CardsRecomendados"

export const CardsRecomendados = () => {
    return (
        <CardsRecomendacionContainer>
            <CardRecomendacionContainer>
                <CardRecomendacionImgContainer>
                    <img src="https://res.cloudinary.com/dcatzxqqf/image/upload/v1656648456/coding/NucbaZappi/Productos/muzza-mentolada_fmh9at.png" alt="Imagen de pizza" />
                </CardRecomendacionImgContainer>
                <CardRecomendacionInfoContainer>
                    <h4 style={{fontWeight: 500}}>La Aco</h4>
                    <p>Cheta la gorra</p>
                    <h4 style={{color: '#ff7700', fontWeight: 500}}>$3000</h4>
                </CardRecomendacionInfoContainer>
            </CardRecomendacionContainer>
        </CardsRecomendacionContainer>
    )
}