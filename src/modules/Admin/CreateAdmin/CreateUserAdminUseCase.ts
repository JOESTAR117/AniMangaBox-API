import { database } from "../../../database/database";
import { AdminDTO } from "../AdminDTO";
import bcrypt from "bcrypt";

export class CreateUserAdminUseCase {
  async execute({ email, password }: AdminDTO) {
    const hash = await bcrypt.hash(password, 8);
    const admin = await database.admin.create({
      data: {
        email: email,
        password: hash,
      },
    });

    return admin;
  }
}
