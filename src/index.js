const express = require("express");
const handlebars = require("express-handlebars");
const path = require("path");
const port = 3000;

const app = express();

const routes = require("./router");

//Express Config
app.use(express.static(path.resolve(__dirname, "./public"))); // this find static files
app.use(express.urlencoded({ extended: false }));

//Handlebars Config
app.engine("hbs", handlebars.engine({ extname: "hbs" }));
app.set("view engine", "hbs");
app.set("views", "src/views");

//Routes
app.use(routes);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
