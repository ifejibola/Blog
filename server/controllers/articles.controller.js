import { sql } from "../../Model/db";

const articleDefault = [{
    title: "A Dog's Life",
    createdAt: new Date(),
    description: "Through Dog and Bone"
}, {
    title: "Cyberpunk 2077 Flop!",
    createdAt: new Date(),
    description: "Flop of the Decade!!"
},]

const newBlog = async (req, res, next) => {

    const [title, description, content] = req.body;
    const newPost = {
        title: re
    }
    try {
        const newPost = `INSERT INTO user_tbl(uuid_generate_v4())`
    } catch (err) {

    };
};
const article_list = (req, res, next) => {
    const articles = articleDefault;
    try {
        // console.log(" stuff ")
        // console.log(articles)

        console.log('active controller')
        res.json(articles);
        // console.log('req.articles controller: ', req.articles)

    } catch (err) {

        next(err);
    }
}

export default {
    article_list
};