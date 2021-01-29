import { Starlink } from "./../Types/Starlink";
import axios from "axios";
import { Launch, QueryResult } from "../Types";
import { StarlinkQuery, UpcomingLaunchesQuery } from "../Queries";

const BASE_URL = "https://api.spacexdata.com/v4/";
const LAUNCHES_QUERY = "launches/query";
const STARLINK_QUERY = "starlink/query";
const BOOSTER_QUERY = "cores/query";
const ROCKET_QUERY = "rockets/query";

export async function getLaunches() {
  const { data } = await axios.post<QueryResult<Launch>>(
    BASE_URL + LAUNCHES_QUERY,
    UpcomingLaunchesQuery
  );
  return data;
}

export async function getStarlinks() {
  const { data } = await axios.post<QueryResult<Starlink>>(
    BASE_URL + STARLINK_QUERY,
    StarlinkQuery
  );
  return data;
}
