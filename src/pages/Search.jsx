import { useState } from "react";
import RaceAccordian from "../components/RaceAccordian";
import wikipediaApi from "../services/wikipediaApi";
import SearchIcon from "@mui/icons-material/Search";

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
    <div className="flex items-center justify-center w-full min-h-screen px-10">
      <div className="flex flex-col justify-center items-center">
        <div className="flex max-w-250 p-2 border rounded items-center justify-center gap-2 mb-4">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleInputChange}
            className="!m-0 items-center p-2  max-w-200 mb-4 focus:outline-none"
          />

          <button
            onClick={handleSearch}
            className="bg-CompanyOrange text-white p-2 rounded-sm h-full"
          >
            <SearchIcon sx={{ color: "#00000" }} />
          </button>
        </div>
        <p></p>
        {console.log(races)}
        <RaceAccordian
          Name={races.title}
          Date={races.timestamp}
          Distance={races.description}
          Extract={races.extract}
          ImgSrc={races.originalimage?.source}
          URL={races.content_urls?.desktop?.page}
        />
      </div>
    </div>
  );
}
export default Search;
