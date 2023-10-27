const router = require("express").Router();
const electronicService = require("../services/electronicService");
const { isAuth } = require("./../middlewares/authMiddleware");

router.get("/all", async (req, res) => {
  const electronics = await electronicService.getAll().lean();
  console.log({ electronics });
  res.render("posts/catalog", { electronics });
});

router.get("/create", isAuth, (req, res) => {
  res.render("posts/create");
});

router.post("/create", async (req, res) => {
  const { name, type, damages, imageUrl, description, production, exploit, price } = req.body;
  console.log(req);
  const payload = { name, type, damages, imageUrl, description, production, exploit, price, owner: req.user };

  // TO DO: Add user
  await electronicService.create(payload);
  res.redirect("/posts/all");
});

module.exports = router;
