import { IsNotEmpty, IsNumber, IsString } from 'class-validator'

export class accountDtos {
  @IsNotEmpty()
  @IsString()
    phoneNumber: string

  @IsString()
  @IsNotEmpty()
    type: string

  @IsNotEmpty()
  @IsNumber()
    saldo: number
}
