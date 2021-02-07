import path from 'path';
import express from 'express';
import multer from 'multer';
const router = express.Router();

const storage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null,  'uploads/')
    },
    filename(req, file, cb) {
        cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`)  // -> path.extname(file.originalname will pull off filename
    }
})

function checkFileType(file, cb) {
    const filetypes = /jpg|jpeg|png/  // -> expression with filetypes we want 
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase())  // -> will return a bool if matcing selected file types
    const mimetype = filetypes.test(file.mimetype)

    if (extname && mimetype) {
        return cb(null, true)
    } else {
        cb('Images only!')
    }
}

const upload = multer({
    storage,                // -> by itself would upload any file type
    fileFilter: function(req, file, cb) {       
        checkFileType(file, cb)     // -> custom filter
    }
})
//                                                     WHAT TO CALL IT AND MAX
// MULTIPLE IMAGES // -> router.post('/', upload.array('uploadedImages', 10), (req, res) => ... 
router.post('/', upload.single('image'), (req, res) => {
    res.send(`/${req.file.path}`)
})

// router.post('/', upload.array('images', 3), (req, res) => {
//     res.send(`/${req.files.path}`)
// })



export default router;