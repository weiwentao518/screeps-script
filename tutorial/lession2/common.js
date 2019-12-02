var createCreep = function ({spawn, arr = [WORK, CARRY, MOVE], name, role = 'harvester', id}) {
  spawn.spawnCreep(arr, name)
  if (Game.creeps[name]) {
      Game.creeps[name].memory.role = role;
      Game.creeps[name].memory.id = id;
  }
}

module.exports = createCreep