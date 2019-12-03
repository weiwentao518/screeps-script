var roleAttacker = {
  run: function(creep) {
      const closestHostile = Game.rooms['sim'].find(FIND_HOSTILE_CREEPS)
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