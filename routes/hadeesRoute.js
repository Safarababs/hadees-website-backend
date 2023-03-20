const express = require("express");
const router = express.Router();
const Hadith = require("../models/hadeesModel");


router.route("/addhadees").post((req, res) => {
  const newHadees = new Hadith({
    book: req.body.book,
    chapter: req.body.chapter,
    hadithNumber: req.body.hadithNumber,
    text: req.body.text,
    narrator: req.body.narrator,
    reference: req.body.reference,
  });

  newHadees.save();
  res.send("added successfully");
});

router.route("/hadees").get((req, res) => {
  const hadithNumber = req.body;
  Hadith.find().then((foundHadees) => res.json(foundHadees));
});

router.route("/number").get((req, res) => {
  Hadith.find().then((foundNumber) => res.json(foundNumber.hadithNumber));
});



module.exports = router;
