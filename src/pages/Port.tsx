import { getInfoByPort, getMDByPort } from "../data";

import ReactMarkdown from "react-markdown";
import { useEffect } from "react";
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
  useEffect(() => {
    if (portInfo) {
      {
        const title = `Port Cats | ${portInfo!.application} [${portNum}]`;
        document.title = title;
      }
    } else {
      document.title = `Port Cats | ${portNum}`;
    }
  }, [portInfo, portNum]);

  console.log(port);
  return (
    MDIsFetched &&
    port &&
    InfoIsFetched && (
      <div className="text-center">
        <h1 className="text-2xl">
          PORT {portNum} - {portInfo!.application}
        </h1>
        <div className="w-full max-w-screen md:max-w-3xl p-2 md:mx-auto">
          <img
            src={portInfo!.imgsrc}
            alt="cat image"
            className="w-full my-10 rounded-xl"
          />
          <div className="md text-left break-words">
            <ReactMarkdown>{port}</ReactMarkdown>
          </div>
          {/* source */}
          {portInfo!.descriptionSource && (
            <div className="text-left mt-2">
              Source: {portInfo!.descriptionSource}
            </div>
          )}
        </div>
      </div>
    )
  );
};

export default Port;
