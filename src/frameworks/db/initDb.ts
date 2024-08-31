import { DataSource } from 'typeorm'
import { config } from 'dotenv'
import { User } from '../../domain/users/users.entity'
import { typeAccount } from '../../domain/typeAccount/typeAccount'
config()

export class DataBase {
  private static _instance!: DataBase
  appData!: DataSource
  constructor () {
    const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env
    this.appData = new DataSource({
      type: 'postgres',
      host: PGHOST,
      port: 5432,
      password: PGPASSWORD,
      database: PGDATABASE,
      username: PGUSER,
      entities: [User, typeAccount],
      synchronize: true,
      logging: true,
      ssl: { rejectUnauthorized: false }
    })
  }

  public async connectDb (): Promise<DataSource | undefined> {
    try {
      await this.appData.initialize()
      return this.appData
    } catch (error) {
      console.log('Error al conectar la base de datos')
    }
  }

  public static get intance (): DataBase {
    if (!DataBase._instance) {
      return (DataBase._instance = new DataBase())
    }
    return DataBase._instance
  }
}
