const { Comment } = require('../models');



const commentData = [
    {
        user_id: 3,
        post_id: 3,
        comment_text: "At vero eos et accusamus et iusto odio."
    },

    {
        user_id: 2,
        post_id: 2,
        comment_text: "omnis voluptas assumenda est, omnis dolor repellendus."
    },

    {
        user_id: 4,
        post_id: 4,
        comment_text: "ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?"
    },

    {
        user_id: 1,
        post_id: 1,
        comment_text: "et quasi architecto beatae vitae dicta sunt explicabo."
    },

    {
        user_id: 5,
        post_id: 5,
        comment_text: "vel illum qui dolorem eum fugiat quo voluptas nulla pariatur!"
    }
]




const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;