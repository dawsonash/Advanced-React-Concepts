import { useState } from "react";
import RaceAccordian from "../components/RaceAccordian";
import wikipediaApi from "../services/wikipediaApi";

function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [races, setRaces] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const handleSearch = async () => {
    try {
      const data = await wikipediaApi(searchTerm, setLoading);
      setRaces(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex-1">
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            placeholder="Search for a race..."
            value={searchTerm}
            onChange={handleInputChange}
            className="border p-2 rounded w-full mb-4"
          />

          <button
            onClick={handleSearch}
            className="bg-CompanyOrange text-white p-2 rounded h-full"
          >
            Search
          </button>
        </div>
        <p></p>
        {console.log(races)}
        <RaceAccordian
          Name={races.title}
          Date="Date"
          Distance="Distance"
          Extract={races.extract}
          ImgSrc={races.originalimage?.source}
        />
      </div>
    </div>
  );
}
export default Search;
