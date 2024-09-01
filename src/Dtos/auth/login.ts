import { IsNotEmpty, IsString } from 'class-validator'

export class loginDtos {
  @IsNotEmpty()
  @IsString()
    phoneNumber: string

  @IsNotEmpty()
  @IsString()
    passwords: string
}
