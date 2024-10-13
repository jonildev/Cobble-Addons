import Settings from "../config"
import { PREFIX } from "../config";

const sbwarp = new Thread(() => {
    Thread.sleep(Settings.timeoutDuration + Math.floor(Math.random() * 1000))
    ChatLib.command("lobby")
    Thread.sleep(Settings.timeoutDuration + Math.floor(Math.random() * 1000))
    ChatLib.command("play sb")
})

const limbo = new Thread(() => {
    ChatLib.chat(`${PREFIX} detected in limbo! Warping back!`)
    
    switch(Settings.limboOption) {
        case 0:
            sbwarp.start()
            break;

        case 1:
            sbwarp.start()
            Thread.sleep(Settings.timeoutDuration + Math.floor(Math.random() * 1000))
            ChatLib.command("warp camp")
            Thread.sleep(Settings.timeoutDuration + Math.floor(Math.random() * 1000))
            ChatLib.command("tunnels", true)
            break;
        
        case 2:
            sbwarp.start()
            Thread.sleep(Settings.timeoutDuration + Math.floor(Math.random() * 1000))
            ChatLib.command("warp camp")
            Thread.sleep(Settings.timeoutDuration + Math.floor(Math.random() * 1000))
            ChatLib.command("glacitecomm", true)
            break;
        
        case 3:
            sbwarp.start()
            Thread.sleep(Settings.timeoutDuration + Math.floor(Math.random() * 1000))
            ChatLib.command("warp forge")
            Thread.sleep(Settings.timeoutDuration + Math.floor(Math.random() * 1000))
            ChatLib.command("dwarvencomm", true)
            break;
        
        case 4:
            sbwarp.start()
            Thread.sleep(Settings.timeoutDuration + Math.floor(Math.random() * 1000))
            ChatLib.command("warp forge")
            Thread.sleep(Settings.timeoutDuration + Math.floor(Math.random() * 1000))
            ChatLib.command("dwarvenminer", true)
            break;
        
        default:
            ChatLib.chat(`${PREFIX} Invalid limbo option "${Settings.limboOption}".`)
    }
})

register("chat", () => {
    if (!Settings.antilimbo) return;
    limbo.start()
}).setCriteria(`/limbo for more information.`)