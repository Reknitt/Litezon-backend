import 'reflect-metadata'
import { registerEnumType } from "type-graphql";
import { Role } from "@prisma/client";

// enum Role {
//     ADMIN = 'ADMIN',
//     USER = 'USER',
// }

registerEnumType(Role, {
    name: "Role",
})

export default Role