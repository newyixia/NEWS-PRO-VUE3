import { Controller } from 'egg';
import { IGetParams } from '../../typings';

export default class ApiController extends Controller {
  public async getNewsList():Promise<void> {
    const { ctx } = this;
    const { type, pageNum, count }:IGetParams = ctx.request.body;
    console.log(await ctx.service.api.getNewsList({ type, pageNum, count }))
    // ctx.body = 11111;
    ctx.body =await ctx.service.api.getNewsList({ type, pageNum, count });
  }
}
