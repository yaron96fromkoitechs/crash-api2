import Database from "providers/Database";

export class HealthModel {
  /**
   * Check health of database
   */
  public static async check() {
    const db = await Database.sequelize
      .authenticate()
      .then(() => {
        return true;
      })
      .catch(() => {
        return false;
      });

    return {
      db,
    };
  }
}
