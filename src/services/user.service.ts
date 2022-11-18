import { UserRegister } from "../controllers/user.controller";
import { DB } from "../models";

export class UserService {
  public constructor(private db: DB) {
    this.getUserByEmail = this.getUserByEmail.bind(this);
    this.save = this.save.bind(this);
  }

  public async getUserByEmail(email: string) {
    const saved = await this.db.User.findOne({
      where: { email },
    });
    return saved;
  }

  public async save(user: UserRegister) {
    const saved = await this.db.User.create(user);
    return saved;
  }
}
