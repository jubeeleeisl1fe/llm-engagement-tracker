const express = require('express');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');
const dotenv = require('dotenv');
const OpenAI = require('openai');

dotenv.config();

const prisma = new PrismaClient();
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (_, res) => {
  res.send('Server is working!');
});

app.get('/api/engagement', async (_, res) => {
  try {
    const data = await prisma.engagement.findMany();
    res.json(data);
  } catch (err) {
    console.error('Error fetching engagement:', err);
    res.status(500).json({ error: 'Failed to fetch engagement data' });
  }
});

app.get('/api/ai_summary', async (_, res) => {
  try {
    const data = await prisma.engagement.findMany();
    const prompt = `Summarize this user engagement data:\n${JSON.stringify(data, null, 2)}`;

    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }],
    });

    const summary = completion.choices[0].message?.content;
    res.json({ summary });
  } catch (err) {
    console.error('AI Summary Error:', err);
    res.status(500).json({ error: 'Failed to generate AI summary' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
