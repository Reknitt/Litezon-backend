"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const apollo_server_express_1 = require("apollo-server-express");
const context_1 = require("./context");
const type_graphql_1 = require("type-graphql");
const UserResolver_1 = __importDefault(require("../graphql/resolvers/UserResolver"));
// TODO: сделать, чтобы yarn start перезапускался при изменении исходников
/*
1. Apollo server
2. Graphql
3. register and login in frontend with graphqlClient
4. UserResolver doesn't work properly i guess

Config graphql + prisma + apolloserver:
            https://github.com/prisma/prisma-examples/tree/latest/typescript/graphql-typegraphql
*/
/* TODAY
1. UserResolver +++
2. fix prisma.model (user and add new table named goods)
*/
async function main() {
    const server = new apollo_server_express_1.ApolloServer({
        schema: await (0, type_graphql_1.buildSchema)({
            resolvers: [UserResolver_1.default],
            validate: false
        })
    });
    const app = (0, express_1.default)();
    await server.start();
    server.applyMiddleware({ app });
    app.get('/', (req, res) => {
        res.send("hello world");
    });
    const users = await context_1.context.prisma.user.findMany();
    console.log(users);
    //app.use('/graphql')
    console.log("hello");
    const port = 5000;
    app.listen(port, () => {
        console.log(`server's listenning on port ${port}`);
    });
}
main().then(async (e) => {
    await context_1.context.prisma.$disconnect();
})
    .catch(async (e) => {
    console.error(e);
    await context_1.context.prisma.$disconnect();
    process.exit(1);
});
//# sourceMappingURL=index.js.map