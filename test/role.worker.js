var roleHarvester = {

  /** @param {Creep} creep **/
  run: function(creep) {
      if(creep.store.getFreeCapacity() > 0) {
          var source = creep.room.find(FIND_SOURCES)[0]
          if(creep.harvest(source) == ERR_NOT_IN_RANGE) {
              creep.moveTo(source, {visualizePathStyle: {stroke: '#ffaa00'}});
          }
      } else {
          var targets =  _.filter(Game.creeps, (creep) => creep.memory.role == 'transfer' && creep.store.getFreeCapacity() > 0);
          if(targets.length > 0) {
              for (let i = 0; i < targets.length; i ++) {
                  const target = targets[i]
                  if(creep.transfer(target, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                      creep.moveTo(target, {visualizePathStyle: {stroke: '#ffffff'}});
                  }
              }
          }
      }
      // else {
      //     var targets = creep.room.find(FIND_STRUCTURES, {
      //           filter: (structure) => {
      //               return (structure.structureType == STRUCTURE_EXTENSION ||
      //                       structure.structureType == STRUCTURE_SPAWN ||
      //                       structure.structureType == STRUCTURE_TOWER) &&
      //                       structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0;
      //           }
      //     });
      //     if(targets.length > 0) {
      //         if(creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
      //             creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#ffffff'}});
      //         }
      //     }
      // }
  }
}

module.exports = roleHarvester;