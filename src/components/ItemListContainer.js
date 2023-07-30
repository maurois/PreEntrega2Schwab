import { List, ListItem, Button } from "@mui/material";
import useFetch from '../hooks/useFetch';

const ItemListContainer = ({ categories }) => {

  // const { data, loading, error } = useFetch(categories)

  console.log(categories);
  return (
    <List>
      {categories.map((item, key) => {
        return (
          <ListItem key={key}>
            <Button  variant="outlined" sx={{ width: "200px" }}>
              {item}
            </Button>
          </ListItem>
        )
      })}
    </List>
  );
}

export default ItemListContainer;