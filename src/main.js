require('init') // Adds some useful functionality

var scheduler = require('scheduler')

module.exports.loop = function () {
    scheduler.allHarvesters(Game.creeps)
}
