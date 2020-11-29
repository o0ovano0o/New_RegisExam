const router = require('express').Router();
const knex = require('../../knex');
const handleAPIError = require('../../common/handleAPIError');
const { validateAdminAPI, validateStudentAPI } = require('../../middlewares/validateAPIAuthentication');

router.post('/api/admin/classes/:examid', validateAdminAPI, async(req, res) => {
    try {
        const { examid } = req.params;
        const { subjectid, date, room, start, end, amount, typeclasses } = req.body;
        if (!examid || !subjectid || !date || !room || !start || !end || !amount || !typeclasses) return res.status(400).json({ success: false, msg: 'Thông tin bắt buộc bị thiếu' });
        const check = await knex('classes')
            .insert({ subjectid, date, room, start, end, amount, typeclasses, studentregis: 0, examid });
        if (!check) return res.status(400).json({ success: false, msg: 'Tạo ca thi thất bại' });
        return res.status(200).json({
            success: true,
            msg: `Tạo ca thi thành công`,
        });
    } catch (err) {
        handleAPIError(err, res);
    }
});

router.delete('/api/admin/classes/:examid/:id', validateAdminAPI, async(req, res) => {
    try {
        const { examid, id } = req.params;
        if (!examid || !id) return res.status(400).json({ success: false, msg: 'Thông tin bắt buộc bị thiếu' });
        const check = await knex('classes')
            .delete()
            .where({ id });
        if (!check) return res.status(400).json({ success: false, msg: 'Xóa ca thi thất bại' });
        return res.status(200).json({
            success: true,
            msg: `Xóa ca thi thành công`,
        });
    } catch (err) {
        handleAPIError(err, res);
    }
});

router.put('/api/admin/classes/:examid/:id', validateAdminAPI, async(req, res) => {
    try {
        const { examid, id } = req.params;
        const { subjectid, date, room, start, end, amount, typeclasses } = req.body;
        if (!examid || !subjectid || !date || !room || !start || !end || !amount || !typeclasses) return res.status(400).json({ success: false, msg: 'Thông tin bắt buộc bị thiếu' });
        const check = await knex('classes')
            .update({ subjectid, date, room, start, end, amount, typeclasses })
            .where({ id });
        if (!check) return res.status(400).json({ success: false, msg: 'Sửa ca thi thất bại' });
        return res.status(200).json({
            success: true,
            msg: `Sửa ca thi thành công`,
        });
    } catch (err) {
        handleAPIError(err, res);
    }
});


router.get('/api/admin/classess/:examid', validateAdminAPI, async(req, res) => {
    try {
        const { examid } = req.params;
        const listclasses = await knex('classes')
            .join('exam', 'examid', '=', 'exam.id')
            .join('subject','subject.id','subjectid')
            .select();
        return res.status(200).json({
            success: true,
            data: listclasses,
        });
    } catch (err) {
        handleAPIError(err, res);
    }
});


router.get('/api/student/home/:studentid', validateStudentAPI, async(req, res) => {
    try {
        const { studentid } = req.params;
        const listsubject = await knex('listsubject').join('subject', 'subjectid', 'subject.id').join('student', 'studentid', 'student.id').select().where({ studentid });

      const allow = listsubject.filter(item => item.status = 1);
      const notallow = listsubject.filter(item => item.status = 0);
      const ratio = (allow.length/listsubject.length)*100;
      const {id } = await knex('exam').first('id').where({status: 1});
      const examid=id;
      const classeslist = await knex('classes').select().whereIn('subjectid', listsubject.map(item=> item.subjectid)).andWhere({ examid });
      return res.status(200).json({
        success: true,
        classeslist,
        allow,
        notallow,
        totalsubject: listsubject.length,
        totalallow: allow.length,
        totalnotallow: notallow.length,
        ratio
      });
    } catch (err) {
        handleAPIError(err, res);
    }
});

module.exports = router;