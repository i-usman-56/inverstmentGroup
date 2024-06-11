import { BsThreeDotsVertical } from "react-icons/bs";

const MeetingCard = ({ date, time, title, attendees }) => {
  return (
    <div className="min-h-[70px] lg:min-h-[75px] border rounded px-2 md:px-4 xl:px-8 pt-1 bor2 border-[#00000013]">
      <div className="flex justify-end lg:pt-1.5">
        <BsThreeDotsVertical className="text-[#3C3C3C]" />
      </div>
      <div className="flex gap-3">
        <div className="w-[25%] flex justify-center flex-col">
          <h1 className="text-[10px] textclass font-semibold leading-3 tracking-[-1.7%] text-[#3C3C3C]">
            {date}
          </h1>
          <p className="text-[14.5px] textclass font-semibold leading-3 tracking-[-1.7%] text-[#3C3C3C]">
            {time}
          </p>
        </div>
        <div className="w-[75%]">
          <h1 className="text-[13px] font-bold pb-1 leading-3 tracking-[-1.7%] text-[#000000]">
            {title}
          </h1>
          <p className="text-[13px] font-bold pt-1 leading-3 line-clamp-1 tracking-[-1.7%] text-[#000000]">
            {attendees}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MeetingCard;
