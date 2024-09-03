import { Router } from 'express'
import { router, urlRoute } from '../../config/routeConfig'
import { caseUseUpdateBalance } from '../../../useCases/Account/update'
import { UserRepository } from '../../../repository/users/user.repository'
import { AccountController } from '../../controller/account/account.controller'

export const routerAccount = (): Router => {
  const repositoryAccount = new UserRepository()

  const caseUseUpdateAccount = new caseUseUpdateBalance(repositoryAccount)

  const controller = new AccountController(caseUseUpdateAccount)

  router.put(`${urlRoute}/update/balance`, controller.updateBalance)

  return router
}
