const spaceTrip = require('../model/space_trip_model');
const connectToDb = require('../config/db_config');
const jwt = require('jsonwebtoken');

async function get(req, res) {
  const testToken =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNTBiNmEzNDU1YTI4ZmQ5NDY3ZDhlYiIsImVtYWlsIjoidGVzdDJAZ21haWwuY29tIiwiaWF0IjoxNjU3OTcyNDAwLCJleHAiOjE2NTg0MDQ0MDB9.uU1S8neKo5F0GNYDkpRNI-s_O4xh87VLLK7M8Y8DRCs';

  switch (req.method) {
    case 'GET':
      try {
        await connectToDb();

        jwt.verify(
          testToken,
          process.env.JWT_PRIVATE_KEY,
          async (error, decoded) => {
            if (error && error.message === 'jwt must be provided') {
              return res
                .status(400)
                .json({ msg: 'You must be logged in first!' });
            }

            if (decoded === undefined) {
              return res.status(400).json({ msg: 'User does not exist!' });
            }

            const doesUserExist = await spaceTrip.find({});

            return res.status(200).json({ trips: doesUserExist });
          }
        );
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

export default get;
