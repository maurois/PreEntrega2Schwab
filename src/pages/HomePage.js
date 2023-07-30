import styled from "@emotion/styled";
import beans from '../images/blue.jpg'
import { Typography } from "@mui/material";

const HomePage = ({ greetings }) => {
  const Img = styled('img')({
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
    objectPosition: 'center'
  })
  return (
    <>
      <Img src={beans} alt="The blue" ></Img>
      <Typography variant="h1" sx={{ position: 'absolute', top: '100px', left: '50px', color: 'white' }}>Welcome to Blue Store</Typography>
    </>
  );
}

export default HomePage;