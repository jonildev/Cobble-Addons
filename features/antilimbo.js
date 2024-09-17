import Settings from "../config"

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

register("chat", () => {
    if(!Settings.antilimbo) return;
    limbo.start();
}).setCriteria("/limbo for more information. "||" You were spawned in Limbo.")