const router = require("express").Router()
const ctrls = require("../controllers/auth.controller")

router.post("/login-google", ctrls.loginWithGoogle)
router.get("/has-user/:email", ctrls.checkNewUserFromEmail)

module.exports = router
