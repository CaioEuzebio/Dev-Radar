const Dev = require('../models/Dev');
const paseStringAsArray = require('../utils/parseStringsAsArray');

module.exports = {
    
    async index(request, response) {

        const { latitude, longitude, techs } = request.query;

        const techsArray = paseStringAsArray(techs);

        const devs = await Dev.find({
            techs: {
                $in: techsArray
            },
            location: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coorfinates: [longitude, latitude],
                    },
                    $macDistance: 10000,
                },
            },
        });

        return response.json({ devs })
    }
};