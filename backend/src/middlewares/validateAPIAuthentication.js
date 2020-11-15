function validateAppSession(req) {
  if (!req.session.user_id) {
    return { success: false, msg: 'Bạn cần đăng nhập!' };
  }
  return { success: true };
}

function validateAppAPI(req, res, next) {
  const validateRes = validateAppSession(req);
  if (validateRes.success) return next();
  res.status(401).json(validateRes);
}

module.exports = {
  validateAppAPI,
};
