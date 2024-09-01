import { Account } from './../typeAccount/typeAccount'
import { BaseEntity, Column, Entity, OneToMany, PrimaryColumn } from 'typeorm'

@Entity()
export class User extends BaseEntity {
  @PrimaryColumn()
    numberPhone: string

  @Column()
    password: string

  @OneToMany(() => Account, (account: Account) => account.user)
    type: Account []
}
