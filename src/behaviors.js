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
    let behavior = _.find(BEHAVIOR, behavior => behavior.name === this.memory.behavior)
    for(let i in behavior.actions){
        let action = actions.MAPPINGS[behavior.actions[i]]
        if(action.call(this) !== actions.RESULT.FAIL){
            return 1
        }
    }
    console.log(`No one action can be executed for ${this.name}`)
}


module.exports = {
    names: BEHAVIOR,
    attachBehavior: attachBehavior,
    executeBehavior: executeBehavior
}
