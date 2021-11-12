const { Comment } = require('../models');

const commentData = [{
        comment_text: "At vero eos et accusamus et iusto odio.",
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: "omnis voluptas assumenda est, omnis dolor repellendus.",
        user_id: 2,
        post_id: 2
    },
    {
        comment_text: "ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.",
        user_id: 3,
        post_id: 3
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;