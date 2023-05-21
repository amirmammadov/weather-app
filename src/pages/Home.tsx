import { useState, ChangeEvent, FormEvent } from "react";
import { Box, Typography } from "@mui/material";
import HoursContainer from "../components/HoursContainer";
import DaysContainer from "../components/DaysContainer";
import Summary from "../components/Summary";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useSelector, useDispatch } from "react-redux";
import InvertColorsIcon from "@mui/icons-material/InvertColors";
import AirIcon from "@mui/icons-material/Air";
import { getSearchValue } from "../features/apiSlice";
import { RootState } from "../store";

const Home = () => {
  const { currentData } = useSelector((store: RootState) => store);

  const [cityName, setCityName] = useState("");

  const dispatch = useDispatch();

  let icon = currentData.current?.condition.icon;
  let city = currentData.location?.name;
  let temp = currentData.current?.temp_c;
  let humidity = currentData.current?.humidity;
  let windSpeed = currentData.current?.wind_kph;
  let weatherCase = currentData.current?.condition?.text;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(getSearchValue(cityName));
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCityName(e.target.value);
  };

  return (
    <>
      <Box
        sx={{
          background: "url(../night.jpg) center center no-repeat",
          width: "100vw",
          height: "100vh",
          backgroundSize: "cover",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "2rem",
          padding: "0 5rem",
        }}
      >
        <form
          style={{
            display: "flex",
            flexDirection: "row",
            backgroundColor: "rgba(100,100,100,0.9)",
            color: "#fff",
            borderRadius: "0.5rem",
          }}
          onSubmit={handleSubmit}
        >
          <TextField
            placeholder="Enter City..."
            sx={{ border: "none", outline: "none", color: "#fff" }}
            value={cityName}
            onChange={handleChange}
          ></TextField>
          <Button sx={{ color: "#fff" }} type="submit">
            Submit
          </Button>
        </form>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "1rem",
              width: "45%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                gap: ".5rem",
                backgroundColor: "rgba(100,100,100,0.5)",
                padding: "0.5rem",
                borderRadius: "0.5rem",
              }}
            >
              <Box
                component="img"
                src={icon}
                alt="sun_image"
                width="5rem"
                height="auto"
                borderRadius="50%"
              />
              <Typography variant="h2" sx={{ color: "#fff", fontSize: "2rem" }}>
                {temp}°C
              </Typography>
              <Typography
                variant="h2"
                sx={{ color: "#fff", fontSize: "1.5rem" }}
              >
                {city}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "1rem",
                  color: "#fff",
                }}
              >
                <Typography variant="h3" sx={{ fontSize: "1.1rem" }}>
                  {weatherCase}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "1rem",
                  backgroundColor: "rgba(100,100,100,0.8)",
                  fontSize: "1.2rem",
                  color: "#fff",
                  padding: "0.5rem",
                  borderRadius: "0.5rem",
                  width: "80%",
                }}
              >
                <Box display="flex" alignItems="center" gap="0.2rem">
                  <InvertColorsIcon />
                  {humidity}%
                </Box>
                <Box display="flex" alignItems="center" gap="0.2rem">
                  <AirIcon />
                  {windSpeed} km/h
                </Box>
              </Box>
            </Box>
            <HoursContainer />
            <Summary />
          </Box>
          <Box
            sx={{
              width: "45%",
              height: "auto",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h2"
              sx={{
                color: "#fff",
                fontSize: "2.2rem",
                marginBottom: "0.2rem",
                backgroundColor: "rgba(100,100,100,0.9)",
                padding: "0.4rem",
                borderRadius: "0.5rem",
              }}
            >
              The next days
            </Typography>
            <DaysContainer />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Home;
