const router = require('express').Router();
const sha1 = require('sha1');
const knex = require('../../knex');
const handleAPIError = require('../../common/handleAPIError');
const { validateAdminAPI } = require('../../middlewares/validateAPIAuthentication');

router.get('/api/admin/home',validateAdminAPI , async (req, res) => {
  try {
    const [exam] = await knex('exam').count();
    const [student] = await knex('student').count();
    const [admin] = await knex('admin').count();
    const [listsubject] = await knex('listsubject').count().where({ status:1 });
    const [nonlistsubject] = await knex('listsubject').count().where({ status:0 });
    return res.status(200).json({
      success: true,
      nonlistsubject:nonlistsubject.count,
      listsubject: listsubject.count,
      admin: admin.count,
      student: student.count,
      exam: exam.count
    });
  } catch (err) {
    handleAPIError(err, res);
  }
});


module.exports = router;
