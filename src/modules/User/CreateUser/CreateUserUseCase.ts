import { database } from "../../../database/database";
import { UserDTO } from "../UserDto";

export class CreateUserUseCase {
  async execute({ name, email }: UserDTO) {
    const userAlreadyExists = await database.user.findUnique({
      where: {
        email,
      },
    });

    if (userAlreadyExists) {
      return new Error("User already exists");
    }

    const user = await database.user.create({
      data: {
        name: name,
        email: email,
      },
    });

    return user;
  }
}
