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

router.get("/:electronicId/edit", async (req, res) => {
  const { electronicId } = req.params;

  const electronic = await electronicService.singleElectronic(electronicId).lean();
  res.render("posts/edit", { electronic });
});

router.post("/:electronicId/edit", async (req, res) => {
  const { electronicId } = req.params;
  const { name, type, damages, imageUrl, description, production, exploit, price } = req.body;
  const payload = {
    name,
    type,
    damages,
    imageUrl,
    description,
    production,
    exploit,
    price,
    owner: req.user,
  };

  await electronicService.update(electronicId, payload);
  res.redirect(`/posts/${electronicId}/details`);
});

router.get("/:electronicId/delete", async (req, res) => {
  const { electronicId } = req.params;

  await electronicService.delete(electronicId);
  res.redirect("/posts/all");
});

router.get("/search", async (req, res) => {
  const { search, name, type } = req.query;

  let electronics = await electronicService.getAll().lean();
  let filteredElectronics = [];

  if (search || name || type) {
    filteredElectronics = electronicService.searchElectronic(electronics, search, name, type);
  } else {
    // If no search parameters are provided, display all electronics
    filteredElectronics = electronics;
  }

  res.render("posts/search", { electronics: filteredElectronics, search, name, type });
});

module.exports = router;
