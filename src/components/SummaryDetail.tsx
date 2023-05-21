import { Box, Typography } from "@mui/material";

const SummaryDetail = () => {
  return (
    <>
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
        <Box
          component="img"
          src="../public/sun.jpg"
          alt="sun"
          sx={{ width: "2rem", height: "auto", borderRadius: "50%" }}
        />
        <Typography variant="h2" sx={{ fontSize: "1rem" }}>
          min/max
        </Typography>
        <Typography variant="h2" sx={{ fontSize: "1rem" }}>
          24%
        </Typography>
      </Box>
    </>
  );
};

export default SummaryDetail;
