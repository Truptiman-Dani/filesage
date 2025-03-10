import React from "react";
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

const agents = [
    {
        name: "FileSage",
        description: "FileSage helps you get answers from files efficiently. With its interactive chat navigator, you can access, organize, and retrieve data effortlessly.",
        path: "/chat",
    },
    {
        name: "MarketIntel",
        description: "MarketIntel provides real-time market trends, competitor analysis, and insights to help businesses stay ahead in the industry.",
        path: "/market",
    },
    {
        name: "SalesGenie",
        description: "SalesGenie enhances sales productivity by providing deep insights into customer behaviors, deal tracking, and sales forecasting.",
        path: "/sales",
    },
    {
        name: "LogiTrack",
        description: "LogiTrack optimizes logistics operations by analyzing supply chain efficiencies, tracking shipments, and reducing operational bottlenecks.",
        path: "/logistics",
    },
    {
        name: "CompliSafe",
        description: "CompliSafe ensures regulatory compliance by analyzing legal documents, tracking policy changes, and automating risk assessments.",
        path: "/compliance",
    },
    {
        name: "FinAdvisor",
        description: "FinAdvisor provides real-time financial insights, budget management, and expense tracking to enhance business financial health.",
        path: "/finance",
    },
    {
        name: "LexiLegal",
        description: "LexiLegal streamlines legal research, contract analysis, and compliance monitoring to ensure accurate legal decision-making, enhance operational efficiency.",
        path: "/legal",
    },
    {
        name: "InvenMaster",
        description: "InvenMaster helps manage inventory efficiently by tracking stock levels, analyzing demand trends, and preventing shortages.",
        path: "/inventory",
    },
];

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
                backgroundImage: "url('/background.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                position: "relative",
                overflow: "hidden",
            }}
        >
            <AppBar position="static" sx={{ background: "rgba(252, 248, 248, 0.6)", backdropFilter: "blur(8px)", paddingX: 2 }}>
                <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <img src="/kreesalis.png" alt="Company Logo" style={{ height: "40px" }} />
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                        <IconButton sx={{ color: "#FFF" }}>
                            <AccountCircleIcon />
                        </IconButton>
                        <Button onClick={handleLogout} variant="contained" color="error" startIcon={<LogoutIcon />}>
                            Logout
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>
            <Box sx={{
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    color: "#FFF",
                    padding: 4,
                    textShadow: "2px 2px 8px rgba(0, 0, 0, 0.8)",
                }}
            >
                <Typography variant="h3" fontWeight="bold" sx={{ marginBottom: 3 }}>
                    Welcome, {username}! 🚀
                </Typography>
                <Box sx={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 4, width: "80%" }}>
                    {agents.map((agent) => (
                        <Card
                            key={agent.name}
                            sx={{
                                padding: 4,
                                borderRadius: 4,
                                background: "rgba(0, 0, 0, 0.6)",
                                backdropFilter: "blur(15px)",
                                textAlign: "center",
                                boxShadow: "0px 8px 30px rgba(0, 0, 0, 0.4)",
                                color: "white",
                            }}
                        >
                            <CardContent>
                                <Typography variant="h5" fontWeight="bold" sx={{ marginBottom: 2, color: "#FFD700" }}>
                                    {agent.name}
                                </Typography>
                                <Typography variant="body1" sx={{ marginBottom: 3, opacity: 0.9 }}>
                                    {agent.description}
                                </Typography>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    startIcon={<ChatIcon />}
                                    sx={{ fontSize: "16px", fontWeight: "bold", padding: "10px 20px" }}
                                    onClick={() => navigate(agent.path)}
                                >
                                    Open {agent.name}
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </Box>
            </Box>
        </Box>
    );
};

export default Dashboard;
