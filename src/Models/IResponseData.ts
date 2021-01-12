import IQueryResult from "./IQueryResult";

interface IResponseData<T> {
  status: string;
  error?: {};
  data: IQueryResult<T>;
}

export default IResponseData;
