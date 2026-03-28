import { CategoriaCard, CategoriasContainer, Container } from "./CategoriasStyle"
import { Categoria } from "./Categoria.jsx"
import { useSelector } from "react-redux"

export const Categorias = () => {
    
    // Me estoy trayendo los datos del slice de categorias
    const {categorias} = useSelector((estado) => {
        return estado.categorias
    })

    return (
        <Container>
            <h2 style={{fontWeight:400}}>Categorias</h2>
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