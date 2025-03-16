// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiButton from "components/VuiButton";

// Vision UI Dashboard React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

// Account settings page components
import ProfileInfo from "./components/ProfileInfo";
import SecuritySettings from "./components/SecuritySettings";
import AccountPreferences from "./components/AccountPreferences";
import NotificationSettings from "./components/NotificationSettings";
import ConnectedAccounts from "./components/ConnectedAccounts";

// Form components for edit mode
import ProfileEditForm from "./components/ProfileEditForm";

import { useState } from "react";

function Billing() {
  const [editMode, setEditMode] = useState(false);

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <VuiBox mt={4}>
        <VuiBox mb={1.5}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={7} xl={8}>
              <Card>
                <VuiBox display="flex" justifyContent="space-between" alignItems="center" mb="22px" p={3}>
                  <VuiTypography variant="lg" color="white" fontWeight="bold">
                    Profile Information
                  </VuiTypography>
                  <VuiButton
                    variant={editMode ? "outlined" : "contained"}
                    color={editMode ? "primary" : "info"}
                    onClick={toggleEditMode}
                  >
                    {editMode ? "Cancel" : "Edit Profile"}
                  </VuiButton>
                </VuiBox>
                <VuiBox p={3}>
                  {editMode ? (
                    <ProfileEditForm toggleEditMode={toggleEditMode} />
                  ) : (
                    <ProfileInfo />
                  )}
                </VuiBox>
              </Card>
            </Grid>
            <Grid item xs={12} lg={5} xl={4}>
              <SecuritySettings />
            </Grid>
          </Grid>
        </VuiBox>

      </VuiBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Billing;