var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var createCreep =  require('common')

var spawn = Game.spawns['Spawn1']

var num_upgrader = 1
var num_harvester = 1
createCreep({ spawn, name: 'Harvester1', role: 'harvester'})
createCreep({ spawn, name: 'Harvester2', role: 'harvester'})

console.log(JSON.stringify({
    energy: spawn.energy,
    Capacity: spawn.energyCapacity,
}))

module.exports.loop = function () {
    if (spawn.energy >= 200) {
        num_upgrader ++
        createCreep({ spawn, name: `Upgrader${num_upgrader}`, role: 'upgrader', id: Math.floor(Math.random() * 5)})
    }

    for(var name in Game.creeps) {
        var creep = Game.creeps[name]

        if (creep.memory.role === 'harvester') {
            roleHarvester.run(creep)
        }
        if (creep.memory.role === 'upgrader') {
            roleUpgrader.run(creep)
        }
    }
}