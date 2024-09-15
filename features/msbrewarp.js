import Settings from "../config"
const PREFIX = `&f[&bCobble Addons&f]`;

const msbwarp = new Thread(() => {
    ChatLib.command("tunnels", true)
    ChatLib.command("warp island")
    Thread.sleep(2500 + Math.floor(Math.random() * Settings.timeoutDuration))
    ChatLib.command("warp camp")
    Thread.sleep(Math.floor(Math.random() * Settings.timeoutDuration))
    ChatLib.command("tunnels", true)
    ChatLib.chat(`${PREFIX} Restarting the Macro!`)
})

register("chat", () => {
    if (!Settings.warpmsb) return;
        ChatLib.chat(`${PREFIX} MSB expired! Warping Out!`)
        msbwarp.start()
}).setCriteria("Your Mining Speed Boost has expired!")