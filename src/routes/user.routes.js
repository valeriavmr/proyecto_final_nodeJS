import { Router } from "express";

const router = Router();

router.get("/users", (req, res) => {
  res.json([
    { id: 1, name: "Valeria" },
    { id: 2, name: "Valentina" },
  ]);
});

export default router;