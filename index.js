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

import request from "../requestV2"

const PREFIX = `&f[&bCobble Addons&f]`;


export const checkForUpdate = () => {
    return request({
        url: `https://github.com/jonildev/Cobble-Addons/releases/latest`,
        json: true 
    }).then((res) => {
        let version = res.tag_name

        if(version == null) { return false; }
        if(version.replace("v", "") == JSON.parse(FileLib.read("Cobble Addons", "metadata.json")).version) { return false; }
        new TextComponent(`${PREFIX}&a A new update for cobble addons is avaliable!\n&aChanges:&7 ${res.body.replace("\n", "\n&7")}`).setHover("show_text", "&7Download update").setClick("open_url", "https://github.com/jonildev/Cobble-Addons/releases/latest").chat()
        return true;
    })
    .catch(e => {
        console.error(e);
        return null;
    });
}