var { createCreeps } = require('common');
var { room1 } = require('constants')
var structureTower = require('structure.tower');
var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleAttacker = require('role.attacker');
var roleBuilder = require('role.builder');

const spawn1 = Game.spawns['Spawn1']

console.log('energyAvailable', room1.energyAvailable)
console.log('rooms', Object.keys(Game.rooms)[0])

module.exports.loop = function () {

    const isSpawnFull = spawn1.store[RESOURCE_ENERGY] === 300

    createCreeps(spawn1)
    structureTower.work()

    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
            // if (!isSpawnFull) {
            //     roleHarvester.run(creep);
            // } else {
            //     roleBuilder.run.call(this, creep)
            // }
        }
        if(creep.memory.role == 'upgrader') {
            // roleHarvester.run.call(this, creep)
            roleUpgrader.run(creep);
        }
        if(creep.memory.role == 'builder') {
            if (creep.room.find(FIND_CONSTRUCTION_SITES).length == 0) {
                roleHarvester.run.call(this, creep)
            } else {
                roleBuilder.run(creep);
            }
        }
        if(creep.memory.role == 'attacker') {
            roleAttacker.run(creep);
        }
    }
}
