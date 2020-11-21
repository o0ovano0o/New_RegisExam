const router = require('express').Router();
const knex = require('../../knex');
const handleAPIError = require('../../common/handleAPIError');
const { validateStudentAPI } = require('../../middlewares/validateAPIAuthentication');



router.get('/api/student/result', validateStudentAPI, async(req, res) => {
    try {
        const { id } = await knex('exam').first('id').where({ status: 1 });
        const examid = id;
        const { studentid } = req.query;
        const listresult = await knex('result')
            .select()
            .where({ studentid, examid });
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
        const { studentid } = req.query;
        const { datarow } = req.body;
        if (!datarow) return res.status(400).json({ success: false, msg: 'Thông tin bắt buộc bị thiếu' });
        let obj = await datarow.splice(1).map((row, index) => {
            listcode.push(row[column.findIndex((item) => item.toLowerCase() == 'studentcode')]);
            return {
                studentcode: row[column.findIndex((item) => item.toLowerCase() == 'studentcode')],
                fullname: row[column.findIndex((item) => item.toLowerCase() == 'fullname')],
                datebirth: row[column.findIndex((item) => item.toLowerCase() == 'datebirth')],
                gender: row[column.findIndex((item) => item.toLowerCase() == 'gender')],
                hometown: row[column.findIndex((item) => item.toLowerCase() == 'hometown')],
                class: row[column.findIndex((item) => item.toLowerCase() == 'class')],
                password: sha1(row[column.findIndex((item) => item.toLowerCase() == 'studentcode')]),
            }
        });
        console.log(listcode);
        await knex('student').delete().whereIn('studentcode', listcode);
        const check = await knex('student')
            .insert(obj);
        if (!check) return res.status(400).json({ success: false, msg: 'Nhập sinh viên thất bại' });
        return res.status(200).json({
            success: true,
            msg: `Nhập sinh viên thành công`,
            check
        });
    } catch (err) {
        handleAPIError(err, res);
    }
});

router.get('/api/admin/subjects', validateStudentAPI, async(req, res) => {
    try {
        const { subjectcode } = req.query;
        const listsubject = await knex('subject')
            .select()
            .where({ subjectcode });
        return res.status(200).json({
            success: true,
            data: listsubject,
        });
    } catch (err) {
        handleAPIError(err, res);
    }
});

module.exports = router;