
// const express = require("express");
// const { register,login, activateAccount } = require("../controllers/user");
// const router = express.Router();
// router.post("/", register);
// router.post("/",login)
// router.post("/",activateAccount)
// module.exports = router;
const express = require("express");
const { register, login, activateAccount } = require("../controllers/user");
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/activate", activateAccount);

module.exports = router;
