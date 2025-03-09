import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  TextField,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LogoutIcon from "@mui/icons-material/Logout";
import SendIcon from "@mui/icons-material/Send";
import ChatComponent from "../components/Chat";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import FolderIcon from "@mui/icons-material/Folder";
import HistoryIcon from "@mui/icons-material/History"; // Chat History Icon

const Chat = () => {
  const navigate = useNavigate();
  const username = localStorage.getItem("user") || "User";
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    { text: "Hello! How can I assist you?", sender: "bot" }
  ]);

  // File Upload State
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  // Chat History State
  const [chatHistory, setChatHistory] = useState(["Session 1", "Session 2"]);
  const [selectedChat, setSelectedChat] = useState("Session 1");

  // Sidebar States
  const [historyOpen, setHistoryOpen] = useState(false);
  const [filesOpen, setFilesOpen] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("user")) navigate("/login");
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const sendMessage = () => {
    if (message.trim()) {
      const newMessage = { text: message, sender: "user" };
      setMessages((prev) => [...prev, newMessage]);

      // Simulated bot response (replace with an API call)
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { text: "I'm here to help! 😊", sender: "bot" }
        ]);
      }, 1000);

      setMessage("");
    }
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const filesArray = Array.from(event.target.files);
      setUploadedFiles((prev) => [...prev, ...filesArray]);
    }
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundImage: "url('/chat-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Top Bar */}
      <AppBar
        position="static"
        sx={{
          background: "rgba(255, 255, 255, 0.2)",
          backdropFilter: "blur(10px)",
          boxShadow: "none",
          paddingX: 2,
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* Left Section: Back Button & Logo */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <IconButton onClick={() => navigate(-1)} sx={{ color: "#fff" }}>
              <ArrowBackIcon />
            </IconButton>
            <Typography variant="h6" fontWeight="bold" color="#fff">
              <img src="/kreesalis.png" alt="Company Logo" style={{ height: "40px" }} />
            </Typography>
          </Box>

          {/* Right Section: Profile & Logout */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <IconButton sx={{ color: "#fff" }}>
              <AccountCircleIcon />
            </IconButton>
            <Button
              onClick={handleLogout}
              variant="contained"
              color="error"
              startIcon={<LogoutIcon />}
            >
              Logout
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Chat Area */}
      <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 3 }}>
        <Box
          sx={{
            width: "100%",
            maxWidth: "900px",
            height: "70vh",
            overflowY: "auto",
            padding: 3,
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            backdropFilter: "blur(10px)",
            borderRadius: 3,
            boxShadow: "0px 2px 10px rgba(255,255,255,0.2)",
          }}
        >
          <ChatComponent messages={messages} />
        </Box>
      </Box>

      {/* Chat Input + Buttons */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          padding: 2,
          background: "rgba(255, 255, 255, 0.2)",
          backdropFilter: "blur(10px)",
          boxShadow: "0px -2px 10px rgba(255,255,255,0.2)",
        }}
      >
        <Box sx={{ display: "flex", width: "900px", alignItems: "center", gap: 2 }}>
          {/* Chat History Toggle */}
          <IconButton onClick={() => setHistoryOpen(!historyOpen)} sx={{ color: "#fff" }}>
            <HistoryIcon />
          </IconButton>

          <TextField
            fullWidth
            variant="outlined"
            placeholder="Type a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && sendMessage()}
            sx={{ backgroundColor: "#fff", borderRadius: "10px" }}
          />

          {/* File Upload Button */}
          <input
            type="file"
            multiple
            onChange={handleFileUpload}
            style={{ display: "none" }}
            id="file-upload"
          />
          <label htmlFor="file-upload">
            <IconButton component="span" sx={{ color: "#fff" }}>
              <AttachFileIcon />
            </IconButton>
          </label>

          {/* File Section Toggle */}
          <IconButton onClick={() => setFilesOpen(!filesOpen)} sx={{ color: "#fff" }}>
            <FolderIcon />
          </IconButton>

          {/* Send Button */}
          <Button variant="contained" onClick={sendMessage} startIcon={<SendIcon />}>
            Send
          </Button>
        </Box>
      </Box>

      {/* Left Sidebar: Chat History */}
      <Drawer
        variant="persistent"
        anchor="left"
        open={historyOpen}
        sx={{ "& .MuiDrawer-paper": { width: 250, backgroundColor: "#1E1E2E", color: "#FFF" } }}
      >
        <List>
          {chatHistory.map((chat, index) => (
            <ListItem component="button" key={index} onClick={() => setSelectedChat(chat)}>
              <ListItemText primary={chat} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Right Sidebar: Uploaded Files */}
      <Drawer
        variant="persistent"
        anchor="right"
        open={filesOpen}
        sx={{ "& .MuiDrawer-paper": { width: 250, backgroundColor: "#1E1E2E", color: "#FFF" } }}
      >
        <List>
          {uploadedFiles.map((file, index) => (
            <ListItem key={index}>
              <FolderIcon sx={{ marginRight: 1 }} />
              <ListItemText primary={file.name} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};

export default Chat;
