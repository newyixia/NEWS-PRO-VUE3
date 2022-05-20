import { Service } from 'egg';
import { IGetParams } from '../../typings';
// const { httpGet } = require( '../extend/context');
import { getPageData } from '../libs/utils'

/**
 * Test Service
 */
export default class Api extends Service {

  /**
   * sayHi to you
   * @param name - your name
   */
  public async getNewsList({type, pageNum, count}:IGetParams) {
    const { ctx } = this;
    const pageNums: number = pageNum || 0;
    const counts: number = count || 10;
    return await new Promise((resolve, reject) => {
      ctx.httpGet({
        url: ctx.app.config.API.GET_NEWS_LIST,
        data: {
          type: type || 'top'
        },
        success(data: unknown[]) {
          resolve(getPageData(data, pageNums, counts))
        },
        fail(err: string) {
          reject(err);
        }
      })
    })
   
    
  }
}
