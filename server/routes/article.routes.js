import express from 'express';
import articlesController from "../controllers/articles.controller";
import multer from "multer";
import path from 'path'
import uuidv4 from 'uuidv4'

const router = express.Router();

// const upload = multer({ dest: './public/postUploads/', limits: '50000mb' });
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        // cb(null, './public/Uploads')
        // cb(null, '../Uploads/')
        cb(null, './public/Uploads/')
    },
    filename: function (req, file, cb) {

        const ext = path.extname(file.originalname);
        console.log(ext);
        console.log('file: ', file.originalname);
        console.log('file: ', file);
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        console.log(file.fieldname + '-' + uniqueSuffix + ext)
        cb(null, file.fieldname + '-' + uniqueSuffix + ext);
    }
});

let upload2 = multer().array('photo', 3);

var upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
        }
    },
    limits: '16mb'
});


router.route('/articles')
    .get(articlesController.article_list);
router.route('/singlepost/:post_uuid')
    .get(articlesController.read);
router.route('/new')
    // .post(articlesController.newBlog);
    .post(upload.array('photo', 3), articlesController.newBlog)
router.param('post_uuid', articlesController.postByID);

export default router;