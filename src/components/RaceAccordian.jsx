import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import { useState } from "react";

function RaceAccordian({ Name, Distance, Date, Extract, ImgSrc }) {
  const [isExpanded, setIsExpanded] = useState(true);
  const toggleAccordian = () => setIsExpanded((prev) => !prev);

  return (
    <div className="flex flex-col  rounded-lg border-2 border-white/12 dark:bg-white/44 bg-gradient-to-br bg-gray-300">
      <div className={` flex w-313 p-4 justify-between items-center `}>
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
        <div className="flex">
          <div className="">
            <img
              src={ImgSrc || "https://picsum.photos/200"}
              alt="Event Image"
              width="70%"
              className=" object-none max-h-100"
            />
          </div>
          <p className="text-black font-body w-100">{Extract}</p>
        </div>
      )}
    </div>
  );
}
export default RaceAccordian;
