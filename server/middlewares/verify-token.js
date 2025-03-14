const jsonwebtoken = require("jsonwebtoken")
const db = require("../models")

const verifyToken = (req, res, next) => {
  if (req.headers.authorization?.startsWith("Bearer")) {
    const token = req.headers.authorization.split(" ")[1]
    jsonwebtoken.verify(token, process.env.SECRET_JWT_KEY, (err, user) => {
      if (err) {
        return res.json({
          success: false,
          msg: "Phiên đăng nhập đã hết hạn vui lòng đăng nhập lại.",
        })
      }
      req.user = user
    })
  } else {
    return res.json({
      success: false,
      msg: "Bạn chưa đăng nhập",
    })
  }
  next()
}

module.exports = {
  verifyToken,
}
