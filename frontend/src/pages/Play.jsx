import React from "react";
import Grid from "../components/Grid";
import Controls from "../components/Controls";
import { MyContextProvider } from "../components/SelectedCellContext";

const Play = () => {
  return (
  <MyContextProvider>
    <div className="flex flex-col justify-center items-center h-screen">
      <Grid></Grid>
      <Controls></Controls>
    </div>
  </MyContextProvider>
    
  );
};

export default Play;
