import {
  Box,
  Button,
  IconButton,
  Typography,
  useTheme,
  Grid,
  Switch,
} from "@mui/material";
import { tokens } from "../../theme";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import Header from "../../components/Header";
import PowerChart from "../../components/LineCharts/PowerConsumtion";
import {
  powerConsumption as power,
  acUsage as ac,
  occupation as occ,
} from "../../data/mockData";
import AirChart from "../../components/LineCharts/AirConsumption";
import HeatMap from "../../components/HeatMap";

const Weather = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Clima" />
      </Box>

      <Box display="flex" justifyContent="center" alalignItems="center">
        {/* <Box display="flex" padding="10px" width="300px">
            <Typography ography fontWeight="bold" color={colors.greenAccent[500]}>
              Ahorro estimado
            </Typography>
            <Box display="flex={1}" alignItems="center">
              <Typography
                borderRadius="30px"
                variant="h1"
                fontWeight="bold"
                color={colors.greenAccent[500]}
              >
                34 €
              </Typography>
              <Typography m="10px">Últimas 24 horas</Typography>
            </Box>
          </Box> */}
        <div
          style={{ display: "grid", "grid-template-columns": "repeat(2, 1fr)" }}
        >
          <Box
            height="300px"
            width="600px"
            margin="auto"
            textAlign="center"
            padding="10px"
            marginTop="20px"
          >
            <Typography fontWeight="bold" color={colors.greenAccent[500]}>
              Temperatura exterior
            </Typography>
            <AirChart data={ac}></AirChart>
          </Box>
          <Box
            height="300px"
            width="600px"
            margin="auto"
            textAlign="center"
            padding="10px"
            marginTop="20px"
          >
            {" "}
            <Typography fontWeight="bold" color={colors.greenAccent[500]}>
              Presión Atmosférica
            </Typography>
            <AirChart data={ac}></AirChart>
          </Box>
          <Box
            height="300px"
            width="600px"
            margin="auto"
            textAlign="center"
            padding="10px"
            marginTop="20px"
          >
            {/* <Typography fontWeight="bold" color={colors.greenAccent[500]}>
              Presión Atmosférica
            </Typography>
            <AirChart data={ac}></AirChart> */}
          </Box>
          <Box
            height="300px"
            width="600px"
            margin="auto"
            textAlign="center"
            padding="10px"
            marginTop="20px"
          >
            {/* <Typography fontWeight="bold" color={colors.greenAccent[500]}>
              Humedad
            </Typography>
            <AirChart data={ac}></AirChart> */}
          </Box>
        </div>
      </Box>

      {/* <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
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
        </Grid> */}
    </Box>
  );
};

export default Weather;
