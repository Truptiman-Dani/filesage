import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    AppBar,
    Toolbar,
    IconButton,
    Box,
    Typography,
    Button,
    Card,
    CardContent,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import ChatIcon from "@mui/icons-material/Chat";

const Dashboard = () => {
    const navigate = useNavigate();
    const username = localStorage.getItem("user") || "User";

    const handleLogout = () => {
        localStorage.removeItem("user");
        navigate("/login");
    };

    return (
        <Box
            sx={{
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                backgroundImage: "url('/background.jpg')", // Change to your actual image
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
                    backdropFilter: "blur(5px)",
                    paddingX: 2,
                }}
            >
                <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
                    {/* Left: Company Logo */}
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <img src="/kreesalis.png" alt="Company Logo" style={{ height: "40px" }} />
                    </Box>

                    {/* Right: Profile & Logout */}
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                        <Typography variant="body1" sx={{ color: "#FFF", fontWeight: "bold" }}>
                            {username}
                        </Typography>
                        <IconButton sx={{ color: "#FFF" }}>
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

            {/* Main Content */}
            <Box
                sx={{
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    color: "#FFF",
                    textShadow: "2px 2px 8px rgba(0, 0, 0, 0.7)",
                }}
            >
                {/* Welcome Message */}
                <Card
                    sx={{
                        padding: 3,
                        borderRadius: 3,
                        background: "rgba(255, 255, 255, 0.2)",
                        backdropFilter: "blur(10px)",
                        width: "50%",
                        marginBottom: 4,
                    }}
                >
                    <CardContent>
                        <Typography variant="h4" fontWeight="bold">
                            Welcome, {username}! 🚀
                        </Typography>
                        <Typography variant="body1" sx={{ marginTop: 1 }}>
                            Experience the power of **FileSage Chat Navigator**.
                        </Typography>
                    </CardContent>
                </Card>

                {/* FileSage Chat Navigator Box */}
                <Box
                    sx={{
                        width: "60%",
                        background: "rgba(255, 255, 255, 0.2)",
                        backdropFilter: "blur(10px)",
                        padding: 3,
                        borderRadius: 3,
                        textAlign: "center",
                        boxShadow: "0px 5px 20px rgba(0, 0, 0, 0.3)",
                    }}
                >
                    <Typography variant="h5" fontWeight="bold" sx={{ marginBottom: 2 }}>
                        FileSage
                    </Typography>
                    <Typography variant="body1" sx={{ marginBottom: 3 }}>
                        FileSage helps you get answers from files efficiently. With its interactive chat navigator, you can access, organize, and retrieve data effortlessly. Start now and experience the power of intelligent file management.
                    </Typography>
                    <Button
                        variant="contained"
                        color="primary"
                        startIcon={<ChatIcon />}
                        sx={{ fontSize: "18px", fontWeight: "bold" }}
                        onClick={() => navigate("/chat")}
                    >
                        Open FileSage Chat
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

export default Dashboard;
