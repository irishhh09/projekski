// @mui material components
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";
import Divider from "@mui/material/Divider";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";

// Icons
import NotificationsIcon from "@mui/icons-material/Notifications";
import EmailIcon from "@mui/icons-material/Email";
import SmsIcon from "@mui/icons-material/Sms";
import UpdateIcon from "@mui/icons-material/Update";

import { useState } from "react";

function NotificationSettings() {
  const [emailNotif, setEmailNotif] = useState(true);
  const [pushNotif, setPushNotif] = useState(false);
  const [smsNotif, setSmsNotif] = useState(true);
  const [updatesNotif, setUpdatesNotif] = useState(true);

  return (
    <Card sx={{ height: "100%" }}>
      <VuiBox display="flex" justifyContent="space-between" alignItems="center" mb="22px" p={3}>
        <VuiTypography variant="lg" color="white" fontWeight="bold">
          Notification Settings
        </VuiTypography>
        <NotificationsIcon color="info" />
      </VuiBox>
      <VuiBox p={3}>
        <VuiBox mb={3}>
          <VuiBox display="flex" justifyContent="space-between" alignItems="center" mb={1}>
            <VuiBox display="flex" alignItems="center">
              <EmailIcon sx={{ color: "info.main", mr: 1 }} />
              <VuiTypography variant="button" color="white" fontWeight="medium">
                Email Notifications
              </VuiTypography>
            </VuiBox>
            <Switch
              checked={emailNotif}
              onChange={() => setEmailNotif(!emailNotif)}
              color="info"
            />
          </VuiBox>
          <VuiTypography variant="caption" color="text">
            Receive daily emails with notifications about your account activity.
          </VuiTypography>
        </VuiBox>
        <Divider light />
        <VuiBox mt={3} mb={3}>
          <VuiBox display="flex" justifyContent="space-between" alignItems="center" mb={1}>
            <VuiBox display="flex" alignItems="center">
              <NotificationsIcon sx={{ color: "info.main", mr: 1 }} />
              <VuiTypography variant="button" color="white" fontWeight="medium">
                Push Notifications
              </VuiTypography>
            </VuiBox>
            <Switch
              checked={pushNotif}
              onChange={() => setPushNotif(!pushNotif)}
              color="info"
            />
          </VuiBox>
          <VuiTypography variant="caption" color="text">
            Receive push notifications through the mobile app.
          </VuiTypography>
        </VuiBox>
        <Divider light />
        <VuiBox mt={3} mb={3}>
          <VuiBox display="flex" justifyContent="space-between" alignItems="center" mb={1}>
            <VuiBox display="flex" alignItems="center">
              <SmsIcon sx={{ color: "info.main", mr: 1 }} />
              <VuiTypography variant="button" color="white" fontWeight="medium">
                SMS Notifications
              </VuiTypography>
            </VuiBox>
            <Switch
              checked={smsNotif}
              onChange={() => setSmsNotif(!smsNotif)}
              color="info"
            />
          </VuiBox>
          <VuiTypography variant="caption" color="text">
            Receive text messages for important account alerts.
          </VuiTypography>
        </VuiBox>
        <Divider light />
        <VuiBox mt={3}>
          <VuiBox display="flex" justifyContent="space-between" alignItems="center" mb={1}>
            <VuiBox display="flex" alignItems="center">
              <UpdateIcon sx={{ color: "info.main", mr: 1 }} />
              <VuiTypography variant="button" color="white" fontWeight="medium">
                Product Updates
              </VuiTypography>
            </VuiBox>
            <Switch
              checked={updatesNotif}
              onChange={() => setUpdatesNotif(!updatesNotif)}
              color="info"
            />
          </VuiBox>
          <VuiTypography variant="caption" color="text">
            Receive notifications about new features and product updates.
          </VuiTypography>
        </VuiBox>
      </VuiBox>
    </Card>
  );
}

export default NotificationSettings;