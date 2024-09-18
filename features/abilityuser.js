import Settings from "../config"

register("chat", () => {
    if (!Settings.ability) return;
        let held = Player.getHeldItem().getName()
        ChatLib.say(`.use ${held}`)
}).setCriteria(/^(.+) is now available!/i)