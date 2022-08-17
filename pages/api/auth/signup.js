const bcrypt = require('bcryptjs');
const connectDb = require('../config/db_config');
const User = require('../model/singup_model');

const handler = async (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    switch (req.method) {
        case 'POST':
            try {
                await connectDb();

                const userExist = await User.findOne({ $or: [{ name }, { email }] });

                if (userExist) {
                    return res.status(400).json({ msg: 'User already Exist' });
                }

                const passwordHash = await bcrypt.hash(password, 10);

                const newUser = await User.create({
                    name,
                    email,
                    password: passwordHash,
                });

                return res.status(200).json({ newUser });
            } catch (erorr) {
                res.status(500);
            }
            break;

        default:
            res.status(405).end();
            break;
    }
};

module.exports = handler;
