import { useQuery } from "@tanstack/react-query";
import { getInfo } from "../data";

const home = () => {
  const { data: ports, isFetched } = useQuery({
    queryFn: getInfo,
    queryKey: ["ports"],
  });
  return (
    isFetched &&
    ports &&
    ports.map((p) => {
      return <h1 key={p.port}>{JSON.stringify(p)}</h1>;
    })
  );
};

export default home;
