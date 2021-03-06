const router = require('express').Router();
const sha1 = require('sha1');
const axios = require('axios')
const knex = require('../../knex');
const handleAPIError = require('../../common/handleAPIError');

router.post('/api/admin/register',async (req, res) => {
  try {
    const { username, password, fullname } = req.body;
    if (!username || !password || !fullname) {
      return res.status(400).json({ success: false, msg: 'Thiếu thông tin bắt buộc' });
    }
    if (password.length < 8) {
      return res.status(400).json({ success: false, msg: 'Mật khẩu phải dài hơn 6 ký tự' });
    }
    await axios.post('http://apigateway.toedu.me/auth/api/Intergrates/groups/admins', 
        {
            "userName": username,
            "name": fullname,
            "password": password,
            "email": null,
            "dateOfBirth": null,
            "class": null,
            "phoneNumber": null,
            "address": null,
            "groupCode":null
          }, 
        { 
            headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJudmtoYWkyMDMiLCJ1c2VyX2lkIjoiMDhkODhhNTMtN2IyMC00ZGFjLTg2YTAtMmRkYjdlNjhiYjI4IiwiZW1haWwiOiJudmtoYWkyMDNAZ21haWwuY29tIiwibGlzdF9yb2xlcyI6InxTWVNfQURNSU4vR1JPVVAxMnwiLCJuYmYiOjE2MDgyMjY3ODMsImV4cCI6MTYwODgzMTU4MywiaWF0IjoxNjA4MjI2NzgzfQ.KbYI3kCXNB0WQ2l6MsqZGOuu95Yhuxp9Y99TVo2sE64',
                "Content-Type": "application/json",
            },
            });
    const rows = await knex('admin').where({ username }).count('*', { as: 'count' });
    if (rows[0].count > 0) return res.status(400).json({ success: false, msg: 'Tên tài khoản đã tồn tại' });
    const result = await knex('admin').insert({ username, fullname, password: sha1(password) });
    if (!result) return res.status(400).json({ success: true, msg: 'Đăng ký tài khoản thất bại' });
    return res.status(200).json({ success: true, msg: 'Đăng ký tài khoản thành công' });
  } catch (err) {
    handleAPIError(err, res);
  }
});

router.post('/api/student/register', async (req, res) => {
  try {
    const { studentcode, password, fullname, datebirth, gender, hometown, classes } = req.body;
    if (!studentcode || !password || !fullname) {
      return res.status(400).json({ success: false, msg: 'Thiếu thông tin bắt buộc' });
    }
    if (password.length < 8) {
      return res.status(400).json({ success: false, msg: 'Mật khẩu phải dài hơn 6 ký tự' });
    }
    const rows = await knex('student').where({ studentcode }).count('*', { as: 'count' });
    if (rows[0].count > 0) return res.status(400).json({ success: false, msg: 'Tên tài khoản đã tồn tại' });
    const result = await knex('student').insert({ studentcode, fullname, password: sha1(password), datebirth, gender, hometown, class: classes });
    if (!result) return res.status(400).json({ success: true, msg: 'Đăng ký tài khoản thất bại' });
    return res.status(200).json({ success: true, msg: 'Đăng ký tài khoản thành công' });
  } catch (err) {
    handleAPIError(err, res);
  }
});

// router.post('/intergrates/register', async (req, res) => {
//   try {
//     const { userName , name ,email , dateOfBirth , address  } = req.body;
//     if (!userName || !name) {
//       return res.status(400).json({ success: false, msg: 'Thiếu thông tin bắt buộc' });
//     }

//     const rows = await knex('student').where({ studentcode:userName }).count('*', { as: 'count' });
//     if (rows[0].count > 0) return res.status(400).json({ success: false, msg: 'Tên tài khoản đã tồn tại' });
//     const result = await knex('student').insert({ studentcode: userName , fullname: name, password: sha1(userName), datebirth: dateOfBirth, hometown:address, class: req.body.class, email: email });
//     if (!result) return res.status(400).json({ success: true, msg: 'Đăng ký tài khoản thất bại' });
//     return res.status(200).json({ success: true, msg: 'Đăng ký tài khoản thành công' });
//   } catch (err) {
//     handleAPIError(err, res);
//   }
// });

router.post('/intergrates/register', async (req, res) => {
  try {
    const { UserName , Name , Email , DateOfBirth , Address  } = req.body;
    if (!UserName || !Name) {
      return res.status(400).json({ success: false, msg: 'Thiếu thông tin bắt buộc' });
    }

    const rows = await knex('student').where({ studentcode:UserName }).count('*', { as: 'count' });
    if (rows[0].count > 0) return res.status(400).json({ success: false, msg: 'Tên tài khoản đã tồn tại' });
    const result = await knex('student').insert({ studentcode: UserName , fullname: Name, password: sha1(UserName), datebirth: DateOfBirth, hometown:Address, class: req.body.Class, email: Email });
    if (!result) return res.status(400).json({ success: true, msg: 'Đăng ký tài khoản thất bại' });
    return res.status(200).json({ success: true, msg: 'Đăng ký tài khoản thành công' });
  } catch (err) {
    handleAPIError(err, res);
  }
});

router.get('/heathz', async (req, res) => {
  console.log(req.headders);
  console.log("-==============---------------======================");
  res.status(200).json({ msg:'Service hoạt động', success: true});
});

module.exports = router;
