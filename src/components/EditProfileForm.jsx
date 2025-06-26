// src/components/EditProfileForm.jsx
import {
  Box,
  Button,
  TextField,
  MenuItem,
  Select,
  FormControl,
  Grid,
  Avatar,
  Typography,
  Stack,
  Divider,
  InputAdornment,
  IconButton,
  Menu,
  Avatar as FlagAvatar,
} from "@mui/material";
import { useState } from "react";

const countries = [
  { name: "Egypt", code: "+20", flag: "https://flagcdn.com/w40/eg.png" },
  { name: "Saudi Arabia", code: "+966", flag: "https://flagcdn.com/w40/sa.png" },
  { name: "UAE", code: "+971", flag: "https://flagcdn.com/w40/ae.png" },
];

const EditProfileForm = () => {
  const [formData, setFormData] = useState({
    firstName: "Mohamed",
    lastName: "saad",
    email: "Mohamed@gmail.com",
    gender: "Male",
    birthday: "1999-06-01",
    phone: "01026784102",
    country: "Egypt",
    city: "Ismailia",
    image: null,
  });

  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);

  const handleChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setFormData({ ...formData, image: imageUrl });
    }
  };

  const handleImageRemove = () => {
    setFormData({ ...formData, image: null });
  };

  const handleClickFlag = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = (country) => {
    if (country) {
      setSelectedCountry(country);
    }
    setAnchorEl(null);
  };

  return (
    <Box>
      {/* صورة المستخدم + أزرار التحميل */}
      <Box
        display="flex"
        alignItems="center"
        mb={4}
        gap={3}
        sx={{ borderBottom: "1px solid #ccc", pb: 2 }}
      >
        <Avatar
          src={formData.image || "/default-avatar.png"}
          sx={{ width: 80, height: 80 }}
        />
        <Stack direction="row" spacing={2}>
          <Button
            component="label"
            variant="contained"
            sx={{ textTransform: "none", borderRadius: 2 }}
          >
            Upload
            <input hidden type="file" accept="image/*" onChange={handleImageChange} />
          </Button>
          <Button
            variant="outlined"
            onClick={handleImageRemove}
            sx={{ textTransform: "none", borderRadius: 2 }}
          >
            Remove
          </Button>
        </Stack>
      </Box>

      <Grid container spacing={3}>
        {/* First Name & Last Name */}
        <Grid item xs={12}>
          <Box sx={{ borderBottom: "1px solid #ccc", pb: 3, mb: 3 }}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle1" gutterBottom fontWeight="bold">
                  First Name
                </Typography>
                <TextField
                  fullWidth
                  sx={{ minWidth: "250px" }}
                  InputProps={{
                    sx: {
                      height: "40px",
                      borderRadius: 3
                    },
                  }}
                  value={formData.firstName}
                  onChange={handleChange("firstName")}
                  placeholder="Enter your first name"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle1" gutterBottom fontWeight="bold" >
                  Last Name
                </Typography>
                <TextField
                  fullWidth
                  sx={{ minWidth: "250px" }}
                  InputProps={{
                    sx: {
                      height: "40px",
                      borderRadius: 3
                    },
                  }}
                  value={formData.lastName}
                  onChange={handleChange("lastName")}
                  placeholder="Enter your last name"
                  variant="outlined"
                />
              </Grid>
            </Grid>
          </Box>
        </Grid>

        {/* Email & Gender */}
        <Grid item xs={12}>
          <Box sx={{ borderBottom: "1px solid #ccc", pb: 3, mb: 3 }}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle1" gutterBottom fontWeight="bold">
                  Email
                </Typography>
                <TextField
                  fullWidth
                  sx={{ minWidth: "250px" }}
                  InputProps={{
                    sx: {
                      height: "40px",
                      borderRadius: 3
                    },
                  }}
                  value={formData.email}
                  onChange={handleChange("email")}
                  placeholder="Enter your email"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle1" gutterBottom fontWeight="bold">
                  Gender
                </Typography>
                <FormControl fullWidth sx={{ minWidth: "250px" }}>
                  <Select
                    value={formData.gender}
                    onChange={handleChange("gender")}
                    variant="outlined"
                    sx={{
                      height: "40px",
                      borderRadius: 3,
                      ".MuiSelect-select": {
                        display: "flex",
                        alignItems: "center",
                      },
                    }}
                  >
                    <MenuItem value="Male">Male</MenuItem>
                    <MenuItem value="Female">Female</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </Box>
        </Grid>

        {/* Birthday & Phone */}
        <Grid item xs={12}>
          <Box sx={{ borderBottom: "1px solid #ccc", pb: 3, mb: 3 }}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle1" gutterBottom fontWeight="bold">
                  Birthday
                </Typography>
                <TextField
                  fullWidth
                  type="date"
                  value={formData.birthday}
                  onChange={handleChange("birthday")}
                  variant="outlined"
                  InputLabelProps={{ shrink: true }}
                  sx={{
                    minWidth: "250px",
                    height: "40px",
                    "& .MuiInputBase-root": {
                      height: "40px",
                      borderRadius: 3,
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
  <Typography variant="subtitle1" gutterBottom fontWeight="bold">
    Phone Number
  </Typography>
  <TextField
    fullWidth
    value={formData.phone}
    onChange={handleChange("phone")}
    placeholder="Enter your phone number"
    variant="outlined"
    sx={{
      minWidth: "250px",
      "& .MuiInputBase-root": {
        height: "40px",
        borderRadius: 3,
      },
    }}
    InputProps={{
      startAdornment: (
        <InputAdornment position="start">
          <Box
            onClick={handleClickFlag}
            sx={{
            //   backgroundColor: "#ecf8f4", // لون الخلفية
              pt: 0.8,
               pb: 0.8,
              pl:-5,
              borderRadius: 2,
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <FlagAvatar
              src={selectedCountry.flag}
              alt={selectedCountry.name}
              sx={{ width: 24, height: 24 }}
            />
          </Box>
        </InputAdornment>
      ),
    }}
  />
  <Menu
    anchorEl={anchorEl}
    open={Boolean(anchorEl)}
    onClose={() => handleCloseMenu()}
  >
    {countries.map((country) => (
      <MenuItem
        key={country.code}
        onClick={() => handleCloseMenu(country)}
      >
        <FlagAvatar
          src={country.flag}
          alt={country.name}
          sx={{ width: 24, height: 24, mr: 1 }}
        />
        {country.name} ({country.code})
      </MenuItem>
    ))}
  </Menu>
</Grid>

            </Grid>
          </Box>
        </Grid>

        {/* Country & City */}
        <Grid item xs={12}>
          <Box sx={{ borderBottom: "1px solid #ccc", pb: 3, mb: 3 }}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle1" gutterBottom fontWeight="bold">
                  Country
                </Typography>
                <FormControl
                  fullWidth
                  sx={{
                    minWidth: "250px",
                    height: "40px",
                    "& .MuiInputBase-root": {
                      height: "40px",
                      borderRadius: 3,
                    },
                  }}
                >
                  <Select
                    value={formData.country}
                    onChange={handleChange("country")}
                    variant="outlined"
                    
                  >
                    <MenuItem value="Egypt">Egypt</MenuItem>
                    <MenuItem value="Saudi Arabia">Saudi Arabia</MenuItem>
                    <MenuItem value="UAE">UAE</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle1" gutterBottom fontWeight="bold">
                  City
                </Typography>
                <TextField
                  fullWidth
                  value={formData.city}
                  onChange={handleChange("city")}
                  placeholder="Enter your city"
                  variant="outlined"
                  sx={{
                    minWidth: "250px",
                    height: "40px",
                    "& .MuiInputBase-root": {
                      height: "40px",
                      borderRadius: 3,
                    },
                  }}
                />
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>

      {/* Actions */}
      <Box textAlign="right" mt={4}>
        <Button variant="outlined" sx={{ borderRadius: 2, mr: 2, textTransform: "none" }}>
          Cancel
        </Button>
        <Button variant="contained" sx={{ borderRadius: 2, textTransform: "none" }}>
          Save Changes
        </Button>
      </Box>
       
    </Box>
  );
};

export default EditProfileForm;
