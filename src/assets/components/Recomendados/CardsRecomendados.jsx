import { CardsRecomendacionContainer } from "./CardsRecomendados"
import {recomendados} from "../../utils/Recomendados.js"
import { CardRecomendado } from "./CardRecomendado.jsx"

export const CardsRecomendados = () => {
    return (
        <CardsRecomendacionContainer>
                {
                    // Recordar que esto es un componente JSX, por lo tanto, para indicar que va haber código JS necesito colocar la lógica 
                    // entre corchetes
                    recomendados.map((productoRecomendado) => {
                        return <CardRecomendado key={productoRecomendado.id} {...productoRecomendado}></CardRecomendado>
                    })
                }
        </CardsRecomendacionContainer>
    )
}