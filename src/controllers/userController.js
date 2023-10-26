const router = require("express").Router();
const userService = require("../services/userService");

router.get("/register", (req, res) => {
  res.render("users/register");
});

router.post("/register", async (req, res) => {
  const { email, username, password, rePassword } = req.body;

  await userService.register({
    email,
    username,
    password,
    rePassword,
  });
  res.redirect("/");
});

router.get("/login", (req, res) => {
  res.render("users/login");
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  await userService.login(email, password);

  res.redirect("/");
});

//TO DO: provide logout endpoint

module.exports = router;
