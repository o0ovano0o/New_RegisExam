function validateAppSession(req) {
  if (!req.session.user_id) {
    return { success: false, msg: 'Bạn cần đăng nhập!' };
  }
  return { success: true };
}

function validateAdmin(req){
  if(!req.session.userrole || req.session.userrole!=2){
    return { success: false, msg: 'Bạn không có quyền truy cập' };
  }
  return { success: true };
}

function validateStudent(req){
  if(!req.session.userrole || req.session.userrole!=1){
    return { success: false, msg: 'Bạn không có quyền truy cập' };
  }
  return { success: true };
}

function validateAppAPI(req, res, next) {
  const validateRes = validateAppSession(req);
  if (validateRes.success) return next();
  return res.status(401).json(validateRes);
}

function validateAdminAPI(req, res, next) {
  console.log(123);
  const validateRes = validateAdmin(req);
  console.log(validateRes);
  if (validateRes.success) return next();
  return res.status(401).json(validateRes);
}

function validateStudentAPI(req, res, next) {
  const validateRes = validateStudent(req);
  if (validateRes.success) return next();
  return res.status(401).json(validateRes);
}

module.exports = {
  validateAppAPI,
  validateStudentAPI,
  validateAdminAPI
};