import { Box, Button, Container, Typography } from '@mui/material'
import React from 'react'

const services = ['food.svg', 'talk.svg', 'help.svg' ,'clothes.svg' ,'medicine.svg' ,'shop.svg','appointment.svg','excercise.svg'];
const about_images =['help_elder_1.svg' , 'help_elder_2.svg' , 'help_elder_3.svg' , 'help_elder_4.svg'];

const Home = () => {
  return (
    <>
    <Container disableGutters maxWidth={false}>
        {/* hero section */}
        <Box  sx={{width:'100%',display:'flex',flexDirection:'column',gap:5 ,paddingTop:15,paddingX:12, objectPosition: 'top',backgroundImage:"url('images/heroSection_img.svg')" ,height:'80vh', backgroundSize:'cover'}}>
          <Typography sx={{ fontSize:32, color:'white' ,width:'48%', fontWeight:600}}>Empowering Elderly Lives with Compassionate Care Get Trusted, Professional Elderly Support At Your Fingertips</Typography>
          <Button variant="contained" sx={{width:'200px',backgroundColor:'var(--primary-color)',padding:1,borderRadius:'16px'}}>Explore Now</Button>
        </Box>
     

     {/* service section */}
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

   {/* about us section */}
      <Box sx={{width:'100%',display:'flex',height:'80vh'}}>
        <Box sx={{width:'50%'}}><Box component='img' src='images/about_img.svg' sx={{width:'100%' , height:'100%', display: 'block' ,objectFit: 'cover'}}/></Box>
        <Box sx={{backgroundColor:'primary.main' ,display:'flex' ,flexDirection:'column' ,gap:3, width:'50%' , height:'100%' , paddingLeft:'50px' , paddingTop:'40px'}}>
          <Typography variant='h4' sx={{color:'white' , width:'70%' }}>Making The Best Impression On Your Old Age Is Our Happiness</Typography>
          <Typography sx={{color:'white' , width:'75%' }}>We care for your comfort and joy — making your old age a time of dignity and happiness is our greatest reward.</Typography>

         <Box sx={{display:'flex' ,flexDirection:'column' , gap:4 , marginTop:5}}>
          <Box sx={{display:'flex',gap:2}}>
            <Box component='img' src='images/reasonable_cost_img.svg' sx={{width:78 ,height:78}}/>
            <Box>
             <Typography variant='h5' sx={{color:'white' , width:'100%' }}>Reasonable Cost</Typography>
             <Typography  sx={{color:'white' , width:'80%' }}>We offer trusted elder care services at a reasonable and transparent cost</Typography>
            </Box>
          </Box>


          <Box sx={{display:'flex',gap:2}}>
            <Box component='img' src='images/good_quality_img.svg' sx={{width:78 ,height:78}}/>
            <Box>
             <Typography variant='h5' sx={{color:'white' , width:'100%' }}>Good Quality Services</Typography>
             <Typography  sx={{color:'white' , width:'80%' }}>We are committed to delivering reliable, high-quality care that meets the needs and comfort of every</Typography>
            </Box>
          </Box> 
        </Box>

        </Box>
      </Box>

       {/* about us 2 section */}
        <Box sx={{width:'100%',display:'flex',justifyContent:'center',paddingX:10 ,alignItems:'center' ,paddingY:4,height:'90vh',backgroundColor:'#F7F7F7'}}>
         
          <Box sx={{display:'grid',objectFit: 'cover',width:'50%', gridTemplateColumns:'repeat(2,1fr)' }}>
            {about_images.map((about_images, index)=>(
          
             <Box  component='img' src={`images/${about_images}`} sx={{width:250 ,height:250}}/>
            ))}
          </Box>

          <Box sx={{width:'45%' , display:'flex' , flexDirection:'column' ,gap:7 ,color:'DarkGrayText.main'}}>
            <Typography>We offer a wide range of elder care services designed to meet the diverse needs of seniors and their families. From personal care like bathing, dressing, and medication reminders to companionship, mobility support, and transportation to appointments — every service is delivered with compassion and respect. Our goal is to help seniors live independently and comfortably, with the dignity they deserve.</Typography>
            <Typography>Our platform is designed for convenience and peace of mind. With just a few clicks, you can browse available services, view caregiver profiles, compare options, and book the right care plan that suits your needs. No long phone calls, no paperwork — just a simple, secure, and user-friendly system that gives you full control over your loved one’s care.</Typography>
            <Typography>With experienced caregivers, affordable pricing, and 24/7 support, we make elder care simple and trustworthy. Your loved ones deserve compassionate care — and we’re here to provide it.</Typography>
          </Box>
        </Box>

    </Container>
    </>
  )
}

export default Home