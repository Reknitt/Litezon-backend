import { Field, ID, ObjectType } from "type-graphql";
import { Description } from "./description";


@ObjectType()
export class Goods {

    @Field(() => ID)
    id: Number

    @Field(() => String)
    name: String

    @Field(() => Description, {nullable: true})
    description: Description
}