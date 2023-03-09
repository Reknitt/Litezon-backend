import express, {Request, Response, Express} from 'express'
import { PrismaClient } from '@prisma/client'
import { ApolloServer } from 'apollo-server-express'
import { startStandaloneServer } from '@apollo/server/standalone'
import { context } from './context'
import {buildSchema} from 'type-graphql'
import UserResolver from '../graphql/resolvers/UserResolver'


// TODO: сделать, чтобы yarn start перезапускался при изменении исходников

/* 
1. Apollo server
2. Graphql
3. register and login in frontend with graphqlClient
4. UserResolver doesn't work properly i guess

Config graphql + prisma + apolloserver:
            https://github.com/prisma/prisma-examples/tree/latest/typescript/graphql-typegraphql
*/


/* TODAY
1. UserResolver +++
2. fix prisma.model (user and add new table named goods)
*/

async function main() {

    const server = new ApolloServer({
        schema: await buildSchema({
            resolvers: [UserResolver],
            validate: false
        })
    })
    const app: Express = express()
    await server.start()
    server.applyMiddleware({app})
    
    app.get('/', (req: Request, res: Response) => {
        res.send("hello world")
    })
    
    const users = await context.prisma.user.findMany()
    console.log(users)
    //app.use('/graphql')
    
    console.log("hello")

    const port = 5000
    app.listen(port, () => {
        console.log(`server's listenning on port ${port}`)
    })


}

main().then(async (e) => {
    await context.prisma.$disconnect()
})
.catch(async (e) => {
    console.error(e)
    await context.prisma.$disconnect()
    process.exit(1)
})