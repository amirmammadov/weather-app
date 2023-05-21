import { Box } from "@mui/material";
import DayDetail from "./DayDetail";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const DaysContainer = () => {
  const { currentData } = useSelector((store: RootState) => store);

  let days = currentData.forecast?.forecastday;

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "0.5rem",
          padding: "0.5rem",
          backgroundColor: "rgba(100,100,100,0.9)",
          borderRadius: "0.5rem",
          width: "100%",
          height: "10rem",
        }}
      >
        {days?.map((day, index) => (
          <DayDetail key={index} {...day} index={index} />
        ))}
      </Box>
    </>
  );
};

export default DaysContainer;
