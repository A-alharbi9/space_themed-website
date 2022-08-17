const jwt = require('jsonwebtoken');
const spaceTrip = require('../model/space_trip_model');
const connectToDb = require('../config/db_config');

async function get(req, res) {
    const userToken = req.headers.authorization;

    switch (req.method) {
        case 'GET':
            try {
                await connectToDb();

                jwt.verify(userToken, process.env.JWT_PRIVATE_KEY, async (error, decoded) => {
                    if (error && error.message === 'jwt must be provided') {
                        return res.status(400).json({ msg: 'You must be logged in first!' });
                    }

                    if (decoded === undefined) {
                        return res.status(400).json({ msg: 'User does not exist!' });
                    }

                    const doesUserExist = await spaceTrip.find({});

                    return res.status(200).json({ trips: doesUserExist });
                });
            } catch (error) {
                res.status(500).json(error);
            }
            break;

        default:
            res.send(405).end();
            break;
    }
}

export default get;
