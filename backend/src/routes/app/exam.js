const router = require('express').Router();
const knex = require('../../knex');
const handleAPIError = require('../../common/handleAPIError');
const { validateAdminApi } = require('../../middlewares/validateAPIAuthentication');

router.post('/api/admin/exam',validateAdminApi,  async (req, res) => {
  try {
    const { examname, examyear, semester,note } = req.body;
    if (!examname || !examyear || !semester) return res.status(400).json({ success: false, msg: 'Thông tin bắt buộc bị thiếu' });
    const user = await knex('exam')
      .first('id', 'username', 'password', 'fullname')
      .where({ username, password: sha1(password) });
    if (!user) return res.status(400).json({ success: false, msg: 'Tài khoản hoặc mật khẩu không chính xác' });
    req.session.user_id = user.id;
    req.session.username= user.username;
    req.session.password= user.password;
    req.session.fullname= user.fullname;
    req.session.userrole = 2;
    return res.status(200).json({
      success: true,
      msg: `Đăng nhập thành công`,
    });
  } catch (err) {
    handleAPIError(err, res);
  }
});