var createCreeps = function (spawn) {
    for(var name in Memory.creeps) {
        if(!Game.creeps[name]) {
            delete Memory.creeps[name];
            console.log('Clearing non-existing creep memory:', name);
        }
    }

    var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
    var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
    var attackers = _.filter(Game.creeps, (creep) => creep.memory.role == 'attacker');
    var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');

    if(harvesters.length < 4) {
        var newName = 'Harvester' + Game.time;
        console.log('Spawning new harvester: ' + newName);
        spawn.spawnCreep([WORK,CARRY,MOVE], newName, {memory: {role: 'harvester'}});
    }

    if(upgraders.length < 4) {
        var newName = 'Upgrader' + Game.time;
        console.log('Spawning new upgrader: ' + newName);
        spawn.spawnCreep([WORK,CARRY,MOVE], newName, {memory: {role: 'upgrader'}});
    }

    // if(attackers.length < 2) {
    //     var newName = 'Attacker' + Game.time;
    //     console.log('Spawning new attacker: ' + newName);
    //     spawn.spawnCreep([ATTACK,MOVE,MOVE,MOVE], newName, {memory: {role: 'attacker'}});
    // }

    if (builders.length < 2) {
        var newName = 'builder' + Game.time;
        console.log('Spawning new builder: ' + newName);
        spawn.spawnCreep([WORK,WORK,CARRY,MOVE,MOVE], newName, {memory: {role: 'builder'}});
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

module.exports.createCreeps = createCreeps;