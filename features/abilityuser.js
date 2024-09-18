import Settings from "../config"

register("worldload", () => {
    if (!Settings.ability) return;
        let held = Player.getHeldItem().getName()
        ChatLib.say(`${held}`)

})