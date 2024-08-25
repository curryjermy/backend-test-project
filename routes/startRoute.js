const express = require("express");
const router = express.Router();
const khari = require("../models/db");
const Db2 = require("../models/db2")


router.get("/login", (req, res) => {
    res.render("login")
})
router.post("/login", (req, res) => {
    res.json(req.body)
})


router.get("/index", (req, res) => {
    res.render("index")
})


router.get("/form", (req, res) => {  //route that makes sure values filed in form are saved in the database called khari
    res.render("form")
})
router.post("/form", (req, res) => {
    const newForm = new khari(req.body)
    newForm.save()
    //for signups we use (.register)
})

//route for sales
router.get("/form2", (req, res) => {
    res.render("formforsales")
})
// router.post("/form2", (req, res) => {
//     try {
//         const newForm2 = new Db2(req.body)
//         newForm2.save()
//     } catch (error) {
//         res.status(404).send("oops page not found")
//     };


// })
router.post("/form2", async (req, res) => {
    try {
        const newForm2 = new Db2({
            nameOfProduce: req.body.nameOfProduce,
            typeOfProduce: req.body.typeOfProduce,
            weightOfProduce: req.body.weightOfProduce,
            amountPaid: req.body.amountPaid,
            nameOfTheBuyer: req.body.nameOfTheBuyer
        });
        await newForm2.save();
    }catch (error) {
        res.status(404).send("oops page not found");
    }
});













module.exports = router;