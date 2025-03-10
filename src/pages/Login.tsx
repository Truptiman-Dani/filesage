import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, TextField, Button, Typography, Paper, Grow } from "@mui/material";
import ImageSlideshow from "../components/ImageSlideshow";

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === "admin" && password === "password") {
      localStorage.setItem("user", username);
      navigate("/dashboard");
    } else {
      alert("Invalid credentials! Try username: admin, password: password");
    }
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: "url('/bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: 3,
        position: "relative",
      }}
    >
      {/* Dark Overlay for Readability */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0, 0, 0, 0.5)",
          backdropFilter: "blur(5px)",
        }}
      />

      {/* Wrap Everything Inside a Single Box */}
      <Box sx={{ position: "relative", zIndex: 1 }}>
        <Grow in={true} timeout={800}>
          <Paper
            elevation={6}
            sx={{
              maxWidth: 950,
              width: "90%",
              padding: 5,
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
              alignItems: "center",
              backdropFilter: "blur(10px)",
              backgroundColor: "rgba(255, 255, 255, 0.95)",
              borderRadius: 3,
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.3)",
            }}
          >
            {/* Left Section - Branding & Slideshow */}
            <Box sx={{ padding: 1, textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <Typography
                variant="h3"
                fontWeight="bold"
                sx={{
                  background: "linear-gradient(45deg, #1E88E5, #42A5F5)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                K-Insights
              </Typography>
              <Typography variant="body1" color="textSecondary" sx={{ marginTop: 1, maxWidth: 400 }}>
                K-Insights is a cutting-edge AI-powered platform designed to enhance business operations with intelligent agents tailored to various needs. From efficient file management to real-time market insights, K-Insights offers a suite of agents that empower businesses with actionable data and streamlined workflows
              </Typography>
              <Box sx={{ marginTop: 3, width: "100%", maxWidth: 380 }}>
                <ImageSlideshow />
              </Box>
              <Typography variant="body1" color="primary" fontWeight="bold" sx={{ marginTop: 2 }}>
                Secure | Fast | AI-Powered
              </Typography>
            </Box>

            {/* Right Section - Login Form */}
            <Grow in={true} timeout={1200}>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Paper
                  sx={{
                    padding: 5,
                    textAlign: "center",
                    background: "rgba(255, 255, 255, 0.95)",
                    backdropFilter: "blur(10px)",
                    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.3)",
                    borderRadius: 2,
                    margin: { xs: "auto", md: "initial" },
                    width: "90%",
                    maxWidth: 400,
                  }}
                  elevation={3}
                >
                  <Typography variant="h5" sx={{ marginBottom: 2 }}>
                    Login to FileSage
                  </Typography>
                  <TextField
                    fullWidth
                    label="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    margin="normal"
                  />
                  <TextField
                    fullWidth
                    label="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    margin="normal"
                  />
                  <Button
                    fullWidth
                    variant="contained"
                    sx={{
                      marginTop: 3,
                      padding: "12px",
                      fontSize: "16px",
                      background: "linear-gradient(45deg, #1E88E5, #42A5F5)",
                      "&:hover": {
                        background: "linear-gradient(45deg, #0D47A1, #1565C0)",
                      },
                    }}
                    onClick={handleLogin}
                  >
                    LOGIN
                  </Button>
                  <Typography variant="body2" color="textSecondary" sx={{ marginTop: 2 }}>
                    New here?{" "}
                    <a
                      href="/signup"
                      style={{
                        textDecoration: "none",
                        color: "#1976D2",
                        transition: "color 0.3s ease-in-out",
                      }}
                      onMouseOver={(e) => (e.currentTarget.style.color = "#0D47A1")}
                      onMouseOut={(e) => (e.currentTarget.style.color = "#1976D2")}
                    >
                      Sign up
                    </a>
                  </Typography>
                </Paper>
              </Box>
            </Grow>
          </Paper>
        </Grow>
      </Box>
    </Box>
  );
};

export default Login;
