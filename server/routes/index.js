const { notFound, errorHandler } = require("../middlewares/error-handler")
const authRoutes = require("./auth.route")
const userRoutes = require("./user.route")

const initRoutes = (app) => {
  app.use("/api/v1/auth", authRoutes)
  app.use("/api/v1/user", userRoutes)

  app.use(notFound)
  app.use(errorHandler)
}

module.exports = initRoutes
