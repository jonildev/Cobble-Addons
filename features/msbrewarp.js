import Settings from "../config"
const PREFIX = `&f[&bCobble Addons&f]`;

const msbwarp = new Thread(() => {
    ChatLib.command("tunnels", true)
    ChatLib.command("warp island")
    Thread.sleep(3000 + Math.floor(Math.random() * Settings.timeoutDuration))
    ChatLib.command("warp camp")
    Thread.sleep(1000 + Math.floor(Math.random() * Settings.timeoutDuration))
    ChatLib.chat(`${PREFIX} Restarting the Macro!`)
    ChatLib.command("tunnels", true)
})

register("chat", () => {
    if (!Settings.warpmsb) return;
        ChatLib.chat(`${PREFIX} MSB expired! Warping Out!`)
        msbwarp.start()
}).setCriteria("Your Mining Speed Boost has expired!")