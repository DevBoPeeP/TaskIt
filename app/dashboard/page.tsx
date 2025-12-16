"use client";

import SideMenu from "@/components/SideMenu";
import MainAppBar from "@/components/AppBar";
import MainContent from "@/components/MainContent";
import Box from "@mui/material/Box";
import SideContent from "@/components/SideContent";

export default function DashboardHomePage() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        p: 1,
        pt: "64px",
        fontWeight: 700,
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "80px 1fr 1fr 1fr",
          gridTemplateRows: "auto",
          gridTemplateAreas: `"header header header header"
          "sidemenu main main sidecontent"`,
        }}
      >
        <Box
          sx={{
            gridArea: "header",
          }}
        >
          <MainAppBar />
        </Box>
        <Box
          sx={{
            gridArea: "sidemenu",
          }}
        >
          <SideMenu />
        </Box>
        <Box
          sx={{
            gridArea: "main",
            gridColumn: " 2 / span 2",
          }}
        >
          <MainContent />
        </Box>
        <Box
          sx={{
            marginLeft: 2,
            gridArea: "sidecontent",
            gridColumn: "span 3",
          }}
        >
          <SideContent />
        </Box>
      </Box>
    </Box>
  );
}
