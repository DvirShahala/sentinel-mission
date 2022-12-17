import Axios from "axios";
import { IGetImagesRes } from "../types/types";
import { CacheService } from "../cache/cacheService";
import { logger } from "../index";

const israelPolygon =
  "35.1069403 33.0752527, 34.7799253 32.1044979, 34.5490193 31.6681206, 34.2390203 31.2994915, 34.9180055 29.5278176, 35.429213 31.0814227, 35.5623579 32.640459, 35.7555628 32.7465508, 35.8809614 32.9175661, 35.7710981 33.3040622, 35.5678511 33.2305751, 35.5293989 33.0972222, 35.3755903 33.028167, 35.2767134 33.0880179, 35.1069403 33.0752527";

const cache = new CacheService();

export const getRandomImages = async (
  numberOfImages: number
): Promise<Array<string>> => {
  const promises = [];
  for (let i = 0; i < numberOfImages; ++i) {
    try {
      const fetchImagePromise = fetchRandomImage();
      promises.push(fetchImagePromise);
    } catch (error) {
      throw error;
    }
  }
  return await Promise.all(promises);
};

// Get random image from the API
export const fetchRandomImage = async () => {
  try {
    const randomStart = getRandomNumber(
      Number(process.env.MIN_RANDOM_NUMBER) ?? 1,
      Number(process.env.MAX_RANDOM_NUMBER) ?? 101
    );

    logger.info(`random number - ${randomStart}`);

    if (cache.getByKey(String(randomStart))) {
      logger.info("Fetching from cache");

      return cache.getByKey(String(randomStart)).cacheData;
    } else {
      logger.info("Fetching from api");

      const { data } = await Axios.get<IGetImagesRes>(
        `${process.env.OPEN_SEARCH_HUB_BASE_URL}?q=footprint:"Intersects(POLYGON((${israelPolygon})))"cloudcoverpercentage: ${process.env.CLOUD_COVER_PERCENTAGE}platformname:${process.env.PLATFORM_NAME}&rows=${process.env.ROWS}&start=${randomStart}&format=${process.env.FORMAT}`,
        {
          auth: {
            username: process.env.USERNAME!,
            password: process.env.PASSWORD!,
          },
        }
      );

      // Extract the image link
      const linkEntity = data?.feed?.entry?.link?.find(
        (link) => link?.rel === "icon"
      );

      if (linkEntity) {
        cache.upsertEntity({ cacheData: linkEntity.href }, String(randomStart));
        return linkEntity.href;
      } else {
        throw new Error("Image url does not found");
      }
    }
  } catch (e) {
    logger.error("error in getRandomImage", e);
    throw e;
  }
};

// Get random number - the maximum is exclusive and the minimum is inclusive
export const getRandomNumber = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
};
