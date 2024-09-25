const errorHandler = (error, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode
  const message = error?.message?.replaceAll(`\"`, "")

  return res.status(statusCode).json({
    statusCode,
    success: false,
    msg: message,
  })
}

const notFound = (req, res, next) => {
  const error = new Error(`Route ${req.method} ${req.originalUrl} không tìm thấy.`)
  res.status(404)
  next(error)
}

module.exports = {
  notFound,
  errorHandler,
}
