import Settings from "./config";

import "./features/antilimbo"
import "./features/msbrewarp"
import "./features/playerhider"
import "./features/tunnelmove"
import "./features/warpout"
import "./features/mineshaft"

register("command", () => {
    Settings.openGUI()
}).setName("Cobbleaddons").setAliases(["cobble", "ca", "co"])