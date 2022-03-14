import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";

function View() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("data"));
    setData(data);
  }, []);
  return (
    <div className="App">
      <header className="App-View">
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

        <TableContainer
          component={Paper}
          style={{ backgroundColor: "#282c34" }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ color: "#61dafb" }}>First Name</TableCell>
                <TableCell sx={{ color: "#61dafb" }} align="right">
                  Last Name
                </TableCell>
                <TableCell sx={{ color: "#61dafb" }} align="right">
                  E-mail
                </TableCell>
                <TableCell sx={{ color: "#61dafb" }} align="right">
                  Date of Birth
                </TableCell>
                <TableCell sx={{ color: "#61dafb" }} align="right">
                  Short Description
                </TableCell>
              </TableRow>
            </TableHead>
            {data && data.length > 0 ? (
              <TableBody>
                {data.map((row) => (
                  <TableRow
                    key={row.email}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell
                      component="th"
                      scope="row"
                      sx={{ color: "#fff" }}
                    >
                      {row.fname && row.fname}
                    </TableCell>
                    <TableCell sx={{ color: "#fff" }} align="right">
                      {row.lname && row.lname}
                    </TableCell>
                    <TableCell sx={{ color: "#fff" }} align="right">
                      {row.email && row.email}
                    </TableCell>
                    <TableCell sx={{ color: "#fff" }} align="right">
                      {row.date && row.date}
                    </TableCell>
                    <TableCell sx={{ color: "#fff" }} align="right">
                      {row.shortdesc ? row.shortdesc : " -N.A.-"}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            ) : (
              <TableBody>
                <TableRow>
                  <TableCell
                    sx={{ color: "#61dafb" }}
                    colSpan={6}
                    align="center"
                  >
                    No Submissions Made!
                  </TableCell>
                </TableRow>
              </TableBody>
            )}
          </Table>
        </TableContainer>
      </header>
    </div>
  );
}

export default View;
