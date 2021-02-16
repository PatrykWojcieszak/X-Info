import { QueryResult, Launch, FilterOptions } from "../Types";

export const filter = (
  arr: QueryResult<Launch>,
  filterOptions: FilterOptions
): Launch[] => {
  let temp = { ...arr };

  temp.docs = temp.docs.filter(
    (x) =>
      new Date(x.date_utc) >= filterOptions.dateFrom &&
      new Date(x.date_utc) <= filterOptions.dateTo
  );

  return temp.docs;
};
