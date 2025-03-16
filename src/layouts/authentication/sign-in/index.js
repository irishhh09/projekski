  /*!

  =========================================================
  * Vision UI Free React - v1.0.0
  =========================================================

  * Product Page: https://www.creative-tim.com/product/vision-ui-free-react
  * Copyright 2021 Creative Tim (https://www.creative-tim.com/)
  * Licensed under MIT (https://github.com/creativetimofficial/vision-ui-free-react/blob/master LICENSE.md)

  * Design and Coded by Simmmple & Creative Tim

  =========================================================

  * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

  */

  import { useState } from "react";

  // react-router-dom components
  import { Link } from "react-router-dom";

  // Vision UI Dashboard React components
  import VuiBox from "components/VuiBox";
  import VuiTypography from "components/VuiTypography";
  import VuiInput from "components/VuiInput";
  import VuiButton from "components/VuiButton";
  import VuiSwitch from "components/VuiSwitch";
  import GradientBorder from "examples/GradientBorder";

  // Vision UI Dashboard assets
  import radialGradient from "assets/theme/functions/radialGradient";
  import palette from "assets/theme/base/colors";
  import borders from "assets/theme/base/borders";

  // Authentication layout components
  import CoverLayout from "layouts/authentication/components/CoverLayout";

  // Images
  import bgSignIn from "assets/images/signInImage.png";

  import {useNavigate} from "react-router-dom"

  import api from "api";

  //import {useNavigate} from "react-router-dom"
  import { ACCESS_TOKEN, REFRESH_TOKEN } from "constants";

  function SignIn() {
    const [rememberMe, setRememberMe] = useState(true);

    const handleSetRememberMe = () => setRememberMe(!rememberMe);


    const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
  // Add this near your other state declarations
  const method = "login";  // or define it based on your needs
  const route = "/token/";  // adjust to your actual API endpoint

    const handleSubmit = async (e) => {
      setLoading(true);
      e.preventDefault();


      try {
       
        const res = await api.post(route, { username, password });


        localStorage.setItem(ACCESS_TOKEN, res.data.access)
        localStorage.setItem(REFRESH_TOKEN, res.data.refresh)
       
      } catch (error) {
        alert(error)
      }finally{
        setLoading(false)
      }
      
    }

    return (
      <CoverLayout
        title="Nice to see you!"
        color="white"
        description="Enter your email and password to sign in"
        premotto="Data driven"
        motto="ETMS"
        image={bgSignIn}
      >
        <VuiBox component="form" role="form" onSubmit={handleSubmit}>
          <VuiBox mb={2}>
            <VuiBox mb={1} ml={0.5}>
              <VuiTypography component="label" variant="button" color="white" fontWeight="medium">
                Username
              </VuiTypography>
            </VuiBox>
            <GradientBorder
              minWidth="100%"
              padding="1px"
              borderRadius={borders.borderRadius.lg}
              backgroundImage={radialGradient(
                palette.gradients.borderLight.main,
                palette.gradients.borderLight.state,
                palette.gradients.borderLight.angle
              )}
            >
              <VuiInput type="text" placeholder="Your username..." fontWeight="500" value={username}
              onChange={(e)=> setUsername(e.target.value)}/>
            </GradientBorder>
          </VuiBox>
          <VuiBox mb={2}>
            <VuiBox mb={1} ml={0.5}>
              <VuiTypography component="label" variant="button" color="white" fontWeight="medium">
                Password
              </VuiTypography>
            </VuiBox>
            <GradientBorder
              minWidth="100%"
              borderRadius={borders.borderRadius.lg}
              padding="1px"
              backgroundImage={radialGradient(
                palette.gradients.borderLight.main,
                palette.gradients.borderLight.state,
                palette.gradients.borderLight.angle
              )}
            >
              <VuiInput  onChange={(e)=> setPassword(e.target.value)}
                type="password"
                placeholder="Your password..."
                sx={({ typography: { size } }) => ({
                  fontSize: size.sm,
                })}
              />  
            </GradientBorder>
          </VuiBox>
          <VuiBox display="flex" alignItems="center">
            <VuiSwitch color="info" checked={rememberMe} onChange={handleSetRememberMe} />
            <VuiTypography
              variant="caption"
              color="white"
              fontWeight="medium"
              onClick={handleSetRememberMe}
              sx={{ cursor: "pointer", userSelect: "none" }}
            >
              &nbsp;&nbsp;&nbsp;&nbsp;Remember me
            </VuiTypography>
          </VuiBox>
          <VuiBox mt={4} mb={1}>
            <VuiButton color="info" fullWidth type="submit">
              SIGN IN
            </VuiButton>
          </VuiBox>
          <VuiBox mt={3} textAlign="center">
            <VuiTypography variant="button" color="text" fontWeight="regular">
              Don&apos;t have an account?{" "}
              <VuiTypography
                component={Link}
                to="/authentication/sign-up"
                variant="button"
                color="white"
                fontWeight="medium"
              >
                Sign up
              </VuiTypography>
            </VuiTypography>
          </VuiBox>
        </VuiBox>
      </CoverLayout>
    );
  }

  export default SignIn;
