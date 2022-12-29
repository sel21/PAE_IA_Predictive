import { Box } from "@mui/material";
import Header from "../../components/Header";
import BarChart from "../../components/BarChart";
import { powerConsumption as power } from "../../data/mockData";
import PowerChart from "../../components/LineCharts/PowerConsumtion";
import React, {useState} from "react";

const Bar = () => {
  const [date, setDate] = useState("");

  function handleChange(event) {
    setDate(event.target.value);
    console.log(date);
  }

  console.log(power);
  return (
    <Box m="20px">
      <Header title="Bar Chart" subtitle="Simple Bar Chart" />
      <Box height="75vh">
        <PowerChart data={power} />
      </Box>
      {/* <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous"></link> */}
      <form>
        <label htmlFor="birthday">Birthday:</label>
        <input type="date" id="birthday" name="birthday" onChange={handleChange}></input>
      </form>
    </Box>
  );
};

export default Bar;
