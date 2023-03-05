"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const client_1 = require("@prisma/client");
// TODO: сделать, чтобы yarn start перезапускался при изменении исходников
/*
1. Apollo server
2. Graphql
3. register and login in frontend with graphqlClient
*/
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const app = (0, express_1.default)();
        const port = 4000;
        const prisma = new client_1.PrismaClient();
        const users = yield prisma.user.findMany();
        // const user = await prisma.user.create({
        //     data: {
        //         email: "test@gmail.com",
        //         name: "ffsstest"
        //     }
        // })
        console.log(users);
        console.log();
        app.get('/', (req, res) => {
            res.send("hello world");
        });
        app.listen(port, () => {
            console.log(`server's listenning on port ${port}`);
        });
    });
}
main();
//# sourceMappingURL=index.js.map