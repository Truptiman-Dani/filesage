export const fetchAnswer = async (question: string): Promise<string> => {
    try {
      const response = await fetch("http://localhost:5000/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question }),
      });
  
      if (!response.ok) throw new Error("Failed to fetch response");
  
      const data = await response.json();
      return data.answer || "No answer found.";
    } catch (error) {
      console.error("API Error:", error);
      return "Error: Unable to fetch answer.";
    }
  };
  