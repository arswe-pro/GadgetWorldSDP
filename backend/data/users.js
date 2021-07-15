import bcrypt from 'bcryptjs';

const users = [
    {
        name: 'Admin',
        email: 'admin@gmail.com',
        password: bcrypt.hashSync('45683968', 10),
        isAdmin: true,
    },
    {
        name: 'Akaid',
        email: 'akaid@gmail.com',
        password: bcrypt.hashSync('1234', 10),
    },
    {
        name: 'Arafat Nabi',
        email: 'arafatnoby2799@gmail.com',
        password: bcrypt.hashSync('123', 10),
    },
];

export default users;
