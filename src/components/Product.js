import { useParams } from 'react-router-dom'
import ProductDetails from './ProductDetails'
import products from '../mock/products.json'
import { Container } from '@mui/material'

const Product = () => {

  const { id } = useParams()

  const product = (id) => products.find(p => p.id == id)

  return( <Container>
      <ProductDetails product={product(id)}/>
    </Container> )
}

export default Product