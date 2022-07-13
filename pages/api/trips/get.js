const spaceTrip = require('../model/space_trip_model');
const connectToDb = require('../config/db_config');
const jwt = require('jsonwebtoken');

async function get(req, res) {
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNTBiNmEzNDU1YTI4ZmQ5NDY3ZDhlYiIsImVtYWlsIjoidGVzdDJAZ21haWwuY29tIiwiaWF0IjoxNjU3NTI0OTIxLCJleHAiOjE2NTc5NTY5MjF9.iqIf6vZtKFLZXndA7859OALznlklcKx4d85qxe67cWU';

  console.log('TOK: ', req.headers.authorization);

  switch (req.method) {
    case 'GET':
      try {
        await connectToDb();

        jwt.verify(
          token,
          process.env.JWT_PRIVATE_KEY,
          async (error, decoded) => {
            console.log('ERR: ', error);
            console.log('ERR m: ', error?.message);
            console.log('DEC: ', decoded);

            if (error && error.message === 'jwt must be provided') {
              console.log('No log!');

              return res
                .status(400)
                .json({ msg: 'You must be logged in first!' });
            }

            if (decoded === undefined) {
              console.log('No dec!');

              return res.status(400).json({ msg: 'User does not exist!' });
            }

            const doesUserExist = await spaceTrip.find({
              user: decoded.id,
            });

            return res.status(200).json({ trips: doesUserExist });
          }
        );
      } catch (error) {
        console.log(error);
        res.status(500).json(error).end();
      }
      break;

    default:
      res.send(405).end();
      break;
  }
}

export default get;
