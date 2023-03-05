import { Field, ID, ObjectType } from 'type-graphql';
import 'reflect-metadata'
import { Post } from './post';
import { IsEmail } from 'class-validator';
import Role from './role';

@ObjectType()
export class User {
    @Field((type) => ID)
    id: Number

    @Field()
    @IsEmail()
    email: String

    @Field((type) => String, {nullable: true})
    name?: String | null

    @Field((type) => Role)
    role: Role

    @Field((type) => [Post], {nullable: true})
    posts?: [Post] | null
}