const User = require('../model/singup_modal');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

async function login(req, res) {
  const email = req.body.email;
  const password = req.body.password;
  switch (req.method) {
    case 'POST':
      try {
        const userExist = await User.findOne({ email });

        if (!userExist) {
          return res.status(400).json({ msg: 'User does not exist!' });
        }

        const passwordMatch = await bcrypt.compare(
          password,
          userExist.password
        );

        if (!passwordMatch) {
          return res.status(400).json({ msg: 'Name/email is incorrect!' });
        }

        const userToken = jwt.sign(
          {
            id: userExist._id,
            email: userExist.email,
            iat: Date.now(),
          },
          process.env.JWT_PRIVATE_KEY,
          { expiresIn: 3600 }
        );

        res.status(200).json({
          token: userToken,
        });
      } catch (error) {
        console.log(error);
        res.status(500).json(error);
      }
      break;

    default:
      res.send(405).end();
      break;
  }
}

export default login;
