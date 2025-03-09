import React, { useEffect, useRef } from "react";
import { Box, Typography, Paper } from "@mui/material";

const ChatComponent = ({ messages }: { messages: { text: string; sender: string }[] }) => {
    const messagesEndRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    return (
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {messages.map((msg, index) => (
                <Paper
                    key={index}
                    elevation={3}
                    sx={{
                        maxWidth: "70%",
                        alignSelf: msg.sender === "user" ? "flex-end" : "flex-start",
                        backgroundColor: msg.sender === "user" ? "#007bff" : "rgba(255, 255, 255, 0.8)",
                        color: msg.sender === "user" ? "#fff" : "#000",
                        padding: "10px",
                        borderRadius: "10px",
                        backdropFilter: "blur(5px)",
                    }}
                >
                    <Typography variant="body1">{msg.text}</Typography>
                </Paper>
            ))}
            <div ref={messagesEndRef} />
        </Box>
    );
};

export default ChatComponent;
