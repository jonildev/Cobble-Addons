import Settings from "../config";
import { PREFIX } from "../config";
const blacklistContent = FileLib.getUrlContent('https://raw.githubusercontent.com/jonildev/blacklist/main/blacklist');
import Skyblock from "Bloomcore/Skyblock"
const blacklist = blacklistContent.split(/\r?\n/).filter(name => name.length > 0);
let messageSent = {}

function isInGlaciteTunnels() {
    return Player.getZ() > 185 && Skyblock.area === "Dwarven Mines"
}

function warpOut() {

    if (!isInGlaciteTunnels) return;
    setTimeout(() =>
        ChatLib.command("warp island"),
    (Math.floor(Math.random() * Settings.timeoutDuration)))
}

register("renderEntity", (entity, p, pt, e) => {
    if (!Settings.warpOut) return;

    const playerName = entity.getName();
    
    if (blacklist.includes(playerName) && !messageSent[playerName] && !Player.getName()) {
        messageSent[playerName] = true
        
            ChatLib.chat(`${PREFIX} &c${playerName} &ais in the lobby! Warping Out!`)
            warpOut()
    }
});

register("worldUnload", () => {
    messageSent = {}
});