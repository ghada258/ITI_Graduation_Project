// // src/components/UserProfileCard.jsx
// import { Box, Typography, Button } from "@mui/material";
// import EmailIcon from "@mui/icons-material/Email";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
// import WcIcon from "@mui/icons-material/Wc";
// import PersonIcon from "@mui/icons-material/Person";
// import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
// import MaleIcon from "@mui/icons-material/Male";
// import PublicIcon from "@mui/icons-material/Public";

// const UserProfileCard = () => {
//   return (
//     <Box
//       sx={{
//         width: 300,
//         borderRadius: 3,
//         backgroundColor: "#fff",
//         boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
//         display: "flex",
//         flexDirection: "column",
//       }}
//     >
//       {/* الصورة بدون أي padding */}
//       <Box
//         component="img"
//         src="https://img.freepik.com/free-photo/close-up-photo-young-successful-business-man-black-suit_171337-9509.jpg?uid=R187949558&ga=GA1.1.2002893534.1734957143&semt=ais_items_boosted&w=740"
//         alt="Ahmed Saad"
//         sx={{
//           width: "100%",
//           height: "300px",
//           objectFit: "cover",
//           borderTopLeftRadius: 12,
//           borderTopRightRadius: 12,
//         }}
//       />

//       {/* البيانات بمسافة داخلية */}
//       <Box
//         sx={{
//           p: 2,
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           gap: 1.5,
//         }}
//       >
//         <Typography variant="h6" fontWeight="bold">
//           Ahmed Saad
//         </Typography>
//         <Typography variant="body1" fontWeight="bold" >
//           User
//         </Typography>

//         <Box sx={{ width: "100%", mt: 1 }}>
// <Box display="flex" alignItems="center" gap={1} mb={1} borderBottom={1} pb={0.5}>
//   <PersonOutlineIcon fontSize="small" />
// <Typography fontWeight="bold" fontSize={20}>
//   Personal details
// </Typography>

// </Box>
// {/* 
//           <Box display="flex" alignItems="center" gap={1} mb={1}>
//             <WcIcon fontSize="small" />
//             <Typography fontSize={14}>Gender: Male</Typography>
//           </Box> */}

// <Box display="flex" alignItems="center" mb={0.1}>
//   <Box
//     sx={{
//       backgroundColor: "#DFFDF5",
//       borderRadius: "10%",
//       padding: "4px",
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "center",
//       m: 0.5,
//       border: "1px solid #ccc",
//       width: "30px",
//       height: "30px",
//     }}
//   >
//     <MaleIcon
//       sx={{
//         color: "#1d5c51",
//         fontSize: 18,
//         transform: "rotate(135deg)",
//       }}
//     />
//   </Box>
//   <Typography fontSize={14} fontWeight="bold">Gender:</Typography>
//     <Typography fontSize={14} >Male</Typography>

// </Box>

// <Box display="flex" alignItems="center" mb={0.1}>
//   <Box
//     sx={{
//       backgroundColor: "#DFFDF5",
//       borderRadius: "10%",
//       padding: "4px",
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "center",
//       m: 0.5,
//       border: "1px solid #ccc",
//       width: "30px",
//       height: "30px",
//     }}
//   >
//     <PublicIcon
//       sx={{
//         color: "#1d5c51",
//         fontSize: 18,
//       }}
//     />
//   </Box>
//   <Typography fontSize={14} fontWeight="bold">Country:</Typography>
//     <Typography fontSize={14} >Egypt</Typography>

// </Box>
// <Box display="flex" alignItems="center" mb={0.1}>
//   <Box
//     sx={{
//       backgroundColor: "#DFFDF5",
//       borderRadius: "10%",
//       padding: "4px",
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "center",
//       m: 0.5,
//       border: "1px solid #ccc",
//       width: "30px",
//       height: "30px",
//     }}
//   >
//     <LocationOnIcon
//       sx={{
//         color: "#1d5c51",
//         fontSize: 18,
//       }}
//     />
//   </Box>
//   <Typography fontSize={14} fontWeight="bold">City:</Typography>
//     <Typography fontSize={14} >Cairo</Typography>

// </Box>
// <Box display="flex" alignItems="center" mb={0.1}>
//   <Box
//     sx={{
//       backgroundColor: "#DFFDF5",
//       borderRadius: "10%",
//       padding: "4px",
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "center",
//       m: 0.5,
//       border: "1px solid #ccc",
//       width: "30px",
//       height: "30px",
//     }}
//   >
//     <EmailIcon
//       sx={{
//         color: "#1d5c51",
//         fontSize: 18,
//       }}
//     />
//   </Box>
//   <Typography fontSize={14} fontWeight="bold">Email:</Typography>
//     <Typography fontSize={14} >Ahmed@gmail.com</Typography>

// </Box>
//         </Box>

//         <Button
//           variant="contained"
//           fullWidth
//           sx={{
//             mt: 2,
//             backgroundColor: "#1d5c51",
//             color: "#fff",
//             borderRadius: 4,
//             textTransform: "none",
//             "&:hover": {
//               backgroundColor: "#174c42",
//             },
//           }}
//         >
//           Edit Profile
//         </Button>
//       </Box>
//     </Box>
//   );
// };

// export default UserProfileCard;
import { Box, Typography, Button } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import MaleIcon from "@mui/icons-material/Male";
import PublicIcon from "@mui/icons-material/Public";

const UserProfileCard = ({ onEditClick }) => {
  return (
    <Box
      sx={{
        width: 300,
        borderRadius: 3,
        backgroundColor: "#fff",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        component="img"
        src="https://img.freepik.com/free-photo/close-up-photo-young-successful-business-man-black-suit_171337-9509.jpg"
        alt="Ahmed Saad"
        sx={{
          width: "100%",
          height: "300px",
          objectFit: "cover",
          borderTopLeftRadius: 12,
          borderTopRightRadius: 12,
        }}
      />

      <Box
        sx={{
          p: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 1.5,
        }}
      >
        <Typography variant="h6" fontWeight="bold">
          Ahmed Saad
        </Typography>
        <Typography variant="body1" fontWeight="bold">User</Typography>

        <Box sx={{ width: "100%", mt: 1 }}>
          <Box display="flex" alignItems="center" gap={1} mb={1} borderBottom={1} pb={0.5}>
            <PersonOutlineIcon fontSize="small" />
            <Typography fontWeight="bold" fontSize={20}>Personal details</Typography>
          </Box>

          <Box display="flex" alignItems="center" mb={0.5}>
            <Box sx={iconStyle}><MaleIcon sx={iconInnerStyle} /></Box>
            <Typography fontSize={14} fontWeight="bold">Gender:</Typography>
            <Typography fontSize={14}>Male</Typography>
          </Box>

          <Box display="flex" alignItems="center" mb={0.5}>
            <Box sx={iconStyle}><PublicIcon sx={iconInnerStyle} /></Box>
            <Typography fontSize={14} fontWeight="bold">Country:</Typography>
            <Typography fontSize={14}>Egypt</Typography>
          </Box>

          <Box display="flex" alignItems="center" mb={0.5}>
            <Box sx={iconStyle}><LocationOnIcon sx={iconInnerStyle} /></Box>
            <Typography fontSize={14} fontWeight="bold">City:</Typography>
            <Typography fontSize={14}>Cairo</Typography>
          </Box>

          <Box display="flex" alignItems="center" mb={0.5}>
            <Box sx={iconStyle}><EmailIcon sx={iconInnerStyle} /></Box>
            <Typography fontSize={14} fontWeight="bold">Email:</Typography>
            <Typography fontSize={14}>Ahmed@gmail.com</Typography>
          </Box>
        </Box>

        <Button
          variant="contained"
          fullWidth
          onClick={onEditClick}
          sx={{
            mt: 2,
            backgroundColor: "#1d5c51",
            color: "#fff",
            borderRadius: 4,
            textTransform: "none",
            "&:hover": { backgroundColor: "#174c42" },
          }}
        >
          Edit Profile
        </Button>
      </Box>
    </Box>
  );
};

const iconStyle = {
  backgroundColor: "#DFFDF5",
  borderRadius: "10%",
  padding: "4px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  m: 0.5,
  border: "1px solid #ccc",
  width: "30px",
  height: "30px",
};

const iconInnerStyle = {
  color: "#1d5c51",
  fontSize: 18,
};

export default UserProfileCard;
