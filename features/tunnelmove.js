register("command", (number) => {
    if (!number) {
        ChatLib.chat(`&f[&bAuto Warp-Out&f] &aPlease provide a number.`);
        return;
    }
    ChatLib.command(`tunnelminer remove ${number}`, true)
    ChatLib.command(`tunnelminer add ${number}`, true)
    ChatLib.chat(`&f[&bCobble Addons&f] &a Moved Waypoint ${number}`);
}).setName(`tunnelmove`)