var scheduler = require('scheduler');


module.exports.loop = function () {
    scheduler.allHarvesters(Game.creeps);
};
