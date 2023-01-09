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
// import { acUsage as ac} from "../../data/mockData";
import {
  acUsage as ac,
  acUsage3 as ac3,
  acUsage4 as ac4,
} from "../../data/mockData";
import AirChart from "../../components/LineCharts/AirConsumption";

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
            <AirChart data={ac3}></AirChart>
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
              Humedad relativa
            </Typography>
            <AirChart data={ac4}></AirChart>
          </Box>
          <Box
            height="300px"
            width="600px"
            margin="auto"
            textAlign="center"
            padding="10px"
            marginTop="20px"
          ></Box>
          <Box
            height="300px"
            width="600px"
            margin="auto"
            textAlign="center"
            padding="10px"
            marginTop="20px"
          ></Box>
        </div>
      </Box>
    </Box>
  );
};

export default Weather;
