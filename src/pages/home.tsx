import { getInfo } from "../data";
import { useQuery } from "@tanstack/react-query";

const Home = () => {
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

export default Home;
