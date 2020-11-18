const router = require('express').Router();
const knex = require('../../knex');
const handleAPIError = require('../../common/handleAPIError');
const { validateAdminAPI } = require('../../middlewares/validateAPIAuthentication');

router.post('/api/admin/exam',validateAdminAPI , async (req, res) => {
  try {
    const { examname, examyear, semester,note } = req.body;
    if (!examname || !examyear || !semester || !note) return res.status(400).json({ success: false, msg: 'Thông tin bắt buộc bị thiếu' });
    const check = await knex('exam')
      .insert({ examname, examyear, semester, note, status: 0 });
    if (!check) return res.status(400).json({ success: false, msg: 'Tạo kỳ thi thất bại' });
    return res.status(200).json({
      success: true,
      msg: `Tạo kỳ thi thành công`,
    });
  } catch (err) {
    handleAPIError(err, res);
  }
});

router.delete('/api/admin/exam/:id',validateAdminAPI, async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) return res.status(400).json({ success: false, msg: 'Thông tin bắt buộc bị thiếu' });
    const check = await knex('exam')
      .delete()
      .where({ id });
    if (!check) return res.status(400).json({ success: false, msg: 'Xóa kỳ thi thất bại' });
    return res.status(200).json({
      success: true,
      msg: `Xóa kỳ thi thành công`,
    });
  } catch (err) {
    handleAPIError(err, res);
  }
});

router.put('/api/admin/exam/:id', validateAdminAPI, async(req, res) => {
    try {
        const { id } = req.params;
        const { examname, examyear, semester, note, status } = req.body;
        if (!examname || !examyear || !semester || !id) return res.status(400).json({ success: false, msg: 'Thông tin bắt buộc bị thiếu' });
        if (status) {
            await knex('exam')
                .update({ status: 0 });
        }
        const check = await knex('exam')
            .update({ examname, examyear, semester, note, status })
            .where({ id });
        if (!check) return res.status(400).json({ success: false, msg: 'Sửa kỳ thi thất bại' });
        return res.status(200).json({
            success: true,
            msg: `Sửa ca thi thành công`,
        });
    } catch (err) {
        handleAPIError(err, res);
    }
});

router.get('/api/admin/exams', validateAdminAPI, async(req, res) => {
    try {
        const listexam = await knex('exam').select();
        return res.status(200).json({
            success: true,
            data: listexam,
        });
    } catch (err) {
        handleAPIError(err, res);
    }
});

router.get('/api/admin/exam/:id', validateAdminAPI, async(req, res) => {
    try {
        const { id } = req.params;
        if (!id) return res.status(400).json({ success: false, msg: 'Thông tin bắt buộc bị thiếu' });
        const exam = await knex('exam')
            .first()
            .where({ id });
        if (!exam) return res.status(400).json({ success: false, msg: 'Lấy thông tin kỳ thi thất bại' });
        return res.status(200).json({
            success: true,
            data: exam,
        });
    } catch (err) {
        handleAPIError(err, res);
    }
});


module.exports = router;