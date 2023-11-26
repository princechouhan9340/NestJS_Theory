import { Request, Response } from 'express';
export declare class UserController {
    getProfile(req: Request, res: Response): {
        url: string;
        statusCode: number;
    };
    getOrder(): string;
    getCart(): string;
}
