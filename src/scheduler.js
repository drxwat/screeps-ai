var behavior = require('behaviors')

/**
 * Pushes all passed creeps harvest energy
 * @param {Creep[]} creeps
 */
function allMiners(creeps) {
    for (let i in creeps){
        let creep = creeps[i]
        if(creep.memory.behavior != behavior.names.MINER.name){
            behavior.attachBehavior.call(creep, behavior.names.MINER.name)
        }
        behavior.executeBehavior.call(creep)
    }
}

// Планирует и распределяет поведения между группами крипов
// Имеет несколько режимов. Разные для разных групп крипов
module.exports = {
    allMiners: allMiners
}