// @mui material components
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiButton from "components/VuiButton";

// Icons
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";

import { useState } from "react";

function ProfileEditForm({ toggleEditMode }) {
  const [formData, setFormData] = useState({
    fullName: "Pedro Penduko",
    email: "hrofficer@company.com",
    phone: "+63 929 404 2926",
    location: "Iligan, PH",
    about: "HR Officer with 5+ years of experience specializing in managing UI/UX design and development. Passionate about creating intuitive and accessible digital experiences."
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
    toggleEditMode();
  };

  return (
    <form onSubmit={handleSubmit}>
      <VuiBox>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <VuiBox textAlign="center">
              <Avatar
                src="/images/avatar/1.jpg"
                alt="Profile Image"
                sx={{ width: 120, height: 120, margin: "0 auto", mb: 1 }}
              />
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="label"
                sx={{ mt: 1 }}
              >
                <input hidden accept="image/*" type="file" />
                <PhotoCameraIcon />
              </IconButton>
              <VuiTypography variant="caption" color="text">
                Change photo
              </VuiTypography>
            </VuiBox>
          </Grid>
          <Grid item xs={12} md={8}>
            <VuiBox>
              <VuiTypography variant="h6" color="white" mb={2}>
                Personal Information
              </VuiTypography>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <VuiBox mb={2}>
                    <VuiTypography variant="caption" color="text" fontWeight="medium" mb={1}>
                      Full Name
                    </VuiTypography>
                    <TextField
                      fullWidth
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      variant="outlined"
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          color: "white",
                          "& fieldset": {
                            borderColor: "rgba(255, 255, 255, 0.2)",
                          },
                          "&:hover fieldset": {
                            borderColor: "primary.main",
                          },
                        },
                      }}
                    />
                  </VuiBox>
                </Grid>
                <Grid item xs={12} md={6}>
                  <VuiBox mb={2}>
                    <VuiTypography variant="caption" color="text" fontWeight="medium" mb={1}>
                      Email
                    </VuiTypography>
                    <TextField
                      fullWidth
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      variant="outlined"
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          color: "white",
                          "& fieldset": {
                            borderColor: "rgba(255, 255, 255, 0.2)",
                          },
                          "&:hover fieldset": {
                            borderColor: "primary.main",
                          },
                        },
                      }}
                    />
                  </VuiBox>
                </Grid>
                <Grid item xs={12} md={6}>
                  <VuiBox mb={2}>
                    <VuiTypography variant="caption" color="text" fontWeight="medium" mb={1}>
                      Phone
                    </VuiTypography>
                    <TextField
                      fullWidth
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      variant="outlined"
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          color: "white",
                          "& fieldset": {
                            borderColor: "rgba(255, 255, 255, 0.2)",
                          },
                          "&:hover fieldset": {
                            borderColor: "primary.main",
                          },
                        },
                      }}
                    />
                  </VuiBox>
                </Grid>
                <Grid item xs={12} md={6}>
                  <VuiBox mb={2}>
                    <VuiTypography variant="caption" color="text" fontWeight="medium" mb={1}>
                      Location
                    </VuiTypography>
                    <TextField
                      fullWidth
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      variant="outlined"
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          color: "white",
                          "& fieldset": {
                            borderColor: "rgba(255, 255, 255, 0.2)",
                          },
                          "&:hover fieldset": {
                            borderColor: "primary.main",
                          },
                        },
                      }}
                    />
                  </VuiBox>
                </Grid>
                <Grid item xs={12}>
                  <VuiBox mb={2}>
                    <VuiTypography variant="caption" color="text" fontWeight="medium" mb={1}>
                      About
                    </VuiTypography>
                    <TextField
                      fullWidth
                      name="about"
                      value={formData.about}
                      onChange={handleChange}
                      multiline
                      rows={4}
                      variant="outlined"
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          color: "white",
                          "& fieldset": {
                            borderColor: "rgba(255, 255, 255, 0.2)",
                          },
                          "&:hover fieldset": {
                            borderColor: "primary.main",
                          },
                        },
                      }}
                    />
                  </VuiBox>
                </Grid>
              </Grid>
            </VuiBox>
          </Grid>
        </Grid>
        <VuiBox display="flex" justifyContent="flex-end" mt={3}>
          <VuiButton
            variant="outlined"
            color="primary"
            onClick={toggleEditMode}
            sx={{ mr: 2 }}
          >
            Cancel
          </VuiButton>
          <VuiButton
            variant="contained"
            color="info"
            type="submit"
          >
            Save Changes
          </VuiButton>
        </VuiBox>
      </VuiBox>
    </form>
  );
}

export default ProfileEditForm;