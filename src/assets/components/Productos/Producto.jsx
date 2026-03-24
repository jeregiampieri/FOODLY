import { ProductosButtomContainer, ProductosCard, ProductosContainer, ProductosImgContainer, ProductosInfoContainer } from "./ProductoStyle"

export const Producto = ({img,title,desc,price}) => {
    return (
        <ProductosContainer>
            <ProductosCard>
                <ProductosImgContainer>
                    <img src={img} alt={`Imagen de ${title}`} />
                    <ProductosInfoContainer>
                        <h4>{title}</h4>
                        <p>{desc}</p>
                    </ProductosInfoContainer>
                    <ProductosButtomContainer>
                        <p>{price}</p>
                    </ProductosButtomContainer>
                </ProductosImgContainer>
            </ProductosCard>
        </ProductosContainer>
    )
}