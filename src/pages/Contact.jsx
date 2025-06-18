// src/pages/Contact.jsx

import React from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  Paper,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import contactImage from "../assets/images/contact.png";

const Contact = () => {
  return (
    <Box sx={{ padding: 4, backgroundColor: "#f6f6f6" }}>
      {/* العنوان الرئيسي */}
      <Typography variant="h4" align="center" fontWeight="bold" mb={2}>
        Get In Touch
      </Typography>

      {/* النص التوضيحي */}
      <Typography
        align="center"
        color="textSecondary"
        maxWidth="600px"
        mx="auto"
        mb={4}
      >
        Connect with us for quick, reliable assistance. Our team is committed to
        supporting your needs with care, efficiency, and a personal touch —
        your comfort and peace of mind matter to us.
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {/* اليسار: معلومات التواصل على صورة بكامل حجمها */}
        <Grid item xs={12} md={4}>
          <Box sx={{ position: "relative", width: "100%", overflow: "hidden" }}>
            {/* الصورة نفسها */}
            <img
              src={contactImage}
              alt="Contact Visual"
              style={{ width: "100%", height: "auto", display: "block" }}
            />

            {/* الكلام فوق الصورة */}
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
              }}
            >
              <Box>
                <Typography variant="h6" gutterBottom>
                  Contact Information
                </Typography>
                <Typography variant="body2" mb={3}>
                  Find all the ways to reach us — we’re here to answer your questions and
                  provide the support you need.
                </Typography>

                <Box display="flex" alignItems="center" mb={2}>
                  <PhoneIcon sx={{ mr: 1 }} />
                  <Typography>(202) 552-0126</Typography>
                </Box>

                <Box display="flex" alignItems="center" mb={2}>
                  <EmailIcon sx={{ mr: 1 }} />
                  <Typography>ElderTrust@gmail.com</Typography>
                </Box>

                <Box display="flex" alignItems="center">
                  <LocationOnIcon sx={{ mr: 1 }} />
                  <Typography>Parker Rd. Allentown, Cairo 31134</Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>

        {/* اليمين: الفورم */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ padding: 3 }}>
            <Typography variant="h6" mb={2} fontWeight="bold" color="#1d5c51">
              Contact US
            </Typography>
            <Typography variant="body2" mb={3}>
              We will answer your questions and problems
            </Typography>

            <Box component="form" display="flex" flexDirection="column" gap={2}>
              <TextField
                label="Name"
                variant="outlined"
                fullWidth
                placeholder="Enter your Name"
              />
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                placeholder="Enter your Email"
              />
              <TextField
                label="Message"
                variant="outlined"
                multiline
                rows={4}
                fullWidth
                placeholder="Enter your Message"
              />
              <Button
                variant="contained"
                sx={{ backgroundColor: "#1d5c51", mt: 1 }}
              >
                Submit
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;
