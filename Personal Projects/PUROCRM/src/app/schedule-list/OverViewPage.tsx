import {
  Button,
  Checkbox,
  FormGroup,
  FormLabel,
  Grid,
  MenuItem,
  TextField,
  styled,
} from "@mui/material";
import React from "react";

const OverViewPage = () => {
  const CustomField = styled(TextField)(({ theme }) => ({
    width: "90%",
  }));
  return (
    <div className="overview-page-main">
      <Grid container spacing={2} rowGap={4}>
        <Grid
          md={6}
          sx={{ display: "flex", flexDirection: "column", gap: "5px" }}
          spacing={2}
        >
          <FormLabel>Meeting Type</FormLabel>
          <CustomField placeholder="one to one" disabled variant="filled" />
        </Grid>
        <Grid
          md={6}
          sx={{ display: "flex", flexDirection: "column", gap: "5px" }}
        >
          <FormLabel>Internal Name *</FormLabel>
          <CustomField placeholder="15 min Discovery Call" />
        </Grid>
        <Grid
          md={6}
          sx={{ display: "flex", flexDirection: "column", gap: "5px" }}
        >
          <FormLabel>Business Unit</FormLabel>
          <CustomField
            placeholder="Johnny Darvillien’ Personal Portal"
            select
            value={1}
          >
            <MenuItem value={1}>Johnny Darvillien’ Personal Portal</MenuItem>
          </CustomField>
        </Grid>
        <Grid
          md={6}
          sx={{ display: "flex", flexDirection: "column", gap: "5px" }}
        >
          <FormLabel>Organizer</FormLabel>
          <CustomField
            placeholder="Johnny Darvillien (Me)"
            select
            value={1}
            disabled
            variant="filled"
          >
            <MenuItem value={1}>Johnny Darvillien (Me)</MenuItem>
          </CustomField>
        </Grid>
        <Grid
          md={6}
          sx={{ display: "flex", flexDirection: "column", gap: "5px" }}
        >
          <FormLabel>Event Title</FormLabel>
          <CustomField placeholder="Important Meeting" select value={1}>
            <MenuItem value={1}>Important Meeting</MenuItem>
          </CustomField>
        </Grid>
        <Grid
          md={6}
          sx={{ display: "flex", flexDirection: "column", gap: "5px" }}
        >
          <FormLabel>Location</FormLabel>
          <CustomField placeholder="zoom" select value={1}>
            <MenuItem value={1}>zoom</MenuItem>
          </CustomField>
        </Grid>
        <Grid md={12} sx={{ display: "flex", flexDirection: "column" }}>
          <FormLabel>Discription</FormLabel>
          <CustomField
            sx={{ width: "95%" }}
            placeholder="Enter Text"
            multiline
            minRows={3}
          />
        </Grid>
        <Grid
          md={12}
          sx={{ display: "flex", gap: "5px", alignItems: "center" }}
        >
          <p>
            Cancel and reschedule (Include cancel and reschedule links in the
            event description)
          </p>
          <Checkbox defaultChecked />
        </Grid>
        <Grid md={2} sx={{ display: "flex", flexDirection: "column" }}>
          <Button className="save-btn" variant="contained">
            Save Detail
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default OverViewPage;
