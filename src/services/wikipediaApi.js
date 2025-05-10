import axios from "axios";

export default async function wikipediaApi(raceName, setLoading) {
  setLoading(true);
  try {
    const response = await axios.get(
      `https://en.wikipedia.org/api/rest_v1/page/summary/${raceName}?redirect=false`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  } finally {
    setLoading(false);
  }
}
