// import React from "react";
// import Typography from "@mui/material/Typography";
// import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField";
// import Stack from "@mui/material/Stack";
// import Button from "@mui/material/Button";
// export default function SignUp() {
//   return (
//     <>
//       <Stack
//         bgcolor={"gray"}
//         alignItems={"center"}
//         justifyContent={"center"}
//         direction={"column"}
//         sx={{ minHeight: "100vh" }}
//       >
//         <Stack
//           direction={{ xs: "column", md: "row" }}
//           justifyContent={"center"}
//         //   spacing={3}
//           width={"80%"}
//           border={"2px solid green"}
//           bgcolor={"white"}
//         //   sx={{ maxHeight: "93vh" }}
//         borderRadius={5}
//         >
//           <Box
//             sx={{
//               flex: 1,
//               display: "flex",
//               flexDirection: "column",
//               gap: 3,
//               justifyContent: "center",
//               paddingLeft:5,
//               paddingRight:5
//             //   alignItems:'center'
//             }}
//           >
//             <Box>
//               <Typography variant="h1" fontSize={20} textAlign={"center"}>
//                 {" "}
//                 Create Your account{" "}
//               </Typography>
//             </Box>
//             <Box
//               display={"flex"}
//               justifyContent={"center"}
//               gap={1}
//               textAlign={"center"}
//               width={"80%"}
//               margin={"0 auto"}
//             >
//               <Button
//                 variant="text"
//                 sx={{ borderBottom: "2px solid black", flex: 1 }}
//               >
//                 User
//               </Button>
//               <Button
//                 variant="text"
//                 sx={{ borderBottom: "2px solid black", flex: 1 }}
//               >
//                 Caregiver
//               </Button>
//             </Box>
//             <Box display={"flex"}>
//               <Box>
//                 <Typography variant="subtitle1" gutterBottom>
//                   First Name
//                 </Typography>
//                 <TextField
//                   variant="outlined"
//                   fullWidth
//                   placeholder="Enter your name"
//                 />
//               </Box>
//               <Box>
//                 <Typography variant="subtitle1" gutterBottom>
//                   Last Name
//                 </Typography>
//                 <TextField
//                   variant="outlined"
//                   fullWidth
//                   placeholder="Enter your name"
//                 />
//               </Box>
//             </Box>
//             <Box>
//               <Typography variant="subtitle1" gutterBottom>
//                 Email
//               </Typography>
//               <TextField
//                 variant="outlined"
//                 fullWidth
//                 placeholder="Enter your name"
//               />
//             </Box>
//             <Box>
//               <Typography variant="subtitle1" gutterBottom>
//                 Password
//               </Typography>
//               <TextField
//                 variant="outlined"
//                 fullWidth
//                 placeholder="Enter your name"
//               />
//             </Box>
//             <Box>
//               <Typography variant="subtitle1" gutterBottom>
//                 Confirm Password
//               </Typography>
//               <TextField
//                 variant="outlined"
//                 fullWidth
//                 placeholder="Enter your name"
//               />
//             </Box>
//             <Button variant="contained" sx={{ width: "100%" }}>
//               Continue
//             </Button>
//             <Typography
//               variant="p"
//               component="p"
//               fontSize={"16px"}
//               textAlign={"center"}
//               width={"80%"}
//               fontWeight={400}
//             >
//               Already have an account?{" "}
//               <span
//                 style={{
//                   color: "blue",
//                   cursor: "pointer",
//                   textDecoration: "underline",
//                 }}
//               >
//                 Sign in
//               </span>
//             </Typography>
//           </Box>
//           <Box
//             component="img"
//             src="images/SignUp.svg"
//             sx={{
//               flex: 1,
//               width: "100%",
//             //   height: "650px",
//               maxHeight: "100%",
//               objectFit:'cover',
//               alignSelf:'auto'
//             }}
//           ></Box>
//         </Stack>
//       </Stack>
//     </>
//   );
// }

// import React, { useState } from 'react';
// import {
//   Box,
//   Button,
//   TextField,
//   Typography,
//   Paper,
//   Tabs,
//   Tab,
//   IconButton,
//   InputAdornment,
//   Link,
//   useTheme, // Added useTheme for accessing theme properties
// } from '@mui/material';
// import { Visibility, VisibilityOff } from '@mui/icons-material';

// const SignupPage = () => {
//   const [userType, setUserType] = useState(0); // 0 for User, 1 for Caregiver
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

//   // State for form fields (you'd typically manage these with more robust state management or form libraries)
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');

//   const theme = useTheme(); // Initialize useTheme

//   const handleUserTypeChange = (event, newValue) => {
//     setUserType(newValue);
//   };

//   const handleClickShowPassword = () => {
//     setShowPassword(!showPassword);
//   };

//   const handleMouseDownPassword = (event) => {
//     event.preventDefault();
//   };

//   const handleClickShowConfirmPassword = () => {
//     setShowConfirmPassword(!showConfirmPassword);
//   };

//   const handleMouseDownConfirmPassword = (event) => {
//     event.preventDefault();
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Here you would handle form submission, e.g., send data to an API
//     console.log({
//       userType: userType === 0 ? 'User' : 'Caregiver',
//       firstName,
//       lastName,
//       email,
//       password,
//       confirmPassword,
//     });
//     // Add your signup logic here
//   };

//   return (
//     <Box
//       sx={{
//         minHeight: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         background: `linear-gradient(to bottom right, ${theme.palette.primary.light}, ${theme.palette.success.light})`, // Using theme colors
//         padding: 4,
//       }}
//     >
//       <Paper
//         elevation={3}
//         sx={{
//           display: 'flex',
//           borderRadius: '16px',
//           overflow: 'hidden',
//           width: '100%',
//           maxWidth: 1200,
//           height: 'auto',
//           minHeight: 600,
//         }}
//       >
//         {/* Left Section - Form */}
//         <Box
//           sx={{
//             flex: 1,
//             padding: 4,
//             display: 'flex',
//             flexDirection: 'column',
//             justifyContent: 'center',
//             alignItems: 'center',
//             background: 'white',
//           }}
//         >
//           <Typography variant="h5" component="h1" gutterBottom sx={{ marginBottom: 3 }}>
//             Create Your account
//           </Typography>

//           <Tabs
//             value={userType}
//             onChange={handleUserTypeChange}
//             indicatorColor="primary"
//             textColor="primary"
//             sx={{
//               marginBottom: 4,
//               '& .MuiTabs-indicator': {
//                 height: '100%',
//                 borderRadius: '8px',
//                 zIndex: 0,
//                 backgroundColor: theme.palette.primary.main, // Active tab background
//                 opacity: 0.2, // Make it subtle
//               },
//               '& .MuiTab-root': {
//                 minHeight: 'auto',
//                 padding: '10px 20px',
//                 borderRadius: '8px',
//                 textTransform: 'none',
//                 fontWeight: 'bold',
//                 color: theme.palette.text.primary,
//                 transition: 'color 0.3s',
//                 '&.Mui-selected': {
//                   color: theme.palette.primary.contrastText, // Text color for active tab
//                   zIndex: 1,
//                 },
//               },
//             }}
//           >
//             <Tab label="User" />
//             <Tab label="Caregiver" />
//           </Tabs>

//           <Box
//             component="form"
//             onSubmit={handleSubmit}
//             sx={{
//               width: '100%',
//               maxWidth: 400,
//               display: 'flex',
//               flexDirection: 'column',
//               gap: 2,
//             }}
//           >
//             <Box sx={{ display: 'flex', gap: 2 }}>
//               <TextField
//                 fullWidth
//                 label="First Name"
//                 variant="outlined"
//                 value={firstName}
//                 onChange={(e) => setFirstName(e.target.value)}
//                 placeholder="Enter your First Name"
//               />
//               <TextField
//                 fullWidth
//                 label="Last Name"
//                 variant="outlined"
//                 value={lastName}
//                 onChange={(e) => setLastName(e.target.value)}
//                 placeholder="Enter your Last Name"
//               />
//             </Box>
//             <TextField
//               fullWidth
//               label="Email"
//               type="email"
//               variant="outlined"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Enter your Email"
//             />
//             <TextField
//               fullWidth
//               label="Password"
//               type={showPassword ? 'text' : 'password'}
//               variant="outlined"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="Enter your Password"
//               InputProps={{
//                 endAdornment: (
//                   <InputAdornment position="end">
//                     <IconButton
//                       aria-label="toggle password visibility"
//                       onClick={handleClickShowPassword}
//                       onMouseDown={handleMouseDownPassword}
//                       edge="end"
//                     >
//                       {showPassword ? <VisibilityOff /> : <Visibility />}
//                     </IconButton>
//                   </InputAdornment>
//                 ),
//               }}
//             />
//             <TextField
//               fullWidth
//               label="Confirm Password"
//               type={showConfirmPassword ? 'text' : 'password'}
//               variant="outlined"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               placeholder="Confirm your Password"
//               InputProps={{
//                 endAdornment: (
//                   <InputAdornment position="end">
//                     <IconButton
//                       aria-label="toggle confirm password visibility"
//                       onClick={handleClickShowConfirmPassword}
//                       onMouseDown={handleMouseDownConfirmPassword}
//                       edge="end"
//                     >
//                       {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
//                     </IconButton>
//                   </InputAdornment>
//                 ),
//               }}
//             />
//             <Button
//               type="submit"
//               variant="contained"
//               color="primary"
//               size="large"
//               sx={{
//                 marginTop: 2,
//                 padding: '12px 0',
//                 borderRadius: '8px',
//                 fontWeight: 'bold',
//               }}
//             >
//               Continue
//             </Button>
//             <Typography variant="body2" align="center" sx={{ marginTop: 2 }}>
//               Already have an account?{' '}
//               <Link href="#" onClick={() => console.log('Navigate to login page')} sx={{ textDecoration: 'none', fontWeight: 'bold' }}>
//                 log in
//               </Link>
//             </Typography>
//           </Box>
//         </Box>

//         {/* Right Section - Image */}
//         <Box
//           sx={{
//             flex: 1,
//             display: { xs: 'none', md: 'flex' }, // Hide on small screens
//             backgroundImage: `url(https://i.ibb.co/hL4wz2K/eldercare-image.png)`, // Placeholder image URL (replace with your actual image)
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//             position: 'relative',
//             alignItems: 'flex-start', // Align content to the top
//             justifyContent: 'flex-start', // Align content to the left
//             padding: 2, // Add some padding
//           }}
//         >
//           <Box sx={{
//             display: 'flex',
//             alignItems: 'center',
//             gap: 1,
//             background: 'rgba(255, 255, 255, 0.7)', // Semi-transparent background for the logo
//             borderRadius: '8px',
//             padding: '8px 12px',
//           }}>
//             <img
//               src="https://i.ibb.co/C0r99fS/elder-trust-logo.png" // Placeholder logo URL
//               alt="ElderTrust Logo"
//               style={{ width: 30, height: 30 }}
//             />
//             <Typography variant="h6" sx={{ fontWeight: 'bold', color: theme.palette.primary.main }}>
//               ElderTrust
//             </Typography>
//           </Box>
//         </Box>
//       </Paper>
//     </Box>
//   );
// };

// export default SignupPage;

import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export default function SignUp() {
  const theme = useTheme();
  const [showPassword,setShowPassword]=useState(false);
  const[showConfirmPassword,setShowConfirmPassword]=useState(false)
  const [activeRole, setActiveRole] = useState("user");

//   const [bgColor,setBgColor]=useState(false);
  const handleTogglePassword = () => setShowPassword((prev) => !prev);
  const handleToggleConfirmPassword=()=>setShowConfirmPassword((prev)=>!prev);
//   const handelBgColor=()=>{setBgColor(prev=>!prev)}
  return (
    <Stack
      bgcolor="gray"
      alignItems="center"
      justifyContent="center"
      sx={{
        minHeight: "100vh",
        color: theme.palette.text.primary,
        backgroundImage: "linear-gradient(to bottom, #217860,#AFE9D9)",
      }}
    >
      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent="center"
        width={{xs:'90%',md:'70%'}}
        // border="2px solid green"
        bgcolor="white"
        borderRadius={5}
        overflow="hidden"
        sx={{ maxHeight: "92vh", }}
        // my={6}
      >
        <Stack flex={1} spacing={3} px={5} py={6} justifyContent="center">
          <Typography variant="h5" textAlign="center">
            Create Your Account
          </Typography>

          <Stack direction="row" spacing={2} justifyContent="center">
            <Button
              variant="text"
              sx={{
                borderBottom: "2px solid black",
                flex: 1,
                color: theme.palette.text.primary,
                backgroundColor:activeRole=='user'?theme.palette.background.default:'white',
                borderTopLeftRadius:'16px',
                borderTopRightRadius:'16px'
              }}
             onClick={() => setActiveRole("user")}
            >
              User
            </Button>
            <Button
              variant="text"
              sx={{
                borderBottom: "2px solid black",
                flex: 1,
                color: theme.palette.text.primary,
                  backgroundColor:activeRole=='Caregiver'?theme.palette.background.default:'white',
                   borderTopLeftRadius:'16px',
                borderTopRightRadius:'16px'
              }}
              onClick={()=>{setActiveRole('Caregiver')}}
            >
              Caregiver
            </Button>
          </Stack>

          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <Box flex={1}>
              <Typography variant="subtitle1">First Name</Typography>
              <TextField
                variant="outlined"
                fullWidth
                placeholder="Enter your name"
                sx={{
                  "& .MuiInputBase-input::placeholder": {
                    color: theme.palette.text.secondary,
                    // opacity: 1,
                  },
                  "& .MuiInputBase-root": {
                    height: 45, 
                  },
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "16px",
                  },
                }}
              
              />
            </Box>
            <Box flex={1}>
              <Typography variant="subtitle1">Last Name</Typography>
              <TextField
                variant="outlined"
                fullWidth
                placeholder="Enter your name"
                sx={{
                  "& .MuiInputBase-input::placeholder": {
                    color: theme.palette.text.secondary,
                    // opacity: 1,
                  },
                  "& .MuiInputBase-root": {
                    height: 45, 
                  },
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "16px", 
                  },
                }}
              />
            </Box>
          </Stack>

          <Box>
            <Typography variant="subtitle1">Email</Typography>
            <TextField
              variant="outlined"
              fullWidth
              placeholder="Enter your email"
              sx={{
                "& .MuiInputBase-input::placeholder": {
                  color: theme.palette.text.secondary,
                  // opacity: 1,
                },
                "& .MuiInputBase-root": {
                  height: 45,
                },
                "& .MuiOutlinedInput-root": {
                  borderRadius: "16px", 
                },
              }}
            />
          </Box>

          <Box>
            <Typography variant="subtitle1">Password</Typography>
            <TextField
              variant="outlined"
              fullWidth
              type={showPassword?'text':'password'}
              placeholder="Enter your password"
              sx={{
                "& .MuiInputBase-input::placeholder": {
                  color: theme.palette.text.secondary,
                  // opacity: 1,
                },
                "& .MuiInputBase-root": {
                  height: 45, 
                },
                "& .MuiOutlinedInput-root": {
                  borderRadius: "16px", 
                },
                
              }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handleTogglePassword} edge="end">
                        {showPassword ?  <Visibility />:<VisibilityOff /> }
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
            />
          </Box>

          <Box>
            <Typography variant="subtitle1">Confirm Password</Typography>
            <TextField
              variant="outlined"
              fullWidth
              type={showConfirmPassword?'text':'password'}
              placeholder="Confirm your password"
              sx={{
                "& .MuiInputBase-input::placeholder": {
                  color: theme.palette.text.secondary,
                  // opacity: 1,
                },
                "& .MuiInputBase-root": {
                  height: 45, 
                },
                "& .MuiOutlinedInput-root": {
                  borderRadius: "16px",
                },
              }}
              InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handleToggleConfirmPassword} edge="end">
                        {showConfirmPassword ?  <Visibility />:<VisibilityOff /> }
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
            />
          </Box>

          <Button
            variant="contained"
            sx={{
              borderRadius: "16px",
              width: "100%",
              py: 1.5,
              bgcolor: theme.palette.primary,
            }}
          >
            Continue
          </Button>

          <Typography fontSize="16px" textAlign="center" fontWeight={400}>
            Already have an account?{" "}
            <span
              style={{
                color: theme.palette.text.primary,
                cursor: "pointer",
                textDecoration: "underline",
                fontWeight: "bold",
              }}
            >
              Sign in
            </span>
          </Typography>
        </Stack>

        <Box
          component="img"
          src="images/sign_up_img.svg"
          //   sx={{
          //     flex: 1,
          //     width: "100%",
          //     objectFit: "cover",
          //   }}
          //          sx={{
          //     flex: 1,
          //     backgroundImage: "url('images/SignUp.svg')",
          //     backgroundSize: "cover",
          //     backgroundPosition: "center",
          //     backgroundRepeat: "no-repeat",
          //     minHeight: { xs: "200px", md: "100%" },
          //   }}
          sx={{
            flex: 1,
            width: "100%",
            height: "auto",
            maxHeight: { xs: "250px", md: "100%" },
            objectFit: "contain",
            alignSelf: "stretch",
            display:{xs:'none',md:'block'}
          }}
        />
      </Stack>
    </Stack>
  );
}
