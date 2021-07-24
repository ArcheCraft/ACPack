onEvent('recipes', event => {
  event.remove({output: 'minecraft:end_portal_frame'})
  event.remove({output: 'minecraft:prismarine_shard', input: 'minecraft:quartz'})
  event.remove({output: 'minecraft:sugar_cane', input: 'minecraft:hay_block'})
  event.remove({output: 'minecraft:prismarine_crystals', input: 'minecraft:prismarine_shard'})
  event.remove({id: 'gardenofglass:mana_infusion/heart_of_the_sea'})
})
