import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import { Link } from "react-router-dom";
function Create() {
  const [value, setValue] = React.useState({
    fname: "",
    lname: "",
    email: "",
    date: null,
    shortdesc: "",
  });
  const [submitted, setSubmitted] = React.useState(false);

  const handleClick = () => {
    console.log(value);
    // localStorage.clear("data");
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    if (
      value.fname &&
      value.lname &&
      value.email &&
      value.email.includes("@") &&
      value.email.includes(".") &&
      value.date
    ) {
      const data = [];
      if (localStorage.getItem("data") !== null) {
        data.push(localStorage.getItem("data"));
      }
      data.push({
        ...value,
        date:
          value.date.getDate() +
          " " +
          months[value.date.getMonth()] +
          ", " +
          value.date.getFullYear() +
          ".",
      });
      localStorage.setItem("data", JSON.stringify(data));
      window.history.back();
    }
  };

  return (
    <div className="App">
      <header className="App-header">

      <div className="arrow">
          <div className="container">
            <ul>
              <li>
                <Link className="animated-arrow" to="/">
                  <span className="the-arrow -left">
                    <span className="shaft"></span>
                  </span>
                  <span className="main">
                    <span className="text">Back To Homepage</span>
                    <span className="the-arrow -right">
                      <span className="shaft"></span>
                    </span>
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <h2>Submission Form</h2>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
            bgcolor: "#fff",
            boxShadow: 1,
            borderRadius: 2,
            mt: 4,
            p: 3,
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="fname"
            label="First Name"
            variant="outlined"
            value={value.fname}
            error={submitted && value.fname === ""}
            onChange={(e) => {
              setValue({ ...value, fname: e.target.value });
            }}
            helperText={
              submitted && value.fname === "" ? "Enter First Name!" : ""
            }
          />
          <TextField
            id="lname"
            label="Last Name"
            variant="outlined"
            value={value.lname}
            error={submitted && value.lname === ""}
            onChange={(e) => {
              setValue({ ...value, lname: e.target.value });
            }}
            helperText={
              submitted && value.lname === "" ? "Enter First Name!" : ""
            }
          />
          <br />
          <TextField
            id="email"
            type="email"
            label="E-mail"
            variant="standard"
            value={value.email}
            error={
              submitted
                ? value.email !== "" &&
                  value.email.includes("@") &&
                  value.email.includes(".")
                  ? false
                  : true
                : false
            }
            onChange={(e) => {
              setValue({ ...value, email: e.target.value });
            }}
            helperText={
              submitted
                ? value.email !== "" &&
                  value.email.includes("@") &&
                  value.email.includes(".")
                  ? false
                  : "Please enter a valid email!"
                : false
            }
          />
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Date of Birth"
              value={value.date}
              error={submitted && value.date === null}
              helperText={
                submitted && value.date === null
                  ? "Please enter a valid date!"
                  : ""
              }
              onChange={(newValue) => {
                setValue({ ...value, date: newValue });
              }}
              renderInput={(params) => (
                <TextField
                  error={submitted && value.date === null}
                  helperText={
                    submitted && value.date === null
                      ? "Please enter a valid date!"
                      : ""
                  }
                  {...params}
                />
              )}
            />
          </LocalizationProvider>
          <br />
          <TextField
            style={{ width: "100%" }}
            fullWidth
            id="shortdesc"
            label="Short Description about Yourself"
            multiline
            rows={4}
            variant="filled"
            value={value.shortdesc}
            onChange={(e) => {
              setValue({ ...value, shortdesc: e.target.value });
            }}
          />
          <br />
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              setSubmitted(true);
              handleClick();
            }}
          >
            Submit
          </Button>
        </Box>
      </header>
    </div>
  );
}

export default Create;
