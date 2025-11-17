import SideMenu from "@/components/SideMenu";
import MainAppBar from "@/components/AppBar";
import MainContent from "@/components/MainContent";
import Box from "@mui/material/Box";

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
          gap: 1,
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
            gridColumn: " 2/span 3",
          }}
        >
          <MainContent />
        </Box>
        <Box
          sx={{
            gridArea: "sidecontent",
            backgroundColor: "red",
          }}
        >
          Side Content
        </Box>
      </Box>
    </Box>
  );
}
