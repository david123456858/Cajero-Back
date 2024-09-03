import { NextFunction, Request, Response } from 'express'
import { caseUseUpdateBalance } from '../../../useCases/Account/update'
import { accountDtos } from '../../../Dtos/account/account'

export class AccountController {
  private readonly caseAccount: caseUseUpdateBalance

  constructor (caseAccount: caseUseUpdateBalance) {
    this.caseAccount = caseAccount
    this.updateBalance = this.updateBalance.bind(this)
  }

  async updateBalance (req: Request, res: Response, next: NextFunction): Promise<any> {
    const account: accountDtos = req.body

    const updateBalance = await this.caseAccount.updateBalance(account)
    if (!updateBalance.success) {
      const error = {
        status: updateBalance.status,
        message: updateBalance.error
      }
      return next(error)
    }

    res.status(updateBalance.status).json({ message: updateBalance.value })
  }
}
