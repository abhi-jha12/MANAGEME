import { FlagImage } from "../assets";
interface PriorityFlagProps {
  priority: number;
}

const PriorityFlag = ({ priority }: PriorityFlagProps) => {
  return (
    <div className="flex flex-col w-10 h-10 bg-flag_background items-center justify-center rounded-md border-shadow_purple border-2">
      <img src={FlagImage} alt="FlagImage" className="w-4 h-4" />
      <p className="text-white text-xs">{priority}</p>
    </div>
  );
};

export default PriorityFlag;
