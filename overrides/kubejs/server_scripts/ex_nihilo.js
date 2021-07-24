// priority: 0


events.listen(`recipes`, event => {
    const hammer = (input, result) => {
        event.custom({type: `exnihilosequentia:hammer`, input: input, results: [result]})
    }

    const compressedCrush = (input, result) => {
        for (let i = 1; i <= 16; i++) {
            hammer({item: `overloaded_cb:compressed_${input}_${i}`}, {chance: 1.0, item: `overloaded_cb:compressed_${result}_${i}`, count: 1})
        }
    }

    hammer({item: `minecraft:cobblestone`}, {chance: 1.0, item: `minecraft:gravel`, count: 1})
    compressedCrush(`cobblestone`, `gravel`)

    hammer({item: `minecraft:gravel`}, {chance: 1.0, item: `minecraft:sand`, count: 1})
    compressedCrush(`gravel`, `sand`)

    hammer({item: `minecraft:netherrack`}, {chance: 1.0, item: `exnihilosequentia:crushed_netherrack`, count: 1})
    compressedCrush(`netherrack`, `crushed_netherrack`)

    hammer({item: `minecraft:end_stone`}, {chance: 1.0, item: `exnihilosequentia:crushed_end_stone`, count: 1})
    compressedCrush(`end_stone`, `crushed_end_stone`)


    const meshes = [`string`, `flint`, `iron`, `diamond`, `emerald`, `netherite`]
    const sieve = (input, result, chances, waterlogged) => {
        const rolls = [];

        for (let i = 0; i < 6; i++) {
            if (chances[i]) {
                rolls.push({chance: chances[i], mesh: meshes[i]})
            }
        }

        if (rolls.length) {
            event.custom({
                type: `exnihilosequentia:sieve`,
                rolls: rolls,
                input: {item: input},
                result: {item: result},
                waterlogged: waterlogged
            })
        }
    }



    const fluidTransform = (input, catalyst, result) => {
        event.custom({
            type: `exnihilosequentia:fluid_transform`,
            fluidInTank: {fluid: input},
            catalyst: {item: catalyst},
            result: {fluid: result}
        })
    }


    const crucible = (input, amount, result, type) => {
        event.custom({
            type: `exnihilosequentia:crucible`,
            input: Ingredient.of(input).toJson(),
            amount: amount,
            fluidResult: {fluid: result},
            crucibleType: type
        })
    }


    const heat = (source, amount) => {
        event.custom({
            "type": "exnihilosequentia:heat",
            "block": source,
            "amount": amount
        })
    }

    heat("mekanism:superheating_element", 500)
    heat("alltheores:uranium_block", 25)
    heat("powah:uraninite_block", 30)
    heat("twilightforest:fiery_block", 50)
    heat("thermal:signalum_block", 10)
})
