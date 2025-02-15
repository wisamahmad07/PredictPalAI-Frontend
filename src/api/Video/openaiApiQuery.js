import axios from "axios";

const openaiApiQuery =
  ({ baseUrl } = { baseUrl: "https://api.openai.com/v1" }) =>
  async ({ message }) => {
    try {
      const result = await axios.post(
        baseUrl + "/chat/completions",
        {
          model: "gpt-4o-mini",
          prompt: [{ role: "user", content: message }],
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
          },
        }
      );
      const reply = result.data.choices[0].message.content;
      console.log(reply);
      return { data: reply };
    } catch (error) {
      console.error("Error sending message to OpenAI:", error);
      return {
        error: {
          status: error.response?.status,
          data: error.response?.data || error.message,
        },
      };
    }
  };

export default openaiApiQuery;
