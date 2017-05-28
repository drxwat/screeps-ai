const RESULT = require('actions.result')

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
            if(result == ERR_NOT_IN_RANGE){
                this.moveTo(target)
            }
            if (result == OK || result == ERR_NOT_IN_RANGE) {
                return RESULT.OK
            }
        }
    }
    return RESULT.FAIL
}

/**
 * @private 
 * @param {*} structure 
 */
function acceptsTransfer(structure){
    if(!structure.isActive()){
        return false
    }
    if(structure.energy != structure.energyCapacity){
        return true
    }
    return false
}

module.exports = deliver