const { User } = require('../models');

const userData = [{
        username: 'Noah',
        password: '1234'

    },
    {
        username: 'Vincent',
        password: '4567'
    },
    {
        username: 'Extreme',
        password: '8910'
    },
    {
        username: 'Drew',
        password: '9325'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;