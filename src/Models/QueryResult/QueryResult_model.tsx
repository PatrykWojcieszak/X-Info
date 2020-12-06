interface QueryResult_model<T> {
  docs: T[];
  totalDocs: Number;
  offset: Number;
  limit: Number;
  totalPages: Number;
  page: Number;
  pagingCounter: Number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: Number;
  nextPage: Number;
}

export default QueryResult_model;