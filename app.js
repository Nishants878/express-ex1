const express = require("express");
const bodyParser = require("body-parser");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const expressHbs = require("express-handlebars");
const app = express();
const path = require("path");
const errorController = require('./controllers/error')

//handlebar config

// app.engine(
//   "hbs",
//   expressHbs({
//     layoutsDir: "views/layouts/",
//     defaultLayout: "main-layout",
//     extname: "hbs",
//   })
// );

//for handlebars
// app.set("view engine", "hbs");
// app.set("views", "views");

//for pug
// app.set('view engine', 'pug');
// app.set('views','views')


//for ejs

app.set("view engine", "ejs");
app.set("views", "views");
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));

//filtering and only passing routes that starts with admin
app.use("/admin", adminRoutes);

app.use(shopRoutes);

app.use(errorController.get404);

app.listen(3000);
