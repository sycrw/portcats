import { Link } from "react-router-dom";
import { Info } from "../dto";

interface PortInfoProps {
  info: Info;
}

const PortInfo = ({ info }: PortInfoProps) => {
  return (
    <div className="card card-compact m-4 bg-base-100 shadow-xl">
      <figure>
        {/* image always same size */}
        <img
          src={info.imgsrc}
          alt="cat image"
          className="w-full aspect-video object-cover"
        />
      </figure>
      <div className="card-body">
        <div className="flex justify-between p-4">
          <h2 className="card-title">{info.application}</h2>
          <h2 className="card-title">Port: {info.port}</h2>
        </div>
        <div className="items-center justify-center w-full">
          <Link to={`/${info.port}`} className="btn btn-primary btn-block">
            See More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PortInfo;
