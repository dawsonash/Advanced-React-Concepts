import PeopleRoundedIcon from "@mui/icons-material/PeopleRounded";

function FriendActivityCard({ children }) {
  return (
    <div
      className="flex w-100 flex-col items-start gap-3"
      aria-label="Friend activity card"
    >
      <div className="flex gap-3 padding-3">
        <PeopleRoundedIcon fontSize="large" />
        <h2 className="font-heading text-3xl">Friend Activity</h2>
      </div>
      <div
        className="flex flex-col place-content-between item-start self-stretch h-90 py-8 px-2
        dark:bg-white/44 bg-gradient-to-br bg-gray-300 rounded-lg border-2 border-white/12"
      >
        {children}
      </div>
    </div>
  );
}
export default FriendActivityCard;
