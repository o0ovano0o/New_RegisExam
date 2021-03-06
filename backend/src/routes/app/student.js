const router = require('express').Router();
const sha1 = require('sha1');
const axios = require('axios');
const knex = require('../../knex');
const handleAPIError = require('../../common/handleAPIError');
const { validateAdminAPI, validateStudentAPI,validateUser } = require('../../middlewares/validateAPIAuthentication');

router.post('/api/admin/student/import',validateUser, validateAdminAPI, async(req, res) => {
    try {
        const { datarow } = req.body;
        if (datarow.length > 100) {
            return res.status(400).json({ success: false, msg: 'Dữ liệu quá lớn' });
        }
        if (!datarow) return res.status(400).json({ success: false, msg: 'Thông tin bắt buộc bị thiếu' });
        const column = datarow[0];
        let listcode = [];
        let listuser = [];
        let obj = await datarow.splice(1).map((row, index) => {
            listcode.push(row[column.findIndex((item) => item.toLowerCase() == 'studentcode')]);
            const studentcode = row[column.findIndex((item) => item.toLowerCase() == 'studentcode')];
            let password = sha1(studentcode);
            listuser.push({

                    "userName": row[column.findIndex((item) => item.toLowerCase() == 'studentcode')],
                    "name": row[column.findIndex((item) => item.toLowerCase() == 'fullname')],
                    "password": row[column.findIndex((item) => item.toLowerCase() == 'studentcode')],
                    "email": `${row[column.findIndex((item) => item.toLowerCase() == 'studentcode')]}@vnu.edu.vn`,
                    "dateOfBirth": null,
                    "class": row[column.findIndex((item) => item.toLowerCase() == 'class')],
                    "phoneNumber": null,
                    "address": row[column.findIndex((item) => item.toLowerCase() == 'hometown')],
                    "groupCode": "G5"

            });
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

        
        await axios.post('http://apigateway.toedu.me/auth/api/Intergrates/groups/users/G5', listuser, 
        {

            headers: {
              Authorization: req.headers.authorization,
              "Content-Type": "application/json",
            },
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

router.put('/api/student/password',validateUser, validateStudentAPI, async(req, res) => {
    try {
        const { user_id } = req.session;
        const { newpass, oldpass } = req.body;
        if (newpass.length < 8) {
            return res.status(400).json({ msg: "Mật khẩu không đúng yêu cầu", success: false });
        }
        const [student] = await knex('student')
            .where({ id: user_id });
        if (!student || student.password !== sha1(oldpass)) {
            return res.status(401).json({ msg: "Bạn không có quyền đổi mật khẩu", success: false });
        }
        await knex('student').update({ password: sha1(newpass) }).where({ id: user_id });
        return res.status(200).json({
            success: true,
            msg: 'Cập nhật tài khoản thành công'
        });
    } catch (err) {
        handleAPIError(err, res);
    }
});

router.post('/api/admin/student',validateUser, validateAdminAPI, async(req, res) => {
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


router.get('/api/admin/students',validateUser, validateAdminAPI, async(req, res) => {
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

router.post('/api/admin/student/query',validateUser, validateAdminAPI, async(req, res) => {
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

router.get('/api/admin/student/getme',validateUser, validateStudentAPI, async(req, res) => {
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

router.delete('/api/admin/student/:id',validateUser, validateAdminAPI, async(req, res) => {
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