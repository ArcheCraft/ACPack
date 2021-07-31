// priority: 997

const eemetals = [
    `copper`,
    `aluminum`,
    `silver`,
    `lead`,
    `nickel`,
    `uranium`,
    `osmium`,
    `tin`,
    `zinc`,
    `cobalt`,
    `bronze`,
    `brass`,
    `constantan`,
    `electrum`,
    `steel`,
    `invar`,
    `signalum`,
    `lumium`,
    `enderium`
];

const eeplates = [
    `iron`,
    `gold`,
    `diamond`,
    `emerald`,
    `lapis`
].concat(eemetals)

const eemekanism = [

]

const eeores = [

]

onEvent(`recipes`, event => {
    const multiSmelt = (output, input) => {
        event.smelting(output, input).xp(0.5);
        event.blasting(output, input).xp(0.5);
    };

    const unifyMetal = (item, ingotItem, dustItem, blockItem, nuggetItem) => {
        event.replaceOutput(`#forge:ingots/${item}`, ingotItem);
        event.replaceOutput(`#forge:dusts/${item}`, dustItem);
        event.replaceOutput(`#forge:nuggets/${item}`, nuggetItem);
        event.replaceOutput(`#forge:storage_blocks/${item}`, blockItem);
        event.remove({
            input: [`#forge:ores/${item}`, `#forge:dusts/${item}`],
            output: `#forge:ingots/${item}`,
            type: `minecraft:smelting`
        });
        event.remove({
            input: [`#forge:ores/${item}`, `#forge:dusts/${item}`],
            output: `#forge:ingots/${item}`,
            type: `minecraft:blasting`
        });
        event.remove({
            input: `#forge:ores/${item}`,
            output: `#forge:dusts/${item}`,
            type: `mekanism:enriching`
        });
        event.remove({
            id: `appliedenergistics2:grinder/${item}_dust_ingot`
        });

        multiSmelt(ingotItem, `#forge:dusts/${item}`);
        event.custom({
            type: `appliedenergistics2:grinder`,
            input: Ingredient.of(`#forge:ingots/${item}`).toJson(),
            result: {
                primary: Item.of(dustItem).toResultJson()
            },
            turns: 8
        });
        if (!Ingredient.of(`#forge:ores/${item}`).stacks.empty) {
            multiSmelt(ingotItem, `#forge:ores/${item}`);
            event.recipes.mekanism.enriching(Item.of(dustItem, 2), `#forge:ores/${item}`);
            event.remove({
                id: `appliedenergistics2:grinder/${item}_dust_ore`
            });
            event.custom({
                type: `appliedenergistics2:grinder`,
                input: Ingredient.of(`#forge:ores/${item}`).toJson(),
                result: {
                    primary: Item.of(dustItem, 2).toResultJson()
                },
                turns: 8
            });
        }
    };

    eemetals.forEach(item => {
        unifyMetal(item, `emendatusenigmatica:${item}_ingot`, `emendatusenigmatica:${item}_dust`, `emendatusenigmatica:${item}_block`, `emendatusenigmatica:${item}_nugget`)
    })

    eeplates.forEach(plate => {
        event.replaceOutput(`#forge:plates/${plate}`, `emendatusenigmatica:${plate}_plate`);
    })

    const eevanilla = [
        `iron`,
        `gold`
    ]
    eevanilla.forEach(dust => {
        unifyMetal(dust, `minecraft:${dust}_ingot`, `emendatusenigmatica:${dust}_dust`, `minecraft:${dust}_block`, `minecraft:${dust}_nugget`);
    })


    const replace = (replaced, item, rep_In) => {
        if (item != null) {
            event.replaceOutput(replaced, item);
        }
        if (rep_In) {
            event.replaceInput(replaced, replaced);
        }
    };

    replace(`#forge:dusts/sulfur`, `emendatusenigmatica:sulfur_dust`, true);
    replace(`#forge:sawdust`, `emendatusenigmatica:wood_dust`, true);
    replace(`#forge:dusts/diamond`, `emendatusenigmatica:diamond_dust`, true);
    replace(`#forge:dusts/emerald`, `emendatusenigmatica:emerald_dust`, true);
    replace(`#forge:dusts/quartz`, `emendatusenigmatica:quartz_dust`, true);
    replace(`#forge:dusts/lapis`, `emendatusenigmatica:lapis_dust`, true);
    replace(`#forge:dusts/coal`, `emendatusenigmatica:coal_dust`, true);
    replace(`#forge:slag`, `thermal:slag`, true);
    replace(`#forge:salt`, `mekanism:salt`, false);


    eemekanism.forEach(item => {
        replace(`#mekanism:clumps/${item}`, `alltheores:${item}_clump`, true);
        replace(`#mekanism:crystals/${item}`, `alltheores:${item}_crystal`, true);
        replace(`#mekanism:shards/${item}`, `alltheores:${item}_shard`, true);
        replace(`#mekanism:dirty_dusts/${item}`, `alltheores:dirty_${item}_dust`, true);
    });


    eeores.forEach(ore => {
        event.replaceInput(`#forge:ores/${ore}`, `#forge:ores/${ore}`)
    })
})
