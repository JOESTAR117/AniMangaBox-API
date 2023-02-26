import { database } from "../../../database/database";
import { DeleteUserDTO } from "./DeleteUserDTO";

export class DeleteUserUseCase {
  async execute({ id }: DeleteUserDTO) {
    const user = await database.user.delete({
      where: {
        id: id,
      },
    });

    return user;
  }
}
