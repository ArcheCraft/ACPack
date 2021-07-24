// priority: 0

onEvent('jei.hide.items', event => {
    const hidden = [
        /appliedenergistics2:facade/
    ]

    hidden.forEach(item => {
        event.hide(item)
    })
})
