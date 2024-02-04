import { AuthService } from "./auth.service";
import { AuthDto } from "./dto";
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(dto: AuthDto): Promise<{
        access_token: string;
    }>;
    signup(dto: AuthDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        firstName: string;
        lastName: string;
        email: string;
        hash: string;
    }>;
}
