import {
  FailureProcess,
  SuccessProcess
} from './../../adapters/utils/results/results'
import { loginDtos } from '../../Dtos/auth/login'
import { UserRepository } from '../../repository/users/user.repository'
import {
  IFailureProcess,
  ISuccesProcess
} from '../../adapters/interfaces/results/results'

export class caseUseAuthUser {
  private readonly respository: UserRepository // para utilizar el respectivo repositorio

  constructor (userRepository: UserRepository) {
    this.respository = userRepository
  }

  async login (
    user: loginDtos
  ): Promise<IFailureProcess<any> | ISuccesProcess<any>> {
    try {
      const userPhone = await this.respository.findById(user.phoneNumber)
      let numberPhoneAux: string
      if (userPhone instanceof Error) {
        return FailureProcess(userPhone.message, 403)
      }

      if (userPhone === null) {
        return FailureProcess('El usuario no existe', 404)
      }

      if (user.type === 'NEQUI') {
        numberPhoneAux = '0' + user.phoneNumber
        console.log(numberPhoneAux)
      } else {
        numberPhoneAux = '1' + user.phoneNumber
      }

      const userTypeCheck = await this.respository.findByNumberAndType(
        numberPhoneAux,
        user.type
      )
      if (userTypeCheck === null) {
        return FailureProcess('No existe cuenta con este tipo de banco', 401)
      }

      if (user.passwords !== userPhone.password) {
        return FailureProcess('Incorrecto el usuario o la contraseña', 401)
      }

      return SuccessProcess('iniciaste sesion', 200)
    } catch (error) {
      return FailureProcess('internal error server', 500)
    }
  }
}
