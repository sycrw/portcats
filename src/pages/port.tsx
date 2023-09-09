import { useQuery } from "@tanstack/react-query";
import { getPort } from "../data";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";

const port = () => {
  const { portNum } = useParams<{ portNum: string }>();
  const { data: port, isFetched } = useQuery({
    queryFn: () => getPort(Number(portNum)),
    queryKey: ["port", portNum],
  });
  console.log(port);
  return isFetched && port && <ReactMarkdown>{port}</ReactMarkdown>;
};

export default port;
