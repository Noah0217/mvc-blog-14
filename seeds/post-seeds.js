const { Post } = require('../models');

const postData = [{
        title: 'Lorem ipsum dolor sit amet',
        content: 'Consectetur adipiscing elit. In mauris nisi, vehicula quis volutpat sit amet, ornare vel risus. Donec a aliquet tellus, id sagittis nibh.',
        user_id: 1

    },
    {
        title: 'Lorem ipsum dolor sit amet',
        content: 'Vel sit amet dui. Nullam magna diam, sodales et dolor eu, hendrerit placerat diam. Praesent dignissim, arcu nec euismod semper, nulla magna ultricies augue, eget efficitur orci quam et velit.',
        user_id: 2
    },
    {
        title: 'Lorem ipsum dolor sit amet',
        content: 'Suspendisse auctor eget diam nec condimentum. Duis dui dui, tincidunt ut odio a, porta fringilla eros. Ut magna urna, faucibus sed elit id, varius blandit nisi.',
        user_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;