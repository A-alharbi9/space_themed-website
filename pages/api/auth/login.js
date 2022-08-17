const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../model/singup_model');
const connectToDb = require('../config/db_config');

async function login(req, res) {
    const email = req.body.email;
    const password = req.body.password;
    switch (req.method) {
        case 'POST':
            try {
                await connectToDb();

                const userExist = await User.findOne({ email });

                if (userExist === null) {
                    return res.status(400).json({ msg: 'User does not exist!' });
                }

                const passwordMatch = await bcrypt.compare(password, userExist.password);

                if (!passwordMatch) {
                    return res.status(400).json({ msg: 'Name/email is incorrect!' });
                }

                const userToken = jwt.sign(
                    {
                        id: userExist._id,
                        email: userExist.email,
                    },
                    process.env.JWT_PRIVATE_KEY,
                    { expiresIn: '5days' }
                );

                res.status(200).json({
                    token: userToken,
                });
            } catch (error) {
                res.status(500);
            }
            break;

        default:
            res.send(405).end();
            break;
    }
}

export default login;
