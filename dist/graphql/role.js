"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_graphql_1 = require("type-graphql");
require("reflect-metadata");
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
})(Role || (Role = {}));
(0, type_graphql_1.registerEnumType)(Role, {
    name: "Role"
});
exports.default = Role;
//# sourceMappingURL=role.js.map