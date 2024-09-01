import { User } from '../../domain/users/users.entity'
import { IcrudRepository } from './../../adapters/interfaces/repository/crudRepository'

export class UserRepository implements IcrudRepository<User> {
  async save (data: User): Promise<void | Error> {
    await User.save(data)
    console.log('Se guardo correctamente')
  }

  async delete (id: string): Promise<void | Error> {}

  async update (data: User): Promise<User | Error> {
    return data
  }

  async findById (id: string): Promise<User | Error | null> {
    const resultSearchById = await User.findOneBy({ numberPhone: id })
    return resultSearchById
  }

  async findAll (): Promise<User[] | Error | null> {
    const user: User[] = await User.find({
      relations: {
        type: true
      }
    })
    return user
  }
}
