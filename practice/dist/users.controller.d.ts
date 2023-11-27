import { Request, Response } from 'express';
interface videoParams {
    id: number;
    name: string;
}
interface queryParam {
    id: number;
    name: string;
}
interface postReqDTO {
    name: string;
    id: number;
}
export declare class TestController {
    getProfile(req: Request, res: Response): {
        url: string;
        statusCode: number;
    };
    getOrder(): string;
    getCart(): string;
    getVideo(params: videoParams): videoParams;
    getQueryParam(query: queryParam): queryParam;
    getHeaders(headers: any): any;
    getPostreq(requestData: postReqDTO): postReqDTO;
}
export {};
