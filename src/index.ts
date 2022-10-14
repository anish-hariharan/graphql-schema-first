import * as express from "express"
import { graphqlHTTP  } from "express-graphql"
import { buildSchema  } from "graphql"
import { root } from "./resolver /resolvers"
import typedefs from "./typedefs/typedefs"

const schema = buildSchema (typedefs)

const app = express();

app.use("/", graphqlHTTP ({
    schema: schema,
    rootValue: root,
    graphiql: true
}))

app.listen(2001)
console.log("running in 2001")