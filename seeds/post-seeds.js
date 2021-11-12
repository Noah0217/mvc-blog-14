const { Post } = require('../models');

const postData = [{
        title: 'Microsoft’s shift to the cloud is a lesson in corporate evolution',
        content: 'Today, Microsoft’s cloud software business is booming — the productivity and business category, where Office 365 and other cloud productivity software live, alone raked in $15 billion in business in the company’s most recent earnings report (this category also includes LinkedIn revenue).',
        user_id: 1

    },
    {
        title: 'Instagram adds TikTok-like Text-to-Speech and Voice Effects tools to Reels',
        content: 'Instagram added two features to Reels yesterday: text-to-speech and voice effects. These features are popular already on TikTok, but now, creators can use them on Instagram too. This marks yet another effort from Instagram to keep up with TikTok when it comes to short-form video, as Instagram offers big reels bonuses to incentivize creators.',
        user_id: 2
    },
    {
        title: 'Facebook launches Shops in Groups and Live Shopping for Creators',
        content: 'Facebook announced today that it’s rolling out new shopping features: Shops in Groups, product recommendations and a test of Live Shopping for Creators.',
        user_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;