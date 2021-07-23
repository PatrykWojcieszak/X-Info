import axios from "axios";
import { QueryResult } from "../Types";

const BASE_URL = "https://api.spacexdata.com/v4/";
export const LAUNCHES_QUERY = "launches/query";
export const STARLINK_QUERY = "starlink/query";
export const BOOSTER_QUERY = "cores/query";
export const ROCKET_QUERY = "rockets/query";

export async function getData<T>(endpointURL: string, query: any) {
  const { data } = await axios.post<QueryResult<T>>(
    BASE_URL + endpointURL,
    query
  );

  return data;
}
