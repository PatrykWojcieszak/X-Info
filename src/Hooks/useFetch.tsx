import { useState, useCallback, useRef } from "react";
import axios from "axios";
import IQueryResult from "../Models/IQueryResult";

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

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<IQueryResult<T>>(initialQueryResult);

  const loadData = useCallback(() => {
    if (cache.current[url]) {
      const data = cache.current[url];
      setData(data);
      console.log("z cache");
    } else {
      console.log("z axios");
      axios
        .post<IQueryResult<T>>(url, query)
        .then((res) => {
          cache.current[url] = res.data;
          setData(res.data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [query, url]);

  const res: [IQueryResult<T>, boolean, () => void] = [data, loading, loadData];

  return res;
};
