// An addon is guaranteed to run only after all groups are loaded.
// This is helpful, if your group relies on all other definitions already being loaded.
// Addons that are dependant on other addons should be named something like
// "[PARENT ADDON NAME]-[EXTENSION NAME].js", to make sure that it would run after that addon ran.

const { combineStats, makeAuto, skillSet } = require('../facilitators.js');
const { base, gunCalcNames } = require('../constants.js');
const g = require('../gunvals.js');

module.exports = ({ Class }) => {

	// This addon is disabled by default.
	// You can also disable addons by not making them end with '.js'
	// If you want to enable, simply make the line below just not run.
	//return console.log('[variatonBosses.js] Addon disabled by default');

	let MAX_CHILDREN = 0,
		GUNS = [],
		TURRETS = [];

	// This adds the tank to the definitions and to the fun menu
	Class.variatonEggImperial = {
    PARENT: ["eggBossBody"],
    LABEL: "Fighter",
    AI: {
        NO_LEAD: false,
    },
    TURRETS: [
        {
            POSITION: [9, 0, 0, 0, 360, 1],
            TYPE: ["bigauto4gun", { INDEPENDENT: true, CONTROLLERS: [ "canRepel", "onlyAcceptInArc", "mapAltToFire", "nearestDifferentMaster", ], }],
        },
    ],
};
for (let i = 0; i < 6; i++) {
    Class.variatonEggImperial.TURRETS.push(
        {
            POSITION: [6, 9, 0, 60*i+60, 160, 0],
            TYPE: ["single3gun", { INDEPENDENT: false }],
        },
    )
};
Class.variatonEggTerritorial = {
    PARENT: ["eggBossBody"],
    LABEL: "Avenger",
    GUNS: [
        {
            POSITION: [15, 7, 1, -3, 0, 60, 0],
        },
        {
            POSITION: [3, 7, 1.7, 12, 0, 60, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.flank]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
        {
            POSITION: [15, 7, 1, -3, 0, 180, 0],
        },
        {
            POSITION: [3, 7, 1.7, 12, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.flank]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
        {
            POSITION: [15, 7, 1, -3, 0, 300, 0],
        },
        {
            POSITION: [3, 7, 1.7, 12, 0, 300, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.flank]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
    ],
    TURRETS: [
        {
            POSITION: [6, 9, 0, 120, 160, 0],
            TYPE: ["single3gun", { INDEPENDENT: false }],
        },
        {
            POSITION: [6, 9, 0, 240, 160, 0],
            TYPE: ["single3gun", { INDEPENDENT: false }],
        },
        {
            POSITION: [6, 9, 0, 0, 160, 0],
            TYPE: ["single3gun", { INDEPENDENT: false }],
        },
    ],
    AI: {
        NO_LEAD: false,
    },
};
Class.variatonSquareImperial = {
    PARENT: ["squareBossBody"],
    LABEL: "Squatter",
    AI: {
        NO_LEAD: false,
    },
    TURRETS: [
        {
            POSITION: [9, 0, 0, 0, 360, 1],
            TYPE: ["bigauto4gun", { INDEPENDENT: true, CONTROLLERS: [ "canRepel", "onlyAcceptInArc", "mapAltToFire", "nearestDifferentMaster", ], }],
        },
    ],
};
for (let i = 0; i < 4; i++) {
    Class.variatonSquareImperial.TURRETS.push(
        {
            POSITION: [6, 8, 5, 90*i+90, 160, 0],
            TYPE: ["single3gun", { INDEPENDENT: false, }],
        }, {
            POSITION: [6, 8, -5, 90*i+90, 160, 0],
            TYPE: ["single3gun", { INDEPENDENT: false, }],
        },
    )
};
Class.variatonSquareTerritorial = {
    PARENT: ["squareBossBody"],
    LABEL: "Crusader",
    GUNS: [
        {
            POSITION: [15, 7, 1, -3, 5.5, 5, 0],
        },
        {
            POSITION: [3, 7, 1.7, 12, 5.5, 5, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.twin]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
        {
            POSITION: [15, 7, 1, -3, -5.5, -5, 0],
        },
        {
            POSITION: [3, 7, 1.7, 12, -5.5, -5, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.twin]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
        {
            POSITION: [15, 7, 1, -3, 5.5, 185, 0],
        },
        {
            POSITION: [3, 7, 1.7, 12, 5.5, 185, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.twin]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
        {
            POSITION: [15, 7, 1, -3, -5.5, 175, 0],
        },
        {
            POSITION: [3, 7, 1.7, 12, -5.5, 175, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.twin]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
    ],
    TURRETS: [
        {
            POSITION: [9, 7, 0, 90, 160, 0],
            TYPE: ["twin3gun", { INDEPENDENT: false }],
        },
        {
            POSITION: [9, 7, 0, 270, 160, 0],
            TYPE: ["twin3gun", { INDEPENDENT: false }],
        },
    ],
    AI: {
        NO_LEAD: false,
    },
};
Class.variatonTriangleImperial = {
    PARENT: ["triangleBossBody"],
    LABEL: "Wrangler",
    AI: {
        NO_LEAD: false,
    },
    TURRETS: [],
};
for (let i = 0; i < 3; i++) {
    Class.variatonTriangleImperial.TURRETS.push(
        {
            POSITION: [4, 8, -8, 120*i+120, 160, 0],
            TYPE: ["single3gun", { INDEPENDENT: false, }],
        }, {
            POSITION: [4, 8, 8, 120*i+120, 160, 0],
            TYPE: ["single3gun", { INDEPENDENT: false, }],
        }, {
            POSITION: [8, 8, 0, 120*i+120, 160, 0],
            TYPE: ["twin3gun", { INDEPENDENT: false, }],
        },
    )
};
Class.variatonPentagonImperial = {
    PARENT: ["pentagonBossBody"],
    LABEL: "Combatant",
    TURRETS: [],
};
for (let i = 0; i < 5; i++) {
    Class.variatonPentagonImperial.TURRETS.push(
        {
            POSITION: [4, 10, 0, 72*i+36, 160, 0],
            TYPE: ["autoTankGun", { INDEPENDENT: false, }],
        }, {
            POSITION: [8, 8, 0, 72*i+72, 160, 0],
            TYPE: ["bigauto4gun", { INDEPENDENT: false, }],
        },
    )
};
Class.variatonPentagonTerritorial = {
    PARENT: ["pentagonBossBody"],
    LABEL: "Protector",
    GUNS: [],
    TURRETS: [],
};
for(let i = 0; i < 5; i++) {
    Class.variatonPentagonTerritorial.GUNS.push(
        {
            POSITION: [15, 7, 1, -3, 0, 72*i, 0],
        },
        {
            POSITION: [3, 7, 1.7, 12, 0, 72*i, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.flank]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
    );
    Class.variatonPentagonTerritorial.TURRETS.push(
        {
            POSITION: [6, 9, 0, 72*i+36, 120, 0],
            TYPE: [
                "autoTankGun",
                {
                    INDEPENDENT: true,
                },
            ],
        }
    );
};
Class.variatonHexagonImperial = {
    PARENT: ["hexagonBossBody"],
    LABEL: "Spartan",
    GUNS: [],
    TURRETS: [],
};
for(let i = 0; i < 6; i++) {
    Class.variatonHexagonImperial.TURRETS.push(
        {
            POSITION: [7, 9, 0, 60*i, 160, 0],
            TYPE: [ "bigauto4gun", { CONTROLLERS: [ "canRepel", "onlyAcceptInArc", "mapAltToFire", "nearestDifferentMaster", ], }, ],
        }, {
            POSITION: [4, 6, 0, 60*i+30, 180, 1],
            TYPE: [ "autoTankGun", { INDEPENDENT: true, }, ],
        },
    );
};
Class.variatonHexagonTerritorial = {
    PARENT: ["hexagonBossBody"],
    LABEL: "Gatekeeper",
    GUNS: [],
    TURRETS: [],
};
for(let i = 0; i < 6; i++) {
    Class.variatonHexagonTerritorial.GUNS.push(
        {
            POSITION: [15, 7, 1, -3, 0, 60*i, 0],
        },
        {
            POSITION: [3, 7, 1.7, 12, 0, 60*i, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.flank, g.flank, g.lessreload]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
    );
    Class.variatonHexagonTerritorial.TURRETS.push(
        {
            POSITION: [4, 7, 0, 60*i+30, 240, 1],
            TYPE: [
                "autoTankGun",
                {
                    INDEPENDENT: true,
                },
            ],
        }
    );
};
Class.variatonHeptagonImperial = {
    PARENT: ["heptagonBossBody"],
    LABEL: "Impi",
    GUNS: [],
    TURRETS: [],
};
for(let i = 0; i < 7; i++) {
    Class.variatonHeptagonImperial.TURRETS.push(
        {
            POSITION: [7, 9, 0, i*(360/7), 160, 0],
            TYPE: [ "bigauto4gun", { CONTROLLERS: [ "canRepel", "onlyAcceptInArc", "mapAltToFire", "nearestDifferentMaster", ], }, ],
        }, {
            POSITION: [4, 6, 0, i*(360/7)+(360/14), 180, 1],
            TYPE: [ "autoTankGun", { INDEPENDENT: true, }, ],
        },
    );
};
Class.variatonHeptagonTerritorial = {
    PARENT: ["heptagonBossBody"],
    LABEL: "Ishlangu",
    GUNS: [],
    TURRETS: [],
};
for(let i = 0; i < 7; i++) {
    Class.variatonHeptagonTerritorial.GUNS.push(
        {
            POSITION: [15, 7, 1, -3, 0, (360/7)*i, 0],
        },
        {
            POSITION: [3, 7, 1.7, 12, 0, (360/7)*i, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.flank, g.flank, g.flank, g.lessreload]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
    );
    Class.variatonHeptagonTerritorial.TURRETS.push(
        {
            POSITION: [4, 7, 0, (360/7)*i+(360/14), 240, 1],
            TYPE: [
                "autoTankGun",
                {
                    INDEPENDENT: true,
                },
            ],
        }
    );
};
Class.variatonbosses = {
    PARENT: ["menu"],
    LABEL: "Variaton Bosses",
};
	Class.specialTanks.UPGRADES_TIER_0.push("variatonbosses");
	    Class.variatonbosses.UPGRADES_TIER_0 = ["variatonEggImperial", "variatonSquareImperial", "variatonTriangleImperial", "variatonPentagonImperial", "variatonEggTerritorial", "variatonSquareTerritorial", "defender", "variatonPentagonTerritorial", "variatonHexagonImperial", "variatonHexagonTerritorial", "variatonHeptagonImperial", "variatonHeptagonTerritorial"];

	console.log('[variatonBosses] A bunch of bosses has arrived!');
};