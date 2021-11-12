const { User } = require('../models');

const userData = [{
        username: 'Max',
        password: '123'

    },
    {
        username: 'Ben',
        password: '123'
    },
    {
        username: 'Alex',
        password: '123'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;