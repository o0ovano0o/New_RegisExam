const knex = require('../knex');
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
  const validateRes = validateAdmin(req);
  if (validateRes.success) return next();
  return res.status(401).json(validateRes);
}

function validateStudentAPI(req, res, next) {
  const validateRes = validateStudent(req);
  if (validateRes.success) return next();
  return res.status(401).json(validateRes);
}

async function validateUser(req, res, next) {
  if(!req.headers.token) {
    res.status(401).json({ success: false, msg: 'Bạn cần đăng nhập!' });
  }
  var obj = req.headers.token;
  let roles = null;
  if(!obj) return res.status(401).json({ success: false, msg: 'Bạn cần đăng nhập!' });
  obj.list_roles.split('|').forEach(element => {
    if(element.search('GROUP5') > 0){
      roles = element.split('/');
    }
  });
  if(!roles) {
    return res.status(401).json({ success: false, msg: 'Bạn cần đăng nhập!' });
  }
  if(roles == 'SYS_ADMIN') {
    const [admin] = await knex('admin').where({ username: obj.user_name});
    Object(admin, {
      user_id: admin.id,
      userrole: 2
    })
    req.session=admin;
  }
  if(roles == 'GROUP_USER') {
    const [student] = await knex('student').where({ studentcode: obj.user_name});
    Object(student, {
      user_id: student.id,
      userrole: 1
    })
    req.session=student;
  }
}

module.exports = {
  validateAppAPI,
  validateStudentAPI,
  validateAdminAPI,
  validateUser
};
