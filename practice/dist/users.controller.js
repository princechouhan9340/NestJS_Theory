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
exports.TestController = void 0;
const common_1 = require("@nestjs/common");
let TestController = class TestController {
    getProfile(req, res) {
        console.log(req);
        res.status(200);
        const num = ~~(Math.random() * 10 + 1);
        if (num < 5) {
            return {
                url: "/users/order",
                statusCode: 307
            };
        }
        else {
            return {
                url: "/users/cart",
                statusCode: 307
            };
        }
    }
    getOrder() {
        return "this is order page redirected by profile";
    }
    getCart() {
        return "this is cart redirect by profile";
    }
    getVideo(params) {
        console.log(params, params.name);
        return params;
    }
    getQueryParam(query) {
        console.log(query);
        return query;
    }
    getHeaders(headers) {
        console.log(headers);
        return headers;
    }
    getPostreq(requestData) {
        console.log(requestData);
        return requestData;
    }
};
exports.TestController = TestController;
__decorate([
    (0, common_1.Get)('/profile'),
    (0, common_1.HttpCode)(204),
    (0, common_1.Header)('case-cookies', "ok"),
    (0, common_1.Header)('X-name', "Prince"),
    (0, common_1.Redirect)('/users/order', 307),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], TestController.prototype, "getProfile", null);
__decorate([
    (0, common_1.Get)('/order'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TestController.prototype, "getOrder", null);
__decorate([
    (0, common_1.Get)('/cart'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TestController.prototype, "getCart", null);
__decorate([
    (0, common_1.Get)('/params/:id/:name'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TestController.prototype, "getVideo", null);
__decorate([
    (0, common_1.Get)('/query'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TestController.prototype, "getQueryParam", null);
__decorate([
    (0, common_1.Get)('/headers'),
    __param(0, (0, common_1.Headers)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TestController.prototype, "getHeaders", null);
__decorate([
    (0, common_1.Post)('/postreq'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TestController.prototype, "getPostreq", null);
exports.TestController = TestController = __decorate([
    (0, common_1.Controller)('/users')
], TestController);
//# sourceMappingURL=users.controller.js.map