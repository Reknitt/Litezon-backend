import express, {Request, Response, Express} from 'express'
import { PrismaClient } from '@prisma/client'
import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'

// TODO: сделать, чтобы yarn start перезапускался при изменении исходников

/* 
1. Apollo server
2. Graphql
3. register and login in frontend with graphqlClient

Config graphql + prisma + apolloserver:
            https://github.com/prisma/prisma-examples/tree/latest/typescript/graphql-typegraphql
*/


async function main() {
    const app: Express = express()
    const port = 4000
    const prisma = new PrismaClient()

    const users = await prisma.user.findMany()
    // const user = await prisma.user.create({
    //     data: {
    //         email: "test@gmail.com",
    //         name: "ffsstest"
    //     }
    // })
    console.log(users)
    console.log()
    app.get('/', (req: Request, res: Response) => {
        res.send("hello world")
    })

    app.listen(port, () => {
        console.log(`server's listenning on port ${port}`)
    })


}

main()