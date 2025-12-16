"use client";

import React from "react";
import {
  Box,
  Typography,
  Avatar,
  TextField,
  Chip,
  IconButton,
  Tooltip,
  Button,
  Card,
  CardContent,
  Stack,
  Divider,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";

export default function sideContent() {
  return (
    <Box
      sx={{
        width: 350,
        p: 3,

        bgcolor: "white",
        fontFamily: "Inter, sans-serif",
      }}
    >
      {/* Today's Schedule */}
      <Typography variant="h6" sx={{ fontWeight: 700 }}>
        Today's Schedule
      </Typography>

      <Box sx={{ mt: 1 }}>
        <Typography
          variant="subtitle2"
          sx={{ color: "#5A6270", textDecoration: "underline" }}
        >
          30 minute call with Client
        </Typography>
        <Typography variant="body2" sx={{ mt: 0.5 }}>
          Project Discovery Call
        </Typography>

        <Card
          sx={{
            mt: 2,
            borderRadius: 3,
            bgcolor: "#00C1FF",
            color: "white",
            p: 1.5,
          }}
        >
          <Stack direction="row" alignItems="center" spacing={1}>
            <Stack direction="row" spacing={-1}>
              {["A", "B", "C", "D", "R"].map((x, i) => (
                <Avatar
                  key={i}
                  sx={{ width: 28, height: 28, border: "2px solid white" }}
                >
                  {x}
                </Avatar>
              ))}
            </Stack>
            <Typography variant="body2">28:35</Typography>
            <Button
              variant="contained"
              sx={{ ml: "auto", bgcolor: "white", color: "#00C1FF" }}
            >
              📞
            </Button>
          </Stack>
        </Card>
      </Box>

      <Divider sx={{ my: 3 }} />

      {/* Messages */}
      <Typography variant="h6" sx={{ fontWeight: 700 }}>
        Messages
      </Typography>

      {[
        {
          name: "Cris Morich",
          msg: "Hi Angelina! How are You?",
          color: "gold",
        },
        { name: "Charmie", msg: "Do you need that design?", color: "red" },
        {
          name: "Jason Mandala",
          msg: "What is the price of hourly...",
          color: "lightblue",
        },
        { name: "Charlie Chu", msg: "Awsome design!!", color: "orange" },
      ].map((item, i) => (
        <Stack key={i} direction="row" spacing={2} sx={{ mt: 2 }}>
          <Avatar sx={{ bgcolor: item.color }}>{item.name[0]}</Avatar>
          <Box>
            <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
              {item.name}
            </Typography>
            <Typography variant="body2" sx={{ color: "#5A6270" }}>
              {item.msg}
            </Typography>
          </Box>
        </Stack>
      ))}

      <Divider sx={{ my: 3 }} />

      {/* New Task */}
      <Typography variant="h6" sx={{ fontWeight: 700 }}>
        New Task
      </Typography>

      <Typography variant="subtitle2" sx={{ fontWeight: 500, mt: 1 }}>
        Task Title
      </Typography>

      <TextField
        fullWidth
        placeholder="Create new"
        size="small"
        sx={{ mt: 1, bgcolor: "#F5F7FA", borderRadius: 2 }}
      />

      {/* Emojis */}
      <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
        {["🎉", "🔥", "😄", "😍", "😉", "🤩", "😎", "😁"].map((emoji, i) => (
          <IconButton key={i} size="small">
            <Typography>{emoji}</Typography>
          </IconButton>
        ))}
      </Stack>

      {/* Collaborators */}
      <Typography variant="subtitle2" sx={{ fontWeight: 500, mt: 2 }}>
        Add Collaborators
      </Typography>

      <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
        <Chip label="Angela" onDelete={() => {}} avatar={<Avatar>A</Avatar>} />
        <Chip label="Chris" onDelete={() => {}} avatar={<Avatar>C</Avatar>} />
        <IconButton
          sx={{
            bgcolor: "#00C1FF",
            color: "white",
            width: 32,
            height: 32,
            ":hover": { bgcolor: "#00A4D6" },
          }}
        >
          <AddIcon />
        </IconButton>
      </Stack>
    </Box>
  );
}
