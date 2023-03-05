import { Field, ID, ObjectType } from "type-graphql";
import 'reflect-metadata'
import { User } from "./user";


@ObjectType()
export class Post {
    @Field((type) => ID)
    id: Number

    @Field((type) => Date)
    createdAt: Date

    @Field((type) => String)
    title: String

    @Field((type) => Boolean, {nullable: true})
    published?: Boolean

    @Field((type) => User, {nullable: true})
    author?: User | null
}