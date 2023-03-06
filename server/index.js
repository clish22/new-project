//  RESTFUL api express server
const express = require('express');
const app = express();
const { OpenAIApi, Configuration } = require('openai');
// const cors = require('cors');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const port = process.env.PORT || 3001;

// middleware
// app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('../client/build'));

// routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

// fetch data from OpenAI API gpt-3.5-turbo and send back to client as JSON
app.post('/api/chat', async (req, res) => {
  try {
    const { prompt } = req.body;
    const config = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(config);
    const response = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }],
    });
    res.json(response.data.choices[0].message.content);
  } catch (error) {
    console.log(error);
  }
});

// start server
app.listen(port, () => console.log(`Listening on http://localhost:${port}/`));
