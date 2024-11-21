import ollama from "ollama";
import fs from "fs";

async function analyzeImage(imagePath) {
  try {
    // Read the image file
    const buffer = await fs.promises.readFile(imagePath);

    // Convert buffer to base64
    const base64Image = buffer.toString("base64");

    // Make the API call
    const response = await ollama.chat({
      model: "llama3.2-vision", // Use llama3.2-vision model for vision tasks
      messages: [
        {
          role: "user",
          content: "hello?",
        },
      ],
      stream: false, // Set to true if you want streaming responses
    });

    console.log("Response:", response);
    return response;
  } catch (error) {
    console.error("Error analyzing image:", error);
    throw error;
  }
}

// Usage
analyzeImage("./images/nic.png").catch((error) => {
  console.error("Failed to analyze image:", error);
});
