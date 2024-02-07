import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { ParseIntPipe } from '@nestjs/common/pipes';
import { GetUserField as GetUserField } from 'src/auth/decoretor/user.decorator';
import { JtwGuard } from 'src/auth/guard';
// import { UpdateUserDto } from 'src/user/user.dto';
import { BookmarkService } from './bookmark.service';
import { CreateBookmarkDto, UpdateBookmarkDto } from './dto';

@UseGuards(JtwGuard)
@Controller('bookmark')
export class BookmarkController {
    constructor(private bookmark: BookmarkService) { }

    @Post('add')
    createBookmark(@GetUserField('id') userId: number, @Body() dto: CreateBookmarkDto) {
        return this.bookmark.createBookmark(userId, dto);
    }

    @Get('getall')
    getBookmarks(@GetUserField('id') userId: number) {
        return this.bookmark.getBookmarks(userId);
    }

    @Patch('update/:id')
    updateBookmark(@GetUserField('id') userId: number, @Body() dto: UpdateBookmarkDto,
        @Param('id', ParseIntPipe) bookMarkId: number,) {
        return this.bookmark.updateBookmark(userId, bookMarkId, dto);
    }

    @Delete('delete/:id')
    deleteBookmark(@GetUserField('id') userId: number,
        @Param('id', ParseIntPipe) bookMarkId: number,) {
        return this.bookmark.deleteBookmark(userId, bookMarkId);
    }
}
