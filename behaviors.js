/**
 * Created by drxwat on 26.05.17.
 */

var harvesterBehavior = require('behavior.harvester');
var upgraderBehavior = require('behavior.upgrader');

const BEHAVIORS = {
    BEHAVIOR_HARVESTER : 'harvester',
    BEHAVIOR_UPGRADER : 'upgrader'
};


/**
 * Sets behavior name to unit
 * @this {Creep} creep
 * @param {BEHAVIOR_HARVESTER|BEHAVIOR_UPGRADER}behaviorName
 */
function attachBehavior(behaviorName){
    if(this.memory.behavior !== behaviorName){
        console.log("I'm " + this.name + " and now I'm a " + behaviorName + '.');
        this.memory.behavior = behaviorName
    }
}

/**
 * Forces unit to execute his behavior
 * @this {Creep} creep
 */
function executeBehavior() {
    var behavior = getBehaviorByName(this.memory.behavior);
    behavior.call(this);
}

/**
 * Just helper
 * @private
 * @param {BEHAVIOR_HARVESTER|BEHAVIOR_UPGRADER} behaviorName
 * @returns {harvesterBehavior|upgraderBehavior|undefined}
 */
function getBehaviorByName(behaviorName) {
    switch (behaviorName){
        case BEHAVIORS.BEHAVIOR_HARVESTER:
            return harvesterBehavior.run;
        case BEHAVIORS.BEHAVIOR_UPGRADER:
            return upgraderBehavior.run;
        default:
            return undefined
    }
}

module.exports = {
    names: BEHAVIORS,
    attachBehavior: attachBehavior,
    executeBehavior: executeBehavior
};


