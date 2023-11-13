import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  styled,
  tableCellClasses,
} from "@mui/material";
import React from "react";
import MoreVert from "@mui/icons-material/MoreVert";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

const ScheduleGrid = () => {
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "#f5f5fa",
      color: "#818185",
      fontWeight: "500",
      padding: "10px 20px",
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 12,
      // borderCollapse: "separate",
      borderTop: "1px solid lightgray",
      color: "#8181A5",
      "&:first-child": {
        borderRadius: "10px 0 0 10px",
        borderLeft: "1px solid lightgray",
      },
      "&:last-child": {
        borderRadius: "0 10px 10px 0",
        borderRight: "1px solid lightgray",
      },
    },
  }));
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    // hide last border
    "&:last-child td, &:last-child th": {
      // border: 0,
    },
  }));
  function createData(
    name: string,
    organizer: string,
    type: string,
    duration: string,
    b_unit: string,
    views: string,
    booked: string,
    rate: string
  ) {
    return { name, organizer, type, duration, b_unit, views, booked, rate };
  }

  const rows = [
    createData(
      "60 min, 45 min and 30 min meeting",
      "Johnny Darvillien",
      "One-on-one",
      "Multiple",
      "Johnny Darvillien’ Personal Portal",
      "89",
      "9",
      "10.1%"
    ),
    createData(
      "15 min Discovery Call",
      "Johnny Darvillien",
      "One-on-one",
      "15 min",
      "Johnny Darvillien’ Personal Portal",
      "89",
      "9",
      "10.1%"
    ),
    createData(
      "615 min Discovery Call",
      "Johnny Darvillien",
      "One-on-one",
      "Multiple",
      "Johnny Darvillien’ Personal Portal",
      "41",
      "9",
      "10.1%"
    ),
    createData(
      "60 min, 45 min and 30 min meeting",
      "Johnny Darvillien",
      "One-on-one",
      "15 min",
      "Johnny Darvillien’ Personal Portal",
      "99",
      "9",
      "10.1%"
    ),
  ];
  return (
    <TableContainer component={Paper} sx={{ boxShadow: "none" }}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell sx={{ minWidth: 150 }}>
              Meeting Time
            </StyledTableCell>
            <StyledTableCell>Organizer</StyledTableCell>
            <StyledTableCell>Type</StyledTableCell>
            <StyledTableCell>Duration</StyledTableCell>
            <StyledTableCell>Business Unit</StyledTableCell>
            <StyledTableCell>Views</StyledTableCell>
            <StyledTableCell>Meetings Booked</StyledTableCell>
            <StyledTableCell>Conversion Rate</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell
                component="th"
                scope="row"
                sx={{
                  color: "#333399",
                  fontSize: "14px",
                  fontWeight: "600",
                  width: "250px",
                  // borderTop: "1px solid lightgray",
                }}
              >
                <div>
                  <p className="cursor-p" style={{ color: "#333399" }}>
                    {row.name}
                  </p>
                  <div style={{ display: "flex", gap: "3px" }}>
                    <p>johnnydarvillien</p>
                    <img src="/assets/share.svg" />
                    <img src="/assets/copy.svg" />
                  </div>
                </div>
              </StyledTableCell>
              <StyledTableCell>{row.organizer}</StyledTableCell>
              <StyledTableCell>{row.type}</StyledTableCell>
              <StyledTableCell>{row.duration}</StyledTableCell>
              <StyledTableCell>{row.b_unit}</StyledTableCell>
              <StyledTableCell>{row.views}</StyledTableCell>
              <StyledTableCell>{row.booked}</StyledTableCell>
              <StyledTableCell>{row.rate}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ScheduleGrid;
