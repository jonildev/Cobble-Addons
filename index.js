import Settings from "./config";

import "./features/antilimbo"
import "./features/abilitywarp"
import "./features/playerhider"
import "./features/tunnelmove"
import "./features/warpout"
import "./features/mineshaft"
import "./features/lobbymarker"

register("command", () => {
    Settings.openGUI()
}).setName("Cobbleaddons").setAliases(["cobble", "ca", "co"])
