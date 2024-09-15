import Settings from "../config"

const PREFIX = `&f[&bCobble Addons&f]`;
const blacklistContent = FileLib.getUrlContent('https://raw.githubusercontent.com/jonildev/blacklist/main/blacklist');
const blacklist = blacklistContent.split(/\r?\n/).filter(name => name.length > 0);
let messageSent = {};

function warpOut() {
    setTimeout(() =>
        ChatLib.command("is"),
    (Math.floor(Math.random() * Settings.timeoutDuration)));
}

register("renderEntity", (entity, p, pt, e) => {
    if (!Settings.warpOut) return;

    const playerName = entity.getName();
    
    if (blacklist.includes(playerName) && !messageSent[playerName] && !Player.getName()) {
        messageSent[playerName] = true;
        
            ChatLib.chat(`${PREFIX} &c${playerName} &ais in the lobby! Warping Out!`);
            warpOut()

        setTimeout(() => {
            messageSent[playerName] = false;
        }, 2000);
    }
});

register("worldUnload", () => {
    messageSent = {};
});