const ExpCard = (props: any) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2 items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="p-2 bg-white-800 rounded-md">
            <img src={`/Icons/${props.company}.png`} alt="" className="h-7" />
          </div>
          <div className="flex flex-col">
            <div className="font-semibold">{props.title}</div>
            <div className="text-xs text-white-300">
              {props.company} &#9679; {props.location}
            </div>
          </div>
        </div>
        <div className="text-sm text-white-300">
          {props.startDate} - {props.endDate}
        </div>
      </div>
      <div className="text-sm text-white-300 text-justify">
        {props.description}
      </div>
    </div>
  );
};

export default ExpCard;
