import { IsNotEmpty, IsNumber, IsString, Length } from 'class-validator'

export class registerDtos {
  @IsNotEmpty()
  @IsString()
  @Length(10, 10)
    phoneNumber: string

  @IsNotEmpty()
  @IsString()
  @Length(4, 6)
    password: string

  @IsNotEmpty()
  @IsString()
  @Length(5, 11)
    type: string

  @IsNotEmpty()
  @IsNumber()
    saldo: number
}
