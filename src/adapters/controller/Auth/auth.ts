import { NextFunction, Request, Response } from 'express'
import { caseUseAuthUser } from './../../../useCases/auth/login'
import { CaseUserRegister } from './../../../useCases/auth/register'
import { registerDtos } from '../../../Dtos/auth/register'
import { loginDtos } from '../../../Dtos/auth/login'
export class AuthController {
  private readonly caseUserRegister: CaseUserRegister
  private readonly caseUseUser: caseUseAuthUser

  async register (req: Request, res: Response, next: NextFunction): Promise<any> {
    const user: registerDtos = req.body

    const userCreated = await this.caseUserRegister.register(user)
    if (!userCreated.success) {
      const error = {
        status: userCreated.status,
        message: userCreated.error
      }
      return next(error)
    }

    res.status(userCreated.status).json({ message: userCreated.value })
  }

  async loggin (req: Request, res: Response, next: NextFunction): Promise<any> {
    const accountReq: loginDtos = req.body

    const userSeach = await this.caseUseUser.login(accountReq)
    if (!userSeach.success) {
      const error = {
        status: userSeach.status,
        message: userSeach.error
      }
      return next(error)
    }
    res.status(userSeach.status).json({ mesagge: userSeach.value })
  }
}
