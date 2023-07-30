import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import TripOriginRoundedIcon from '@mui/icons-material/TripOriginRounded';
import CartWidget from './CartWidget';
import { MenuItem, Select, Stack } from '@mui/material';
import Separator from './Separator';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import categories from '../mock/categories.json'

export default function NavBar() {

  const [category, setCategory] = useState('')

  useEffect(
    () => {
      switch (category) {
        case 'todos': {
          navigate(`/category/${categories.indexOf(category)}`)
        }
          break;
        case 'electronics': {
          navigate(`/category/${categories.indexOf(category)}`)
        } break
        case 'jewelery': {
          navigate(`/category/${categories.indexOf(category)}`)
        } break
        case 'men\'s clothing': {
          navigate(`/category/${categories.indexOf(category)}`)
        } break
        case 'women\'s clothing': {
          navigate(`/category/${categories.indexOf(category)}`)
        } break
        default: {
          console.log(category);
        }
          break;
      }
    },
    [category]
  )

  const navigate = useNavigate()

  const handleChange = (e, cat) => {
    setCategory(cat)
  }

  const handleClick = () => {
    setCategory('todos')
  }

  return (
    <Box sx={{ flexGrow: 1, height: "80px" }}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Button href="/">
              <TripOriginRoundedIcon sx={{ color: 'white', fontSize: '45px' }} />
            </Button>
          </IconButton>
          <Typography variant="h4" >
            Blue Store
          </Typography>
          <Stack direction="row" spacing={2} sx={{ marginLeft: "10px" }}>
              <Button variant='contained' disableElevation size='large' onClick={handleClick}>
                <Typography>Productos</Typography>
              </Button>
            <Select
              size='small'
              id="cat-sel"
              value={category}
              label="Categorias"
              sx={{ color: 'white' }}
            >
              {categories.map((cat, key) => {
                return (<MenuItem key={key} value={cat} onClick={(e) => { handleChange(e, cat) }} ><Typography >{cat.toUpperCase()}</Typography></MenuItem>)
              })}
            </Select>
          </Stack>
          <Separator />
          <CartWidget />
        </Toolbar>
      </AppBar>
    </Box>
  );
}

