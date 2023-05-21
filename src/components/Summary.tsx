import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import WbTwilightIcon from "@mui/icons-material/WbTwilight";
import { curDay, curMonth } from "../utils/currentDate";
import { RootState } from "../store";

const Summary = () => {
  const { currentData } = useSelector((store: RootState) => store);

  let maxTemp = currentData?.forecast?.forecastday[0]?.day?.maxtemp_c;
  let minTemp = currentData?.forecast?.forecastday[0]?.day?.mintemp_c;
  let sunrise = currentData?.forecast?.forecastday[0]?.astro?.sunrise;
  let sunset = currentData?.forecast?.forecastday[0]?.astro?.sunset;

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          height: "auto",
          gap: "1rem",
          padding: "0.5rem",
          backgroundColor: "rgba(100,100,100,0.9)",
          color: "#fff",
          borderRadius: "0.5rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Box sx={{ fontSize: "1.1rem" }}>Summary</Box>
          <Box sx={{ fontSize: "1.1rem" }}>
            {curMonth},{curDay}
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            gap: "1rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "0.3rem",
              color: "#fff",
            }}
          >
            <WbSunnyIcon
              sx={{ width: "2rem", height: "auto", borderRadius: "50%" }}
            />
            <Typography variant="h2" sx={{ fontSize: "0.8rem" }}>
              Sun raise
            </Typography>
            <Typography variant="h2" sx={{ fontSize: "0.8rem" }}>
              {sunrise}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "0.3rem",
              color: "#fff",
            }}
          >
            <ThermostatIcon
              sx={{ width: "2rem", height: "auto", borderRadius: "50%" }}
            />
            <Typography variant="h2" sx={{ fontSize: "0.8rem" }}>
              min/max
            </Typography>
            <Typography variant="h2" sx={{ fontSize: "0.8rem" }}>
              {minTemp}°C/
              {maxTemp}°C
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "0.3rem",
              color: "#fff",
            }}
          >
            <WbTwilightIcon
              sx={{ width: "2rem", height: "auto", borderRadius: "50%" }}
            />
            <Typography variant="h2" sx={{ fontSize: "0.8rem" }}>
              Sun set
            </Typography>
            <Typography variant="h2" sx={{ fontSize: "0.8rem" }}>
              {sunset}
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Summary;
