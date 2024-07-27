import express, { Express } from 'express';

import serverConfig from './config/server.config';
import apiRouter from './routes';

const app: Express = express();
const PORT = serverConfig.PORT;
const serverName: string = 'Dev Server';

app.use('/api', apiRouter);

app.listen(PORT, () => {
  console.log(`Server:[${serverName}] started at *: ${PORT}`);
});
