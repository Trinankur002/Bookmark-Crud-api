"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateBookmarkDto = void 0;
const createBookmark_dto_1 = require("./createBookmark.dto");
const swagger_1 = require("@nestjs/swagger");
class UpdateBookmarkDto extends (0, swagger_1.OmitType)(createBookmark_dto_1.CreateBookmarkDto, ['title']) {
}
exports.UpdateBookmarkDto = UpdateBookmarkDto;
//# sourceMappingURL=updateBookmark.dto.js.map