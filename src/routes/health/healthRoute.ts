import { Router, Request, Response } from "express";

import { HealthController } from "controllers/health/healthController";

const router = Router();

router.get("/", async (_req: Request, res: Response) => {
  const healthcheck = await HealthController.check();
  try {
    res.send(healthcheck);
  } catch (error) {
    res.status(503).send();
  }
});

export const HealthRouter = router;
