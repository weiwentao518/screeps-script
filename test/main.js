var { createCreeps } = require('common');
var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleAttacker = require('role.attacker');
var roleBuilder = require('role.builder');

const spawn1 = Game.spawns['Spawn1']

module.exports.loop = function () {

    createCreeps(spawn1)

    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }
        if(creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
        }
        if(creep.memory.role == 'builder') {
            roleBuilder.run(creep);
        }
        if(creep.memory.role == 'attacker') {
            roleAttacker.run(creep);
        }
    }
}
