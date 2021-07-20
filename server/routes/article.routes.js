import express from 'express';
import articlesController from "../controllers/articles.controller";

const router = express.Router();

router.route('/articles')
    .get(articlesController.article_list);

export default router;