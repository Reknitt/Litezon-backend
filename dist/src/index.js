"use strict";
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

Config graphql + prisma + apolloserver:
            https://github.com/prisma/prisma-examples/tree/latest/typescript/graphql-typegraphql
*/
async function main() {
    const app = (0, express_1.default)();
    const port = 4000;
    const prisma = new client_1.PrismaClient();
    const users = await prisma.user.findMany();
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
}
main();
//# sourceMappingURL=index.js.map