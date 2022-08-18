const bcrypt = require('bcryptjs');
const connectDb = require('../config/db_config');
const User = require('../model/singup_model');

async function signup(req, res) {
    const { name, email, password } = req.body;

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
                    name: name.trim(),
                    email: email.trim(),
                    password: passwordHash,
                });

                return res.status(200).json({ newUser });
            } catch (erorr) {
                return res.status(500);
            }

        default:
            return res.status(405).end();
    }
}

export default signup;
