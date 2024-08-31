import { typeAccount } from './../typeAccount/typeAccount'
import { BaseEntity, Column, Entity, OneToMany, PrimaryColumn } from 'typeorm'

@Entity()
export class User extends BaseEntity {
  @PrimaryColumn()
    numberPhone: string

  @Column()
    password: string

  @OneToMany(() => typeAccount, (account: typeAccount) => account.user)
    type: typeAccount
}
