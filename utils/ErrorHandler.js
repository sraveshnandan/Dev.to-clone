const ErrorHandler = (res, code, message) => {
  res.status(code).json({
    success: false,
    message,
  });
};

module.exports = ErrorHandler;
