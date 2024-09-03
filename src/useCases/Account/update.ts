
import { accountDtos } from '../../Dtos/account/account'
import { UserRepository } from '../../repository/users/user.repository'
import { IFailureProcess, ISuccesProcess } from '../../adapters/interfaces/results/results'
import { FailureProcess, SuccessProcess } from '../../adapters/utils/results/results'
import { Account } from '../../domain/typeAccount/typeAccount'

export class caseUseUpdateBalance {
  private readonly repositoryUser: UserRepository
  constructor (repositoryUser: UserRepository) {
    this.repositoryUser = repositoryUser
  }

  async updateBalance (accountUpdate: accountDtos): Promise<IFailureProcess<any> | ISuccesProcess<any>> {
    let numberPhoneAux
    if (accountUpdate.type === 'NEQUI') {
      numberPhoneAux = '0' + accountUpdate.phoneNumber
      console.log(numberPhoneAux)
    } else {
      numberPhoneAux = '1' + accountUpdate.phoneNumber
    }

    const resultSearcAccount = await this.repositoryUser.findByNumberAndType(numberPhoneAux, accountUpdate.type)
    if (resultSearcAccount === null) {
      return FailureProcess('No existe la cuenta', 404)
    }
    if (resultSearcAccount instanceof Error) {
      return FailureProcess('Hubo un error', 500)
    }
    resultSearcAccount.saldo = accountUpdate.saldo
    await Account.save(resultSearcAccount)
    return SuccessProcess('Saldo actualizado', 200)
  }
}
