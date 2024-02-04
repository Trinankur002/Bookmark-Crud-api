"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookmarkController = void 0;
const common_1 = require("@nestjs/common");
const pipes_1 = require("@nestjs/common/pipes");
const user_decorator_1 = require("../auth/decoretor/user.decorator");
const guard_1 = require("../auth/guard");
const bookmark_service_1 = require("./bookmark.service");
const dto_1 = require("./dto");
let BookmarkController = class BookmarkController {
    constructor(bookmark) {
        this.bookmark = bookmark;
    }
    createBookmark(userId, dto) {
        return this.bookmark.createBookmark(userId, dto);
    }
    getBookmarks(userId) {
        return this.bookmark.getBookmarks(userId);
    }
    updateBookmark(userId, dto, bookMarkId) {
        return this.bookmark.updateBookmark(userId, bookMarkId, dto);
    }
    deleteBookmark(userId, bookMarkId) {
        return this.bookmark.deleteBookmark(userId, bookMarkId);
    }
};
exports.BookmarkController = BookmarkController;
__decorate([
    (0, common_1.Post)('add'),
    __param(0, (0, user_decorator_1.GetUserField)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, dto_1.CreateBookmarkDto]),
    __metadata("design:returntype", void 0)
], BookmarkController.prototype, "createBookmark", null);
__decorate([
    (0, common_1.Get)('getall'),
    __param(0, (0, user_decorator_1.GetUserField)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], BookmarkController.prototype, "getBookmarks", null);
__decorate([
    (0, common_1.Patch)('update/:id'),
    __param(0, (0, user_decorator_1.GetUserField)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Param)('id', pipes_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, dto_1.UpdateBookmarkDto, Number]),
    __metadata("design:returntype", void 0)
], BookmarkController.prototype, "updateBookmark", null);
__decorate([
    (0, common_1.Delete)('delete/:id'),
    __param(0, (0, user_decorator_1.GetUserField)('id')),
    __param(1, (0, common_1.Param)('id', pipes_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], BookmarkController.prototype, "deleteBookmark", null);
exports.BookmarkController = BookmarkController = __decorate([
    (0, common_1.UseGuards)(guard_1.JtwGuard),
    (0, common_1.Controller)('bookmark'),
    __metadata("design:paramtypes", [bookmark_service_1.BookmarkService])
], BookmarkController);
//# sourceMappingURL=bookmark.controller.js.map