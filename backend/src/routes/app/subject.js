const router = require('express').Router();
const knex = require('../../knex');
const handleAPIError = require('../../common/handleAPIError');
const { validateAdminAPI,validateUser } = require('../../middlewares/validateAPIAuthentication');



router.delete('/api/admin/subject/:id',validateUser, validateAdminAPI, async(req, res) => {
    try {
        const { id } = req.params;
        if (!id) return res.status(400).json({ success: false, msg: 'Thông tin bắt buộc bị thiếu' });
        const check = await knex('subject')
            .delete()
            .where({ id });
        if (!check) return res.status(400).json({ success: false, msg: 'Xóa môn thi thất bại' });
        return res.status(200).json({
            success: true,
            msg: `Xóa môn thi thành công`,
        });
    } catch (err) {
        handleAPIError(err, res);
    }
});



router.get('/api/admin/subjects',validateUser, validateAdminAPI, async(req, res) => {
    try {
        const { id } = await knex('exam').first('id').where({ status: 1 });
        const examid = id;
        const listsubject = await knex('subject')
            .join('exam', 'examid', 'exam.id')
            .select('subject.*').andWhere({examid});
        return res.status(200).json({
            success: true,
            data: listsubject,
        });
    } catch (err) {
        handleAPIError(err, res);
    }
});

router.post('/api/admin/subjects/query',validateUser, validateAdminAPI, async(req, res) => {
    try {
        const { subjectcode } = req.body;

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