import express from 'express';
import { Server } from 'http';

const port = 3000;
const app = express();
const server = new Server(app);

app.use('/', express.static('static'));

server.listen(port, () => {
  console.log(`listen port: ${port}`);
})
