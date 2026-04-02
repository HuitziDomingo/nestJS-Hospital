import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import { Auth } from './entities/auth.entity';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
export declare class AuthService {
    private authRepository;
    private jwtService;
    constructor(authRepository: Repository<Auth>, jwtService: JwtService);
    register(registerDto: RegisterDto): Promise<{
        message: string;
    }>;
    login(loginDto: LoginDto): Promise<{
        access_token: string;
    }>;
    validateUser(email: string): Promise<Auth | null>;
}
