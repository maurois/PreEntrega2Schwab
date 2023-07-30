import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Divider } from '@mui/material';
import { Link } from 'react-router-dom';

export default function ({ item }) {
  return (
      <Card key={item.id} elevation={5} title={item.title} sx={{ width: '350px', height: '445px', margin: "5px" }}>
        <Link to={`/products/${item.id}`} >

        <CardMedia
          sx={{height:'300px'}}
          image={item.image}
        />
        </Link>
        <CardContent>
          <Typography variant="h5" gutterBottom component="div" noWrap={true}>
            {item.title}
          </Typography>
          <Typography variant="body1">
          {item.category}
          </Typography>
        </CardContent>
        <Divider flexItem />
        <CardActions>
          <Button size="small"><Link to={`/products/${item.id}`} >Details</Link></Button>
          <Button size="small">Add to cart</Button>
        </CardActions>
      </Card>
  );
}