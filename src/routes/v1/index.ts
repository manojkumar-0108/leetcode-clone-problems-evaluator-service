import express, { Router } from 'express';

import controllers from '../../controllers';

const v1Router: Router = express.Router();

v1Router.get('/ping', controllers.pingCheck('Server live!'));

export default v1Router;
