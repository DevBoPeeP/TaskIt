"use client";

import React from "react";
import { Box, ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import TaskCards from "./TaskCards";
import TaskDoneChart from "./TaskDoneChart";

export default function MainContent() {
  const theme = React.useMemo(
    () =>
      createTheme({
        typography: { fontFamily: "Inter, Helvetica, Arial, sans-serif" },
      }),
    []
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          p: { xs: 2, sm: 4 },
          minHeight: "100vh",
          bgcolor: "#f3f4f8",
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            },
            gap: 2,
            alignItems: "start",
            width: "100%",
            mx: "auto",
          }}
        >
          <TaskCards count={"08"} trendColor="#9b87f5" />
          <TaskCards count={"10"} trendColor="#3ec4f0" />
          <TaskCards count={"10"} trendColor="#fb7185" />
        </Box>
        <Box sx={{ mt: 8 }}>
          <TaskDoneChart />
        </Box>
      </Box>
    </ThemeProvider>
  );
}
