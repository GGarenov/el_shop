const router = require("express").Router();
const electronicService = require("../services/electronicService");
const { isAuth } = require("./../middlewares/authMiddleware");

router.get("/all", async (req, res) => {
  const electronics = await electronicService.getAll().lean();
  res.render("posts/catalog", { electronics });
});

router.get("/create", isAuth, (req, res) => {
  res.render("posts/create");
});

router.post("/create", async (req, res) => {
  const { name, type, damages, imageUrl, description, production, exploit, price } = req.body;
  const payload = { name, type, damages, imageUrl, description, production, exploit, price };
  await electronicService.create(payload);
  res.redirect("/posts/all");
});

module.exports = router;
