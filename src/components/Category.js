import { Container } from "@mui/material";
import { useParams } from "react-router-dom";
import ProductList from "./ProductList";
import products from '../mock/products.json'
import categories from '../mock/categories.json'

const Category = () => {

  const { id } = useParams()

  const productsList = products.filter(
    p => {
      if (id == 0) {
        return true
      } else {
        return (p.category === categories[id])
      }
    }
  )
  
  return (

    <Container>
      <ProductList products={productsList} />
    </Container>

  )
}

export default Category;