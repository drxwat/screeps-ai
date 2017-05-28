require('init') // Adds some useful functionality

var scheduler = require('scheduler')

module.exports.loop = function () {
    scheduler.allMiners(Game.creeps)
}
