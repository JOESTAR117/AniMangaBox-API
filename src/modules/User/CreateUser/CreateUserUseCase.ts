import { hash } from "bcrypt";
import { database } from "../../../database/database";
import { AppError } from "../../../errors/AppError";
import { UserDTO } from "../UserDto";

export class CreateUserUseCase {
  async execute({ name, email, password }: UserDTO) {
    try {
      const userExists = await database.user.findUnique({
        where: {
          email: email,
        },
      });

      if (userExists) {
        return new AppError("User already exists!");
      }

      const hashPassword = await hash(password, 10);

      const user = await database.user.create({
        data: {
          name: name,
          email: email,
          password: hashPassword,
        },
      });
      return user;
    } catch (error) {
      return console.log(error);
    }
  }
}
