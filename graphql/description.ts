import { Field, ID, ObjectType } from "type-graphql"
import { Goods } from "./goods"

@ObjectType()
export class Description {

    @Field(() => ID)
    id: Number

    @Field(() => Goods)
    goods: Goods

    @Field(() => Number)
    goodsId: Number
}