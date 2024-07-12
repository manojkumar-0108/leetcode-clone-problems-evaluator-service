import express, { Express } from 'express';
import serverConfig from './config/server.config';

const app:Express = express();
const PORT = serverConfig.PORT;
const serverName: string = "Dev Server";

app.listen(PORT, () => {
    console.log(`Server:[${serverName}] started at *: ${PORT}`); 
});

