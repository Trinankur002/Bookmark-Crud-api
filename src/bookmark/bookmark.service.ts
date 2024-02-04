import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateBookmarkDto, UpdateBookmarkDto } from './dto';

@Injectable()
export class BookmarkService {
    constructor (private prisma : PrismaService){}

    async createBookmark(userId: number, dto: CreateBookmarkDto) { 
        const bookmark = await this.prisma.bookmark.create({
            data: {
                userId,
                ...dto,
            }
        })
        return bookmark;
    }

    async getBookmarks(userId: number) {
        return await this.prisma.bookmark.findMany({
            where: { userId : userId} });
    }

    async updateBookmark(userId: number, bookMarkId: number, dto: UpdateBookmarkDto) {
        const bookmark = await this.prisma.bookmark.findUnique({
            where: { id: bookMarkId },
        })
        if (!bookmark ||bookmark.userId != userId) {throw new ForbiddenException('access denied');}
        return await this.prisma.bookmark.update({
            where: {id: bookMarkId,}, data: {...dto,}})
    }

    async deleteBookmark(userId: number, bookMarkId: number) {
        const bookmark = await this.prisma.bookmark.findUnique({
            where: { id: bookMarkId },
        })
        if (!bookmark || bookmark.userId != userId) {
            throw new ForbiddenException('access denied');
        }
        await this.prisma.bookmark.delete({ where: { id: bookMarkId } })
        return 'bookmark deleted'
    }
}
