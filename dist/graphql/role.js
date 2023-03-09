"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const type_graphql_1 = require("type-graphql");
const client_1 = require("@prisma/client");
// enum Role {
//     ADMIN = 'ADMIN',
//     USER = 'USER',
// }
(0, type_graphql_1.registerEnumType)(client_1.Role, {
    name: "Role",
});
exports.default = client_1.Role;
//# sourceMappingURL=role.js.map