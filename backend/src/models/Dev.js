const mongoose = require('mongose');


const DevScehma = new mongoose.shcema({
    nome: String,
    github_username: String,
    bio: String,
    avatar_usr: String,
    techs: [String]
});

module.exports = mongoose.model('Dev', DevScehma);