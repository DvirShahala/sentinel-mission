import express from "express";
import * as bodyParser from "body-parser";
import { SentinelRoutes } from "../routes/sentinelRoutes";
import * as dotenv from "dotenv";
import cors from "cors";

dotenv.config();

class App {
  public app: express.Application;

  private userRoutes: SentinelRoutes = new SentinelRoutes();

  constructor() {
    this.app = express();
    this.config();
    this.userRoutes.route(this.app);
  }

  private config(): void {
    // support application/json type post data
    this.app.use(bodyParser.json());
    //support application/x-www-form-urlencoded post data
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(cors());
  }
}

export default new App().app;
