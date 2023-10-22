const router = require("express").Router();

router.get("/register", (req, res) => {
  res.render("users/register");
});

router.post("/register", (req, res) => {
  const { email, username, password, rePassword } = req.body;
});

router.get("/login", (req, res) => {
  res.render("users/login");
});

router.post("/login", (req, res) => {
  console.log(req.body);
});

//TO DO: provide logout endpoint

module.exports = router;
