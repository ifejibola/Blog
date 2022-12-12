import { sql } from "../../Model/db";
import { GET_ASYNC, SET_ASYNC } from '../../redis'


const articleDefault = [{
    title: "A Dog's Life",
    createdAt: new Date(),
    description: "Through Dog and Boneeee"
}, {
    title: "Cyberpunk 2077 Flop!",
    createdAt: new Date(),
    description: "Flop of the Decade!!"
},]


const newBlog = async (req, res, next) => {

    const { title, content, description } = req.body;

    // post uuid
    let post_uuid = await sql`
    SELECT uuid_generate_v4()
    `;
    console.log('post-uuid: ', post_uuid);

    console.log(req.files, req.body)
    // console.log(req.files.length);
    // console.log(req.files[0].path);
    let arr = [];

    try {

        await sql`
        INSERT INTO posts(
            post_uuid,
            title,
            post_description,
            content,
            default_image
        )
        VALUES(
            ${post_uuid[0].uuid_generate_v4},
            ${title},
            ${description},
            ${content},
            ${req.files[0].path}
        )
        returning *
       `.then((data) => {
            req.post = data;
            console.log('Post Added Succesfully! : ', data);
        });

        for (let i in req.files) {
            console.log('i ', i)
            // console.log(req.files[i].path);

            let image_uuida = await sql`
             SELECT uuid_generate_v4()
            `;
            console.log('image_uuida', image_uuida);
            console.log('image_uuida', image_uuida[0].uuid_generate_v4);
            console.log('image_uuida path', req.files[i].path);
            await sql`
            INSERT INTO post_images(image_uuid, image_name, image_path, post_id)
                VALUES (
                    ${image_uuida[0].uuid_generate_v4},
                    ${req.files[i].filename},
                    ${req.files[i].path},
                    ${post_uuid[0].uuid_generate_v4}
                    )
            returning *
            `.then((data) => {
                // res.json(data)
                // console.log('json: ', JSON.stringify(data))
                arr.push(data)
                console.log(arr)
                req.imgs = arr
                console.log('Uploaded an img!! : ', data)
            });

            console.log('UPDATING POST TO REFLECT POST_IMAGES');

            // await sql`
            //     UPDATE posts SET image_uuids = ${image_uuida[0].uuid_generate_v4}
            //         WHERE post.post_uuid = ${post_uuid[0].uuid_generate_v4}
            // `.then((data) => {
            //     console.log('Updated post to images....', data)
            // })
        };
        console.log('************ ALL IMAGES HAVE BEEN UPLOADED ! ************ ');

        // console.log('imgs', req.imgs[0][0].image_name);
        console.log('imgs', { imgs: req.imgs, post: req.post });
        return res.status(200).json({ Images: req.imgs, Post: req.post });
    } catch (e) {
        console.error(e);
        return res.status(400).json(e);
    }

    // This will return an error because you put the try statement inside a for loop, it should be the other way arround.
    // The response is sent more that once because it is returned inside the for loop every time a for loop cycle completes.
    // for (let i in req.files) {
    //     console.log('i ', i)
    //     // console.log(req.files[i].path);

    //     let image_uuida = await sql`
    //      SELECT uuid_generate_v4()
    //     `;
    //     console.log('image_uuida', image_uuida);
    //     console.log('image_uuida', image_uuida[0].uuid_generate_v4);
    //     console.log('image_uuida path', req.files[i].path);
    //     try {
    //         await sql`
    //             INSERT INTO post_images(image_uuid, image_name, image_path)
    //                 VALUES (
    //                     ${image_uuida[0].uuid_generate_v4},
    //                     ${req.files[i].filename},
    //                     ${req.files[i].path}
    //                     )
    //             returning *
    //         `.then((data) => {
    //             // res.json(data)
    //             console.log(data)

    //             return res.status(200).json(data)
    //         })
    //     } catch (e) {
    //         console.error(e);
    //         return res.status(400).json(e);
    //         // next(e);
    //     }
    // }


    // try {

    //     console.log('Inserting into db...')

    //     await sql`
    //         INSERT INTO post_images (
    //             image_uuid,
    //             image_name,
    //             image_path
    //         )
    //         VALUES (
    //             uuid_generate_v4(),

    //         )
    //     `
    //     await sql`
    //     INSERT INTO posts(
    //         post_uuid,
    //         title,
    //         post_description,
    //         content
    //     )
    //     VALUES(
    //         uuid_generate_v4(),
    //         ${title},
    //         ${description},
    //         ${content}
    //     )
    //     returning *
    //    `.then((data) => {

    //         res.status(200).json(data)
    //     });

    // } catch (err) {
    //     console.log(err);
    //     res.status(400).json(err);
    // };
};
const article_list = async (req, res, next) => {

    const articles = articleDefault;

    try {
        const get_cache = await GET_ASYNC('posts');
        // if (get_cache) {
        //     // console.log('cahce data.. ', JSON.parse(get_cache));
        //     console.log('cahce data.. ');
        //     return res.send(JSON.parse(get_cache));
        // }

        const allPosts = await sql`
        SELECT *
            FROM posts
        `

        //RETREIVE POST AND POST_IMAGES FROM DB( INNER JOIN)
        const postJoin = await sql`
        SELECT * FROM posts 
            INNER JOIN post_images                                                                                                            
                ON post_images.post_id = posts.post_uuid;
        `

        const saveCache = await SET_ASYNC('posts', JSON.stringify(allPosts), 'EX', 500);
        console.log(saveCache);
        console.log('json..', JSON.stringify(allPosts))

        console.log('active controller')
        res.status(200).json(allPosts);
    } catch (err) {

        next(err);
    }
}

const postByID = async (req, res, next, id) => {
    try {
        let post = await sql`
            SELECT * FROM posts
            WHERE post_uuid=${id}
        `;
        if (!post)
            return res.status('400').json({
                error: "Post not found"
            })

        req.post = post;

        console.log('post id', post)
        next()
    } catch (e) {
        console.log(e);
        return res.status('400').json({
            error: "Could not retrieve post"
        })
    }
};
const read = (req, res) => {
    return res.json(req.post);
};

export default {
    article_list,
    newBlog,
    postByID,
    read,
};