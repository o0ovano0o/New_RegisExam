const router = require('express').Router();
const sha1 = require('sha1');
const knex = require('../../knex');
const handleAPIError = require('../../common/handleAPIError');
const { validateAdminAPI, validateStudentAPI,validateUser } = require('../../middlewares/validateAPIAuthentication');

router.post('/api/admin/listsubject/import/:status', validateUser,validateAdminAPI, async(req, res) => {
    try {
        const { status } = req.params;
        const { datarow } = req.body;
        const { id } = await knex('exam').first('id').where({ status: 1 });
        const examid = id;
        if (!datarow) return res.status(400).json({ success: false, msg: 'Thông tin bắt buộc bị thiếu' });
        const column = datarow[0];
        let codelist = [];
        let subjectlist = [];
        let studentcode = [];
        let deletesubject = [];
        await Promise.all(datarow.splice(1).map((row, index) => {
            studentcode.push(row[column.findIndex((item) => item.toLowerCase() == 'studentcode')].toString());
            if (subjectlist.filter(item => item.subjectcode == row[column.findIndex((item) => item.toLowerCase() == 'subjectcode')]).length == 0) {
                deletesubject.push([
                    examid,
                    row[column.findIndex((item) => item.toLowerCase() == 'subjectcode')]
                ])
                subjectlist.push({
                    examid,
                    subjecname: row[column.findIndex((item) => item.toLowerCase() == 'subjectname')],
                    subjectcode: row[column.findIndex((item) => item.toLowerCase() == 'subjectcode')]
                });
            }
            codelist.push({
                studentcode: row[column.findIndex((item) => item.toLowerCase() == 'studentcode')],
                subjectcode: row[column.findIndex((item) => item.toLowerCase() == 'subjectcode')]
            })
        }));
        const studentids = await knex('student').select('id', 'studentcode').whereIn('studentcode', studentcode);
        await knex('subject').delete().whereIn(['examid', 'subjectcode'], deletesubject);
        const subjectids = await knex('subject').insert(subjectlist).returning(['id', 'subjectcode']);
        if (studentids.length <= 0 || subjectids <= 0) {
            return res.status(500).json({ success: false, msg: 'Nhập liệu thất bại' });
        }
        const deletels = [];
        const listsubject = codelist.map((row) => {
            if (studentids.find(item => item.studentcode == row.studentcode) && subjectids.find(item => item.subjectcode == row.subjectcode)) {
                deletels.push([
                    studentids.find(item => item.studentcode == row.studentcode).id,
                    subjectids.find(item => item.subjectcode == row.subjectcode).id,
                    examid,
                ]);
                return {
                    studentid: studentids.find(item => item.studentcode == row.studentcode).id,
                    subjectid: subjectids.find(item => item.subjectcode == row.subjectcode).id,
                    examid,
                    status
                }
            }
        });
        await knex('listsubject').delete().whereIn(['studentid', 'subjectid', 'examid'], deletels);
        const check = await knex('listsubject').insert(listsubject);
        if (!check) return res.status(400).json({ success: false, msg: 'Nhập dữ liệu thất bại' });
        return res.status(200).json({
            success: true,
            msg: `Nhập dữ liệu thành công`,
            check: check.rowCount
        });
    } catch (err) {
        handleAPIError(err, res);
    }
});

router.post('/api/admin/listsubject/:status',validateUser, validateAdminAPI, async(req, res) => {
    try {
        const { status } = req.params;
        const { studentcode, subjectcode, subjectname } = req.body;
        const { id } = await knex('exam').first('id').where({ status: 1 });
        const examid = id;
        if (!studentcode || !subjectcode || !subjectname) return res.status(400).json({ success: false, msg: 'Thông tin bắt buộc bị thiếu' });
        const idd = await knex('student').first('id').where('studentcode', studentcode);
        const studentid = idd.id;
        let ids = await knex('subject').first('id').where('subjectcode', subjectcode).andWhere({ examid });
        console.log(ids);
        if (!ids) {
            const [subjectid] = await knex('subject').insert({
                examid,
                subjecname: subjectname,
                subjectcode
            }).returning('id');
            ids = { id: subjectid };
        }
        const subjectid = ids.id;
        console.log(studentid, subjectid, examid);
        await knex('listsubject').delete().whereIn(['studentid', 'subjectid', 'examid'], [
            [studentid, subjectid, examid]
        ]);
        const check = await knex('listsubject').insert({
            subjectid,
            studentid,
            examid,
            status
        });
        if (!check) return res.status(400).json({ success: false, msg: 'Nhập dữ liệu thất bại' });
        return res.status(200).json({
            success: true,
            msg: `Nhập dữ liệu thành công`,
            check: check.rowCount
        });
    } catch (err) {
        handleAPIError(err, res);
    }
});

router.put('/api/admin/listsubject/:listsubjectid/:status',validateUser, validateAdminAPI, async(req, res) => {
    try {
        const { status, listsubjectid } = req.params;
        if (!listsubjectid) return res.status(400).json({ success: false, msg: 'Thông tin bắt buộc bị thiếu' });
        const check = await knex('listsubject').update({ status }).where({ id: listsubjectid });
        if (!check) return res.status(400).json({ success: false, msg: 'Cập nhập dữ liệu thất bại' });
        return res.status(200).json({
            success: true,
            msg: `Cập nhập dữ liệu thành công`,
            check: check.rowCount
        });
    } catch (err) {
        handleAPIError(err, res);
    }
});

router.get('/api/admin/listsubject/:subjectid',validateUser, validateAdminAPI, async(req, res) => {
    try {
        const { subjectid } = req.params;
        const list = await knex('listsubject').join('subject', 'subjectid', 'subject.id').join('student', 'studentid', 'student.id').select('listsubject.id as id',

            'listsubject.subjectid as subjectid',
            'listsubject.studentid as studentid',
            'subject.subjecname as subjecname',
            'listsubject.status as status',
            'subject.subjectcode as subjectcode',
            'student.fullname as fullname',
            'student.datebirth as datebirth',
            'student.class as class').where({ subjectid });
        return res.status(200).json({
            success: true,
            list
        });
    } catch (err) {
        handleAPIError(err, res);
    }
});

// những môn mà sinh viên học
router.get('/api/student/listsubject/:studentid',validateUser, validateStudentAPI, async(req, res) => {
    try {
        const { studentid } = req.params;
        const list = await knex('listsubject').join('subject', 'subjectid', 'subject.id').join('student', 'studentid', 'student.id').select('*').where({ studentid });
        return res.status(200).json({
            success: true,
            list
        });
    } catch (err) {
        handleAPIError(err, res);
    }
});



module.exports = router;