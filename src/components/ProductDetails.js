import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Container, Grid } from '@mui/material';

const ProductDetails = ({ product }) => {
  //const theme = useTheme();

  return (
    <Card sx={{ display: 'flex', margin: '20px', padding: '20px' }}>
      <CardMedia
        component="img"
        sx={{ width: 300 }}
        image={product.image}
      />
      <Container sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography variant="h4" gutterBottom={true}>
            {product.title}
          </Typography>
          <Typography variant="h5" >
            $ {product.price}
          </Typography>
          <Typography variant="body1">
            {product.description}
          </Typography>
          <Grid container display='flex' flexDirection='row' alignItems='baseline'>
            <Grid item pr={2} >
              <Typography variant='h6'>
                {product.category}
              </Typography>
            </Grid>
            <Grid item pr={2}>
              <Typography variant="h6" color="text.secondary">
                Stock: {product.rating.count}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Container>
    </Card>

  )
}

export default ProductDetails