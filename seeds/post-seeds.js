const { Post } = require('../models');

const postData = [
    {
        title: "Lorem ipsum dolor sit amet",
        post_content: "Consectetur adipiscing elit. In mauris nisi, vehicula quis volutpat sit amet, ornare vel risus. Donec a aliquet tellus, id sagittis nibh.",
        user_id: 3
    },
    {
        title: "Proin vitae magna id tellus rutrum tincidunt",
        post_content: "vel sit amet dui. Nullam magna diam, sodales et dolor eu, hendrerit placerat diam. Praesent dignissim, arcu nec euismod semper, nulla magna ultricies augue, eget efficitur orci quam et velit.",
        user_id: 1
    },
    {
        title: "Quisque et commodo est",
        post_content: "Suspendisse auctor eget diam nec condimentum. Duis dui dui, tincidunt ut odio a, porta fringilla eros. Ut magna urna, faucibus sed elit id, varius blandit nisi.",
        user_id: 2

    },
    {
        title: "Quisque nisi erat, semper non odio non, lacinia aliquam ipsum",
        post_content: "Sed fringilla massa sit amet varius semper. Donec a luctus odio. Sed ut egestas tortor. Mauris posuere felis sit amet erat finibus, quis venenatis ipsum dictum.",
        user_id: 4
    }
    
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;