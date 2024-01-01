import React from "react";
import NavBar from "./Component/NavBar";
import Preferences from "./Component/Preferences";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import PersonalInfo from "./Component/PersonalInfo";
import { Box} from "@mui/material";
import MedicalHistory from "./Component/MedicalHistory";

function App() {
  return (
    <Box>
      <NavBar />

      <PersonalInfo />
      <Preferences/>
      <MedicalHistory/>
    </Box>
  );
}

export default App;
