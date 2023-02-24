import { AppError } from "../../../errors/AppError";
import { database } from "../../../database/database";
import { UserDTO } from "../UserDto";

export class UpdateUserUseCase {
  async execute({ id, email, name, password }: UserDTO) {
    const idIsValid = await database.user.findUnique({
      where: {
        id: id,
      },
    });
    if (!idIsValid) {
      return new AppError("id is not valid");
    }

    const user = await database.user.update({
      where: {
        id: id,
      },
      data: {
        email: email,
        name: name,
        password: hash,
      },
    });

    return user;
  }
}
