import { Box, Button, Container, Typography } from '@mui/material'
import React from 'react'

const Home = () => {
  return (
    <>
    <Container disableGutters maxWidth={false}>
        <Box  sx={{width:'100%',display:'flex',flexDirection:'column',gap:5 ,paddingTop:15,paddingX:8, objectPosition: 'top',backgroundImage:"url('images/heroSection_img.svg')" ,height:'80vh', backgroundSize:'cover'}}>
          <Typography sx={{ fontSize:32, color:'white' ,width:'48%', fontWeight:600}}>Empowering Elderly Lives with Compassionate Care Get Trusted, Professional Elderly Support At Your Fingertips</Typography>
          <Button variant="contained" sx={{width:'200px',backgroundColor:'var(--primary-color)',padding:1,borderRadius:'16px'}}>Explore Now</Button>
        </Box>

        

    </Container>
    </>
  )
}

export default Home