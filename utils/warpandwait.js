import Settings from "../config"
import { PREFIX } from "../config";

export function warpandwait(command, locCheck, maxRetries = Settings.maxtries, delay = Settings.retrydelay) {
    let retries = 0;

    const warpThread = new Thread(() => {
        ChatLib.command(command);
        while (!locCheck() && retries < maxRetries) {
            Thread.sleep(delay);
            retries++;
            ChatLib.chat(`${PREFIX} Retrying warp (${retries}/${maxRetries})...`);
            ChatLib.command(command);
        }
        if (retries === maxRetries) {
            ChatLib.chat(`${PREFIX} Failed to reach the warp destination after ${maxRetries} attempts.`);
        } else {
            ChatLib.chat(`${PREFIX} Successfully warped to the destination.`);
        }
    });

    warpThread.start();
}