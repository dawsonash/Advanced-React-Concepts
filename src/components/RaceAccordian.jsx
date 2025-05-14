import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import { useState } from "react";
import Card from "./Card";
import MainCTA from "./MainCTA";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import { useNavigate } from "react-router-dom";

function RaceAccordian({ Name, Distance, Date, Extract, ImgSrc }) {
  const [isExpanded, setIsExpanded] = useState(true);
  const toggleAccordian = () => setIsExpanded((prev) => !prev);
  const navigate = useNavigate();

  const handleExpandClick = () => {
    navigate("/expanded", {
      state: {
        name: Name,
        date: Date,
        location: Distance,
        extract: Extract,
        image: ImgSrc,
      },
    });
  };

  return (
    <div className="flex flex-col  rounded-lg border-2 border-white/12 dark:bg-white/44 bg-gradient-to-br bg-gray-300">
      <div className={` flex w-350 p-4 justify-between items-center `}>
        <span className="font-heading text-lg text-black">{Name}</span>
        <span className="font-heading text-lg text-black">{Distance}</span>
        <span className="font-heading text-lg text-black">{Date}</span>
        <button
          onClick={toggleAccordian}
          className={`transition-transform duration-300 ${
            isExpanded ? "" : "rotate-180"
          }`}
        >
          <ExpandMoreRoundedIcon fontSize="small" sx={{ color: "#000000" }} />
        </button>
      </div>

      {!isExpanded && (
        <div className="flex justify-between p-3 gap-4 h-130">
          <div className="w-full h-full overflow-hidden rounded-xl">
            <img
              src={ImgSrc || "https://picsum.photos/200"}
              alt="Event Image"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="dark:text-black flex flex-col gap-4">
            <Card children={Extract} />
            <MainCTA
              onClick={handleExpandClick}
              title="Expand"
              icon={<OpenInFullIcon sx={{ color: "#ffffff" }} />}
            />
          </div>
        </div>
      )}
    </div>
  );
}
export default RaceAccordian;
