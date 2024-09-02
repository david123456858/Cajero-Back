import { registerDtos } from './../../Dtos/auth/register'
import {
  IFailureProcess,
  ISuccesProcess
} from '../../adapters/interfaces/results/results'
import { accountRepository } from '../../repository/account/account.repository'
import { UserRepository } from '../../repository/users/user.repository'
import { FailureProcess, SuccessProcess } from '../../adapters/utils/results/results'
import { User } from '../../domain/users/users.entity'
import { Account } from '../../domain/typeAccount/typeAccount'

export class CaseUserRegister {
  private readonly repositoryAccount: accountRepository
  private readonly repositoryUser: UserRepository

  constructor (
    repositoryUser: UserRepository,
    repositoryAccount: accountRepository
  ) {
    this.repositoryAccount = repositoryAccount
    this.repositoryUser = repositoryUser
  }

  async register (
    data: registerDtos
  ): Promise<ISuccesProcess<any> | IFailureProcess<any>> {
    try {
      const resultInfoUser = await this.repositoryUser.findById(data.phoneNumber)

      if (resultInfoUser != null) {
        return FailureProcess('Se encontro en la base de datos', 409)
      }

      const user: User = new User()
      const account: Account = new Account()
      user.numberPhone = data.phoneNumber
      user.password = data.password
      account.numberPhone = data.phoneNumber
      account.saldo = data.saldo
      account.type = data.type

      await Account.save(account)
      await User.save(user)
      return SuccessProcess('salio bien la vaina', 202)
    } catch (error) {
      return FailureProcess('internal error server', 500)
    }
  }

  async registerOnlyAccount (
    data: registerDtos
  ): Promise<ISuccesProcess<any> | IFailureProcess<any>> {
    try {
      const accountResult: Account | null | Error = await this.repositoryAccount.findById(data.phoneNumber)
      if (accountResult !== null) {
        return FailureProcess('Cuenta no registrada aun', 404)
      }
      const accounType = await this.repositoryAccount.findType(data.phoneNumber, data.type)
      if (accounType != null) {
        return FailureProcess('Ya exite la cuenta', 401)
      }
      const account: Account = new Account()
      account.numberPhone = data.phoneNumber
      account.type = data.type
      account.saldo = data.saldo
      await Account.save(account)
      return SuccessProcess('account created', 200)
    } catch (error) {
      return FailureProcess('internal error server', 500)
    }
  }
}
