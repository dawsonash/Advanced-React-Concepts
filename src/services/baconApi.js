import axios from "axios";

export const getBaconText = async (sentences) => {
  const res = await axios.get(
    `https://baconipsum.com/api/?type=all-meat&sentences=${sentences}&start-with-lorem=1`
  );
  return res.data;
};
