let output = require("../../config.js");

// You change gamemodes here
// To change specific things about specific gamemodes (such as team count for tdm), visit their config file in \gamemodeconfigs\
var seed = Math.floor(Math.random()*1e16);

let siegecombine;
let mapcombine;
let teamcombine;
let secondcombine;
let maincombine;
let mainteamcombine;

     if (seed % 3 >= 2) { siegecombine = 'siegemap1'; }
else if (seed % 3 >= 1) { siegecombine = 'siegemap2'; }
else { siegecombine = 'siegemap3'; }

     if (seed % 9 >= 6) { teamcombine = 'domination'; }
else if (seed % 9 >= 3) { teamcombine = 'mothership'; }
else if (seed % 9 >= 2) { teamcombine = 'tag'; }
else { teamcombine = 'trainwars'; }

     if (seed % 7 >= 4) { mapcombine = 'maze'; }
else if (seed % 7 >= 1) { mapcombine = 'portal'; }
else { mapcombine = 'space'; }

     if (seed % 4 >= 2) { secondcombine = 'growth'; }
else { secondcombine = 'armsrace'; }

     if (seed % 10 >= 7) { maincombine = 'ffa'; }
else if (seed % 10 >= 6) { maincombine = 'groups'; }
else if (seed % 10 >= 3) { maincombine = 'tdm'; }
else { maincombine = 'opentdm'; }

     if (seed % 2 >= 1) { mainteamcombine = 'tdm'; }
else { mainteamcombine = 'opentdm'; }

     if (seed % 22 >= 20) { gamemodechosen = [mapcombine, maincombine]; }
else if (seed % 22 >= 18) { gamemodechosen = [secondcombine, maincombine]; }
else if (seed % 22 >= 16) { gamemodechosen = [teamcombine, mainteamcombine]; }
else if (seed % 22 >= 14) { gamemodechosen = [secondcombine, mainteamcombine]; }
else if (seed % 22 >= 13) { gamemodechosen = [secondcombine, mapcombine, maincombine]; }
else if (seed % 22 >= 12) { gamemodechosen = [mapcombine, teamcombine, mainteamcombine]; }
else if (seed % 22 >= 11) { gamemodechosen = [secondcombine, teamcombine, mainteamcombine]; }
else if (seed % 22 >= 10) { gamemodechosen = [secondcombine, mapcombine, teamcombine, mainteamcombine]; }
else if (seed % 22 >= 5) { gamemodechosen = ['siege', siegecombine]; }
else { gamemodechosen = ['blockade']; }

const gamemodes = gamemodechosen;

for (let gamemode of gamemodes) {
    let mode = require(`./gamemodeconfigs/${gamemode}.js`);
    for (let key in mode) {
        if (key === "ROOM_SETUP") {
            for (let y = 0; y < output.Y_GRID; y++) {
                for (let x = 0; x < output.X_GRID; x++) {
                    if (mode[key][y][x]) {
                        if (output[key][y] == null) output[key][y] = mode[key][y];
                        output[key][y][x] = mode[key][y][x];
                    }
                }
            }
        } else {
            output[key] = mode[key];
        }
    }
}

module.exports = { output };

//everything past this handles the display name in the main menu
const nameMap = {
    tdm: "TDM",
    ffa: "FFA",
    opentdm: "Open TDM",
    //clanwars: "Clan Wars",
    trainwars: "Train Wars",
    magicmaze: "Magic",
    armsrace: "Arms Race",
    siegemap1: "Fortress",
    siegemap2: "Citadel",
    siegemap3: "Blitz"
};

output.gameModeName = gamemodes.map(x => nameMap[x] || (x[0].toUpperCase() + x.slice(1))).join(' ');
