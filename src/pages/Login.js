import { Button, Grid, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BasicContainer from "../components/BasicContainer";
import { CustomHits } from "../components/Hit";
import NHits from "../components/NHits";

const Login = ({ password, setPassword, setAuth }) => {
  const navigate = useNavigate();

  const [error, setError] = useState("");

  const checkAuth = () => {
    if (password === process.env.REACT_APP_PASSWORD) {
      window.localStorage.setItem("pass", password);
      window.localStorage.setItem("auth", true);
      setError("");
      setAuth(true);
      navigate("/", { replace: true });
    } else {
      setAuth(false);
      setError("Incorrect password");
    }
  };

  return (
    <>
      <BasicContainer width="sm">
        <Grid container direction="column">
          <Grid
            item
            container
            direction="row"
            alignItems="center"
            justifyContent="center"
            sx={{ width: "100%" }}
          >
            <Typography variant="h1" align="center" mx="2vh">
              Plant Helper
            </Typography>
          </Grid>
          <Grid item mt="2vh" mb="5vh">
            <Typography variant="h5" align="center">
              Ratings for <NHits /> species of houseplants based on observations
              and experience from{" "}
              <a href="https://www.instagram.com/gennasplants/">
                {" "}
                @gennasplants
              </a>
              .
              <br />
              <br />
              This app is available for all my supporters on Patreon. If you
              would like access, purchase any tier using{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.patreon.com/gennasplants?fan_landing=true"
                title="patreon"
              >
                this link
              </a>{" "}
              and the password will be immediately provided.
            </Typography>
          </Grid>
          <Grid item mt={5}>
            <TextField
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              label="Password"
              variant="outlined"
              helperText={error}
              error={error.length > 0}
              fullWidth
            />
          </Grid>
          <Grid item mt={1}>
            <Button
              disabled={password.length < 1}
              onClick={() => checkAuth()}
              variant="contained"
              color="primary"
              fullWidth
            >
              Enter
            </Button>
          </Grid>
        </Grid>
      </BasicContainer>
      <CustomHits maxHits={3} />
    </>
  );
};

export default Login;
