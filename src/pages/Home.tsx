import PortInfo from "../components/PortInfo";
import { getInfo } from "../data";
import { useQuery } from "@tanstack/react-query";

const Home = () => {
  const { data: ports, isFetched } = useQuery({
    queryFn: getInfo,
    queryKey: ["ports"],
  });
  return (
    isFetched &&
    ports && (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {ports
          .sort((a, b) => {
            return a.port - b.port;
          })
          .map((p) => {
            return <PortInfo key={p.port} info={p} />;
          })}
      </div>
    )
  );
};

export default Home;
