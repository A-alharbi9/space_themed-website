const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../model/singup_model');
const connectToDb = require('../config/db_config');

async function login(req, res) {
    const { method } = req;

    const { email, password } = req.body;
    switch (method) {
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

                return res.status(200).json({
                    token: userToken,
                });
            } catch (error) {
                return res.status(500);
            }

        default:
            return res.send(405).end();
    }
}

export default login;
