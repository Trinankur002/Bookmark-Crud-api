"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUserField = exports.GetUser = void 0;
const common_1 = require("@nestjs/common");
exports.GetUser = (0, common_1.createParamDecorator)((data, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    const user = request.user;
    userId: Number = user['id'];
    return user;
});
exports.GetUserField = (0, common_1.createParamDecorator)((data, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    const user = request.user;
    return request.user[data];
});
//# sourceMappingURL=user.decorator.js.map