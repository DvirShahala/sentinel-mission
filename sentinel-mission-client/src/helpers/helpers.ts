import Axios from "axios";

export const fetchRandomImages = async () => {
  return await Axios.get<string[]>(
    `${process.env.REACT_APP_SERVER_URL}${process.env.REACT_APP_RANDOM_IMAGES_ROUTE}`
  )
    .then((res) => res.data)
    .catch((err) => {
      console.log(err);
      return [];
    });
};
