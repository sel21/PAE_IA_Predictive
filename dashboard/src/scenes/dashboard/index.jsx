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
  acUsage2 as co2_mock,
  occupation as occ,
} from "../../data/mockData";
import AirChart from "../../components/LineCharts/AirConsumption";
import CO2Chart from "../../components/LineCharts/c02";
import HeatMap from "../../components/HeatMap";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="!Bienvenido!" />

        <Box>
          {/* <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Descargar Datos
          </Button> */}
          <Switch defaultChecked color="secondary" size="medium" />
          <Button
            variant="contained"
            color="secondary"
            style={{ fontSize: "20px", padding: "20px" }}
          >
            Ahorro activado
          </Button>
        </Box>
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
              Ahorro estimado
            </Typography>
            <AirChart data={ac} axisYLegend={"Ahorro en €"}></AirChart>
          </Box>
          <Box marginTop="10px" height="300px" width="600px" marginLeft="5px">
            {" "}
            <img
              src={`../../assets/tiendeoEdificio.jpg`}
              alt="error"
              height="300px"
              width="600px"
            ></img>
          </Box>
          <Box
            height="300px"
            width="600px"
            margin="auto"
            textAlign="center"
            padding="10px"
            marginTop="20px"
          >
            <Typography fontWeight="bold" color={colors.greenAccent[500]}>
              Reducción de CO2
            </Typography>
            <AirChart
              data={co2_mock}
              axisYLegend={"Kg C02 ahorrados"}
              yMaxValue={"50"}
            />
          </Box>
          <Box
            flex={1}
            height="300px"
            width="600px"
            margin="auto"
            textAlign="center"
            padding="10px"
            marginTop="20px"
          >
            <Typography fontWeight="bold" color={colors.greenAccent[500]}>
              Ocupación Edificio
            </Typography>
            <HeatMap data={occ}></HeatMap>
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

export default Dashboard;
