import Axios from "axios";
import { IGetImagesRes } from "../types/types";

const israelPolygon =
  "35.1069403 33.0752527, 34.7799253 32.1044979, 34.5490193 31.6681206, 34.2390203 31.2994915, 34.9180055 29.5278176, 35.429213 31.0814227, 35.5623579 32.640459, 35.7555628 32.7465508, 35.8809614 32.9175661, 35.7710981 33.3040622, 35.5678511 33.2305751, 35.5293989 33.0972222, 35.3755903 33.028167, 35.2767134 33.0880179, 35.1069403 33.0752527";

// Get random image from the api
export const getRandomImage = async (): Promise<Array<string> | undefined> => {
  try {
    const randomStart = getRandomNumber(
      Number(process.env.MIN_RANDOM_NUMBER) ?? 1,
      Number(process.env.MAX_RANDOM_NUMBER) ?? 101
    );

    const { data } = await Axios.get<IGetImagesRes>(
      `${process.env.OPEN_SEARCH_HUB_BASE_URL}?q=footprint:"Intersects(POLYGON((${israelPolygon})))"cloudcoverpercentage: [${process.env.CLOUD_COVER_PERCENTAGE}]platformname:${process.env.PLATFORM_NAME}&rows=${process.env.ROWS}&start=${randomStart}&format=${process.env.FORMAT}`,
      {
        auth: {
          username: "dvirsh",
          password: "Dvir123321!",
        },
        // headers: {
        //   Authorization: "Basic ZHZpcnNoOkR2aXIxMjMzMjEh",
        // },
      }
    );

    let imagesurl: Array<string> = [];

    if (Array.isArray(data.feed.entry)) {
      data.feed.entry.forEach((entry) => {
        const link = entry.link.find((link) => link.rel === "icon");
        if (link) {
          imagesurl.push(link.href);
        }
      });
    } else {
      const linkEntity = data.feed.entry.link.find(
        (link) => link?.rel === "icon"
      );
      if (linkEntity) {
        imagesurl.push(linkEntity.href);
      }
    }

    if (imagesurl.length) {
      return imagesurl;
    } else {
      throw new Error("Image url does not found");
    }
  } catch (e) {
    console.error("error in getRandomImage", e);
    throw e;
  }
};

// Get random number - the maximum is exclusive and the minimum is inclusive
export const getRandomNumber = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
};
