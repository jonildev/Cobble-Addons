import Settings from "../config"

register("renderEntity", (ent, pos, partialTick, e) => {
  if (!Settings.playerhider) return
  if (ent.getName() !== Player.getName()) {
    World.getWorld().func_72900_e(ent.getEntity())
  }
})