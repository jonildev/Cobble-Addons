import Settings from "../config"
import Skyblock from "Bloomcore/Skyblock"
const PREFIX = `&f[&bCobble Addons&f]`;


const msbwarp = new Thread(() => {
    ChatLib.command("tunnels", true)
    if(Skyblock.area !="Private Island") {
        setTimeout(() => {
            ChatLib.command("warp island")
        },  Math.floor(Settings.timeoutDuration + Math.random() * 1000))
    }
    if(Skyblock.area !="Glacite Tunnels") {
        setTimeout(() => {
            ChatLib.command("warp camp")    
        },  Math.floor(Settings.timeoutDuration + Math.random() * 1000))
    }
    Thread.sleep(Settings.timeoutDuration + Math.random() * 1000)
    ChatLib.chat(`${PREFIX} Restarting the Macro!`)
    ChatLib.command("tunnels", true)
})

register("chat", () => {
    if (!Settings.warpmsb) return;
        ChatLib.chat(`${PREFIX} MSB expired! Warping Out!`)
        msbwarp.start()
}).setCriteria("Your Mining Speed Boost has expired!")
