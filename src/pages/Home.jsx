import { Box, Button, Container, Typography } from '@mui/material'
import React from 'react'

const services = ['food.svg', 'talk.svg', 'help.svg' ,'clothes.svg' ,'medicine.svg' ,'shop.svg','appointment.svg','excercise.svg'];
const Home = () => {
  return (
    <>
    <Container disableGutters maxWidth={false}>
        <Box  sx={{width:'100%',display:'flex',flexDirection:'column',gap:5 ,paddingTop:15,paddingX:8, objectPosition: 'top',backgroundImage:"url('images/heroSection_img.svg')" ,height:'80vh', backgroundSize:'cover'}}>
          <Typography sx={{ fontSize:32, color:'white' ,width:'48%', fontWeight:600}}>Empowering Elderly Lives with Compassionate Care Get Trusted, Professional Elderly Support At Your Fingertips</Typography>
          <Button variant="contained" sx={{width:'200px',backgroundColor:'var(--primary-color)',padding:1,borderRadius:'16px'}}>Explore Now</Button>
        </Box>
     
    <Box sx={{width:'100%',display:'flex',flexDirection:'column',gap:5 ,paddingTop:8,paddingX:8,height:'90vh',backgroundColor:'#F7F7F7'}}>
         <Box sx={{display:'flex' , flexDirection:'column',justifyContent:'center',alignItems:'center' , gap:1}}>  
          <Typography variant="h5" sx={{fontWeight:600}}>Our Services</Typography>
          <Typography sx={{color:'lightGray.main'}}>Reliable, personalized services that enhance comfort and independence for everyone we serve.</Typography>
         </Box> 
        
       <Box sx={{display:'grid' ,gridTemplateColumns:'repeat(4,1fr)' ,gap:1 ,justifyItems:'center' ,alignContent:'center', paddingX:20}}>
         {services.map((service, index)=>(
          <Box key={index} >  
            <Box component='img' src={`images/${service}`} sx={{ width: 200, height: 200 }}/>
           </Box>
         ))}
       </Box>

    </Box>


    </Container>
    </>
  )
}

export default Home