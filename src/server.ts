import './loadEnvironment.js';
import express from 'express';
import {names as students} from './utils/students';

// Initialize express
const app = express();
const port = process.env.HOST_PORT ?? '3000';

app.use(express.json());

app.get('/ping', (req, res) => res.send('pong'));
app.listen(process.env.HOST_PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});


app.get("/", (req, res) => {
  res.redirect('students');
})

app.get("/students", (req, res) => {
  res.json({
    students: {
      length: students.length,
      names: students,
    }
  })
})
export default app;
