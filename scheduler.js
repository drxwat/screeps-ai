/**
 * Created by drxwat on 26.05.17.
 */

var behaviors = require('behaviors');

/**
 * Pushes all passed creeps harvest energy
 * @param {Creep[]} creeps
 */
function allHarvesters(creeps) {
    for (let i in creeps){
        let creep = creeps[i];
        if(creep.memory.behavior != behaviors.names.BEHAVIOR_HARVESTER){
            behaviors.attachBehavior.call(creep, behaviors.names.BEHAVIOR_HARVESTER)
        }
        behaviors.executeBehavior.call(creep)
    }
}

// Планирует и распределяет поведения между группами крипов
// Имеет несколько режимов. Разные для разных групп крипов
module.exports = {
    allHarvesters: allHarvesters
};