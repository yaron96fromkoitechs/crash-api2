import express from "express";

import Locals from "providers/Locals";
import Routes from "providers/Routes";
import Log from "middlewares/Log";

class Server {
  public express: express.Application;

  constructor() {
    this.express = express();

    this.mountDotEnv();
  }

  private mountDotEnv(): void {
    this.express = Locals.inject(this.express);
  }

  /**
   * Mounts all the defined routes
   */
  private mountRoutes(): void {
    Log.info("Routes :: Mounting API Routes...");
    this.express = Routes.mountRoutes(this.express);
    Log.info("Routes :: Mounted API Routes");
  }

  /**
   * Starts the express server
   */
  public async init(): Promise<void> {
    Log.info("Server :: Booting...");

    const port: string = Locals.config().port;

    await new Promise<void>((resolve, reject) => {
      // Start the server on the specified port
      this.express
        .listen(port, () => {
          Log.info(`Server :: Running PORT: ${port}`);
          resolve();
        })
        .on("error", (_error) => {
          Log.error(`${_error}`);
          reject();
        });
    });
    this.mountRoutes();
  }
}

export default new Server();
