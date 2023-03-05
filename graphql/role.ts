import { registerEnumType } from "type-graphql";
import 'reflect-metadata'

enum Role {
    ADMIN,
    USER
}

registerEnumType(Role, {
    name: "Role"
})

export default Role