import { Box } from "@mui/material";
import HourDetail from "./HourDetail";
import { useSelector } from "react-redux";
import { curHour, curDay, curMonth } from "../utils/currentDate";
import { RootState } from "../store";

const HoursContainer = () => {
  const { currentData } = useSelector((store: RootState) => store);

  let allHours = currentData?.forecast?.forecastday[0]?.hour;

  let hours = allHours?.filter((hour, index) => {
    return index + 1 >= curHour;
  });

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "1rem",
          width: "auto",
          height: "auto",
          borderRadius: "0.5rem",
          color: "#fff",
          padding: "0.5rem",
          backgroundColor: "rgba(100,100,100,0.9)",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Box sx={{ fontSize: "1.1rem" }}>Today</Box>
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
            overflowX: "scroll",
          }}
        >
          {hours?.map((hour, index) => (
            <HourDetail key={index} {...hour} curHour={curHour + index} />
          ))}
        </Box>
      </Box>
    </>
  );
};

export default HoursContainer;
