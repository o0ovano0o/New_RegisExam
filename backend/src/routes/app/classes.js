const router = require('express').Router();
const knex = require('../../knex');
const handleAPIError = require('../../common/handleAPIError');
const { validateAdminAPI, validateStudentAPI } = require('../../middlewares/validateAPIAuthentication');

router.post('/api/admin/classes/:examid', validateAdminAPI, async(req, res) => {
    try {
        const { examid } = req.params;
        const { subjectcode,subjectname, date, room, start, end, amount, typeclasses } = req.body;
        if (!examid || !subjectcode || !date || !room || !start || !end || !amount || !typeclasses) return res.status(400).json({ success: false, msg: 'Thông tin bắt buộc bị thiếu' });
        const checkexit = await knex('classes').where({ date, room, start, end });
        console.log(checkexit);
        if(checkexit.length > 0) {
            return res.status(501).json({ success:false, msg:'Đã có ca thi trùng'});
        }
        let [ids] = await knex('subject').select('id').where({ subjectcode }).andWhere({ examid });
        if(!ids) {
            let id = await knex('subject').insert({ examid, subjectcode, subjecname:subjectname});
            ids={id};
        }
        const subjectid = ids.id;
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

router.delete('/api/admin/classes/:id', validateAdminAPI, async(req, res) => {
    try {
        const { id } = req.params;
        if ( !id) return res.status(400).json({ success: false, msg: 'Thông tin bắt buộc bị thiếu' });

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

router.put('/api/admin/classes/:id', validateAdminAPI, async(req, res) => {
    try {
        const { id } = req.params;
        const { date, room, start, end, amount, typeclasses } = req.body;
        if (  !date || !room || !start || !end || !amount || !typeclasses) return res.status(400).json({ success: false, msg: 'Thông tin bắt buộc bị thiếu' });
        const checkexit = await knex('classes').where({ date, room, start, end });
        console.log(checkexit);
        if(checkexit.length > 1) {
            return res.status(501).json({ success:false, msg:'Đã có ca thi trùng'});
        }
        const check = await knex('classes')
            .update({ date, room, start, end, amount, typeclasses })
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
            .select('exam.*','subject.*','classes.*');
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