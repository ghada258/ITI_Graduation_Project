import {
  Box,
  Typography,
  useTheme,
  Button,
  InputBase,
  Paper,
} from "@mui/material";
import assistantImage from "../assets/images/assistantMain.png";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import SearchIcon from "@mui/icons-material/Search";
import ProfileCard from "../components/ProfileCard";
import { Pagination } from "@mui/material";
const AssistantsSection = () => {
  const theme = useTheme();

  return (
    <>
   
      <Box
        sx={{
          width: "100vw",
          height: "70vh",
          backgroundImage: `url(${assistantImage})`,
          backgroundColor: "#fff",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          p: 0,
          m: 0,
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            color: theme.palette.text.primary,
            fontFamily: theme.typography.fontFamily,
            maxWidth: "500px",
            px: { xs: 2, sm: 5 },
            mt: { xs: "10%", sm: "5%" },
          }}
        >
          <Typography
            fontWeight={500}
            mb={2}
            sx={{
              fontSize: {
                xs: "1.4rem",
                sm: "2rem",
                md: "2.4rem",
                lg: "2.8rem",
              },
            }}
          >
            Reliable Assistants for Everyday Support
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: {
                xs: "1.1rem",
                sm: "1.3rem",
                md: "1.2rem",
              },
              color: theme.palette.neutral.mainPrimaryGray,
              fontFamily: theme.typography.fontFamily,
            }}
          >
            Our assistants offer trusted care and support to help you or your
            loved ones stay independent and at ease.
          </Typography>
        </Box>
      </Box>

      {/*    search   */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
          px: { xs: 2, sm: 5 },
          py: 3,
          flexWrap: "wrap",
        }}
      >
        {/*  filter */}
        <Button
          variant="outlined"
          startIcon={<FilterAltIcon />}
          sx={{
            borderRadius: "25px",
            borderColor: "#A5D1C5",
            color: "#1d5c51",
            px: 2,
            textTransform: "none",
            backgroundColor: "#EBF7F4",
            "&:hover": {
              backgroundColor: "#d8f0ea",
              borderColor: "#A5D1C5",
            },
          }}
        >
          Filter
        </Button>

        {/*  search */}
        <Paper
          component="form"
          sx={{
            backgroundColor: "#fff",
            display: "flex",
            alignItems: "center",
            borderRadius: "25px",
            pl: 2,
            pr: 3,
            py: 0.5,
            width: "100%",
            maxWidth: 700, 
            boxShadow: "none",
            border: "1px solid #A5D1C5",
          }}
        >
          <SearchIcon sx={{ color: "#1d5c51", mr: 1 }} />
          <InputBase
            placeholder="Search For Products"
            fullWidth
            sx={{
              fontFamily: "Nunito",
              fontSize: "0.95rem",
            }}
          />
        </Paper>
      </Box>
      <Box
  sx={{
    display: "flex",
    flexWrap: "nowrap",
    justifyContent: "center",
    gap: 1,
    px: { xs: 2, sm: 5 },
    pb: 5,
  }}
>
  {[...Array(4)].map((_, index) => (
    <ProfileCard
      key={index}
      role="Elderly Assistant"
      rating={4.5}
      description="Helping with daily life activities"
      location="Cairo, Egypt"
      imageUrl=""
    />
  ))}
</Box>
      <Box
  sx={{
    display: "flex",
    flexWrap: "nowrap",
    justifyContent: "center",
    gap: 1,
    px: { xs: 2, sm: 5 },
    pb: 5,
  }}
>
  {[...Array(4)].map((_, index) => (
    <ProfileCard
      key={index}
      role="Elderly Assistant"
      rating={4.5}
      description="Helping with daily life activities"
      location="Cairo, Egypt"
      imageUrl=""
    />
  ))}
</Box>
      <Box
  sx={{
    display: "flex",
    flexWrap: "nowrap",
    justifyContent: "center",
    gap: 1,
    px: { xs: 2, sm: 5 },
    pb: 5,
  }}
>
  {[...Array(4)].map((_, index) => (
    <ProfileCard
      key={index}
      role="Elderly Assistant"
      rating={4.5}
      description="Helping with daily life activities"
      location="Cairo, Egypt"
      imageUrl=""
    />
  ))}
</Box>


<Box sx={{ display: "flex", justifyContent: "center", mt: 3, pb: 5 }}>
  <Pagination
    count={5} 
    page={1} 
    onChange={() => {}} 
    variant="outlined"
    // color="theme.palette.text.primary"
    sx={{ color: theme.palette.text.primary }}
    shape="rounded"
  />
</Box>

    </>
  );
};

export default AssistantsSection;
