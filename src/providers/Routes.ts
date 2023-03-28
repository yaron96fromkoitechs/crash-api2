import { Application } from "express";

import router from "routes/index";

class Routes {
  public mountRoutes(_express: Application): Application {
    _express.use(`/`, router);
    return _express;
  }
}

export default new Routes();
