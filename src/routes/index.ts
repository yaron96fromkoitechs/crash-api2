import { Router } from "express";

import { HealthRouter } from "routes/health/healthRoute";

const router = Router();

router.use("/health", HealthRouter);

export default router;
