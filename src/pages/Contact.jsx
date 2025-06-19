
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  Paper,
  useTheme,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import contactImage from "../assets/images/ContactUs.png";

const Contact = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        background: "linear-gradient(to bottom, #f6f6f6 50%, white 50%)",
        py: 6,
        px: 2,
      }}
    >
      <Typography
        variant="h4"
        align="center"
        sx={{
          color: theme.palette.text.primary,
          fontFamily: theme.poppins?.fontFamily || "Poppins",
          fontWeight: "bold",
          mb: 2,
        }}
      >
        Get In Touch
      </Typography>

      <Typography
        align="center"
        color="textSecondary"
        maxWidth="600px"
        mx="auto"
        mb={4}
      >
        Connect with us for quick, reliable assistance. Our team is committed to
        supporting your needs with care, efficiency, and a personal touch — your
        comfort and peace of mind matter to us.
      </Typography>

      {/* البوكس الأبيض */}
      <Box
        sx={{
          backgroundColor: "#fff",
          borderRadius: "16px",
          boxShadow: "0px 4px 20px rgba(0,0,0,0.1)",
          maxWidth: 900,
          width: "95%",
          mx: "auto",
          px: 4,
          py: 6,
        }}
      >
        <Grid
          container
          spacing={3}
          justifyContent="center"
          alignItems="center"
        >
          {/* Contact Information */}
          <Grid item xs={12} md={6}>
            <Box sx={{ position: "relative", width: "100%", height: "100%" }}>
              <img
                src={contactImage}
                alt="Contact Visual"
                style={{
                  width: "90%",
                  height: "80%",
                  objectFit: "cover",
                  borderRadius: 12,
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  color: "#fff",
                  padding: 3,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  borderRadius: 2,
                }}
              >
                <Box>
                  <Typography variant="h4" sx={{ mt: 3 }} gutterBottom>
                    Contact Information
                  </Typography>
                  <Typography variant="body1" sx={{ m: 1 }}>
                    Find all the ways to reach us — we’re here to answer your
                    questions and provide the support you need.
                  </Typography>

                  <Box display="flex" alignItems="center" mb={2}>
                    <Box
                      sx={{
                        backgroundColor: "#fff",
                        borderRadius: "10%",
                        padding: "6px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        m: 1,
                        mt: 5,
                      }}
                    >
                      <PhoneIcon sx={{ color: "#1d5c51" }} />
                    </Box>
                    <Typography sx={{ mt: 4 }}>(202) 552-0126</Typography>
                  </Box>

                  <Box display="flex" alignItems="center" mb={2}>
                    <Box
                      sx={{
                        backgroundColor: "#fff",
                        borderRadius: "10%",
                        padding: "6px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        m: 1,
                      }}
                    >
                      <EmailIcon sx={{ color: "#1d5c51" }} />
                    </Box>
                    <Typography>ElderTrust@gmail.com</Typography>
                  </Box>

                  <Box display="flex" alignItems="center">
                    <Box
                      sx={{
                        backgroundColor: "#fff",
                        borderRadius: "10%",
                        padding: "6px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        m: 1,
                      }}
                    >
                      <LocationOnIcon sx={{ color: "#1d5c51" }} />
                    </Box>
                    <Typography>Parker Rd. Allentown, Cairo 31134</Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>

          {/* Contact Form */}
          <Grid item xs={12} md={6}>
            <Paper
              elevation={0}
              sx={{
                height: "100%",
                width: "100%",
                p: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography
                variant="h4"
                fontWeight="bold"
                color="#1d5c51"
                align="center"
              >
                Contact Us
              </Typography>
              <Typography variant="body1" mb={3} align="center">
                We will answer your questions and problems
              </Typography>

              <Box maxWidth="500px" width="100%" mx="auto">
                <Box
                  component="form"
                  display="flex"
                  flexDirection="column"
                  gap={2}
                >
                  <Box>
                    <Typography variant="subtitle1">Name</Typography>
                    <TextField
                      variant="outlined"
                      fullWidth
                      placeholder="Enter your name"
                      sx={{
                        "& .MuiInputBase-input::placeholder": {
                          color: theme.palette.text.secondary,
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
                    <Typography variant="subtitle1">Email</Typography>
                    <TextField
                      variant="outlined"
                      fullWidth
                      placeholder="Enter your email"
                      sx={{
                        "& .MuiInputBase-input::placeholder": {
                          color: theme.palette.text.secondary,
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
                    <Typography variant="subtitle1">Message</Typography>
                    <TextField
                      variant="outlined"
                      fullWidth
                      multiline
                      rows={4}
                      placeholder="Enter your message"
                      sx={{
                        "& .MuiInputBase-input::placeholder": {
                          color: theme.palette.text.secondary,
                        },
                        "& .MuiOutlinedInput-root": {
                          borderRadius: "16px",
                        },
                      }}
                    />
                  </Box>

                  <Button
                    variant="contained"
                    sx={{ backgroundColor: "#1d5c51", mt: 5 }}
                  >
                    Submit
                  </Button>
                </Box>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Contact;
