import Settings from "../config"
import { PREFIX } from "../config";

const limbo = new Thread(() => {
    ChatLib.chat(`${PREFIX} detected in limbo! Warping back!`)
    Thread.sleep(Settings.timeoutDuration + Math.floor(Math.random() * 1000));
    ChatLib.command("lobby");
    Thread.sleep(Settings.timeoutDuration + Math.floor(Math.random() * 1000));
    ChatLib.command("play sb");
    Thread.sleep(Settings.timeoutDuration + Math.floor(Math.random() * 1000));
    ChatLib.command("warp camp");
    Thread.sleep(Settings.timeoutDuration + Math.floor(Math.random() * 1000));
    ChatLib.command("tunnels", true)
})

register("chat", () => {
    if (!Settings.antilimbo) return;
    limbo.start()
}).setCriteria(`/limbo for more information.`)