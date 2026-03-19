import { HomeStyle } from "./HomeStyle";

export const Home = ({children}) => {
    return (
        <HomeStyle>
            <h1>{children}</h1>
        </HomeStyle>

    )
}