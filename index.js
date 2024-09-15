import Settings from "./config";

import "./features/antilimbo"
import "./features/msbrewarp"
import "./features/playerhider"
import "./features/tunnelmove"
import "./features/warpout"
import "./features/mineshaft"

register("command", () => {
    Settings.openGUI()
}).setName("Cobbleaddons").setAliases(["cobble", "ca", "co"])

import request from "../../requestV2"

const prefix = "&8[&2Cobble&8]&7";


export const checkForUpdate = () => {
    return request({
        url: `https://api.github.com/repos/theauhh/cobble/releases/latest`,
        json: true 
    }).then((res) => {
        let version = res.tag_name

        if(version == null) { return false; }
        if(version.replace("v", "") == JSON.parse(FileLib.read("Cobble Addons", "metadata.json")).version) { return false; }
        new TextComponent(`${prefix}&a A new update for cobble addons is avaliable!\n&aChanges:&7 ${res.body.replace("\n", "\n&7")}`).setHover("show_text", "&7Download update").setClick("open_url", "https://github.com/theauhh/cobble/releases/latest").chat()
        return true;
    })
    .catch(e => {
        console.error(e);
        return null;
    });
}

export function printObjectKeys(obj) {
    Object.keys(obj).forEach(key => {
      console.log(key);
    });
  }