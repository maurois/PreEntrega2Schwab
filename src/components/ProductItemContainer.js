import { Container } from "@mui/material";
import ProductList from "./ProductList";
import productos from '../mock/products.json'

const ProductItemContainer = () => {
  return (
    <Container>
      <ProductList products={productos} />
    </Container>
  )
}

export default ProductItemContainer;