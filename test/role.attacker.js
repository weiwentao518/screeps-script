var { room1 } = require('./constants')

var roleAttacker = {
  run: function(creep) {
      const closestHostile = room1.find(FIND_HOSTILE_CREEPS)
      console.log(JSON.stringify({
          len: closestHostile.length
      }))
      if (closestHostile.length) {
          creep.attack(closestHostile[0])
      } else {
          creep.moveTo(Game.spawns['Spawn1'])
      }
  }
}

module.exports = roleAttacker;