function WideCard({ title, children }) {
  return (
    <div className="flex w-177 h-125 flex-col items-start gap-3">
      <h2 className="font-heading text-3xl">{title}</h2>
      <div
        className="flex flex-col place-content-between item-start self-stretch h-90 py-8 px-2
            dark:bg-white/44 bg-gradient-to-br bg-gray-200 rounded-lg border-2 border-white/12"
      >
        {children}
      </div>
    </div>
  );
}
export default WideCard;
