import { IsEmail, IsNotEmpty, IsOptional, IsString, MinLength, minLength } from "class-validator";
import { EmailEhUnico } from "../validacao/email-eh-unico.validator";

export class AtualizaUsuarioDTO {

    @IsNotEmpty({ message: 'O nome não pode ser vazio' })
    @IsOptional()
    nome: string;

    @IsEmail(undefined, { message: 'O Email informado é invalido' })
    @EmailEhUnico({ message: 'Já existe um usuário com o e-mail' })
    @IsOptional()
    email: string;

    @MinLength(6, { message: 'A senha deve ter pelo menos 6 caracteres' })
    @IsOptional()
    senha: string;
}