export default `

type FindUser {
    id: Int
    firstName : String 
    lastName: String
    age: Int
}

type Query {
    find : FindUser
    test : String!
}

`