import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import logo from "./logo.svg";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="buttons">
          <Stack spacing={4} direction="row">
            <Link to="/create">
              <Button variant="contained" color="info" size="large">
                CREATE
              </Button>
            </Link>
            <Link to="/view">
              <Button variant="outlined" color="primary" size="large">
                VIEW
              </Button>
            </Link>
          </Stack>
        </div>
      </header>
    </div>
  );
}

export default Homepage;
