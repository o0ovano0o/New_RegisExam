const router = require('express').Router();
const sha1 = require('sha1');
const knex = require('../../knex');
const handleAPIError = require('../../common/handleAPIError');
const { validateAdminAPI, validateStudentAPI } = require('../../middlewares/validateAPIAuthentication');

router.post('/api/admin/student/import', validateAdminAPI, async(req, res) => {
    try {
        const { datarow } = req.body;
        if (datarow.length > 100) {
            return res.status(400).json({ success: false, msg: 'Dữ liệu quá lớn' });
        }
        if (!datarow) return res.status(400).json({ success: false, msg: 'Thông tin bắt buộc bị thiếu' });
        const column = datarow[0];
        let listcode = [];
        let obj = await datarow.splice(1).map((row, index) => {
            listcode.push(row[column.findIndex((item) => item.toLowerCase() == 'studentcode')]);
            const studentcode = row[column.findIndex((item) => item.toLowerCase() == 'studentcode')];
            let password = sha1(studentcode);
            return {
                studentcode: row[column.findIndex((item) => item.toLowerCase() == 'studentcode')],
                fullname: row[column.findIndex((item) => item.toLowerCase() == 'fullname')],
                datebirth: row[column.findIndex((item) => item.toLowerCase() == 'datebirth')],
                gender: row[column.findIndex((item) => item.toLowerCase() == 'gender')],
                hometown: row[column.findIndex((item) => item.toLowerCase() == 'hometown')],
                class: row[column.findIndex((item) => item.toLowerCase() == 'class')],
                password,
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

router.post('/api/admin/student', validateAdminAPI, async(req, res) => {
    try {
        const { studentcode, fullname, datebirth, gender, hometown, classes } = req.body;
        if (!studentcode || !fullname || !datebirth || !gender || !hometown || !classes) return res.status(400).json({ success: false, msg: 'Thông tin bắt buộc bị thiếu' });
        let obj = { studentcode, fullname, datebirth, gender, hometown, class: classes, password: sha1(studentcode), };
        const check = await knex('student')
            .insert(obj);
        if (!check) return res.status(400).json({ success: false, msg: 'Tạo tài khoản thất bại' });
        return res.status(200).json({
            success: true,
            msg: `Tạo tài khoản thành công`,
            check
        });
    } catch (err) {
        handleAPIError(err, res);
    }
});



router.get('/api/admin/students', validateAdminAPI, async(req, res) => {
    try {
        const listexam = await knex('student').select();
        return res.status(200).json({
            success: true,
            data: listexam,
        });
    } catch (err) {
        handleAPIError(err, res);
    }
});

router.post('/api/admin/student/query', validateAdminAPI, async(req, res) => {
    try {
        const { studentcode } = req.body;
        const student = await knex('student').where({ studentcode });
        return res.status(200).json({
            success: true,
            data: student,
        });
    } catch (err) {
        handleAPIError(err, res);
    }
});

router.get('/api/admin/student/getme', validateAdminAPI, async(req, res) => {
    try {
        const { user_id } = req.session;
        const student = await knex('student').where('id', user_id);
        return res.status(200).json({
            success: true,
            data: student,
        });
    } catch (err) {
        handleAPIError(err, res);
    }
});

router.delete('/api/admin/student/:id', validateAdminAPI, async(req, res) => {
    try {
        const { id } = req.params;
        if (!id) return res.status(400).json({ success: false, msg: 'Thông tin bắt buộc bị thiếu' });
        const check = await knex('student')
            .delete()
            .where({ id });
        if (!check) return res.status(400).json({ success: false, msg: 'Xóa người dùng thất bại' });
        return res.status(200).json({
            success: true,
            msg: `Xóa người dùng thành công`,
        });
    } catch (err) {
        handleAPIError(err, res);
    }
});

module.exports = router;