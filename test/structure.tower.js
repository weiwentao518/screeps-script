var { room1 } = require('./constants')

var structureTower = {
  work: function () {
      const towers = room1.find(FIND_MY_STRUCTURES, {
          filter: (structure) => structure.structureType === STRUCTURE_TOWER
      })

      for (let name in towers) {
          const tower = towers[name]
          const hostile = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS)

          if (hostile) {
              tower.attack(hostile)
          }
      }
  }
}

module.exports = structureTower;