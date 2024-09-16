import Settings from "../config"
import Skyblock from "Bloomcore/Skyblock"
import { PREFIX } from "../config";

function isInGlaciteTunnels() {
    return Player.getZ() > 185 && Skyblock.area === "Dwarven Mines";
}

function isInPrivateIsland() {
    return Skyblock.area === "Private Island";
}

function warpandwait(command, locCheck, maxRetries = Settings.maxtries, delay = Settings.retrydelay) {
    let retries = 0;

    const warpThread = new Thread(() => {
        if (isInGlaciteTunnels()) {
            ChatLib.command("tunnels", true);
        }
        ChatLib.command(command);
        while (!locCheck() && retries < maxRetries) {
            Thread.sleep(delay);
            retries++;
            ChatLib.chat(`${PREFIX} Retrying warp (${retries}/${maxRetries})...`);
            ChatLib.command(command);
        }
        if (isInGlaciteTunnels()) {
        ChatLib.chat(`${PREFIX} Restarting the Macro!`);
        ChatLib.command("tunnels", true);
        }
        if (retries === maxRetries) {
            ChatLib.chat(`${PREFIX} Failed to reach the warp destination after ${maxRetries} attempts.`);
        }
    });

    warpThread.start();
}

const msbwarp = new Thread(() => {
    warpandwait("warp island", isInPrivateIsland);
    Thread.sleep(Settings.timeoutDuration + Math.floor(Math.random() * 1000));
    warpandwait("warp camp", isInGlaciteTunnels);
    Thread.sleep(Settings.timeoutDuration + Math.floor(Math.random() * 1000));
});

register("chat", () => {
    if (!Settings.warpmsb) return;
    ChatLib.chat(`${PREFIX} MSB expired! Warping Out!`);
    msbwarp.start();
}).setCriteria("Your Mining Speed Boost has expired!");