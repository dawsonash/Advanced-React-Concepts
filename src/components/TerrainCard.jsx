import TerrainIcon from "@mui/icons-material/Terrain";

function TerrainCard({ children }) {
  return (
    <div
      className="flex w-100 flex-col items-start gap-3"
      aria-label="Terrain Card"
    >
      <div className="flex gap-3 padding-3">
        <TerrainIcon fontSize="large" />
        <h2 className="font-heading text-3xl">Terrain</h2>
      </div>
      <div
        className="flex flex-col place-content-between item-start self-stretch h-90 py-8 px-2
        dark:bg-white/44 bg-gradient-to-br bg-gray-200 rounded-lg border-2 border-white/12"
      >
        {children}
      </div>
    </div>
  );
}
export default TerrainCard;
