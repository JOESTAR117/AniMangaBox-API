import { AppError } from "../../../errors/AppError";
import { database } from "../../../database/database";
import { UserDTO } from "../UserDto";
import bcrypt from "bcrypt";

export class UpdateUserUseCase {
  async execute({ id, email, name, password }: UserDTO) {
    const hash = await bcrypt.hash(password, 8);

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
