import {Hero} from "../../Hero/Hero.jsx"
import {HomeStyle} from "./HomeStyle.js"
export const Home = () => {
    return (
        <HomeStyle>
            {/* El hero forma parte del HOME, es por eso que se lo agrega */}
            <Hero>

            </Hero>
        </HomeStyle>

    )
}