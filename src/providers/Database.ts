import { Sequelize } from "sequelize";

import Locals from "providers/Locals";
import Log from "middlewares/Log";

class Database {
  public sequelize: Sequelize;

  private host: string;
  private port: string;
  private user: string;
  private password: string;
  private db: string;

  constructor() {
    this.host = Locals.config().postgresHost;
    this.port = Locals.config().postgresPort;
    this.user = Locals.config().postgresUser;
    this.password = Locals.config().postgresPassword;
    this.db = Locals.config().postgresDB;

    this.sequelize = new Sequelize({
      dialect: "postgres",
      logging: false,

      host: this.host,
      port: Number.parseInt(this.port),
      username: this.user,
      password: this.password,
      database: this.db,
    });
  }

  /**
   * Check and init database pool
   */
  public async init(): Promise<void> {
    Log.info("Database :: Booting...");
    await new Promise<void>((resolve, reject) => {
      // Check database connect
      this.sequelize
        .authenticate()
        .then(() => {
          Log.info(`Database :: Running @ ${this.host}`);
          resolve();
        })
        .catch((e) => {
          Log.error(`Database :: Error @ ${e}`);
          reject();
        });
    });
  }
}

export default new Database();
