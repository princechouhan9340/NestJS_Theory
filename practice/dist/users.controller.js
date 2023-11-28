"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const common_1 = require("@nestjs/common");
const dto_1 = require("./dto");
let USERS = [];
let userController = class userController {
    createUser(createUserDTO) {
        USERS.push(createUserDTO);
        console.log(USERS);
        return USERS;
    }
    getUsers() {
        return USERS;
    }
    getUserByName(param) {
        let x = USERS.find((user) => user.name == param);
        console.log(x);
        return x;
    }
    updateUsers(param, updateuserdata) {
        let x = USERS.findIndex((user) => user.name == param);
        console.log(x);
        if (x == -1) {
            return "no user found";
        }
        else {
            USERS[x] = updateuserdata;
            return USERS[x];
        }
    }
    deleteUser(name) {
        USERS = USERS.filter((user) => user.name !== name);
        return USERS;
    }
};
exports.userController = userController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.createUserDTO]),
    __metadata("design:returntype", void 0)
], userController.prototype, "createUser", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], userController.prototype, "getUsers", null);
__decorate([
    (0, common_1.Get)(':name'),
    __param(0, (0, common_1.Param)("name")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], userController.prototype, "getUserByName", null);
__decorate([
    (0, common_1.Put)(":name"),
    __param(0, (0, common_1.Param)("name")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, dto_1.createUserDTO]),
    __metadata("design:returntype", void 0)
], userController.prototype, "updateUsers", null);
__decorate([
    (0, common_1.Delete)(':name'),
    __param(0, (0, common_1.Param)("name")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], userController.prototype, "deleteUser", null);
exports.userController = userController = __decorate([
    (0, common_1.Controller)('/users')
], userController);
//# sourceMappingURL=users.controller.js.map