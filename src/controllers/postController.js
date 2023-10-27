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
  const payload = { name, type, damages, imageUrl, description, production, exploit, price, owner: req.user };

  await electronicService.create(payload);
  res.redirect("/posts/all");
});

router.get("/:electronicId/details", async (req, res) => {
  const { electronicId } = req.params;
  const electronic = await electronicService.getById(electronicId).lean();

  const { user } = req;
  const { owner } = electronic;
  const isOwner = user?._id === owner.toString();

  res.render("posts/details", { electronic, isOwner });
});

module.exports = router;
