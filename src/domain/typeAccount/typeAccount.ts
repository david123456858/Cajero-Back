import { BaseEntity, Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm'
import { User } from '../users/users.entity'

@Entity()
export class typeAccount extends BaseEntity {
  @PrimaryColumn({ unique: true })
    idAccount: string

  @Column({ unique: true })
    type: string

  @ManyToOne(() => User, (user: User) => user.type)
    user: User
}
