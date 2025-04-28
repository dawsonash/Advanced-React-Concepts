import { useState } from "react";
import RaceAccordian from "../components/RaceAccordian";
import { findRaces } from "../services/raceFinder";



function Search () {
    const [searchTerm, setSearchTerm] = useState("");
    const [races, setRaces] = useState([]);

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    }
    const handleSearch = async () => {
        try {
            const data = await findRaces(searchTerm);
            setRaces(data.races || []);  // safe fallback
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <div className="flex-1">
            <div className="flex gap-2 mb-4">
                <input 
                type="text" 
                placeholder="Search for a race..." 
                value={searchTerm} 
                onChange={handleInputChange}
                className="border p-2 rounded w-full mb-4"/>

                <button onClick={handleSearch}className="bg-blue-500 text-white p-2 rounded">
                    Search
                </button>
            </div>
        {races.map((race) => (
            <RaceAccordian Name={race.name} Distance={race.events?.[0]?.name || "Unknown"} Date={race.race_date}/>))}            
        
        </div>
    )
} export default Search;