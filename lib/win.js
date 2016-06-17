var os = require('os'),
    path = require('path'),
    slash = require('slash')

module.exports = function(pathToFix){
    if (os.type() === "Windows_NT") {
        return slash(path.normalize(pathToFix));
    } else {
        return path.normalize(pathToFix);
    }
};