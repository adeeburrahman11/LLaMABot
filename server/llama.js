// const axios = require("axios");

// const generateResponse = async (input) => {
//   try {
//     const response = await axios.post(
//       "https://api-inference.huggingface.co/models/meta-llama/Meta-Llama-3.1-8B", // Replace <model-name>
//       { inputs: input },
//       {
//         headers: {
//           Authorization: `Bearer ${process.env.HUGGING_FACE_API_KEY}`, // Use your token
//         },
//       }
//     );
//     return response.data.generated_text || "No response";
//   } catch (error) {
//     console.error("Error fetching from LLaMA API:", error);
//     return "Error fetching response";
//   }
// };

const generateResponse = async (input) => {
  // Replace this mock with actual LLaMA 3.1 8b model integration
  return `This is a mock response to: "${input}"`;
};

module.exports = generateResponse;
