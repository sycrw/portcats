import { Info } from "./dto";

export const getInfo = async (): Promise<Info[]> => {
  return (await fetch("info.json")).json();
};

export const getMDByPort = async (id: number): Promise<string> => {
  return (await fetch(id + ".md")).text();
};

//get info by port number
export const getInfoByPort = async (port: number): Promise<Info> => {
  const info = await getInfo();
  const portInfo = info.find((i) => i.port === port);
  if (!portInfo) {
    throw new Error("Port not found");
  }
  return portInfo;
};
