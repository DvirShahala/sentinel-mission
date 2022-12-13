import Axios from "axios";

export const fetchRandomImages = async (numberOfImages: number) => {
  return Axios.get<Array<string>>(
    `${process.env.REACT_APP_SERVER_URL}${process.env.REACT_APP_RANDOM_IMAGES_ROUTE}`,
    {
      params: {
        numberOfImages,
      },
    }
  )
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};
