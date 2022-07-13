const spaceTrip = require('../model/space_trip_model');
const connectToDb = require('../config/db_config');
const jwt = require('jsonwebtoken');

async function add(req, res) {
  const { token } = req.cookies;
  const { destination, startDate, returnDate } = req.body;

  const finalStartDate = new Date(startDate).toDateString();
  const covnertReturnDate = new Date(returnDate);
  const finalReturnDate = covnertReturnDate.toString().slice(0, 15);

  switch (req.method) {
    case 'POST':
      try {
        await connectToDb();

        jwt.verify(
          token,
          process.env.JWT_PRIVATE_KEY,
          async (error, decoded) => {
            try {
              if (error && error.message === 'jwt must be provided') {
                return res
                  .status(400)
                  .json({ msg: 'You must be logged in first!' });
              }

              if (decoded === undefined) {
                return res.status(400).json({ msg: 'User does not exist!' });
              }

              const doesUserExist = await spaceTrip.findOne({
                user: decoded.id,
                destination,
                returnDate: { $gte: new Date() },
              });

              if (doesUserExist === null) {
                const newTrip = await spaceTrip.create({
                  user: decoded.id,
                  destination,
                  startDate,
                  returnDate,
                });

                return res.status(200).json({
                  trip: 'sus',
                });
              }
            } catch (error) {
              res.status(500).json({ error: 'Invalid!' });
            }
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

export default add;
