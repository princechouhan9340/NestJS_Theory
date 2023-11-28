import { createUserDTO } from "./dto";
export declare class userController {
    createUser(createUserDTO: createUserDTO): any;
    getUsers(): any;
    getUserByName(param: any): any;
    updateUsers(param: string, updateuserdata: createUserDTO): any;
    deleteUser(name: any): any;
}
