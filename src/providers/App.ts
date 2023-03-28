import * as path from "path";
import * as dotenv from "dotenv";
dotenv.config({ path: path.join(__dirname, "../../.env") });

import Database from "providers/Database";
import Server from "providers/Server";

class App {
  // Loads the Database Pool
  public async loadDatabase(): Promise<void> {
    return Database.init();
  }

  // Loads your Server
  public async loadServer(): Promise<void> {
    return Server.init();
  }
}

export default new App();
