import { Application, Request, Response } from "express";
import { getRandomImages } from "../helpers/helpers";

export class SentinelRoutes {
  public route(app: Application) {
    app.get("/api/randomImage", async (req: Request, res: Response) => {
      try {
        const imagesUrls = await getRandomImages(
          Number(req.query.numberOfImages) ?? 1
        );

        res.status(200).send(imagesUrls);
        return imagesUrls;
      } catch (e) {
        console.error("error in api GET images", e);
        throw e;
      }
    });
  }
}
