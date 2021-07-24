events.listen(`recipes`, event => {
    const fluidToItem = (inputs, fluid, outputs, nothingWeight, rolls, consumeFluidChance) => {
        event.custom({
            type: `interactio:item_fluid_transform`,
            inputs: inputs,
            fluid: {fluid: fluid},
            output: {entries: outputs, empty_weight: nothingWeight, rolls: rolls},
            consume_fluid: consumeFluidChance
        })
    }


})