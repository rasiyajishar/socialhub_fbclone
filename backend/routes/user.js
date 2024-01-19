
// // const express = require("express");
// // const { register,login, activateAccount } = require("../controllers/user");
// // const router = express.Router();
// // router.post("/", register);
// // router.post("/",login)
// // router.post("/",activateAccount)
// // module.exports = router;
// const express = require("express");
// const { register, login, activateAccount } = require("../controllers/user");
// const router = express.Router();
// const passport = require("passport");

// router.post("/", register);
// router.post("/", login);
// router.post("/", activateAccount);

// router.get("/login/success", isAuthenticated, (req, res) => {
//   res.status(200).json({
//     error: false,
//     message: "successfully logged in",
//     user: req.user,
//   });
// });

// router.get("/login/failed", (req, res) => {
//   res.status(401).json({
//     error: true,
//     message: "Log in failure",
//   });
// });

// router.get(
//   "/google/callback",
//   passport.authenticate("google", {
//     successRedirect: process.env.BASE_URL,
//     failureRedirect: "/user/login/failed",
//   })
// );

// router.get("/google", passport.authenticate("google", ["profile", "email"]));

// router.get("/logout", (req, res) => {
//   req.logout();
//   res.redirect(process.env.BASE_URL);
// });

// // Middleware to check if the user is authenticated
// function isAuthenticated(req, res, next) {
//   if (req.isAuthenticated()) {
//     return next();
//   }
//   res.status(403).json({ error: true, message: "not authorized" });
// }

// module.exports = router;


const express = require("express");
const { register, login,activateAccount,googleAuthLogin} = require("../controllers/user");
const router = express.Router();
const passport = require("passport");

router.post("/register", register);
router.post("/login", login);
router.post("/activate", activateAccount);

router.get("/login/success", isAuthenticated, (req, res) => {
  res.status(200).json({
    error: false,
    message: "successfully logged in",
    user: req.user,
  });
});

router.get("/login/failed", (req, res) => {
  res.status(401).json({
    error: true,
    message: "Log in failure",
  });
});

// router.get(
//   "/google/callback",
//   passport.authenticate("google", {
//     successRedirect: process.env.BASE_URL,
//     failureRedirect: "/user/login/failed",
//   })
// );

// router.get("/google", passport.authenticate("google", ["profile", "email"]));

//googlefirebase-route
router.post("/googleauth",googleAuthLogin)

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect(process.env.BASE_URL);
});

// Middleware to check if the user is authenticated
function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.status(403).json({ error: true, message: "not authorized" });
}

module.exports = router;
