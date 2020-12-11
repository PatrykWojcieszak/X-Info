import { useState, useCallback } from "react";
import axios from "axios";
import IQueryResult from "../Models/IQueryResult";

export const useFetch = <T extends unknown>(url, query) => {
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
    axios
      .post<IQueryResult<T>>(url, query)
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [query, url]);

  const res: [IQueryResult<T>, boolean, () => void] = [data, loading, loadData];

  return res;
};
