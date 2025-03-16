// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiButton from "components/VuiButton";

// Icons
import SettingsIcon from "@mui/icons-material/Settings";
import LanguageIcon from "@mui/icons-material/Language";
import PaletteIcon from "@mui/icons-material/Palette";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

import { useState } from "react";

function AccountPreferences() {
  const [language, setLanguage] = useState("en");
  const [theme, setTheme] = useState("dark");
  const [timezone, setTimezone] = useState("UTC-5");

  return (
    <Card>
      <VuiBox display="flex" justifyContent="space-between" alignItems="center" mb="22px" p={3}>
        <VuiTypography variant="lg" color="white" fontWeight="bold">
          Account Preferences
        </VuiTypography>
        <SettingsIcon color="info" />
      </VuiBox>
      <VuiBox p={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <VuiBox mb={2}>
              <VuiBox display="flex" alignItems="center" mb={1}>
                <LanguageIcon sx={{ color: "info.main", mr: 1 }} />
                <VuiTypography variant="button" color="white" fontWeight="medium">
                  Language
                </VuiTypography>
              </VuiBox>
              <FormControl 
                fullWidth 
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
                  "& .MuiFormLabel-root": {
                    color: "text.secondary"
                  }
                }}
              >
                <InputLabel id="language-select-label">Select Language</InputLabel>
                <Select
                  labelId="language-select-label"
                  id="language-select"
                  value={language}
                  label="Select Language"
                  onChange={(e) => setLanguage(e.target.value)}
                >
                  <MenuItem value="en">English</MenuItem>
                  <MenuItem value="fr">French</MenuItem>
                  <MenuItem value="es">Spanish</MenuItem>
                  <MenuItem value="de">German</MenuItem>
                  <MenuItem value="pt">Portuguese</MenuItem>
                </Select>
              </FormControl>
            </VuiBox>
          </Grid>
          <Grid item xs={12} md={4}>
            <VuiBox mb={2}>
              <VuiBox display="flex" alignItems="center" mb={1}>
                <PaletteIcon sx={{ color: "info.main", mr: 1 }} />
                <VuiTypography variant="button" color="white" fontWeight="medium">
                  Theme
                </VuiTypography>
              </VuiBox>
              <FormControl 
                component="fieldset"
                sx={{
                  "& .MuiRadio-root": {
                    color: "rgba(255, 255, 255, 0.7)",
                    "&.Mui-checked": {
                      color: "info.main",
                    },
                  },
                  "& .MuiTypography-root": {
                    color: "white",
                  }
                }}
              >
                <RadioGroup
                  aria-label="theme"
                  name="theme-options"
                  value={theme}
                  onChange={(e) => setTheme(e.target.value)}
                >
                  <FormControlLabel value="dark" control={<Radio />} label="Dark Mode" />
                  <FormControlLabel value="light" control={<Radio />} label="Light Mode" />
                  <FormControlLabel value="system" control={<Radio />} label="System Default" />
                </RadioGroup>
              </FormControl>
            </VuiBox>
          </Grid>
          <Grid item xs={12} md={4}>
            <VuiBox mb={2}>
              <VuiBox display="flex" alignItems="center" mb={1}>
                <AccessTimeIcon sx={{ color: "info.main", mr: 1 }} />
                <VuiTypography variant="button" color="white" fontWeight="medium">
                  Time Zone
                </VuiTypography>
              </VuiBox>
              <FormControl 
                fullWidth 
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
                  "& .MuiFormLabel-root": {
                    color: "text.secondary"
                  }
                }}
              >
                <InputLabel id="timezone-select-label">Select Time Zone</InputLabel>
                <Select
                  labelId="timezone-select-label"
                  id="timezone-select"
                  value={timezone}
                  label="Select Time Zone"
                  onChange={(e) => setTimezone(e.target.value)}
                >
                  <MenuItem value="UTC-8">Pacific Time (UTC-8)</MenuItem>
                  <MenuItem value="UTC-7">Mountain Time (UTC-7)</MenuItem>
                  <MenuItem value="UTC-6">Central Time (UTC-6)</MenuItem>
                  <MenuItem value="UTC-5">Eastern Time (UTC-5)</MenuItem>
                  <MenuItem value="UTC+0">Greenwich Mean Time (UTC+0)</MenuItem>
                  <MenuItem value="UTC+1">Central European Time (UTC+1)</MenuItem>
                  <MenuItem value="UTC+8">China Standard Time (UTC+8)</MenuItem>
                  <MenuItem value="UTC+9">Japan Standard Time (UTC+9)</MenuItem>
                </Select>
              </FormControl>
            </VuiBox>
          </Grid>
        </Grid>
        
        <VuiBox mt={4}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <VuiBox>
                <VuiTypography variant="h6" color="white" fontWeight="medium" mb={2}>
                  Data Privacy
                </VuiTypography>
                <FormControl 
                  component="fieldset"
                  sx={{
                    "& .MuiRadio-root": {
                      color: "rgba(255, 255, 255, 0.7)",
                      "&.Mui-checked": {
                        color: "info.main",
                      },
                    },
                    "& .MuiTypography-root": {
                      color: "white",
                    }
                  }}
                >
                  <RadioGroup
                    aria-label="data-privacy"
                    name="data-privacy-options"
                    defaultValue="balanced"
                  >
                    <FormControlLabel 
                      value="strict" 
                      control={<Radio />} 
                      label="Strict Privacy" 
                    />
                    <VuiTypography variant="caption" color="text" pl={3.4} mb={1}>
                      Limited data collection, maximum privacy protection
                    </VuiTypography>
                    
                    <FormControlLabel 
                      value="balanced" 
                      control={<Radio />} 
                      label="Balanced" 
                    />
                    <VuiTypography variant="caption" color="text" pl={3.4} mb={1}>
                      Moderate data collection for improved features
                    </VuiTypography>
                    
                    <FormControlLabel 
                      value="personalized" 
                      control={<Radio />} 
                      label="Personalized Experience" 
                    />
                    <VuiTypography variant="caption" color="text" pl={3.4}>
                      Full data collection for maximum personalization
                    </VuiTypography>
                  </RadioGroup>
                </FormControl>
              </VuiBox>
            </Grid>
            <Grid item xs={12} md={6}>
              <VuiBox>
                <VuiTypography variant="h6" color="white" fontWeight="medium" mb={2}>
                  Accessibility
                </VuiTypography>
                <FormControl 
                  component="fieldset"
                  sx={{
                    "& .MuiRadio-root": {
                      color: "rgba(255, 255, 255, 0.7)",
                      "&.Mui-checked": {
                        color: "info.main",
                      },
                    },
                    "& .MuiTypography-root": {
                      color: "white",
                    }
                  }}
                >
                  <RadioGroup
                    aria-label="font-size"
                    name="font-size-options"
                    defaultValue="medium"
                  >
                    <FormControlLabel 
                      value="small" 
                      control={<Radio />} 
                      label="Small Font Size" 
                    />
                    <FormControlLabel 
                      value="medium" 
                      control={<Radio />} 
                      label="Medium Font Size" 
                    />
                    <FormControlLabel 
                      value="large" 
                      control={<Radio />} 
                      label="Large Font Size" 
                    />
                  </RadioGroup>
                </FormControl>
                
                <VuiBox mt={2}>
                  <FormControl 
                    component="fieldset"
                    sx={{
                      "& .MuiRadio-root": {
                        color: "rgba(255, 255, 255, 0.7)",
                        "&.Mui-checked": {
                          color: "info.main",
                        },
                      },
                      "& .MuiTypography-root": {
                        color: "white",
                      }
                    }}
                  >
                    <RadioGroup
                      aria-label="contrast"
                      name="contrast-options"
                      defaultValue="normal"
                    >
                      <FormControlLabel 
                        value="normal" 
                        control={<Radio />} 
                        label="Normal Contrast" 
                      />
                      <FormControlLabel 
                        value="high" 
                        control={<Radio />} 
                        label="High Contrast" 
                      />
                    </RadioGroup>
                  </FormControl>
                </VuiBox>
              </VuiBox>
            </Grid>
          </Grid>
        </VuiBox>
        
        <VuiBox display="flex" justifyContent="flex-end" mt={4}>
          <VuiButton
            variant="contained"
            color="info"
          >
            Save Preferences
          </VuiButton>
        </VuiBox>
      </VuiBox>
    </Card>
  );
}

export default AccountPreferences;