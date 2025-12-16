"use client";

import React from "react";
import {
  Drawer,
  Divider,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import SplitscreenIcon from "@mui/icons-material/Splitscreen";
import GroupsIcon from "@mui/icons-material/Groups";
import SettingsSuggestTwoToneIcon from "@mui/icons-material/SettingsSuggestTwoTone";
import Link from "next/link";

export default function SideMenu() {
  const [open, setOpen] = React.useState(false);

  const handleMouseEnter = () => setOpen(true);
  const handleMouseLeave = () => setOpen(false);

  const menuRoute = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Projects", path: "/project" },
    { name: "Tasks", path: "/task" },
    { name: "Team", path: "/team" },
    { name: "Settings", path: "/settings" },
  ];
  const menuIcons = [
    <GridViewRoundedIcon />,
    <SplitscreenIcon />,
    <FormatListBulletedIcon />,
    <GroupsIcon />,
    <SettingsSuggestTwoToneIcon />,
  ];

  return (
    <Drawer
      variant="permanent"
      open={open}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      PaperProps={{
        sx: {
          width: open ? 240 : 100,
          height: "100vh",
          transition: "width 0.3s ease",
          overflowX: "hidden",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "stretch",
        },
      }}
    >
      <Box
        sx={{
          mt: 2,
        }}
      >
        <List>
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <GridViewRoundedIcon />
              </ListItemIcon>
              {open && <ListItemText primary="Dashboard" />}
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <SplitscreenIcon />
              </ListItemIcon>
              {open && <ListItemText primary="Projects" />}
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <FormatListBulletedIcon />
              </ListItemIcon>
              {open && <ListItemText primary="Tasks" />}
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <GroupsIcon />
              </ListItemIcon>
              {open && <ListItemText primary="Teams" />}
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <SettingsSuggestTwoToneIcon />
              </ListItemIcon>
              {open && <ListItemText primary="Settings" />}
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
}
