const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.get("/", (req, res) => {
	res.render("user/register", { user: new User() });
});

router.post("/", (req, res) => {
	const user = new User({
		username: req.body.username,
		password: req.body.password,
		accountType: req.body.accountType,
	});
	user.save((err, newUser) => {
		if (err) {
			console.log(err);
			res.render("user/register", {
				user: user,
				errorMessage:
					"Error creating user account. Perhaps the username is already taken?",
			});
		} else {
			// res.redirect("/login");
			res.redirect("/");
		}
	});
	// res.send(user);
});

module.exports = router;
