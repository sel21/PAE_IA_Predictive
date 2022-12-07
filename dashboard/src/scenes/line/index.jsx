import { Box } from "@mui/material";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import LineChart2 from "../../components/LineChart2";

const Line = () => {
  return (
    <Box m="20px">
      <Header title="Line Chart" subtitle="Simple Line Chart" />
      <Box height="75vh">
        {/* <LineChart /> */}
        <LineChart2 />
      </Box>
    </Box>
  );
};

export default Line;
