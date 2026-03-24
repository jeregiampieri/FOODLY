import { ProductosCard, ProductosContainer, ProductosImgContainer } from "./ProductoStyle"

export const Producto = ({img,title,desc,price}) => {
    return (
        <ProductosContainer>
            <ProductosCard>
                <ProductosImgContainer>
                    <img src={img} alt={`Imagen de ${title}`} />
                </ProductosImgContainer>
            </ProductosCard>
        </ProductosContainer>
    )
}