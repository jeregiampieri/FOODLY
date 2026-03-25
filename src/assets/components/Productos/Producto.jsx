import { ProductosBotonAgregar, ProductosButtomContainer, ProductosCard, ProductosContainer, ProductosImgContainer, ProductosInfoContainer } from "./ProductoStyle"

export const Producto = ({img,title,desc,price}) => {
    return (
            <ProductosCard>
                <ProductosImgContainer>
                    <img src={img} alt={`Imagen de ${title}`} />
                </ProductosImgContainer>
                    <ProductosInfoContainer>
                        <h4 style={{fontWeight:800}}>{title}</h4>
                        <p style={{color:"#656565e0"}}>{desc}</p>
                    </ProductosInfoContainer>
                    <ProductosButtomContainer>
                        <p style={{color:"#ff7700", fontSize:"20px", fontWeight:800}}>${price}</p>
                        <ProductosBotonAgregar whileHover={{scale:1.05}}>Agregar</ProductosBotonAgregar>
                    </ProductosButtomContainer>
            </ProductosCard>
    )
}