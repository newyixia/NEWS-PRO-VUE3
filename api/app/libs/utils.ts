import { IPageData } from "../../typings";

function typeOf(data: any):any{
  if(typeof data == null) {
    return 'null'
  }
  
  return typeof(data) === 'object'?{
    "[object Object]": 'Object',
    "[object Array]": 'Array'
  }[({}).toString.call(data)]:typeof(data)
}


function formatParams(data:any,appkey:string) {
  if(typeOf(data) !== 'Object') {
    throw new Error('Option data must be a object');
  }
  let params: string = "?"

  for(let key in data) {
    params += `${key}=${data[key]}&`
  }
  return appkey? params+ 'key='+appkey: params.slice(0, -1);
}


function getPageData<T>(data: Array<T>, pageNum:number,count:number): IPageData {
  const retInfo: IPageData = {
    data: null,
    hasMore: true
  }
  if(data.length <= count) {
    retInfo.data?.concat(data)
    retInfo.hasMore = false
  }else {
    const pageCount = Math.ceil(data.length / count);
    if(pageNum >= pageCount) {
      retInfo.data = null;
      retInfo.hasMore = false;
    }else {
      retInfo.data = data.splice(pageNum * count, count);
      retInfo.hasMore = true;
    }

  }
  return retInfo;
}

export {
  formatParams,
  getPageData
}