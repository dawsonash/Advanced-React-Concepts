function Card({ title, children }) {
  return (
    <div className="flex w-100 flex-col items-start ">
      <h2 className="font-heading text-3xl">{title}</h2>
      <div
        className="flex flex-col place-content-between item-start self-stretch h-90 py-8 px-2 overflow-hidden
        dark:bg-white/44 bg-gradient-to-br bg-gray-200 rounded-lg border-2 border-white/12"
      >
        {children}
      </div>
    </div>
  );
}
export default Card;
