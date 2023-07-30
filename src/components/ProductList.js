import { Grid, colors } from "@mui/material";
import ItemDetails from "./ItemOverview";

const ProductList = ({ products }) => {

  return (
    <Grid container bgcolor={colors.green}>
      {products.map((item, key) => {
        return (
          <Grid key={key} item>
            <ItemDetails item={item} />
          </Grid>
        )
      })}
    </Grid>
  );
}

export default ProductList;