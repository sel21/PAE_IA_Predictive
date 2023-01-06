import { Box } from "@mui/material";
import Header from "../../components/Header";
import BarChart from "../../components/BarChart";
import { mockBarData as occ } from "../../data/mockData";
import PowerChart from "../../components/LineCharts/PowerConsumtion";
import React, { useState } from "react";

const Occupancy = () => {
  return (
    <Box m="20px">
      <Header
        title="Lecturas dispositivos"
        subtitle="Lecturas de los distintos dispositivos en cada sala"
      />
      <Box height="75vh">
        <BarChart />
      </Box>
    </Box>
  );
};

export default Occupancy;
