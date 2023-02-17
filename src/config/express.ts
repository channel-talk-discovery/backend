import express, { json, urlencoded } from 'express';
import compression from 'compression';
import cors from 'cors';
import methodOverride from 'method-override';
import router from '@/routes/index';
import errorHandler from '@/middleware/errorHandler';
import path from 'path';

const exp = () => {
  const app = express();

  app
    .use(json())
    .use(urlencoded({ extended: true }))
    .use(compression())
    .use(cors({
      origin: "*",
      credentials: true,
      optionsSuccessStatus: 200,
    }))
    .use(methodOverride())
  app.options('*', cors())

  app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads'), {
    setHeaders: function setHeaders(res, path, stat) {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET');
      res.header('Access-Control-Allow-Headers', 'Content-Type');
    }
  }));

  app.use(router);
  app.use(errorHandler);
  return app;
};

export default exp;
