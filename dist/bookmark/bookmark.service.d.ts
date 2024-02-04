import { PrismaService } from 'src/prisma/prisma.service';
import { CreateBookmarkDto, UpdateBookmarkDto } from './dto';
export declare class BookmarkService {
    private prisma;
    constructor(prisma: PrismaService);
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
    updateBookmark(userId: number, bookMarkId: number, dto: UpdateBookmarkDto): Promise<{
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
