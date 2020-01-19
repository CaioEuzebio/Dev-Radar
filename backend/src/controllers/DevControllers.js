const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringsAsArray = require('../utils/parseStringsAsArray');


module.exports = {

    async index(request, response) {

        const devs = await Dev.find();

        return response.json(devs);
    },

    async store(request, response) {
    
        const { github_username, techs, latitude, longitude } = request.body;
        
        let dev = await Dev.findOne({ github_username });

        if (!dev) {

        const apiResponde = await axios.get(`https://api.github.com/users/${github_username}`);
        
        const { name = login, avatar_url, bio } = apiResponde.data;
    
        const techsArray = parseStringsAsArray(techs);
    
        const location = {
            type: 'Point',
            coordinates: [longitude, latitude],
        };
    
        dev = await Dev.create({
            avatar_url,
            github_username,
            name,
            bio,
            techs: techsArray,
            location,
        })
        
        console.log(name, avatar_url, bio, github_username, techs,);

        }

        
        
        return response.json(dev);
    }

};

