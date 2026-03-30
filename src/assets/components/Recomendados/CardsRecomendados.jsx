import { CardsRecomendacionContainer } from "./CardsRecomendados"
import { CardRecomendado } from "./CardRecomendado.jsx"
import { useSelector } from "react-redux"


export const CardsRecomendados = () => {

    const {recomendados} = useSelector((estado) => {
        return estado.recomendados
    })

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