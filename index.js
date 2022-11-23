console.log("Getting_Started_with_Express_and_handlebars");
const express = require("express");
const path = require("path");
const exphbs = require("express-handlebars");
const app = express();
const port = 7000;

app.engine("handlebars", exphbs.engine());
app.use("/static", express.static(path.join(__dirname, "./public")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set("view engine", "handlebars");
app.set("views", "./views");

app.get("/", (req, res) => {
  let courses = ["Js, Java, Node, Express"];
  res.render("app", { title: "MyHandlebars", mycourses: courses });
});

app.get("/about", (req, res) => {
  res.render("about");
});

// app.get("/login", (req, res) => {
//   res.render("login");
// });
// app.post("/postdata", (req, res) => {
//   let uname = req.body.uname;
//   let password = req.body.password;
//   //   res.send(`${uname} ${password}`);
//   console.log(uname, password);
//   if (uname === "noman" && password === "noman") {
//     console.log(`welcome user ${uname}`);
//   } else {
//     res.redirect("/");
//   }
//   res.send("Loggged in sucessfully");
// });

app.listen(port, (err) => {
  if (err) {
    throw err;
  } else {
    console.log(`Server is running on Port ${port}`);
  }
});
