import 'reflect-metadata'
import { Field, ID, ObjectType } from 'type-graphql';
import { Post } from './post';
import { IsEmail, IsEnum } from 'class-validator';
import Role from './role';



@ObjectType()
export class User {
    @Field(() => ID)
    id: Number

    @Field()
    @IsEmail()
    email: String

    @Field(() => String, {nullable: true})
    name?: String | null

    @IsEnum(Role)
    @Field(() => Role, {nullable: true})
    role: Role
}