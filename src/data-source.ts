import "reflect-metadata"
import {  createConnection , Connection, getConnectionManager, getConnectionOptions } from "typeorm"
import { User } from "./entity/User"

export class Database {

    _connection : Connection

    public async connection(): Promise<Connection>{

        const connectionManager = getConnectionManager()

        if(!connectionManager.has("default")){
            const connectionOptions = await getConnectionOptions()
            connectionManager.create(connectionOptions);
        }
        else if(!this._connection){
            this._connection = await createConnection()
        }

        return this._connection
    }

}