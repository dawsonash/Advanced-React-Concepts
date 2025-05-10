//could add props in future/api use/OnClick interactions

function CalendarContents() {
  const generateWeek = () => {
    const today = new Date();
    const days = [];

    for (let i = 0; i < 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);

      const dayOfMonth = date.getDate();
      const weekDay = date.toLocaleDateString("en-US", { weekday: "short" });

      days.push(
        <div
          key={i}
          className="flex flex-col px-1 justify-center items-center gap-2"
        >
          <span className="text-black">{dayOfMonth}</span>
          <span className="text-black">{weekDay}</span>
        </div>
      );
    }
    return days;
  };

  return (
    <div className="size-full px-6 py-12 flex flex-col justify-between items-start">
      <h3 className="self-stretch font-heading text-left text-2xl text-black">
        No Events Today
      </h3>

      <div className="flex justify-between px-4 w-full items-stretch align-bottom">
        {generateWeek()}
      </div>
    </div>
  );
}
export default CalendarContents;
