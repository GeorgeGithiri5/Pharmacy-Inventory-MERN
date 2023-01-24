const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const cors = require("cors");
const passport = require("passport");

const db = require("./config/keys").MongoURI;

const app = express();

// Body parser middleware
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.use(cors());

mongoose
  .connect(db, { useUnifiedTopology: true })
  .then(() => console.log("Connected to the database"))
  .catch((err) => console.log(err));

const AdminRoute = require("./routes/Admin");
const ProductRoute = require("./routes/Product");
const SalesRoute = require("./routes/Sales");

app.use("/sales", SalesRoute);
app.use("/products", ProductRoute);
app.use("/Admin", AdminRoute);

app.use(passport.initialize());
require("./config/passport")(passport);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`Server running on Port ${PORT}: http:localhost:${5000}`)
);
