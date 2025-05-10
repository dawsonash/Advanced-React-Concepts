import WeatherCard from "../components/WeatherCard";
import wikipediaApi from "../services/wikipediaApi";
import { useState, useEffect } from "react";

function ProfilePage() {
  const [wikiData, setWikiData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const data = await wikipediaApi("Bolder_Boulder", setLoading);
      setWikiData(data);
    }
    fetchData();
  }, []);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {wikiData ? <p>{wikiData.extract}</p> : <p>No data found</p>}{" "}
    </div>
  );
}
export default ProfilePage;
