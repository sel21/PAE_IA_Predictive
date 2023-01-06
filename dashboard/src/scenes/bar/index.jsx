import { Box } from "@mui/material";
import Header from "../../components/Header";
import BarChart from "../../components/BarChart";
import { powerConsumption as power } from "../../data/mockData";
import PowerChart from "../../components/LineCharts/PowerConsumtion";
import React, { useState } from "react";
// import DatePicker from "react-datepicker";
// import 'bootstrap/dist/css/bootstrap.css';
// import "react-datepicker/dist/react-datepicker.css";

{
  /* <div class="input-group input-daterange">
    <input type="text" class="form-control" value="2012-04-05">
    <div class="input-group-addon">to</div>
    <input type="text" class="form-control" value="2012-04-19">
</div> */
}

const Bar = () => {
  // const [date, setDate] = useState("");
  // const [startDate, setStartDate] = useState(new Date());

  // function handleChange(event) {
  //   setDate(event.target.value);
  //   console.log(date);
  // }

  return (
    <Box m="20px">
      <Header title="Bar Chart" subtitle="Simple Bar Chart" />
      <Box height="75vh">
        <PowerChart data={power} />
      </Box>
      {/* <form>
        <label htmlFor="birthday">Birthday:</label>
        <input type="date" id="birthday" name="birthday" onChange={handleChange}></input>
      </form> */}
      {/* <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} /> */}
    </Box>
  );
};

export default Bar;
