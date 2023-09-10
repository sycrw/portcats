import { Info } from "../dto";

interface PortInfoProps {
  info: Info;
}

const PortInfo = ({ info }: PortInfoProps) => {
  return (
    <div className="card card-compact m-4 bg-base-100 shadow-xl">
      <figure>
        <img src={info.imgsrc} alt={info.application} />
      </figure>
      <div className="card-body">
        <div className="flex justify-between p-4">
          <h2 className="card-title">{info.application}</h2>
          <h2 className="card-title">Port: {info.port}</h2>
        </div>
        <div className="items-center justify-center w-full">
          <a href={`/${info.port}`} className="btn btn-primary btn-block">
            See More
          </a>
        </div>
      </div>
    </div>
  );
};

export default PortInfo;
