require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const QueryModel = require("./models/query");
const CareerFormModel = require("./models/career");

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(express.json({ limit: '50mb' }));
app.use(
  cors({
    exposedHeaders: ["X-Total-Count"],
  })
);

main().catch((err) => console.log(err));

app.post("/query", (req, res) => {
  // To post / insert data into database

  QueryModel.create(req.body)
    .then((log_reg_form) => res.json(log_reg_form))
    .catch((err) => res.json(err));
});

app.get("/queries", async (req, res) => {
  const condition = {};

  let query = QueryModel.find(condition);

  try {
    const docs = await query.exec();
    console.log(docs);
    res.status(200).json(docs);
  } catch (err) {
    res.status(400).json(err);
  }
});

app.delete("/query", async (req, res) => {
  try {
    console.log(req.body, req.body.id);
    await QueryModel.findByIdAndDelete(req.body.id);

    const condition = {};

    let query = QueryModel.find(condition);

    const docs = await query.exec();

    return res.status(200).json(docs);
  } catch (err) {
    console.error(err);
  }
});

app.post("/career", (req, res) => {
  // To post / insert data into database

  CareerFormModel.create(req.body)
    .then((career_form) => res.json(career_form))
    .catch((err) => res.json(err));
});

app.get("/career-applications", async (req, res) => {
  const condition = {};

  let query = CareerFormModel.find(condition);

  try {
    const docs = await query.exec();
    console.log(docs);
    res.status(200).json(docs);
  } catch (err) {
    res.status(400).json(err);
  }
});

app.delete("/career-applications", async (req, res) => {
  try {
    console.log(req.body, req.body.id);
    await CareerFormModel.findByIdAndDelete(req.body.id);

    const condition = {};

    let query = CareerFormModel.find(condition);

    const docs = await query.exec();

    return res.status(200).json(docs);
  } catch (err) {
    console.error(err);
  }
});

async function main() {
  await mongoose.connect(process.env.MONGODB_URL);
  console.log("database connected");
}

app.listen(process.env.PORT, () => {
  console.log("server started");
});
