const router = require('express').Router();
const sha1 = require('sha1');
const knex = require('../../knex');
const handleAPIError = require('../../common/handleAPIError');
const { validateAdminAPI } = require('../../middlewares/validateAPIAuthentication');

router.post('/api/admin/student/import',validateAdminAPI , async (req, res) => {
  try {
    const { datarow } = req.body;
    if (!datarow) return res.status(400).json({ success: false, msg: 'Thông tin bắt buộc bị thiếu' });
    const column = datarow[0];
    let obj = await datarow.splice(1).map((row, index) => {
        return {
          studentcode: row[column.findIndex((item)=> item.toLowerCase() == 'studentcode')],
          fullname: row[column.findIndex((item)=> item.toLowerCase() == 'fullname')],
          datebirth: row[column.findIndex((item)=> item.toLowerCase() == 'datebirth')],
          gender: row[column.findIndex((item)=> item.toLowerCase() == 'gender')],
          hometown: row[column.findIndex((item)=> item.toLowerCase() == 'hometown')],
          class: row[column.findIndex((item)=> item.toLowerCase() == 'class')],
          password: sha1(row[column.findIndex((item)=> item.toLowerCase() == 'studentcode')]),
        }
    });
    console.log(obj);
    const check = await knex('student')
      .insert(obj);
    if (!check) return res.status(400).json({ success: false, msg: 'Tạo kỳ thi thất bại' });
    return res.status(200).json({
      success: true,
      msg: `Tạo ca thi thành công`,
    });
  } catch (err) {
    handleAPIError(err, res);
  }
});

module.exports = router;
