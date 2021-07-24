events.listen('player.logged_in', function (event) {
  if (!event.hasGameStage('starting_items')) {
    event.addGameStage('starting_items')
    
    event.player.give(Item.of('akashictome:tome', {"akashictome:is_morphing":1.0,"akashictome:data":{industrialforegoing:{id:"patchouli:guide_book",Count:1.0,tag:{"patchouli:book":"industrialforegoing:industrial_foregoing"}},extendedcrafting:{id:"patchouli:guide_book",Count:1,tag:{"patchouli:book":"extendedcrafting:guide"}},botania:{id:"botania:lexicon",Count:1},integratedtunnels:{id:"integrateddynamics:on_the_dynamics_of_integration",Count:1},psi:{id:"patchouli:guide_book",Count:1,tag:{"patchouli:book":"psi:encyclopaedia_psionica"}},thermal:{id:"patchouli:guide_book",Count:1.0,tag:{"patchouli:book":"thermal:guidebook"}},dynamictrees:{id:"patchouli:guide_book",Count:1.0,tag:{"patchouli:book":"dynamictrees:guide"}},woot:{id:"patchouli:guide_book",Count:1.0,tag:{"patchouli:book":"woot:wootguide"}},mysticalagriculture:{id:"patchouli:guide_book",Count:1,tag:{"patchouli:book":"mysticalagriculture:guide"}},cyclic:{id:"patchouli:guide_book",Count:1.0,tag:{"patchouli:book":"cyclic:cyclic_guide_book"}}}}))
    event.player.give('tconstruct:materials_and_you')
    event.player.give('tconstruct:mighty_smelting')
    event.player.give('tconstruct:puny_smelting')
    event.player.give('tconstruct:tinkers_gadgetry')
    event.player.give('minecraft:oak_sapling')
  }
})
