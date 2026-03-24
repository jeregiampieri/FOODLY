import { BordeDecoracion, CategoriaCard, CategoriaCardImgContainer } from "./CategoriasStyle"

export const Categoria = ({img, title, category}) => {
    return (
        <CategoriaCard whileTap={{scale:0.95}}>
            <CategoriaCardImgContainer>
                <img src={img} alt={`Imagen de ${title}`} />
            </CategoriaCardImgContainer>
            <h5>{title}</h5>
            <BordeDecoracion></BordeDecoracion>
        </CategoriaCard>
    )
}