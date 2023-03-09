import 'reflect-metadata'
import { Ctx, Query, Resolver } from 'type-graphql'
import { User } from '../user'
import { context } from '../../src/context'

@Resolver(User)
class UserResolver {

    @Query(() => [User])
    async getUsers() : Promise<User[]> {
        const users = await context.prisma.user.findMany()
        return users
    }

    @Query(() => User)
    async getUser() : Promise<User> {
        const user = await context.prisma.user.findFirst();
        console.log(user)
        console.log("hell user!!")
        return user
    }

    @Query(() => String)
    async hello() {
        console.log('hello world')
        return "hello"
    }
}

export default UserResolver