import Settings from "../config"
import { PREFIX } from "../config";
let lobbies = []

register("chat", (server) => {
    if(!Settings.lobbyMarking) return
    if(lobbies.indexOf(server) > 0)
        setTimeout(() => {
            ChatLib.chat(`${PREFIX}&aYou've been in this lobby!`)
          }, 50)
    else
        lobbies.push(server)
}).setCriteria(/Sending to server ([A-Za-z0-9]+)\.\.\./g)

register("command", () => {
    lobbies = []
}).setName("clearmarks")