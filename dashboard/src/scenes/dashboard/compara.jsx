import React from 'react';
import { Box, Button, IconButton, Typography, useTheme, Grid } from '@mui/material';
import { tokens } from '../../theme';
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import Header from '../../components/Header';
import PowerChart from '../../components/LineCharts/PowerConsumtion';
import { powerConsumption as power, acUsage as ac, occupation as occ } from '../../data/mockData';
import AirChart from '../../components/LineCharts/AirConsumption';
import HeatMap from '../../components/HeatMap';
import miImagen from './images/miImagen.jpg';

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="!Bienvenido!" />

        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: '14px',
              fontWeight: 'bold',
              padding: '10px 20px',
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: '10px' }} />
            Descargar Datos
          </Button>
        </Box>
      </Box>

      <Box display="flex" justifyContent="center" alignItems="center">
        <div display="grid" grid-template-columns="repeat(2, 1fr)">
          <Box
            height="400px"
            width="800px"
            margin="auto"
            textAlign="center"
            padding="10px"
            marginTop="20px"
          >
            <Typography fontWeight="bold" color={colors.greenAccent[500]}>
              Uso de Aire Acondicionado
            </Typography>
            <AirChart data={ac} />
          </Box>
          <Box
            flex={1}
            height="400px"
            width="800px"
            margin="auto"
            textAlign="center"
            padding="10px
