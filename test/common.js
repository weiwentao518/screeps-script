var { room1 } = require('./constants')

var createCreeps = function (spawn) {
    for(var name in Memory.creeps) {
        if(!Game.creeps[name]) {
            delete Memory.creeps[name];
            console.log('Clearing non-existing creep memory:', name);
        }
    }

    var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
    var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
    // var attackers = _.filter(Game.creeps, (creep) => creep.memory.role == 'attacker');
    var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');

    if(harvesters.length < 4 && hasEnergy()) {
        var newName = 'Harvester' + Game.time;
        console.log('Spawning new harvester: ' + newName);
        spawn.spawnCreep([WORK,WORK,CARRY,MOVE], newName, {memory: {role: 'harvester'}});
        return
    }

    if(upgraders.length < 2 && hasEnergy()) {
        var newName = 'Upgrader' + Game.time;
        console.log('Spawning new upgrader: ' + newName);
        spawn.spawnCreep([WORK,WORK,CARRY,MOVE], newName, {memory: {role: 'upgrader'}});
        return
    }

    // if(attackers.length < 2) {
    //     var newName = 'Attacker' + Game.time;
    //     console.log('Spawning new attacker: ' + newName);
    //     spawn.spawnCreep([ATTACK,MOVE,MOVE,MOVE], newName, {memory: {role: 'attacker'}});
    // }

    if (builders.length < 2 && hasEnergy(500)) {
        var newName = 'builder' + Game.time;
        console.log('Spawning new builder: ' + newName);
        spawn.spawnCreep([WORK,WORK,WORK,CARRY,CARRY,MOVE,MOVE], newName, {memory: {role: 'builder'}});
        return
    }

    if(spawn.spawning) {
        var spawningCreep = Game.creeps[spawn.spawning.name];
        spawn.room.visual.text(
            '🛠️' + spawningCreep.memory.role,
            spawn.pos.x + 1,
            spawn.pos.y,
            {align: 'left', opacity: 0.8});
    }
}

function hasEnergy (num = 300) {
  return room1.energyAvailable >= Number(num)
}

module.exports.createCreeps = createCreeps;