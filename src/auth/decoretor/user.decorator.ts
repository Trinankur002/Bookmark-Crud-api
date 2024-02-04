import { createParamDecorator , ExecutionContext,} from '@nestjs/common';

export const GetUser = createParamDecorator((data : any , ctx: ExecutionContext) => {
  const request : Express.Request = ctx.switchToHttp().getRequest();
  const user = request.user;
    userId: Number = user['id'];
    return user
});

export const GetUserField = createParamDecorator((data :any |string , ctx: ExecutionContext) => {
  const request : Express.Request = ctx.switchToHttp().getRequest();
  const user = request.user;
    return request.user[data]
});