import { IsString, IsInt } from 'class-validator';
export class CreateCatDto {
    @IsString()
    readonly name: string;
    @IsInt()
    readonly age: string;
    @IsString()
    readonly breed: string;
  }