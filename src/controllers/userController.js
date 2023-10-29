const router = require("express").Router();
const userService = require("../services/userService");
const { extractErrorMsgs } = require("./../utils/errorHandler");

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

  try {
    const token = await userService.login(email, password);
    console.log({ token });

    res.cookie("token", token, { httpOnly: true });
    res.redirect("/");
  } catch (error) {
    const errorMessages = extractErrorMsgs(error);
    res.status(404).render("users/login", { errorMessages });
  }
});

router.get("/logout", (req, res) => {
  //
  res.clearCookie("token");
  res.redirect("/");
});
//TO DO: provide logout endpoint

module.exports = router;
