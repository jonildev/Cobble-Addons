import Settings from "../config"

register("renderEntity", (ent, e) => {
    if (!Settings.mineshaft) return
    const name = ent.getName()
    if (name.includes(`'s Mineshaft Portal`) || name.includes(`Click to enter!`)) {
        World.getWorld().func_72900_e(ent.getEntity())
    }
})