import express from 'express';

const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => res.send("Herro Worrd!"));

app.listen(port, () => {  console.log(`App listening at http://localhost:${port}`)});