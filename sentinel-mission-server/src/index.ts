import app from "./config/app";
import * as dotenv from "dotenv";
import winston from "winston";

dotenv.config();

export const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  transports: [
    new winston.transports.Console({
      level: process.env.LOG_LEVEL,
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple()
      ),
    }),
  ],
});

app.listen(process.env.PORT, () => {
  console.log("Express server listening on port " + process.env.PORT);
});
