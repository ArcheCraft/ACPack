// priority: 0

events.listen(`recipes`, event => {
    const type = (name) => {
        event.remove({type: name})
    }

    const id = (name) => {
        event.remove({id: name})
    }

    type(`exnihilosequentia:hammer`)

    const ids = [

    ]

    ids.forEach((name) => {
        id(name)
    })
})
