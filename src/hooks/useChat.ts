import { useState } from "react";
import { create } from "zustand";
import { fetchAnswer } from "../api/api";

type Message = {
  sender: "User" | "Bot";
  text: string;
};

type ChatStore = {
  chatHistory: Message[];
  sendMessage: (message: string) => void;
};

export const useChat = create<ChatStore>((set) => ({
  chatHistory: [],
  sendMessage: async (message: string) => {
    set((state) => ({
      chatHistory: [...state.chatHistory, { sender: "User", text: message }],
    }));

    // Fetch the answer from the backend API
    try {
      const botResponse = await fetchAnswer(message);
      set((state) => ({
        chatHistory: [...state.chatHistory, { sender: "User", text: message }, { sender: "Bot", text: botResponse }],
      }));
    } catch (error) {
      console.error("Error fetching answer:", error);
      set((state) => ({
        chatHistory: [...state.chatHistory, { sender: "User", text: message }, { sender: "Bot", text: "Sorry, I couldn't fetch an answer." }],
      }));
    }
  },
}));
