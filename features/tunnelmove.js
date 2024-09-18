import { PREFIX } from "../config"

register("command", (number, mode) => {
    if (!number) {
        ChatLib.chat(`&f[&bAuto Warp-Out&f] &aPlease provide a number.`);
        return;
    }
    ChatLib.command(`tunnelminer remove ${mode} ${number}`, true)
    ChatLib.command(`tunnelminer add ${mode} ${number}`, true)
    ChatLib.chat(`${PREFIX} &a Moved Waypoint ${mode} ${number}`);
}).setName(`tunnelmove`)