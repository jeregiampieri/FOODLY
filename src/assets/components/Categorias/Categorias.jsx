import { CategoriaCard, CategoriasContainer, Container } from "./CategoriasStyle"
import {categorias} from "../../utils/Categorias.js"
import { Categoria } from "./Categoria.jsx"

export const Categorias = () => {
    return (
        <Container>
            <h1 style={{fontWeight:400}}>Categorias</h1>
            <CategoriasContainer>
            {
                categorias.map((categoria) => {
                    // La key es para identificar a cada uno de los objetos dentro del array
                    // El spreid es para pasarle al componente Categoria por parametro todos los atributos de cada objeto categoria
                    return <Categoria key={categoria.id} {...categoria}></Categoria>
                })
            }
            </CategoriasContainer>
        </Container>
    )
}