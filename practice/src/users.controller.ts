import { Controller, Post, Get, Put,Delete, Body, Param } from "@nestjs/common";
import { createUserDTO } from "./dto";

let USERS:any = []
@Controller('/users')
export class userController{

    @Post()
    createUser(@Body() createUserDTO:createUserDTO){
        USERS.push(createUserDTO);
        console.log(USERS)
        return USERS
    }

    @Get()
    getUsers(){
        return USERS;
    }

    @Get(':name')
    getUserByName(@Param("name") param){
        let x = USERS.find((user)=> user.name == param);
        console.log(x)
        return x
    }

    @Put(":name")
    updateUsers(@Param("name") param:string, @Body() updateuserdata:createUserDTO){
        let x = USERS.findIndex((user)=> user.name == param);
        console.log(x)
        if(x == -1){
            return "no user found"
        }else{
            USERS[x] = updateuserdata;
            return USERS[x]
        }
    }

    @Delete(':name')
    deleteUser(@Param("name") name){
        USERS = USERS.filter((user) => user.name !== name);
        return USERS
    }
}