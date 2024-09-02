import { Router } from 'express'
import { accountRepository } from '../../../repository/account/account.repository'
import { UserRepository } from '../../../repository/users/user.repository'
import { caseUseAuthUser } from '../../../useCases/auth/login'
import { CaseUserRegister } from '../../../useCases/auth/register'
import { router, urlRoute } from '../../config/routeConfig'

export const creteRouteUser = (): Router => {
  const repositort = new UserRepository()
  const repositoryAccount = new accountRepository()

  const caseUseUserLogin = new caseUseAuthUser(repositort)
  const caseUserRegister = new CaseUserRegister(repositort, repositoryAccount)

  router.post(`${urlRoute}/loggin`)
  return router
}
