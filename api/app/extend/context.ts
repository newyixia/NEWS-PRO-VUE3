import nodeFetch from 'node-fetch'

import { IHttpGetParams } from '../../typings';
import { formatParams } from '../libs/utils'


module.exports = {
  httpGet(options: IHttpGetParams): any {
    const { url, data, success, fail }:IHttpGetParams = options;
    return nodeFetch(url+ formatParams(data, "5f2a6f48f30c9ba3ec8df73793458b0f")).then((res) => res.json()).then((data:any) => {
      success(data.result.data)
    }).catch((err: any) => fail(err))
  }
}