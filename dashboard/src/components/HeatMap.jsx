import { ResponsiveHeatMap } from "@nivo/heatmap";
import { autocompleteClasses, useTheme } from "@mui/material";
import { tokens } from "../theme";

const HeatMap = ({ data /* see data tab */ }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <ResponsiveHeatMap
      data={data}
      margin={{ top: 60, right: 90, bottom: 60, left: 90 }}
      // valueFormat=">-.2s"
      xOuterPadding={0.2}
      xInnerPadding={0.2}
      yOuterPadding={0.2}
      yInnerPadding={0.2}
      theme={{
        axis: {
          domain: {
            line: {
              stroke: colors.grey[100],
            },
          },
          legend: {
            text: {
              fill: colors.grey[100],
            },
          },
          ticks: {
            line: {
              stroke: colors.grey[100],
              strokeWidth: 1,
            },
            text: {
              fill: colors.grey[100],
            },
          },
        },
        legends: {
          title: {
            text: {
              fontSize: 11,
              fill: "#000000",
            },
          },
          ticks: {
            text: {
              fontSize: 11,
              fill: "#000000",
            },
          },
        },
        tooltip: {
          container: {
            color: colors.primary[500],
          },
        },
      }}
      axisTop={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: -90,
        legend: "",
        legendOffset: 46,
      }}
      axisRight={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legendPosition: "middle",
        legendOffset: 70,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legendPosition: "middle",
        legendOffset: -72,
      }}
      colors={{
        type: "diverging",
        scheme: "blues",
        minValue: 0,
        maxValue: 50,
        divergeAt: 0.5,
        text: "#ffffff",
      }}
      emptyColor="#555555"
      legends={[
        {
          anchor: "bottom",
          translateX: 0,
          translateY: 30,
          length: 400,
          thickness: 8,
          direction: "row",
          tickPosition: "after",
          tickSize: 3,
          tickSpacing: 4,
          tickOverlap: false,
          tickFormat: ">-.2s",
          title: "Nº Personas",
          titleAlign: "start",
          titleOffset: 4,
        },
      ]}
    />
  );
};

export default HeatMap;
