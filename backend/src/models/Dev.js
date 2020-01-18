const mongoose = require('mongoose');

const PointSchema = require('./utils/PointSchema')

const DevSchema = new mongoose.Schema({
    nome: String,
    github_username: String,
    bio: String,
    avatar_usr: String,
    techs: [String],
    avatar_url: String,
    location: {
        type: PointSchema,
        index: '2dsphere'
    } 
});

module.exports = mongoose.model('Dev', DevSchema);