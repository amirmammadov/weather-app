import { Box, Typography } from "@mui/material";
import { HourDetailProps } from "../types/Interface";

const HourDetail = (props: HourDetailProps) => {
  let icon = props?.condition?.icon;
  let temp = props?.temp_c;
  let curHour = props?.curHour;

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "0.1rem",
          color: "#fff",
        }}
      >
        <Typography variant="h2" sx={{ fontSize: "1rem" }}>
          {curHour}:00
        </Typography>
        <Box
          component="img"
          src={icon}
          alt="sun"
          sx={{ width: "4rem", height: "auto", borderRadius: "50%" }}
        />
        <Typography variant="h2" sx={{ fontSize: "1rem" }}>
          {temp}°C
        </Typography>
      </Box>
    </>
  );
};

export default HourDetail;
