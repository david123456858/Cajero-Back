import { User } from '../../domain/users/users.entity'
import { IcrudRepository } from './../../adapters/interfaces/repository/crudRepository'

export class UserRepository implements IcrudRepository<User> {
  async save (data: User): Promise<void | Error> {
    console.log('fuap')
  }

  async delete (id: string): Promise<void | Error> {

  }

  async update (data: User): Promise<User | Error> {
    return data
  }

  async findById (id: string): Promise<User | Error> {
    const user: User = new User()
    return user
  }

  async findAll (): Promise<User | Error> {
    const user: User = new User()
    return user
  }
}
