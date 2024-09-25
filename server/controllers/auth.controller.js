const asyncHandler = require("express-async-handler")
const db = require("../models")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const hashPassword = (password) => bcrypt.hashSync(password, bcrypt.genSaltSync(10))

module.exports = {
  //Login with google
  loginWithGoogle: asyncHandler(async (req, res, next) => {
    const { email, fullname, avatar, password } = req.body
    let uid = null
    const alreadyUser = await db.User.findOne({ where: { email } })
    if (!alreadyUser) {
      const newUser = await db.User.create({
        email,
        fullname,
        avatar,
        password: hashPassword(password),
      })
      if (!newUser) throw new Error("Lỗi tạo mới user.")
      uid = newUser.id
    } else {
      uid = alreadyUser.id
    }

    const token = jwt.sign({ uid }, process.env.SECRET_JWT_KEY, { expiresIn: "7d" })

    return res.json({
      success: !!token, // chuyển token thành dạng true false , nếu token tạo thành công thì true ngược lại thì false
      accessToken: token,
      msg: token ? "Đăng nhập thành công." : "Đăng nhập không thành công.",
    })
  }),

  checkNewUserFromEmail: asyncHandler(async (req, res) => {
    const { email } = req.params
    const user = await db.User.findOne({ where: { email } })
    let token = null
    if (user) token = jwt.sign({ uid: user.id }, process.env.SECRET_JWT_KEY, { expiresIn: "7d" })

    return res.json({
      success: true, // nếu có user thì true không có thì false
      hasUser: !!user,
      accessToken: token,
      msg: token ? "Đăng nhập thành công." : "New users",
    })
  }),
}
