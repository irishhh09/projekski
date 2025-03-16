// @mui material components
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";
import Divider from "@mui/material/Divider";
import Icon from "@mui/material/Icon";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";

// Icons and brand logos
import GoogleIcon from "@mui/icons-material/Google";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

import { useState } from "react";

function ConnectedAccounts() {
  const [google, setGoogle] = useState(true);
  const [twitter, setTwitter] = useState(false);
  const [linkedin, setLinkedin] = useState(true);
  const [github, setGithub] = useState(false);

  return (
    <Card sx={{ height: "100%" }}>
      <VuiBox display="flex" justifyContent="space-between" alignItems="center" mb="22px" p={3}>
        <VuiTypography variant="lg" color="white" fontWeight="bold">
          Connected Accounts
        </VuiTypography>
      </VuiBox>
      <VuiBox p={3}>
        <VuiBox mb={3}>
          <VuiBox display="flex" justifyContent="space-between" alignItems="center" mb={1}>
            <VuiBox display="flex" alignItems="center">
              <GoogleIcon sx={{ color: "#DB4437", mr: 1 }} />
              <VuiTypography variant="button" color="white" fontWeight="medium">
                Google
              </VuiTypography>
            </VuiBox>
            <Switch
              checked={google}
              onChange={() => setGoogle(!google)}
              color="info"
            />
          </VuiBox>
          <VuiTypography variant="caption" color="text">
            Access your Google calendar, contacts, and data
          </VuiTypography>
        </VuiBox>
        <Divider light />
        <VuiBox mt={3} mb={3}>
          <VuiBox display="flex" justifyContent="space-between" alignItems="center" mb={1}>
            <VuiBox display="flex" alignItems="center">
              <TwitterIcon sx={{ color: "#1DA1F2", mr: 1 }} />
              <VuiTypography variant="button" color="white" fontWeight="medium">
                Twitter
              </VuiTypography>
            </VuiBox>
            <Switch
              checked={twitter}
              onChange={() => setTwitter(!twitter)}
              color="info"
            />
          </VuiBox>
          <VuiTypography variant="caption" color="text">
            Link your Twitter account for easier sharing
          </VuiTypography>
        </VuiBox>
        <Divider light />
        <VuiBox mt={3} mb={3}>
          <VuiBox display="flex" justifyContent="space-between" alignItems="center" mb={1}>
            <VuiBox display="flex" alignItems="center">
              <LinkedInIcon sx={{ color: "#0A66C2", mr: 1 }} />
              <VuiTypography variant="button" color="white" fontWeight="medium">
                LinkedIn
              </VuiTypography>
            </VuiBox>
            <Switch
              checked={linkedin}
              onChange={() => setLinkedin(!linkedin)}
              color="info"
            />
          </VuiBox>
          <VuiTypography variant="caption" color="text">
            Sync with your professional network
          </VuiTypography>
        </VuiBox>
        <Divider light />
        <VuiBox mt={3}>
          <VuiBox display="flex" justifyContent="space-between" alignItems="center" mb={1}>
            <VuiBox display="flex" alignItems="center">
              <GitHubIcon sx={{ color: "#fff", mr: 1 }} />
              <VuiTypography variant="button" color="white" fontWeight="medium">
                GitHub
              </VuiTypography>
            </VuiBox>
            <Switch
              checked={github}
              onChange={() => setGithub(!github)}
              color="info"
            />
          </VuiBox>
          <VuiTypography variant="caption" color="text">
            Connect with your repositories and track your commits
          </VuiTypography>
        </VuiBox>
      </VuiBox>
    </Card>
  );
}

export default ConnectedAccounts;