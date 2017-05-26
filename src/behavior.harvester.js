/**
 * @this {Creep} creep
 */
function harvesterBehavior() {
    var sources = this.room.find(FIND_SOURCES);
    var spawns = this.room.find(FIND_MY_SPAWNS);
    if(this.carry.energy < this.carryCapacity){
        if(this.harvest(sources[0]) == ERR_NOT_IN_RANGE){
            this.moveTo(sources[0]);
        }
    }else {
        if(this.transfer(spawns[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
            this.moveTo(spawns[0])
        }
    }
}


module.exports = harvesterBehavior;