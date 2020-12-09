import { useEffect, useRef, useReducer } from "react";
import axios from "axios";
import IQueryResult from "../Models/IQueryResult";
import IResponseData from "../Models/IResponseData";

export const useFetch = <T extends unknown>(url, query) => {
  const cache = useRef({});

  const initialQueryResult: IQueryResult<T> = {
    docs: [],
    totalDocs: 0,
    offset: 0,
    limit: 0,
    totalPages: 0,
    page: 0,
    pagingCounter: 0,
    hasPrevPage: false,
    hasNextPage: false,
    prevPage: 0,
    nextPage: 0,
  };

  const initialState: IResponseData<T> = {
    status: "idle",
    error: undefined,
    data: initialQueryResult,
  };

  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "FETCHING":
        return { ...initialState, status: "fetching" };
      case "FETCHED":
        return { ...initialState, status: "fetched", data: action.payload };
      case "FETCH_ERROR":
        return { ...initialState, status: "error", error: action.payload };
      default:
        return state;
    }
  }, initialState);

  useEffect(() => {
    let cancelRequest = false;
    if (!url) return;

    const fetchData = async () => {
      dispatch({ type: "FETCHING" });
      if (cache.current[url]) {
        const data = cache.current[url];
        dispatch({ type: "FETCHED", payload: data });
      } else {
        try {
          const response = await axios.post<IQueryResult<T>>(url, query);
          cache.current[url] = response.data;
          if (cancelRequest) return;
          dispatch({ type: "FETCHED", payload: response.data });
        } catch (error) {
          if (cancelRequest) return;
          dispatch({ type: "FETCH_ERROR", payload: error.message });
        }
      }
    };

    fetchData();

    return function cleanup() {
      cancelRequest = true;
    };
  }, [url, query]);

  return state;
};
