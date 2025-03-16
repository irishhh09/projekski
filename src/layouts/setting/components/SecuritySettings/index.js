// @mui material components
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";
import Divider from "@mui/material/Divider";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiButton from "components/VuiButton";

// Icons
import LockIcon from "@mui/icons-material/Lock";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import SecurityIcon from "@mui/icons-material/Security";

import { useState } from "react";

function SecuritySettings() {
  const [twoFactor, setTwoFactor] = useState(true);
  const [loginAlert, setLoginAlert] = useState(false);

  return (
    <Card sx={{ height: "100%" }}>
      <VuiBox display="flex" justifyContent="space-between" alignItems="center" mb="22px" p={3}>
        <VuiTypography variant="lg" color="white" fontWeight="bold">
          Security Settings
        </VuiTypography>
        <SecurityIcon color="info" />
      </VuiBox>
      <VuiBox p={3}>
        <VuiBox mb={3}>
          <VuiBox display="flex" alignItems="center" mb={2}>
            <LockIcon sx={{ color: "info.main", mr: 1 }} />
            <VuiTypography variant="button" color="white" fontWeight="medium">
              Change Password
            </VuiTypography>
          </VuiBox>
          <VuiButton variant="outlined" color="info" size="small">
            Update Password
          </VuiButton>
        </VuiBox>
        <Divider light />
        <VuiBox mt={3} mb={3}>
          <VuiBox display="flex" justifyContent="space-between" alignItems="center" mb={1}>
            <VuiBox display="flex" alignItems="center">
              <VerifiedUserIcon sx={{ color: "info.main", mr: 1 }} />
              <VuiTypography variant="button" color="white" fontWeight="medium">
                Two-factor Authentication
              </VuiTypography>
            </VuiBox>
            <Switch
              checked={twoFactor}
              onChange={() => setTwoFactor(!twoFactor)}
              color="info"
            />
          </VuiBox>
          <VuiTypography variant="caption" color="text">
            Enable two-factor authentication for added security when signing in.
          </VuiTypography>
        </VuiBox>
        <Divider light />
        <VuiBox mt={3}>
          <VuiBox display="flex" justifyContent="space-between" alignItems="center" mb={1}>
            <VuiBox display="flex" alignItems="center">
              <SecurityIcon sx={{ color: "info.main", mr: 1 }} />
              <VuiTypography variant="button" color="white" fontWeight="medium">
                Login Notifications
              </VuiTypography>
            </VuiBox>
            <Switch
              checked={loginAlert}
              onChange={() => setLoginAlert(!loginAlert)}
              color="info"
            />
          </VuiBox>
          <VuiTypography variant="caption" color="text">
            Receive email notifications for new logins on your account.
          </VuiTypography>
        </VuiBox>
      </VuiBox>
    </Card>
  );
}

export default SecuritySettings;