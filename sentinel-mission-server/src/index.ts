import app from "./config/app";
import * as dotenv from "dotenv";

dotenv.config();

app.listen(process.env.PORT, () => {
  console.log("Express server listening on port " + process.env.PORT);
});
