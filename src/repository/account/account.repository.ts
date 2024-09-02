import { FindOperator } from 'typeorm'
import { IcrudRepository } from '../../adapters/interfaces/repository/crudRepository'
import { Account } from '../../domain/typeAccount/typeAccount'

export class accountRepository implements IcrudRepository<Account> {
  async save (data: Account): Promise<void | Error> {
    await Account.save(data)
    console.log('Se guardo la cuenta')
  }

  async delete (id: string): Promise<void | Error> {}
  async update (data: Account): Promise<Account | Error> {
    const resultUpdateAccount = await Account.save(data)
    return resultUpdateAccount
  }

  async findById (id: string): Promise<Account | Error | null> {
    const resultSearchAccount = await Account.findOneBy({ numberPhone: id })
    return resultSearchAccount
  }

  async findAll (): Promise<Error | Account[] | null> {
    const resultSearchAccount = await Account.find({ relations: { user: true } })
    return resultSearchAccount
  }

  async findType (id: string, type: string): Promise<Error | null | Account> {
    const numberResult: string | FindOperator<string> | undefined = this.agregatedNumber(id, type)
    const account = await Account.findOneBy({ numberPhone: numberResult })
    return account
  }

  private agregatedNumber (id: string, type: string): string | FindOperator<string> | undefined {
    if (type === 'NEQUI') {
      const idResult = `1${id}`
      return idResult
    } else if (type === 'BANCOLOMBIA') {
      const idResult = `0${id}`
      return idResult
    }
  }
}
