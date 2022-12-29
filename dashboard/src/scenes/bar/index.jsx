import { Box } from "@mui/material";
import Header from "../../components/Header";
import BarChart from "../../components/BarChart";
import { powerConsumption as power } from "../../data/mockData";
import PowerChart from "../../components/LineCharts/PowerConsumtion";

const Bar = () => {
  console.log(power);
  return (
    <Box m="20px">
      <Header title="Bar Chart" subtitle="Simple Bar Chart" />
      <Box height="75vh">
        <PowerChart data={power} />
      </Box>
      <label for="birthday">Birthday:</label>
      <input type="date" id="birthday" name="birthday"></input>
    </Box>
  );
};

export default Bar;
