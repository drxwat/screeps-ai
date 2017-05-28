const RESULT = require('actions.result')
const actionMine = require('action.mine')
const actionDeliver = require('action.deliver')
/**
 * Available actions
 */
const ACTION = {
    MINE_ENERGY: 'action_mine_energy',
    DELIVER_ENERGY_TO_STORAGE: 'action_deliver_energy_to_source',
    UPGRAGE_CONTROLLER: 'action_upgrade_controller'
}
/**
 * Action functions provided as public API
 */
const MAPPINGS = (function() {
    let action_mapping = {}

    action_mapping[ACTION.MINE_ENERGY] = actionMine
    action_mapping[ACTION.DELIVER_ENERGY_TO_STORAGE] = actionDeliver.softBind(Object.create(null), RESOURCE_ENERGY, Game.spawns)

    Object.freeze(action_mapping)
    return action_mapping
})()

module.exports = {
    ACTION: ACTION,
    RESULT: RESULT,
    MAPPINGS: MAPPINGS
}