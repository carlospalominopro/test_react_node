import express, { Request, Response, Application } from "express";
import routes from '../routes/api.routes';

import * as bodyParser from 'body-parser'
import db from '../models';

import cors from 'cors';

const app: Application = express();

const PORT = process.env.PORT || 8000;

const allowedOrigins = ['http://localhost:3000'];

const options: cors.CorsOptions = {
  origin: allowedOrigins
};

app.use(cors(options));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/api',routes);

db.sequelize.sync().then(() => {

  app.listen(PORT, (): void => {
    console.log(`DATABASE CONECTED SUCCESSFULLY `);
    console.log(`Server Running : http://localhost:${PORT} `);
  });
  
}).catch(
  err => {
    console.log(`DATABASE CONECTED SUCCESSFULLY `);
    console.log(err);    
  }
)
