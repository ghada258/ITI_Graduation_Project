import { Height } from '@mui/icons-material'
import { Box, Container, Typography } from '@mui/material'
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import WifiCalling3Icon from '@mui/icons-material/WifiCalling3';
import EmailIcon from '@mui/icons-material/Email';
import LocationPinIcon from '@mui/icons-material/LocationPin';

const Footer = () => {
  return (
    <>
     <Container maxWidth="100%" disableGutters  sx={{marginTop:1,bgcolor:'var(--primary-color)' ,Height:'50vh',color:'white' ,fontFamily:'var(--main_font)' }}>
        <Box  sx={{display:'flex',justifyContent:'space-between',gap:3,paddingX:10 ,paddingY:5}} >
          <Box sx={{display:'flex' , flexDirection :'column' ,gap:3}}>
           <Box component="img" src="images/White_logo.svg" alt="logo"   sx={{ width: 150, height: 'auto' }} />
            <Typography width={450} sx={{color:'var(--footer-text)'}}>Providing compassionate, high-quality elderly care services with easy online booking — ensuring comfort, dignity, and peace of mind for every family.</Typography>
            <Box sx={{display:'flex',alignItems:'center' ,gap:1}}>
                 <Box component="img" src="images/facebook.svg" alt="logo"   sx={{ cursor:'pointer'  ,paddingY:1,width: 35,bgcolor:'white', height: 35,borderRadius:1 }} />
                  <TwitterIcon baseClassName="fas"  fontSize="large" sx={{ cursor:'pointer' ,color:'var(--primary-color)',bgcolor:'white',padding:1,borderRadius:1}}  />
                 <InstagramIcon baseClassName="fas" fontSize="large" sx={{ cursor:'pointer' ,color:'var(--primary-color)',bgcolor:'white',padding:1,borderRadius:1}}  />
            </Box>
            
          </Box>  
        <Box sx={{display:'flex' , flexDirection :'column' ,gap:3}}>
            <Typography variant='h5' sx={{color:'white',fontWeight:600}}>Sponsers</Typography>
            <Box sx={{display:'flex' , flexDirection:'column' ,gap:1}}>
                <Typography variant='body1' sx={{color:'white'}} >KindHeart Home Care</Typography>
                <Typography variant='body1' sx={{color:'white'}} >Companion Plus Services</Typography>
                <Typography variant='body1' sx={{color:'white'}} >GoldenYears Support</Typography>
                <Typography variant='body1' sx={{color:'white'}} >CareCircle Network</Typography>
            </Box>

                    
        </Box> 

         <Box sx={{display:'flex' , flexDirection :'column' ,gap:3}}>
            <Typography variant='h5' sx={{color:'white',fontWeight:600}}>Pages</Typography>
            <Box sx={{display:'flex' , flexDirection:'column' ,gap:1}}>
                <Typography variant='body1' sx={{color:'white'}} >Home</Typography>
                <Typography variant='body1' sx={{color:'white'}} >Booking</Typography>
                <Typography variant='body1' sx={{color:'white'}} >Contact Us</Typography>
                <Typography variant='body1' sx={{color:'white'}} >About Us</Typography>
            </Box>                   
        </Box> 
    

          <Box  sx={{display:'flex' ,flexDirection:'column',justifyContent:'flex-start',gap:3}}>
            <Typography variant='h5' sx={{color:'white',fontWeight:600}}>Contact Us</Typography>
            <Box sx={{display:'flex' ,flexDirection:'column',alignItems:'flex-start'  ,gap:1}}>
                <Box sx={{display:'flex' ,gap:2,justifyContent:'center',alignItems:'center'}}>
                <WifiCalling3Icon baseClassName="fas" fontSize="large"  sx={{color:'var(--primary-color)',bgcolor:'white',padding:1,borderRadius:1}}  />
                <Typography variant='body1' sx={{color:'white'}} >(202) 552-0126</Typography>
                </Box>
                
                <Box sx={{display:'flex' ,gap:2,justifyContent:'center',alignItems:'center'}}>
                <EmailIcon baseClassName="fas" fontSize="large"  sx={{color:'var(--primary-color)',bgcolor:'white',padding:1,borderRadius:1}}  />
                <Typography variant='body1' sx={{color:'white'}} >ElderTrust@gmail.com</Typography>
                </Box>

                <Box sx={{ display:'flex' ,gap:2,justifyContent:'center',alignItems:'center'}}>
                <LocationPinIcon baseClassName="fas" fontSize="large" sx={{color:'var(--primary-color)',bgcolor:'white',padding:1,borderRadius:1}}  />
                <Typography variant='body1' sx={{color:'white'}} > Parker Rd. Allentown,Cairo 31134</Typography>
             </Box>

             
           </Box>
            
          </Box>
         
        </Box>

        <Box sx={{color:'var(--footer-text)',paddingBottom:2}}>
            <hr />
            <Box sx={{display:'flex' ,alignItems:'center' ,justifyContent:'center',paddingTop:1}}>
               <Typography>© Copyright 2025</Typography>
               <Box component="img" src="images/White_logo.svg" alt="logo"   sx={{ width: 100, height: 'auto',paddingX:1 }} />
               <Typography>All Rights Reserved.</Typography>
            </Box>
        </Box>
        
     </Container>
    </>
  )
}

export default Footer