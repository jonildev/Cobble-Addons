import Settings from "../config"

register("chat", () => {
    if(!Settings.antilimbo) return;
    new Thread(() => {
        Thread.sleep((1000 + Math.floor(Math.random() * 1555)))
        ChatLib.command("lobby");
        Thread.sleep((1000 + Math.floor(Math.random() * 1555)))
        ChatLib.command("play sb");
    })
}).setCriteria("&cYou were spawned in Limbo.&r").setContains();


