import { BaseEntity, BeforeInsert, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { User } from '../users/users.entity'

@Entity()
export class Account extends BaseEntity {
  @PrimaryGeneratedColumn()
    idAccount: string

  @Column({ unique: true })
    type: string

  @Column({ unique: true })
    numberPhone: string

  @Column()
    saldo: number

  @ManyToOne(() => User, (user: User) => user.type)
    user: User

  @BeforeInsert() // hacer antes que se inserte
  generateColumnPhone (): void {
    if (this.type === 'NEQUI') {
      this.numberPhone = `1${this.numberPhone}`
    } else if (this.type === 'BANCOLOMBIA') {
      this.numberPhone = `0${this.numberPhone}`
    }
  }
}
