import { Box, Button, Container, Typography } from '@mui/material'
import React from 'react'

const services = ['food.svg', 'talk.svg', 'help.svg' ,'clothes.svg' ,'medicine.svg' ,'shop.svg','appointment.svg','excercise.svg'];
const about_images =['help_elder_1.svg' , 'help_elder_2.svg' , 'help_elder_3.svg' , 'help_elder_4.svg'];

const Home = () => {
  return (
    <>
    <Container disableGutters maxWidth={false}>
        {/* hero section */}
        <Box  sx={{width:'100%',display:'flex',flexDirection:'column',gap:5 ,paddingY:15,paddingX:12, objectPosition: 'top',backgroundImage:"url('images/heroSection_img.svg')" ,height:{ xs:'auto',md:'80vh'}, backgroundSize:'cover',justifyContent:'center'}}>
          <Typography sx={{ fontSize:{ xs: 20, sm: 26, md: 32 }, color:'white' ,width:{ xs: '100%', sm: '80%', md: '70%',lg:'50%' }, fontWeight:600}}>Empowering Elderly Lives with Compassionate Care Get Trusted, Professional Elderly Support At Your Fingertips</Typography>
          <Button variant="contained" sx={{width:'200px',backgroundColor:'var(--primary-color)',padding:1,borderRadius:'16px'}}>Explore Now</Button>
        </Box>
     

     {/* service section */}
    <Box sx={{width:'100%',display:'flex',flexDirection:'column',gap:5 ,paddingY:8,paddingX:8,height:'auto',backgroundColor:'#F7F7F7', justifyContent:'center',alignItems:'center'}}>
         <Box sx={{display:'flex' , flexDirection:'column',justifyContent:'center',alignItems:'center' , gap:1}}>  
          <Typography variant="h5" sx={{fontWeight:600}}>Our Services</Typography>
          <Typography sx={{color:'lightGray.main',textAlign:'center'}}>Reliable, personalized services that enhance comfort and independence for everyone we serve.</Typography>
         </Box> 
        
       <Box sx={{display:'grid' ,gridTemplateColumns:{lg: 'repeat(4, 1fr)',md: 'repeat(3, 1fr)',sm: 'repeat(2, 1fr)'} ,gap:{xs:0,sm:5} ,justifyItems:'center' ,alignContent:'center', paddingX:20}}>
         {services.map((service, index)=>(
          <Box key={index} >  
            <Box component='img' src={`images/${service}`} sx={{ width: 200, height: 200 }}/>
           </Box>
         ))}
       </Box>
    </Box>

   {/* about us section */}
      <Box sx={{width:'100%',display:'grid',gridTemplateColumns:{sm: 'repeat(1, 1fr)',lg: 'repeat(2, 1fr)'},alignContent:'center',height:'auto'}}>
        <Box sx={{width:'100%'}}><Box component='img' src='images/about_img.svg' sx={{width:'100%' , height:'auto',maxHeight: { xs: 400, sm: 500 , md: 500, lg:600 }, display: 'block' ,objectFit: 'cover'}}/></Box>
        <Box sx={{backgroundColor:'primary.main' ,display:'flex' ,flexDirection:'column' ,gap:3,sm:{width:'100%'} , md:{width:'50%'} , height:'auto' , paddingLeft:'50px' , paddingY:'50px'}}>
          <Typography  sx={{color:'white',fontSize:{xs: '28px',  sm: '30px',md: '30px',lg: '35px'},paddingRight:5 , width:{sm:'100%',md:'90%',lg:'80%'} }}>Making The Best Impression On Your Old Age Is Our Happiness</Typography>
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
        <Box sx={{width:'100%',display:'grid',gridTemplateColumns:{lg: 'repeat(2, 1fr)'},justifyItems:'center',alignContent:'center',alignItems:'center' ,paddingY:10,height:'auto',backgroundColor:'#F7F7F7'}}>
         
          <Box sx={{display:'grid',objectFit: 'cover',width:'100%', gridTemplateColumns:'repeat(2,1fr)',justifyItems:'center',gap:5 ,paddingY:5 ,paddingX:{xs:0,lg:5} }}>
            {about_images.map((about_images, index)=>(
          
             <Box  component='img' src={`images/${about_images}`} sx={{width: { xs: '70%', sm: '70%', md: '60%',lg:'90%' } ,height:'auto'}}/>
            ))}
          </Box>

          <Box sx={{width:'100%' , display:'flex',paddingX:{xs:5,md:10,lg:5} , flexDirection:'column' ,gap:7 ,color:'DarkGrayText.main'}}>
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