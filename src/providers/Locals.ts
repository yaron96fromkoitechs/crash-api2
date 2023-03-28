import { Application } from "express";

type config = {
  port: string;

  postgresHost: string;
  postgresPort: string;
  postgresUser: string;
  postgresPassword: string;
  postgresDB: string;
};

class Locals {
  /**
   * Get all configs variables
   */
  public config(): config {
    const port = process.env.PORT || "4000";

    const postgresHost = process.env.POSTGRES_HOST || "localhost";
    const postgresPort = process.env.POSTGRES_PORT || "5432";
    const postgresUser = process.env.POSTGRES_USER || "postgres";
    const postgresPassword = process.env.POSTGRES_PASSWORD || "password";
    const postgresDB = process.env.POSTGRES_DB || "crash";

    return {
      port,

      postgresHost,
      postgresPort,
      postgresUser,
      postgresPassword,
      postgresDB,
    };
  }

  /**
   * Injects your config to the app's locals
   */
  public inject(_express: Application): Application {
    _express.locals.app = this.config();
    return _express;
  }
}

export default new Locals();
