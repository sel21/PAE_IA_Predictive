import {
  Box,
  Button,
  IconButton,
  Typography,
  useTheme,
  Grid,
} from "@mui/material";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import LineChart2 from "../../components/LineChart2";
import GeographyChart from "../../components/GeographyChart";
import BarChart from "../../components/BarChart";
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />

        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
      </Box>

      {/* GRID & CHARTS */}
      {/* <Box display="flex" flex-wrap="wrap"  >
        <Box height="400px" width="600px">
          <LineChart2></LineChart2>
        </Box>
        <Box height="400px" width="600px">
          <LineChart2></LineChart2>
        </Box>
        <Box height="400px" width="600px">
          <LineChart2></LineChart2>
        </Box>
        <Box height="400px" width="600px">
          <LineChart2></LineChart2>
        </Box>
      </Box> */}
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <Box height="400px" width="600px">
            <LineChart2></LineChart2>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box height="400px" width="600px">
            <LineChart2></LineChart2>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box height="400px" width="600px">
            <LineChart2></LineChart2>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box height="400px" width="600px">
            <LineChart2></LineChart2>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
