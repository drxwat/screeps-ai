const ACTION = {
    MINE_ENERGY: 'action_mine_energy',
    DELIVER_ENERGY_TO_STORAGE: 'action_deliver_energy_to_source',
    UPGRAGE_CONTROLLER: 'action_upgrade_controller'
}

const RESULT = {
    OK: 'result_ok',
    MOVING: 'result_moving',
    FAIL: 'result_fail'
}

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

/**
 * NOW WORKS ONLY FOR ENERGY!
 * @this {Creep} creep
 * @param {RESOURCE_ENERGY|RESOURCE_*} resourceType any game type of resource
 * @param {Spawn[]|Extension[]} target any game structure available for transfering resource
 */
function deliver(resourceType, targets) {
    for (let i in targets) {
        let target = targets[i]
        if (acceptsTransfer(target)) {
            let result = this.transfer(target, resourceType)
            if (result == OK || result == ERR_NOT_IN_RANGE) {
                return RESULT.OK
            }
        }
    }
    return RESULT.FAIL
}

module.exports = {
    ACTION: ACTION,
    RESULT: RESULT,
    mine: actionMine,
    deliverEnergyToSpawns: deliver.softBind(Object.create(null), RESOURCE_ENERGY, Room.find(FIND_MY_SPAWNS))
}

/**
 * @private 
 * @param {*} structure 
 */
function acceptsTransfer(structure){
    if(!structure.isActive()){
        return false
    }
    if(structure.energy == structure.energyCapacity){
        return true
    }
    return false
}