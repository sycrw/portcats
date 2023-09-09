import { Info } from "./dto"

export const getInfo = async (): Promise<Info[]> => {
    return (await fetch("info.json")).json()
}

export const getPort = async (id: number): Promise<string> => {
    return (await fetch(id + ".md")).text()
}