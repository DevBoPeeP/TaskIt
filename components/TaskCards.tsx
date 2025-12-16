import { Card, CardContent, Box, Typography } from "@mui/material";
import StarBorderOutlined from "@mui/icons-material/StarBorderOutlined";
import { motion } from "framer-motion";
import Sparkline from "@/ui/line";

export default function TaskCards({ count = "08", trendColor = "#9b87f5" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{ width: "100%" }}
    >
      <Card
        sx={{
          width: "100%",
          maxWidth: { xs: "100%", sm: 300, md: 340, lg: 360, xl: 380 },
          boxShadow: 3,
          borderRadius: 3,
          mx: "auto", // keeps centered on small screens
        }}
      >
        <CardContent
          sx={{
            p: { xs: 2, sm: 2.5, md: 3 },
          }}
        >
          {/* Header */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mb: { xs: 1.5, sm: 2 },
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <StarBorderOutlined
                sx={{
                  fontSize: { xs: 18, sm: 20 },
                  color: "text.disabled",
                }}
              />
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ fontSize: { xs: "0.75rem", sm: "0.85rem" } }}
              >
                Task Completed
              </Typography>
            </Box>

            <Typography
              sx={{
                fontSize: { xs: "1.8rem", sm: "2rem", md: "2.2rem" },
                fontWeight: 700,
              }}
            >
              {count}
            </Typography>
          </Box>

          {/* Sparkline + Stats */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: { xs: 1.5, sm: 2 },
              mt: { xs: 1, sm: 1.5 },
            }}
          >
            {/* Sparkline area */}
            <Box sx={{ flex: 1 }}>
              <Sparkline color={trendColor} />
            </Box>

            {/* Right Info */}
            <Box
              sx={{
                textAlign: "right",
                whiteSpace: "nowrap",
              }}
            >
              <Typography
                variant="body2"
                fontWeight={600}
                component="span"
                sx={{ fontSize: { xs: "0.85rem", sm: "0.95rem" } }}
              >
                10+
              </Typography>

              <Typography
                variant="caption"
                color="text.secondary"
                display="block"
                sx={{ fontSize: { xs: "0.65rem", sm: "0.75rem" } }}
              >
                more
              </Typography>

              <Typography
                variant="caption"
                color="text.disabled"
                display="block"
                sx={{ fontSize: { xs: "0.6rem", sm: "0.7rem" } }}
              >
                from last week
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
}
