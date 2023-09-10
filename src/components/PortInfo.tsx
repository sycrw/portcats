import { Info } from "../dto";

interface PortInfoProps {
  info: Info;
}

const PortInfo = ({ info }: PortInfoProps) => {
  return (
    <div className="m-4 rounded-lg ">
      <div className=" flex justify-between items-center bg-blue-200 dark:bg-blue-600 p-2">
        <h1 className="text-2xl font-bold">{info.application}</h1>
        <p>Port: {info.port}</p>
      </div>
      <img src={info.imgsrc} alt="cat image" />
    </div>
  );
};

export default PortInfo;
