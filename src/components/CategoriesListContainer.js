import { List } from "@mui/material";
import ItemListContainer from "./ItemListContainer";
import categorias from '../mock/categories.json'


const CategoriesListContainer = () => {

  return (
      <ItemListContainer categories={categorias} />
  )
}

export default CategoriesListContainer