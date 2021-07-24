/*
 * This file is used to register world presets. Topography searches for all scripts ending with Presets.js and executes them.
 */

registerPreset("void", "Void Worlds", "examples/images/Basic_Tree", "Overworld/Nether/End as void dimensions with starting structures")
.registerDimension("overworld", "examples/dimensions/overworld_void")
.registerDimension("the_nether", "examples/dimensions/nether_void")
.registerDimension("the_end", "examples/dimensions/end_void")
.registerEventHandler("BiomeLoadingEvent", Java.extend(Consumer, {
	accept: function(event) {
		FeatureHelper.clearFeatures(event);
		FeatureHelper.clearStructures(event);
	}
}).class);

