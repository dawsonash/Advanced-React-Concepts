//add hover state, add api for website links in future
import PlaceholderMountain from "../assets/PlaceholderMountain.png";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

function WebsiteLink() {
  return (
    <div
      className="flex w-100 h-24 items-center shrink-0
        border-2 rounded-lg back backdrop-blur-sm hover:bg-CompanyOrange transition-all transition-discrete"
    >
      <img
        src={PlaceholderMountain}
        alt="PlaceholderMountain"
        className=" w-23 h-auto"
      />
      <div className="flex justify-center items-center w-full">
        <span className="font-body text-center ">Visit their website</span>
        <ArrowForwardIosRoundedIcon fontSize="small" />
      </div>
    </div>
  );
}
export default WebsiteLink;
