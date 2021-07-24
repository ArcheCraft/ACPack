// priority: 0

events.listen('item.registry', event => {
    event.create('dust').displayName('Dust').maxStackSize(64)

    event.create('cooked_apple').food(food => {
        food.hunger(6).saturation(9)
    }).displayName('Cooked Apple').maxStackSize(64)

    event.create(`coin`).displayName(`§6Coin`).glow(true).maxStackSize(1024).tooltip(Text.aqua(`The universal, ultimate, unified coin of wisdom`))

    event.create(`chunk_ore`).displayName(`Blank Ore Chunk`).maxStackSize(64)
})


events.listen('block.registry', event => {
    event.create('blank_ore').displayName('Blank Ore').material('stone').requiresTool(true).hardness(2.0)
})


events.listen('fluid.registry', event => {
    event.create('organic_fluid').textureThick(0x86A774).displayName('Organic Fluid').bucketColor(0x86A774)
})