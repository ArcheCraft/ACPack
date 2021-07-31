import dsl.*
import dsl.ScriptType.*
import dsl.control.*
import dsl.event.*
import dsl.event.player.*
import dsl.event.recipe.*
import dsl.functions.*
import dsl.value.item.*

fun main() {
    createScript(SERVER, "recipes") {
        onEvent(RecipesEvent) { recipes ->
            val event by recipes.event
            
            val smoking = function("smoking", "output", "input") { args ->
                event.smoking(args.arg("output", ::Item), args.arg("input", ::Item)).xp(0.1)
                event.smelting(args.arg("output", ::Item), args.arg("input", ::Item)).xp(0.1)
            }
            
            smoking { args ->
                args += Item.of("kubejs:cooked_apple", 1)
                args += Item.string("minecraft:apple")
            }
            
            event.shapeless(Item.of("kubejs:dust", 4), sequenceOf(Item.string("exnihilosequentia:dust")))
            
            event.shaped(Item.of("exnihilosequentia:dust", 1), arrayOf("CC", "CC"), mapOf("C" to Item.string("kubejs:dust")))
            
            event.mods.create.mechanicalCrafting(Item.of("exnihilosequentia:dust", 1), arrayOf("CC", "CC"), mapOf("C" to Item.string("kubejs:dust")))
            
            event.mods.extendedCrafting.shaped(Item.resultJson("exnihilosequentia:dust", 1), arrayOf("CC", "CC"), mapOf("C" to Item.resultJson("kubejs:dust")), 1)
        }
    }
    
    createScript(SERVER, "starting_items") {
        onEvent(PlayerEvent.LoggedIn) { loggedIn ->
            val event by loggedIn.event
            val startingItemsStage = "starting_items"
            
            ifStmt(!{ event.player.stages.has(startingItemsStage) }) {
                event.player.stages.add(startingItemsStage)
                
                event.player.give(Item.string("minecraft:wooden_axe"))
                
                event.server.executeCommandSilent("execute in acpack-util:void run teleport %s 0 65 0", { event.player.name })
            }
        }
    }
}
