import { Arg, Field, Mutation, Resolver } from "type-graphql";
import { context } from "../../src/context";
import { Description } from "../description";
import { Goods } from "../goods";


class AddGoodsInput implements Partial<Goods> {
    @Field()
    name: String

    @Field()
    description?: Description
}


@Resolver(Goods)
export class GoodsResolver {

    @Mutation()
    async addGoods(@Arg("data") newGoodsData: AddGoodsInput) : Promise<Goods> {
        const name: string = newGoodsData.name as string
        const goods = await context.prisma.goods.create({
            data: {
                name: name,
                description?: undefined,
            }
        })

        return goods
    }
}