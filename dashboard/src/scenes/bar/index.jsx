import { Box } from "@mui/material";
import Header from "../../components/Header";
import BarChart from "../../components/BarChart";
import { powerConsumption as power } from "../../data/mockData";
import PowerChart from "../../components/LineCharts/PowerConsumtion";
import React, {useState} from "react";
import DatePicker from "react-datepicker";
import 'bootstrap/dist/css/bootstrap.css';

{/* <div class="input-group input-daterange">
    <input type="text" class="form-control" value="2012-04-05">
    <div class="input-group-addon">to</div>
    <input type="text" class="form-control" value="2012-04-19">
</div> */}

const Example = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker selected={startDate} onChange={(date:Date) => setStartDate(date)} />
  );
};

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
      {/* <form>
        <label htmlFor="birthday">Birthday:</label>
        <input type="date" id="birthday" name="birthday" onChange={handleChange}></input>
      </form> */}
        <div className="input-group input-daterange">
          <input type="text" className="form-control" value="2012-04-05"></input>
          <div className="input-group-addon">to</div>
          <input type="text" className="form-control" value="2012-04-19"></input>
        </div>    
       </Box>
       
  );
};

export default Bar;
