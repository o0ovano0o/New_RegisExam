const router = require('express').Router();
const knex = require('../../knex');
const handleAPIError = require('../../common/handleAPIError');
const { validateAdminAPI } = require('../../middlewares/validateAPIAuthentication');

router.post('/api/admin/admin', validateAdminAPI, async(req, res) => {
    try {
        const { username, password, fullname } = req.body;
        if (!username || !password || !fullname) return res.status(400).json({ success: false, msg: 'Thông tin bắt buộc bị thiếu' });
        const check = await knex('admin')
            .insert({ username, password, fullname });
        if (!check) return res.status(400).json({ success: false, msg: 'Thêm quản trị viên thất bại' });
        return res.status(200).json({
            success: true,
            msg: `Thêm quản trị viên thành công`,
        });
    } catch (err) {
        handleAPIError(err, res);
    }
});

router.delete('/api/admin/admin/:id', validateAdminAPI, async(req, res) => {
    try {
        const { id } = req.params;
        if (!id) return res.status(400).json({ success: false, msg: 'Thông tin bắt buộc bị thiếu' });
        const check = await knex('admin')
            .delete()
            .where({ id });
        if (!check) return res.status(400).json({ success: false, msg: 'Xóa quản trị viên thất bại' });
        return res.status(200).json({
            success: true,
            msg: `Xóa quản trị viên thành công`,
        });
    } catch (err) {
        handleAPIError(err, res);
    }
});

router.get('/api/admin/admins', validateAdminAPI, async(req, res) => {
    try {
        const listadmin = await knex('admin').select();
        return res.status(200).json({
            success: true,
            data: listadmin,
        });
    } catch (err) {
        handleAPIError(err, res);
    }
});


module.exports = router;