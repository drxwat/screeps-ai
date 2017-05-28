const RESULT = require('actions.result')

/**
 * Mines energy resource.
 * todo: rewrite general for all types of resoures.
 * @this {Creep} unit
 * @return {RESULT.OK|RESULT.FAIL} action result constant
 */
function actionMine() {
    let sources = this.room.find(FIND_SOURCES)
    if (this.carry.energy < this.carryCapacity) {
        if (this.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
            this.moveTo(sources[0])
        }
        return RESULT.OK
    }
    return RESULT.FAIL
}

module.exports = actionMine