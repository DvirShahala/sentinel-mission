import { Application, Request, Response } from "express";
import { getRandomImage } from "../helpers/helpers";

export class SentinelRoutes {
  public route(app: Application) {
    app.get("/api/randomImage", async (req: Request, res: Response) => {
      try {
        const imagesUrl = await getRandomImage();

        res.status(200).send(imagesUrl);
        return imagesUrl;
      } catch (e) {
        console.error("error in api GET images", e);
        throw e;
      }
    });
  }
}
