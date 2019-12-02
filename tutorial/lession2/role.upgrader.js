var roleUpgrader = {

  /** @param {Creep} creep **/
  run: function(creep) {
      if (creep.store.getFreeCapacity() == 0) {
          creep.memory.full_energy = true
      } else if (creep.store.getUsedCapacity() == 0) {
          creep.memory.full_energy = false
      }
      if (creep.store.getFreeCapacity() > 0 && !creep.memory.full_energy) {
          var sources = creep.room.find(FIND_SOURCES)
          var source = creep.memory.id ? sources[creep.memory.id] : 0
          source = source || sources[0]
          if (creep.harvest(source) == ERR_NOT_IN_RANGE) {
              creep.moveTo(source)
          }
      } else {
          if (creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
              creep.moveTo(creep.room.controller)
          }
      }
}
};

module.exports = roleUpgrader;