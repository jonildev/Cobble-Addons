import Settings from "../config"
import Skyblock from "Bloomcore/Skyblock"
import { PREFIX } from "../config";

let inSkyblock = false
const sbTitles = [
    "skyblock",
    "skiblock" // For april fools
]

inSkyblock = sbTitles.some(a => Scoreboard.getTitle().removeFormatting().toLowerCase().includes(a))


const limbo = new Thread(() => {
    Thread.sleep(Settings.timeoutDuration + Math.floor(Math.random() * 1000));
    ChatLib.command("lobby");
    Thread.sleep(Settings.timeoutDuration + Math.floor(Math.random() * 1000));
    ChatLib.command("play sb");
    Thread.sleep(Settings.timeoutDuration + Math.floor(Math.random() * 1000));
    ChatLib.command("warp camp");
    Thread.sleep(Settings.timeoutDuration + Math.floor(Math.random() * 1000));
    ChatLib.command("tunnels", true)
})

register("step", () => {
    if (!Settings.antilimbo) return;
    if (!inSkyblock) {
        limbo.start()
    }
})