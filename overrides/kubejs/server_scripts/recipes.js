// priority: 0

const casings = [
    `create:andesite_casing`,
    `create:brass_casing`,
    `create:copper_casing`,
    `mekanism:steel_casing`,
    `thermal:machine_frame`
]
const ingots = [
    `minecraft:gold_ingot`,
    `minecraft:iron_ingot`,
    `minecraft:netherite_ingot`,
    `alltheores:aluminum_ingot`,
    `alltheores:copper_ingot`,
    `alltheores:lead_ingot`,
    `alltheores:nickel_ingot`,
    `alltheores:osmium_ingot`,
    `alltheores:platinum_ingot`,
    `alltheores:silver_ingot`,
    `alltheores:tin_ingot`,
    `alltheores:uranium_ingot`,
    `alltheores:zinc_ingot`,
    `create:brass_ingot`,
    `mekanism:ingot_steel`,
    `thermal:bronze_ingot`,
    `thermal:constantan_ingot`,
    `thermal:electrum_ingot`,
    `thermal:invar_ingot`,
    `thermal:signalum_ingot`,
    `thermal:lumium_ingot`,
    `thermal:enderium_ingot`,
    `morered:red_alloy_ingot`,
    `tconstruct:cobalt_ingot`
]
const plates = [
    `thermal:iron_plate`,
    `thermal:gold_plate`,
    `thermal:copper_plate`,
    `thermal:tin_plate`,
    `thermal:lead_plate`,
    `thermal:silver_plate`,
    `thermal:nickel_plate`,
    `thermal:bronze_plate`,
    `thermal:electrum_plate`,
    `thermal:invar_plate`,
    `thermal:constantan_plate`,
    `thermal:signalum_plate`,
    `thermal:lumium_plate`,
    `thermal:enderium_plate`,
    `create:brass_sheet`,
    `create:lapis_sheet`
]
const circuits = [
    `appliedenergistics2:logic_processor`,
    `appliedenergistics2:calculation_processor`,
    `appliedenergistics2:engineering_processor`,
    `create:integrated_circuit`,
    `mekanism:basic_control_circuit`,
    `mekanism:advanced_control_circuit`,
    `mekanism:elite_control_circuit`,
    `mekanism:ultimate_control_circuit`
]
const materials = [
    `minecraft:redstone`,
    `minecraft:diamond`,
    `mekanism:alloy_infused`,
    `mekanism:alloy_reinforced`,
    `mekanism:alloy_atomic`
]


onEvent(`recipes`, event => {
    const smoking = (output, input) => {
        event.smelting(output, input).xp(0.1)
        event.smoking(output, input).xp(0.1)
    }

    // const inductionSmelter = (output, inputs) => {
    //     event.recipes.thermal.smelter(output, inputs)
    // }

    const metallurgicInfusing = (output, item, infusing, amount) => {
        event.recipes.mekanism.metallurgic_infusing(output, item, infusing, amount)
    }

    const shapedCreate = (output, pattern, keys) => {
        event.recipes.create.machanical_crafting(output, pattern, keys)
    }

    const shapedTable = (output, pattern, keys, tier) => {
        const keysJson = {};
        for (let [k, v] of keys) {
            keysJson[k] = Ingredient.of(v).toJson()
        }

        event.custom({type: `extendedcrafting:shaped_table`, tier: tier, pattern: pattern, key: keysJson, result: Item.of(output).toResultJson()})
    }

    const shaped5x5 = (output, pattern, keys) => {
        shapedTable(output, pattern, keys, 2)
        shapedCreate(output, pattern, keys)
    }
    const shaped7x7 = (output, pattern, keys) => {
        shapedTable(output, pattern, keys, 3)
        shapedCreate(output, pattern, keys)
    }
    const shaped9x9 = (output, pattern, keys) => {
        shapedTable(output, pattern, keys, 4)
        shapedCreate(output, pattern, keys)
    }

    const shapelessCreate = (output, inputs) => {
        event.recipes.create.mixing(output, inputs)
    }

    const shapelessTable = (output, inputs, tier) => {
        event.custom({type: `extendedcrafting:shapeless_table`, tier: tier, ingredients: inputs.map((item) => Ingredient.of(item).toJson()), result: Item.of(output).toResultJson()})
    }

    const shapeless5x5 = (output, inputs) => {
        shapelessCreate(output, inputs)
        shapelessTable(output, inputs, 2)
    }
    const shapeless7x7 = (output, inputs) => {
        shapelessCreate(output, inputs)
        shapelessTable(output, inputs, 3)
    }
    const shapeless9x9 = (output, inputs) => {
        shapelessCreate(output, inputs)
        shapelessTable(output, inputs, 4)
    }



    smoking(Item.of('kubejs:cooked_apple', 1), 'minecraft:apple')


    event.shapeless(Item.of('kubejs:dust', 4), ['exnihilosequentia:dust'])
    event.shapeless(Item.of('exnihilosequentia:porcelain_clay', 1), ['minecraft:clay_ball', '2x kubejs:dust'])
    event.shapeless(Item.of('minecraft:clay_ball', 4), ['minecraft:clay'])


    event.shaped(Item.of('exnihilosequentia:dust', 1), [`CC`, 'CC'], {C: 'kubejs:dust'})

})
