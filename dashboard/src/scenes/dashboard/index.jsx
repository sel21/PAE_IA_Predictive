import {
  Box,
  Button,
  IconButton,
  Typography,
  useTheme,
  Grid,
} from "@mui/material";
import { tokens } from "../../theme";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import Header from "../../components/Header";
import PowerChart from "../../components/LineCharts/PowerConsumtion";
import { powerConsumption as power, acUsage as ac } from "../../data/mockData";
import AirChart from "../../components/LineCharts/AirConsumption";

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
          <PowerChart></PowerChart>
        </Box>
        <Box height="400px" width="600px">
          <PowerChart></PowerChart>
        </Box>
        <Box height="400px" width="600px">
          <PowerChart></PowerChart>
        </Box>
        <Box height="400px" width="600px">
          <PowerChart></PowerChart>
        </Box>
      </Box> */}

      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={8}>
          <Box m="5px">
            <Typography fontWeight="bold" color={colors.greenAccent[500]}>
              Ahorro estimado
            </Typography>
            <Box display="flex" alignItems="center">
              <Typography
                backgroundColor="white"
                borderRadius="30px"
                variant="h1"
                fontWeight="bold"
                color={colors.greenAccent[500]}
              >
                34 €
              </Typography>
              <Typography m="10px">Últimas 24 horas</Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Typography fontWeight="bold" color={colors.greenAccent[500]}>
            Uso de Aire Acondicionado
          </Typography>
          <Box height="300px">
            <AirChart data={ac}></AirChart>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box height="400px" width="600px">
            <PowerChart data={power}></PowerChart>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box height="400px" width="600px">
            <PowerChart data={power}></PowerChart>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
