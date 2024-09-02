import { Router } from 'express'
import { router, urlRoute } from '../../config/routeConfig'
import { AuthController } from '../../controller/Auth/auth'

export const creteRouteUser = (): Router => {
  const controller = new AuthController()

  router.post(`${urlRoute}/loggin`, controller.loggin)
  router.post(`${urlRoute}/register`, controller.register)

  return router
}
