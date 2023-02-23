import { hash } from "bcrypt";
import { database } from "../../../database/database";
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
        throw new Error("User already exists!");
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
