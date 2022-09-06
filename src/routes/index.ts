/**
 * All api routes handles here
 * @author Najam Ul Saqib
 */
import { Router, Request, Response, NextFunction } from "express";
const router: Router = Router();

// Parent Routes
// router.use("/admins", require("./admins")); // All the user routes
// router.use("/users", require("./users")); // All the user routes
// router.use("/auth", require("./auth")); // All the auth routes
router.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.json("Haalo");
});

// Export
module.exports = router;
