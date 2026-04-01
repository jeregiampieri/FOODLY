import { BordeDecoracion, CategoriaCard, CategoriaCardImgContainer } from "./CategoriasStyle"
import { useDispatch, useSelector} from "react-redux"
import { seleccionarCategoria } from "../../redux/categorias/categoriasSlice"

// Este componente me representa a cada una de las categorias, es decir, cada una de las cards
export const Categoria = ({img, title, category}) => {
     // Pensar en que si cambio la categoriaSeleccionada, el renderizado de los productos se hace AUTOMATICAMENTE, ya que en ese componente
    // hice que los productos se rendericen en base a la categoriaSeleccionada
    // Acá me traigo si o si del estado global categoriaSeleccionada para poder hacer el selected
    const {categoriaSeleccionada} = useSelector((estado) => estado.categorias)
    const dispatch = useDispatch()
    return (
        <CategoriaCard whileTap={{scale:0.95}}
        onClick={() => dispatch(seleccionarCategoria(category))}
        selected={category === categoriaSeleccionada}>
            <CategoriaCardImgContainer>
                <img src={img} alt={`Imagen de ${title}`} />
            </CategoriaCardImgContainer>
            <h5>{title}</h5>
            <BordeDecoracion></BordeDecoracion>
        </CategoriaCard>
    )
}