const express = require("express");
const app = express();
import data from "./data";
import config from "./config";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import userRoute from "./routes/userRoute";

//configuring using .envfile;
dotenv.config();
const mongodbUrl = config.MONGODB_URL;
mongoose
  .connect(mongodbUrl, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .catch((error) => console.log(error.reason));

const app = express();
app.use(bodyParser.json());
app.use("/api/users", userRoute);
app.get("/api/products/:id", (req, res) => {
  const productId = req.params.id;
  const product = data.products.find((x) => x._id === productId);
  if (product) res.send(product);
  else res.status(404).send({ msg: "Product Not Found." });
});

app.get("/api/products", (req, res) => {
  res.send(data.products);
});
// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });
app.listen(5000, () => {
  console.log("Server started at http://localhost:5000");
});
