import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Chip,
  Box,
  Button,
  Rating,
  useTheme,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ElderlyIcon from "@mui/icons-material/Elderly";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";

const ProfileCard = ({
  name,
  role,
  rating,
  description,
  location,
  imageUrl,
}) => {
  const theme = useTheme();

  return (
    <Card
      sx={{
        width: 300,
        borderRadius: 3,
        border: "1px solid #ccc",
        boxShadow: "0px 2px 8px rgba(0,0,0,0.1)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <CardMedia
        component="img"
        height="200"
        image={
          imageUrl ||
          "https://img.freepik.com/free-photo/portrait-smiling-blonde-woman_23-2148316635.jpg?uid=R187949558&ga=GA1.1.2002893534.1734957143&semt=ais_hybrid&w=740"
        } // static default
        alt={name || "Default Name"}
      />

      <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: 1 }}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Chip
              label={role || "Care Assistant"}
              color="#EBFAF5"
              size="small"
            />
            <Box display="flex" alignItems="center">
              <Rating
                value={rating || 4.5}
                precision={0.5}
                readOnly
                size="small"
              />
              <Typography variant="body2" ml={0.5}>
                {rating || 4.5}
              </Typography>
            </Box>
          </Box>

          <Typography variant="h6" fontWeight="bold" mt={1}>
            {name || "Asma Mohammed"}
          </Typography>

          <Box display="flex" alignItems="center" mt={0.5}>
            <WorkOutlineIcon
              fontSize="small"
              sx={{
                color: theme.palette.text.primary,
                mr: 0.5,
              }}
            />{" "}
            <Typography variant="body2">
              {description || "Helps elders with daily needs."}
            </Typography>
          </Box>

          <Box display="flex" alignItems="center" mt={0.5}>
            <LocationOnIcon
              fontSize="small"
              sx={{
                mr: 0.5,
                color: theme.palette.text.primary,
              }}
            />
            <Typography variant="body2">
              {location || "Cairo, Egypt"}
            </Typography>
          </Box>
        </CardContent>

        <Button
          variant="contained"
          fullWidth
          sx={{
            borderRadius: 0,
            backgroundColor: "#87DEC6",
            color: theme.palette.text.primary,
            fontWeight: "normal",
            textTransform: "none",
            "&:hover": {
              backgroundColor: theme.palette.text.primary,
              color: "#fff",
            },
          }}
        >
          More Details
        </Button>
      </Box>
    </Card>
  );
};

export default ProfileCard;
