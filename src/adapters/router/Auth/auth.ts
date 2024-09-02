import { Router } from 'express'
import { router, urlRoute } from '../../config/routeConfig'
import { AuthController } from '../../controller/Auth/auth'
import { UserRepository } from '../../../repository/users/user.repository'
import { accountRepository } from '../../../repository/account/account.repository'
import { caseUseAuthUser } from '../../../useCases/auth/login'
import { CaseUserRegister } from '../../../useCases/auth/register'

export const RouteUser = (): Router => {
  const repositoryUser = new UserRepository()
  const repositoryAccount = new accountRepository()

  const caseUserAuthLogin = new caseUseAuthUser(repositoryUser)
  const caseUserRegister = new CaseUserRegister(repositoryUser, repositoryAccount)

  const controller = new AuthController(caseUserRegister, caseUserAuthLogin)

  router.post(`${urlRoute}/loggin`, controller.loggin)
  router.post(`${urlRoute}/register`, controller.register)

  return router
}
