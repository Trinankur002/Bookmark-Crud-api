import { BookmarkService } from './bookmark.service';
import { CreateBookmarkDto, UpdateBookmarkDto } from './dto';
export declare class BookmarkController {
    private bookmark;
    constructor(bookmark: BookmarkService);
    createBookmark(userId: number, dto: CreateBookmarkDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        link: string;
        description: string;
        userId: number;
    }>;
    getBookmarks(userId: number): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        link: string;
        description: string;
        userId: number;
    }[]>;
    updateBookmark(userId: number, dto: UpdateBookmarkDto, bookMarkId: number): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        link: string;
        description: string;
        userId: number;
    }>;
    deleteBookmark(userId: number, bookMarkId: number): Promise<string>;
}
