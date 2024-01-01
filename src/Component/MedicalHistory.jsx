import { Box, Typography } from "@mui/material";
import React from "react";
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';

const MedicalHistory = () => {
  return (
    <Box
      sx={{
        marginTop: "10px",
        backgroundColor: "rgb(158, 179, 226)",
        width: "33%",
        Width: "430px",
        height: "300px",
      }}
    >
      <Box  sx={{ display: "flex", alignItems: "center" }}>
       <LocalHospitalIcon sx={{ marginLeft: "5px", paddingLeft: "15px", paddingTop: "20px" }}/>
       <Typography variant="h5" sx={{ marginLeft: "5px", paddingTop: "20px" }}>
          Medical History
        </Typography>
      </Box>
    </Box>
  );
};

export default MedicalHistory;
