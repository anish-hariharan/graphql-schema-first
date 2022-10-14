import { Database } from "../data-source"
import { User } from "../entity/User";

export const root = {
    hello: () => {
        return "Hello World"
    },

    find: async () => {
        const connection = await new Database().connection();
        const userRepo = connection.getRepository(User)
        //return userRepo.find(id)
        const data =  await userRepo.find()
        return data
    }
}

