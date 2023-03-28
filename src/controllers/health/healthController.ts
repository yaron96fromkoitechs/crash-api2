import { HealthModel } from "models/health/healthModel";

export class HealthController {
  public static check() {
    return HealthModel.check();
  }
}
