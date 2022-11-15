const express = require("express");
const router = express.Router();
const User = require("../models/user");
const Art = require("../models/art");

router.get("/", (req, res) => {
    if(!req.session.loggedin) {
        res.redirect("/login");
    }
    else{
        Art.find({}, (err, allArt) => {
            if(err){
                console.log(err);
            }
            else{
                res.render("gallery/gallery", {gallery: allArt, session: req.session});
            }
        });
    }
});


module.exports = router;