import { BordeDecoracion, CategoriaCard, CategoriaCardImgContainer } from "./CategoriasStyle"

export const Categoria = ({img, title, category}) => {
    return (
        <CategoriaCard>
            <CategoriaCardImgContainer>
                <img src={img} alt={`Imagen de ${title}`} />
            </CategoriaCardImgContainer>
            <h3>{title}</h3>
            <BordeDecoracion></BordeDecoracion>
        </CategoriaCard>
    )
}