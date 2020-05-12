const router = require('express').Router();
// const multer = require('multer');
// const Api = require('../api/auth');

// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, '../upload')
//     },
//     filename: (req, file, cb) => {
//         cb(null, file.originalname)
//     }
// })

// const upload = multer({ storage: storage })
// router.post('/csv', upload.single('csv'), Api.uploadCsv)

//router.get('/getlist/:id',Api.getListByPolicyNumber)



module.exports = router;