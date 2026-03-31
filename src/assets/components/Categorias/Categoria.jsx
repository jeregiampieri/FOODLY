import { useState } from "react"
import { BordeDecoracion, CategoriaCard, CategoriaCardImgContainer } from "./CategoriasStyle"
import { useDispatch, useSelector } from "react-redux"
import { seleccionarCategoria } from "../../redux/categorias/categoriasSlice"

export const Categoria = ({img, title, category}) => {

    const dispatch = useDispatch()
    const {categoriaSeleccionada} = useSelector((estado) => estado.categorias)

    return (
        <CategoriaCard whileTap={{scale:0.95}}
        onClick={dispatch(seleccionarCategoria(category))}>
            <CategoriaCardImgContainer>
                <img src={img} alt={`Imagen de ${title}`} />
            </CategoriaCardImgContainer>
            <h5>{title}</h5>
            <BordeDecoracion></BordeDecoracion>
        </CategoriaCard>
    )
}