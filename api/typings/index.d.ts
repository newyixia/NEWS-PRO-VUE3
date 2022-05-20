import 'egg';

interface IHttpGetParams {
  url: string,
  data: any,
  success: (res: any) => void,
  fail: (res: any) => void
}

interface IGetParams {
  type: string,
  pageNum: number
  count: number
}


interface IPageData {
  data: Array<T> | null,
  hasMore: boolean
}

declare module 'egg' {
  IHttpGetParams,
  IGetParams,
  IPageData
}