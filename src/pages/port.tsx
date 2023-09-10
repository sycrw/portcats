import { getInfoByPort, getMDByPort } from "../data";

import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

const Port = () => {
  const { portNum } = useParams<{ portNum: string }>();
  const { data: port, isFetched: MDIsFetched } = useQuery({
    queryFn: () => getMDByPort(Number(portNum)),
    queryKey: ["port", portNum],
  });
  const { data: portInfo, isFetched: InfoIsFetched } = useQuery({
    queryFn: () => getInfoByPort(Number(portNum)),
    queryKey: ["portInfo", portNum],
  });
  console.log(port);
  return (
    MDIsFetched &&
    port &&
    InfoIsFetched && (
      <div>
        <h1>{portInfo!.application}</h1>
        <img src={portInfo!.imgsrc} alt="cat image" />
        <ReactMarkdown>{port}</ReactMarkdown>
      </div>
    )
  );
};

export default Port;
