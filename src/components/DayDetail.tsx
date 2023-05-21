import { Box, Typography } from "@mui/material";
import { dayNames, curDay } from "../utils/currentDate";
import { DayDetailProps } from "../types/Interface";

const DayDetail = (props: DayDetailProps) => {
  let icon = props?.day?.condition?.icon;
  let minTemp = props?.day?.mintemp_c.toFixed(0);
  let maxTemp = props?.day?.maxtemp_c.toFixed(0);
  let indexOfDay = props?.index;

  const DATE = new Date(props?.date);
  let month = DATE.getMonth() + 1;
  month = month < 10 ? Number(`0${month}`) : month;
  let day = DATE.getDate();
  day = day < 10 ? Number(`0${day}`) : day;

  return (
    <>
      <Box
        sx={[
          {
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "0.3rem",
            color: "#fff",
          },
          curDay == day && {
            backgroundColor: "rgba(60,60,60,0.5)",
            padding: "0.5rem",
            borderRadius: "0.5rem",
          },
        ]}
      >
        <Typography variant="h2" sx={{ fontSize: "1rem" }}>
          {dayNames[indexOfDay]}
        </Typography>
        <Typography variant="h2" sx={{ fontSize: "1rem" }}>
          {month}/{day}
        </Typography>
        <Box
          component="img"
          src={icon}
          alt="sun"
          sx={{ width: "2rem", height: "auto", borderRadius: "50%" }}
        />
        <Typography variant="h2" sx={{ fontSize: "0.9rem" }}>
          {minTemp}°C/{maxTemp}°C
        </Typography>
      </Box>
    </>
  );
};

export default DayDetail;
