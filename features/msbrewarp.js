import Settings from "../config"
import { warpandwait } from "../utils/warpandwait"
import Skyblock from "Bloomcore/Skyblock"
import { PREFIX } from "../config";

function isInGlaciteTunnels() {
    return Player.getZ() > 185 && Skyblock.area === "Dwarven Mines";
}

function isInPrivateIsland() {
    return Skyblock.area === "Private Island";
}

const msbwarp = new Thread(() => {
    ChatLib.command("tunnels", true);
    warpandwait("warp island", isInPrivateIsland);
    Thread.sleep(Settings.timeoutDuration + Math.floor(Math.random() * 1000));
    warpandwait("warp camp", isInGlaciteTunnels);
    Thread.sleep(Settings.timeoutDuration + Math.floor(Math.random() * 1000));
    if (isInGlaciteTunnels()) {
        ChatLib.chat(`${PREFIX} Restarting the Macro!`);
        ChatLib.command("tunnels", true);
    }
});


register("chat", () => {
    if (!Settings.warpmsb) return;
    ChatLib.chat(`${PREFIX} MSB expired! Warping Out!`);
    msbwarp.start();
}).setCriteria("Your Mining Speed Boost has expired!");