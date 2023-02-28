import { Request, Response } from "express";

import { database } from "../../database/database";
import { UserDTO } from "../../dtos/User/UserDto";
import * as crypto from "crypto";
import bcrypt from "bcrypt";
import { transporter } from "../../config/Nodemailer";

export class PasswordRecovery {
  async handle(req: Request, res: Response) {
    const { email }: UserDTO = req.body;
    try {
      const user = await database.user.findUnique({
        where: {
          email: email,
        },
      });

      if (!user) {
        return res.status(400).json({ error: "User not found" });
      }

      const newPassword = crypto.randomBytes(4).toString("hex");

      transporter
        .sendMail({
          from: "Administrator <i.e d0ceadde0b-a8aa5d+1@inbox.mailtrap.io>",
          to: email,
          subject: "password recovery",
          text: `Hello, your new password to access the system is: ${newPassword}`,
        })
        .then(async () => {
          const hash = await bcrypt.hash(newPassword, 4);

          await database.user.update({
            where: {
              email: email,
            },
            data: {
              password: hash,
            },
          });
        });

      return res.json({ message: "New Password created" });
    } catch (error) {
      console.log(error);
    }
  }
}
