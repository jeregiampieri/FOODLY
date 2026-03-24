import { Categorias } from "../../Categorias/Categorias.jsx"
import {Hero} from "../../Hero/Hero.jsx"
import { CardsRecomendados } from "../../Recomendados/CardsRecomendados.jsx"
import {HomeWrapped, RecomendadosWrapped} from "./HomeStyle.js"
export const Home = () => {
    return (
        <HomeWrapped>
            {/* El hero forma parte del HOME, es por eso que se lo agrega */}
            <Hero></Hero>
            {/* Recomendados */}
            <RecomendadosWrapped>
                <h3>Hoy te recomendamos</h3>
                <CardsRecomendados></CardsRecomendados>
            </RecomendadosWrapped>
            <Categorias></Categorias>
        </HomeWrapped>

    )
}