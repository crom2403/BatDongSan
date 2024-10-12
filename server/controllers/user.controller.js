const asyncHandler = require("express-async-handler")
const db = require("../models")

module.exports = {
  getMe: asyncHandler(async (req, res) => {
    const { uid } = req.user

    const response = await db.User.findByPk(uid, {
      attributes: {
        exclude: ["password", "resetPwdExpiry", "resetPwdToken"], // các trường không trả vể
      },
      include: [
        { model: db.Pricing, as: "rPricing", attributes: { exclude: ["createdAt", "updatedAt"] } },
      ],
    })

    return res.json({
      success: true,
      user: response,
    })
  }),
}
