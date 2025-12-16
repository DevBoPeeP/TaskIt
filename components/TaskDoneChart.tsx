import * as React from "react";
import { useState, useMemo } from "react";
import { LineChart, areaElementClasses } from "@mui/x-charts/LineChart";
import { Box, Stack, Tabs, Tab, Typography } from "@mui/material";
import { faker } from "@faker-js/faker";

interface LinearGradientDefsProps {
  id: string;
  stopColor1: string;
  stopOpacity1?: number;
  stopColor2: string;
  stopOpacity2?: number;
}

export const LinearGradientDefs: React.FC<LinearGradientDefsProps> = ({
  id,
  stopColor1,
  stopOpacity1 = 0.6,
  stopColor2,
  stopOpacity2 = 0.05,
}) => (
  <defs>
    <linearGradient id={id} x1="0" x2="0" y1="0" y2="1">
      <stop offset="0%" stopColor={stopColor1} stopOpacity={stopOpacity1} />
      <stop offset="100%" stopColor={stopColor2} stopOpacity={stopOpacity2} />
    </linearGradient>
  </defs>
);

const monthlyData = [
  { label: "Jan", value1: 60, value2: 175 },
  { label: "Feb", value1: 65, value2: 330 },
  { label: "Mar", value1: 165, value2: 360 },
  { label: "Apr", value1: 120, value2: 160 },
  { label: "May", value1: 50, value2: 90 },
  { label: "Jun", value1: 120, value2: 160 },
  { label: "Jul", value1: 200, value2: 120 },
  { label: "Aug", value1: 310, value2: 370 },
  { label: "Sep", value1: 190, value2: 260 },
  { label: "Oct", value1: 230, value2: 165 },
  { label: "Nov", value1: 30, value2: 230 },
  { label: "Dec", value1: 25, value2: 130 },
];

// Generate fake data for daily and weekly in ascending order
const generateDailyData = () => {
  const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  return weekdays.map((day) => ({
    label: day,
    value1: faker.number.int({ min: 10, max: 250 }),
    value2: faker.number.int({ min: 50, max: 350 }),
  }));
};

const generateWeeklyData = () => {
  return Array.from({ length: 12 }).map((_, i) => ({
    label: `Week ${i + 1}`, // Week 1, Week 2, ..., Week 12
    value1: faker.number.int({ min: 50, max: 300 }),
    value2: faker.number.int({ min: 100, max: 400 }),
  }));
};

export default function TaskDoneChart() {
  const [selectedTab, setSelectedTab] = useState(2); // Default to 'Monthly'

  const dailyData = useMemo(generateDailyData, []);
  const weeklyData = useMemo(generateWeeklyData, []);

  const currentData = useMemo(() => {
    switch (selectedTab) {
      case 0:
        return dailyData;
      case 1:
        return weeklyData;
      case 2:
      default:
        return monthlyData;
    }
  }, [selectedTab, dailyData, weeklyData]);

  const chartLabels = currentData.map((d) => d.label);
  const value1Data = currentData.map((d) => d.value1);
  const value2Data = currentData.map((d) => d.value2);

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

  const tabs = ["Daily", "Weekly", "Monthly"];

  return (
    <Box
      sx={{
        backgroundColor: "white",
        p: 4,
        borderRadius: "8px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        width: "100%",
        height: "35rem",
      }}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        mb={4}
      >
        <Typography
          variant="h4"
          component="h1"
          sx={{ fontSize: "32px", fontWeight: 600, color: "#1a1a1a", m: 0 }}
        >
          Task Done
        </Typography>
        <Tabs
          value={selectedTab}
          onChange={handleTabChange}
          aria-label="chart data time period tabs"
          sx={{
            borderBottom: 2,
            borderColor: "divider",
            "& .MuiTabs-indicator": {
              backgroundColor: "#2196F3",
              height: 3,
            },
          }}
        >
          {tabs.map((tab, index) => (
            <Tab
              key={tab}
              label={tab}
              sx={{
                padding: "12px 24px",
                fontSize: "16px",
                fontWeight: 500,
                textTransform: "none",
                color: selectedTab === index ? "#2196F3" : "#666",
                "&.Mui-selected": {
                  color: "#2196F3",
                },
              }}
            />
          ))}
        </Tabs>
      </Stack>

      <Box sx={{ width: "100%", height: 500 }}>
        <LineChart
          xAxis={[
            {
              data: chartLabels,
              scaleType: "point",
              disableLine: true,
              disableTicks: true,
              tickLabelStyle: {
                fill: "#999",
                fontSize: 14,
              },
            },
          ]}
          yAxis={[
            {
              min: 0,
              max: 400,
              disableLine: true,
              disableTicks: true,
              tickLabelStyle: {
                fill: "#999",
                fontSize: 14,
              },
            },
          ]}
          series={[
            {
              data: value1Data,
              label: "Series 1",
              area: true,
              showMark: true,
              color: "#5B8DEF",
              curve: "natural",
            },
            {
              data: value2Data,
              label: "Series 2",
              area: true,
              showMark: true,
              color: "#7C5CDB",
              curve: "natural",
            },
          ]}
          height={400}
          grid={{ horizontal: true }}
          sx={{
            "& .MuiChartsGrid-line": {
              stroke: "#e0e0e0",
              strokeDasharray: "4 4",
              strokeWidth: 1,
            },
            [`& .${areaElementClasses.root}:nth-of-type(1)`]: {
              fill: "url(#gradient1)",
              filter: "none",
            },
            [`& .${areaElementClasses.root}:nth-of-type(2)`]: {
              fill: "url(#gradient2)",
              filter: "none",
            },
          }}
        >
          <LinearGradientDefs
            id="gradient1"
            stopColor1="#5B8DEF"
            stopOpacity1={0.6}
            stopColor2="#5B8DEF"
            stopOpacity2={0.05}
          />
          <LinearGradientDefs
            id="gradient2"
            stopColor1="#7C5CDB"
            stopOpacity1={0.6}
            stopColor2="#7C5CDB"
            stopOpacity2={0.05}
          />
        </LineChart>
      </Box>
    </Box>
  );
}
