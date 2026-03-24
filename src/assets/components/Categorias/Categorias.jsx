import { CategoriaCard, CategoriasContainer } from "./CategoriasStyle"

export const Categorias = () => {
    return (
        <CategoriasContainer>
            <h1>Categorias</h1>
            <CategoriaCard>
                <img src="https://res.cloudinary.com/dcatzxqqf/image/upload/v1656648466/coding/NucbaZappi/Categorias/hamburguesa_faykp7.png" 
                alt="Hamburguesa" />
                <h2>Hamburguesa</h2>
            </CategoriaCard>
        </CategoriasContainer>
    )
}