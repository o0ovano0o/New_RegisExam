const router = require('express').Router();
const knex = require('../../knex');
const handleAPIError = require('../../common/handleAPIError');
const { validateStudentAPI } = require('../../middlewares/validateAPIAuthentication');



router.get('/api/student/result', validateStudentAPI, async(req, res) => {
    try {
        const { id } = await knex('exam').first('id').where({ status: 1 });
        const examid = id;
        const { user_id } = req.session;
        const listresult = await knex('result')
            .select()
            .where({ studentid: user_id }).andWhere({ examid });
        return res.status(200).json({
            success: true,
            data: listresult,
        });
    } catch (err) {
        handleAPIError(err, res);
    }
});



router.post('/api/student/result', validateStudentAPI, async(req, res) => {
    try {
        const { id } = await knex('exam').first('id').where({ status: 1 });
        const examid = id;
        const { user_id } = req.session;
        const { classesid, subjectid } = req.body;
        const check = await knex('result').select().where({ subjectid }).andWhere({ studentid: user_id }).andWhere({ classesid }).andWhere({ examid });
        console.log(check);
        if (check.length > 0) return res.status(400).json({ success: false, msg: 'Đăng ký trùng' });
        const result = await knex('result').insert({ subjectid, studentid: user_id, classesid, examid });
        if (!result) return res.status(400).json({ success: false, msg: 'Đăng ký ca thi thất bại' });
        return res.status(200).json({
            success: true,
            msg: `Đăng ký ca thi thành công`,
        });
    } catch (err) {
        handleAPIError(err, res);
    }
});

router.delete('/api/student/result/:id', validateStudentAPI, async(req, res) => {
    try {
        const { id } = req.params;
        if (!id) return res.status(400).json({ success: false, msg: 'Thông tin bắt buộc bị thiếu' });
        const check = await knex('result')
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

module.exports = router;