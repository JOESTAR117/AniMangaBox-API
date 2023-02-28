import { database } from "../../../database/database";
import { AppError } from "../../../errors/AppError";
import { DeleteUserDTO } from "../../../dtos/User/DeleteUserDTO";

export class DeleteUserUseCase {
  async execute({ id }: DeleteUserDTO) {
    const userRentedAnime = await database.animeRent.findMany({
      where: {
        userId: id,
      },
    });

    if (userRentedAnime.length > 0) {
      return new AppError("user has rented anime");
    }

    const user = await database.user.delete({
      where: {
        id: id,
      },
    });

    return user;
  }
}
