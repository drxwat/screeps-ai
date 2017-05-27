/**
 * Created by drxwat on 26.05.17.
 */
const actions = require('actions')

const BEHAVIOR = {
    MINER: {
        name: 'miner',
        actions: [
            actions.ACTION.MINE_ENERGY,
            actions.ACTION.DELIVER_ENERGY_TO_STORAGE
        ]
    },
    UPGRADER: {
        name: 'upgrader',
        actions: [
            actions.ACTION.MINE_ENERGY,
            actions.ACTION.UPGRAGE_CONTROLLER
        ]
    }
}


/**
 * Sets behavior name to unit
 * @this {Creep} creep
 * @param {BEHAVIOR_HARVESTER|BEHAVIOR_UPGRADER}behaviorName
 */
function attachBehavior(behaviorName) {
    if (this.memory.behavior !== behaviorName) {
        console.log(`I'm ${this.name} and now I'm a ${behaviorName}.`)
        this.memory.behavior = behaviorName
    }
}

/**
 * Forces unit to execute his behavior
 * @this {Creep} creep
 */
function executeBehavior() {
    // Слейдуй тому, что написано в Arcitecture.md
}


module.exports = {
    names: BEHAVIOR,
    attachBehavior: attachBehavior,
    executeBehavior: executeBehavior
}


