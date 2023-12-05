const { combineStats, skillSet, makeAuto, makeDeco } = require('../facilitators.js');
const { base, statnames, gunCalcNames, smshskl } = require('../constants.js');
const { genericTank } = require('./generics.js')
const { trapper } = require('./tanks.js');
const g = require('../gunvals.js');

// OBSTACLES
exports.rock = {
    TYPE: "wall",
    DAMAGE_CLASS: 1,
    LABEL: "Rock",
    FACING_TYPE: "turnWithSpeed",
    SHAPE: -9,
    BODY: {
        PUSHABILITY: 0,
        HEALTH: 10000,
        SHIELD: 10000,
        REGEN: 1000,
        DAMAGE: 1,
        RESIST: 100,
        STEALTH: 1,
    },
    VALUE: 0,
    SIZE: 60,
    COLOR: 16,
    VARIES_IN_SIZE: true,
    ACCEPTS_SCORE: false,
};
exports.stone = {
    PARENT: ["rock"],
    LABEL: "Stone",
    SIZE: 32,
    SHAPE: -7,
};
exports.moon = {
    PARENT: ["rock"],
    LABEL: "Moon",
    SIZE: 60,
    SHAPE: 0,
};
exports.gravel = {
    PARENT: ["rock"],
    LABEL: "Gravel",
    SIZE: 16,
    SHAPE: -7,
};
exports.wallturret = {
    PARENT: ["genericTank"],
    LABEL: "",
    BODY: {
        FOV: 3,
    },
    IGNORED_BY_AI: false,
    CONTROLLERS: [
        "canRepel",
        "onlyAcceptInArc",
        "mapAltToFire",
        "nearestDifferentMaster",
    ],
    COLOR: 16,
    GUNS: [
        {
            POSITION: [27, 9, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.sniper,
                    g.auto,
                    g.assass,
                    g.autosnipe,
                ]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [5, 9, -1.5, 8, 0, 0, 0],
        },
    ],
};
exports.wall = {
    PARENT: ["rock"],
    LABEL: "Wall",
    SIZE: 25,
    SHAPE: 4,
};
exports.redwall = {
    PARENT: ["wall"],
    COLOR: 12,
    BODY: {
        DAMAGE: 2,
    },
};
exports.blackwall = {
    PARENT: ["wall"],
    COLOR: 19,
    BODY: {
        KNOCKBACK_MULTIPLIER: 1.25,
    },
};
exports.whitewall = {
    PARENT: ["wall"],
    COLOR: 6,
    BODY: {
        KNOCKBACK_MULTIPLIER: 0.95,
    },
};
exports.fakewall = {
    PARENT: ["wall"],
    ALPHA: 0.9,
    COLOR: 76,
    BODY: {
        KNOCKBACK_MULTIPLIER: -1,
    },
};
exports.fourwaywall = {
    PARENT: ["wall"],
    COLOR: 17,
    BODY: {
        KNOCKBACK_MULTIPLIER: -1.25,
    },
};
// BOLT
exports.hexagonBolt = {
    PARENT: ["food"],
    LABEL: "Bolt",
    VALUE: 400,
    SHAPE: "M -1.1477 -0.6636 L -0.5744 -0.9885 L -0.0061 -1.3223 L 0.5621 -0.9885 L 1.1354 -0.6636 L 1.1303 -0.005 L 1.1354 0.6537 L 0.5621 0.9786 L -0.0061 1.3124 L -0.5744 0.9786 L -1.1477 0.6537 L -1.1426 -0.005 Z M 0.5 0 A 0.25 0.25 90 0 0 -0.5 0 A 0.25 0.25 90 0 0 0.5 0",
    SIZE: 21,
    COLOR: 76, //34
    BODY: {
        DAMAGE: 2.5,
        DENSITY: 10,
        HEALTH: 320,
        RESIST: 1.35,
        PENETRATION: 1,
        ACCELERATION: 0.015,
        KNOCKBACK_MULTIPLIER: 2,
        //STUN_MULTIPLIER: 1,
    },
    DRAW_HEALTH: true,
    GIVE_KILL_MESSAGE: true
};
exports.hexagonGear = {
    PARENT: ["food"],
    LABEL: "Gear",
    VALUE: 400,
    MOTION_TYPE: "swarm",
    CONTROLLERS: ["patrolNest"],
    SHAPE: "M -0.2438 1.2657 l 0 -0.1407 l -0.1102 0 l -0.1106 0 l -0.0746 -0.075 c -0.0914 -0.0918 -0.0754 -0.0938 -0.1875 0.0188 l -0.0933 0.0938 l -0.1716 -0.171 l -0.171 -0.1707 l 0.0984 -0.0988 l 0.0984 -0.0988 l -0.0796 -0.0792 l -0.0796 -0.0792 l 0 -0.1106 l 0 -0.1102 l -0.1407 0 l -0.1407 0 l 0 -0.2438 l 0 -0.2438 l 0.1407 0 l 0.1407 0 l 0 -0.1102 l 0 -0.1106 l 0.0796 -0.0792 l 0.0796 -0.0792 l -0.0984 -0.0988 l -0.0984 -0.0988 l 0.171 -0.1707 l 0.1716 -0.171 l 0.0933 0.0938 c 0.1121 0.1125 0.096 0.1106 0.1875 0.0188 l 0.0746 -0.075 l 0.1106 0 l 0.1102 0 l 0 -0.1407 l 0 -0.1407 l 0.2438 0 l 0.2438 0 l 0 0.1407 l 0 0.1407 l 0.1102 0 l 0.1106 0 l 0.0746 0.075 c 0.0914 0.0918 0.0754 0.0938 0.1875 -0.0188 l 0.0933 -0.0938 l 0.1716 0.171 l 0.171 0.1707 l -0.0938 0.0942 c -0.1121 0.1125 -0.1106 0.096 -0.0188 0.1875 l 0.075 0.0746 l 0 0.1106 l 0 0.1102 l 0.1407 0 l 0.1407 0 l 0 0.2438 l 0 0.2438 l -0.1407 0 l -0.1407 0 l 0 0.1102 l 0 0.1106 l -0.075 0.0746 c -0.0918 0.0914 -0.0938 0.0754 0.0188 0.1875 l 0.0938 0.0933 l -0.171 0.1716 l -0.1707 0.171 l -0.0942 -0.0938 c -0.1125 -0.1121 -0.096 -0.1106 -0.1875 -0.0188 l -0.0746 0.075 l -0.1106 0 l -0.1102 0 l 0 0.1407 l 0 0.1407 l -0.2438 0 l -0.2438 0 l 0 -0.1407 z m 0.3811 -0.8813 c 0.2371 -0.082 0.345 -0.375 0.2166 -0.5887 c -0.2166 -0.36 -0.7524 -0.2142 -0.7524 0.2049 c 0 0.2892 0.2639 0.478 0.5358 0.3839 z",
    SIZE: 23,
    COLOR: 76, //34
    BODY: {
        DAMAGE: 2.5,
        DENSITY: 10,
        HEALTH: 280,
        RESIST: 1.35,
        PENETRATION: 1,
        ACCELERATION: 0.15,
        SPEED: 3,
        KNOCKBACK_MULTIPLIER: 2,
        //STUN_MULTIPLIER: 1,
    },
    DRAW_HEALTH: true,
    GIVE_KILL_MESSAGE: true
};

// DOMINATORS
exports.dominationBody = {
    LABEL: "",
    CONTROLLERS: [["spin", { startAngle: Math.PI / 2, speed: 0, independent: true }]],
    COLOR: 9,
    SHAPE: 6,
    INDEPENDENT: true,
};
exports.dominator = {
    PARENT: ["genericTank"],
    LABEL: "Dominator",
    DANGER: 10,
    SKILL: skillSet({
        rld: 1,
        dam: 1,
        pen: 1,
        str: 1,
        spd: 1,
    }),
    LEVEL: -1,
    BODY: {
        RESIST: 100,
        SPEED: 1.32,
        ACCELERATION: 0.8,
        HEALTH: 590,
        DAMAGE: 6,
        PENETRATION: 0.25,
        FOV: 0.5,
        PUSHABILITY: 0,
        HETERO: 0,
        SHIELD: base.SHIELD * 1.4,
    },
    CONTROLLERS: ["nearestDifferentMaster"],
    DISPLAY_NAME: true,
    TURRETS: [
        {
            POSITION: [22, 0, 0, 0, 360, 0],
            TYPE: "dominationBody",
        },
    ],
    CAN_BE_ON_LEADERBOARD: false,
    GIVE_KILL_MESSAGE: false,
    ACCEPTS_SCORE: false,
    HITS_OWN_TYPE: "pushOnlyTeam",
};
exports.destroyerDominator = {
    PARENT: ["dominator"],
    GUNS: [
        {
            POSITION: [15.25, 6.75, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.destroyerDominator]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [5, 6.75, -1.6, 6.75, 0, 0, 0],
        },
    ],
};
exports.bulldozerDominator = {
    PARENT: ["dominator"],
    GUNS: [
        {
         POSITION: [ 5, 6.75, -0.8, 11.75, 0, 0, 0, ],
         }, {
         POSITION: [ 2.75, 6.75, 1, 16.75, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.destroyerDominator]),
            TYPE: "bullet",
         }, }, 
        {
            POSITION: [5, 6.75, 0.8, 6.75, 0, 0, 0],
        },
    ],
};
exports.gunnerDominator = {
    PARENT: ["dominator"],
    GUNS: [
        {
            POSITION: [14.25, 3, 1, 0, -2, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunnerDominator]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [14.25, 3, 1, 0, 2, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunnerDominator]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [15.85, 3, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunnerDominator]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [5, 8.5, -1.6, 6.25, 0, 0, 0],
        },
    ],
};
exports.sprayerDominator = {
    PARENT: ["dominator"],
    GUNS: [
        {
            POSITION: [24, 6, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sprayDominator, g.gunner, g.lowpower, g.morerecoil, ]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [22, 9, 1, 0, 0, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sprayDominator, g.gunner, g.lowpower, g.morerecoil, ]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [8.75, 10, 1.2, 11.25, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sprayDominator]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [5, 10, -1.6, 6.25, 0, 0, 0],
        },
    ],
};
exports.trapperDominator = {
    PARENT: ["dominator"],
    FACING_TYPE: "autospin",
    CONTROLLERS: ["alwaysFire"],
    GUNS: [
        {
            POSITION: [4, 3.75, 1, 8, 0, 0, 0],
        },
        {
            POSITION: [1.25, 3.75, 1.7, 12, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.trapperDominator]),
                TYPE: "trap",
            },
        },
        {
            POSITION: [4, 3.75, 1, 8, 0, 45, 0],
        },
        {
            POSITION: [1.25, 3.75, 1.7, 12, 0, 45, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.trapperDominator]),
                TYPE: "trap",
            },
        },
        {
            POSITION: [4, 3.75, 1, 8, 0, 90, 0],
        },
        {
            POSITION: [1.25, 3.75, 1.7, 12, 0, 90, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.trapperDominator]),
                TYPE: "trap",
            },
        },
        {
            POSITION: [4, 3.75, 1, 8, 0, 135, 0],
        },
        {
            POSITION: [1.25, 3.75, 1.7, 12, 0, 135, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.trapperDominator]),
                TYPE: "trap",
            },
        },
        {
            POSITION: [4, 3.75, 1, 8, 0, 180, 0],
        },
        {
            POSITION: [1.25, 3.75, 1.7, 12, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.trapperDominator]),
                TYPE: "trap",
            },
        },
        {
            POSITION: [4, 3.75, 1, 8, 0, 225, 0],
        },
        {
            POSITION: [1.25, 3.75, 1.7, 12, 0, 225, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.trapperDominator]),
                TYPE: "trap",
            },
        },
        {
            POSITION: [4, 3.75, 1, 8, 0, 270, 0],
        },
        {
            POSITION: [1.25, 3.75, 1.7, 12, 0, 270, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.trapperDominator]),
                TYPE: "trap",
            },
        },
        {
            POSITION: [4, 3.75, 1, 8, 0, 315, 0],
        },
        {
            POSITION: [1.25, 3.75, 1.7, 12, 0, 315, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.trapperDominator]),
                TYPE: "trap",
            },
        },
    ],
};

exports.sanctuaryTurret = {
    PARENT: ["genericTank"],
    LABEL: "Healer",
    CONTROLLERS: [["spin", { independent: true }]],
    TURRETS: [
        {
            /** SIZE     X       Y     ANGLE    ARC */
            POSITION: [13, 0, 0, 0, 360, 1],
            TYPE: "healerSymbol",
        },
    ],
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [8, 9, -0.5, 12.5, 0, 0, 0],
        },
        {
            POSITION: [18, 10, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.healer, {reload: 0.5, range: 0.2},]),
                TYPE: "healerBullet",
                AUTOFIRE: true,
            },
        },
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [8, 9, -0.5, 12.5, 0, 120, 0],
        },
        {
            POSITION: [18, 10, 1, 0, 0, 120, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.healer, {reload: 0.5, range: 0.2},]),
                TYPE: "healerBullet",
                AUTOFIRE: true,
            },
        },
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [8, 9, -0.5, 12.5, 0, -120, 0],
        },
        {
            POSITION: [18, 10, 1, 0, 0, -120, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.healer, {reload: 0.5, range: 0.2},]),
                TYPE: "healerBullet",
                AUTOFIRE: true,
            },
        },
    ],
};
exports.sanctuaryBase = {
    PARENT: ["trapperDominator"],
    IGNORED_BY_AI: false,
    TURRETS: [
        {
            POSITION: [22, 0, 0, 0, 360, 0],
            TYPE: "dominationBody",
        },
        {
            POSITION: [6, 0, 0, 0, 360, 1],
            TYPE: ["sanctuaryTurret", { INDEPENDENT: true }],
        },
    ],
};
/*
exports.sanctuaryBase = makeAuto(exports.trapperDominator, "Sanctuary", {
    type: exports.sanctuaryTurret,
    size: 6, controllers: [["spin", { independent: true }]],
});*/

exports.ikeBullet = {
    PARENT: ["homingBullet"],
    SHAPE: "M -1 -1 L -1 1 L 0 1 A 1 1 0 0 0 0 -1 L -1 -1",
    BODY: {
        PUSHABILITY: 0,
    },
    INDEPENDENT: false,
    DIE_AT_LOW_SPEED: true,
    HITS_OWN_TYPE: "never",
    ARENA_CLOSER: true,
};
exports.ikeBase = {
    PARENT: ["dominator"],
    LABEL: "IKE Turret",
    SIZE: 64,
    BODY: {
        SPEED: 0,
        FOV: 1.5,
        PUSHABILITY: 0,
        HEALTH: 1180,
        DAMAGE: 12,
        SHIELD: base.SHIELD * 2.8,
        REGEN: 10,
        //RAGE_MULTIPLIER: 25,
    },
    GUNS: [
        {
            POSITION: [18, 6.75, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [5, 6.75, -1.6, 6.75, 0, 0, 0],
        },
        {
            POSITION: [4.25, 8.25, 1, 17.25, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.iketurret]),
                TYPE: [ "ikeBullet", { LAYER: 12 } ],
            },
        },
    ],
};
// CRASHERS
exports.crasher = {
    TYPE: "crasher",
    LABEL: "Crasher",
    COLOR: 5,
    SHAPE: 3,
    SIZE: 5,
    VARIES_IN_SIZE: true,
    CONTROLLERS: ["nearestDifferentMaster", "mapTargetToGoal"], //["spin", { onlyWhenIdle: true }]
    AI: {
        NO_LEAD: true,
    },
    BODY: {
        SPEED: 5,
        ACCELERATION: 1.4,
        HEALTH: 0.5,
        DAMAGE: 5,
        PENETRATION: 2,
        PUSHABILITY: 0.5,
        DENSITY: 10,
        RESIST: 2,
    },
    MOTION_TYPE: "motor",
    FACING_TYPE: "smoothWithMotion",
    HITS_OWN_TYPE: "hard",
    HAS_NO_MASTER: true,
    DRAW_HEALTH: true,
};
exports.bladeCrasher = {
    TYPE: "crasher",
    LABEL: "Blade",
    COLOR: 2,
    SHAPE: "M 0.9375 1.125 L 1.6875 0 L 0.9375 -1.125 L -1.3125 -0.75 L -1.6875 0 L -1.3125 0.75 L 0.9375 1.125",
    SIZE: 7,
    VARIES_IN_SIZE: true,
    CONTROLLERS: ["nearestDifferentMaster", "mapTargetToGoal"], //["spin", { onlyWhenIdle: true }]
    AI: {
        NO_LEAD: true,
    },
    BODY: {
        SPEED: 4,
        ACCELERATION: 1.4,
        HEALTH: 2,
        DAMAGE: 2.5,
        PENETRATION: 2,
        PUSHABILITY: .5,
        DENSITY: 10,
        RESIST: 2
    },
    MOTION_TYPE: "motor",
    FACING_TYPE: "smoothWithMotion",
    HITS_OWN_TYPE: "hard",
    HAS_NO_MASTER: true,
    DRAW_HEALTH: true,
};
exports.invisoCrasher = {
    TYPE: "crasher",
    LABEL: "Phaser",
    COLOR: 0,
    SHAPE: "M -1 -1 L 1 0 L -1 1 L -0.5 0 Z",
    SIZE: 9,
    VARIES_IN_SIZE: true,
    CONTROLLERS: ["nearestDifferentMaster", "mapTargetToGoal"], //["spin", { onlyWhenIdle: true }]
    AI: {
        NO_LEAD: true,
    },
    VALUE: 8,
    INVISIBLE: [0.08, 0.03],
    BODY: {
        SPEED: 6.25,
        ACCELERATION: 1.4,
        HEALTH: 0.5,
        DAMAGE: 5,
        PENETRATION: 2,
        PUSHABILITY: 0.5,
        DENSITY: 10,
        RESIST: 2
    },
    MOTION_TYPE: "motor",
    FACING_TYPE: "smoothWithMotion",
    HITS_OWN_TYPE: "hard",
    HAS_NO_MASTER: true,
    DRAW_HEALTH: true,
};
exports.eggCrasher = {
    TYPE: "crasher",
    LABEL: "Runner",
    COLOR: 76,
    SHAPE: "M -0.7071 0.7071 L 0 0 L -0.7071 -0.7071 C -0.3536 -1.0607 0.3536 -1.0607 0.7071 -0.7071 C 1.0607 -0.3536 1.0607 0.3536 0.7071 0.7071 C 0.3536 1.0607 -0.3536 1.0607 -0.7071 0.7071",
    SIZE: 7,
    VARIES_IN_SIZE: true,
    CONTROLLERS: ["nearestDifferentMaster", "mapTargetToGoal"], //["spin", { onlyWhenIdle: true }]
    AI: {
        NO_LEAD: true,
    },
    BODY: {
        SPEED: 6,
        ACCELERATION: 1.4,
        HEALTH: 0.5,
        DAMAGE: 2.5,
        PENETRATION: 2,
        PUSHABILITY: 0.5,
        DENSITY: 10,
        RESIST: 2,
    },
    MOTION_TYPE: "motor",
    FACING_TYPE: "smoothWithMotion",
    HITS_OWN_TYPE: "hard",
    HAS_NO_MASTER: true,
    DRAW_HEALTH: true,
};

exports.crasherSpawner = {
    PARENT: ["genericTank"],
    LABEL: "Spawned",
    STAT_NAMES: statnames.drone,
    CONTROLLERS: ["nearestDifferentMaster"],
    COLOR: 5,
    INDEPENDENT: true,
    AI: {
        chase: true,
    },
    MAX_CHILDREN: 4,
    GUNS: [
        {
            POSITION: [6, 12, 1.2, 8, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.weak, g.weak]),
                TYPE: [
                    "drone",
                    {
                        LABEL: "Crasher",
                        VARIES_IN_SIZE: true,
                        DRAW_HEALTH: true,
                    },
                ],
                SYNCS_SKILLS: true,
                AUTOFIRE: true,
                STAT_CALCULATOR: gunCalcNames.drone,
            },
        },
    ],
};
// SENTRIES
exports.sentry = {
    PARENT: ["genericTank"],
    TYPE: "crasher",
    LABEL: "Sentry",
    DANGER: 3,
    COLOR: 5,
    SHAPE: 3,
    SIZE: 10,
    SKILL: skillSet({
        rld: 0.5,
        dam: 0.8,
        pen: 0.8,
        str: 0.1,
        spd: 1,
        atk: 0.5,
        hlt: 0,
        shi: 0,
        rgn: 0.7,
        mob: 0,
    }),
    VALUE: 1500,
    VARIES_IN_SIZE: true,
    CONTROLLERS: ["nearestDifferentMaster", "mapTargetToGoal"],
    AI: {
        NO_LEAD: true,
    },
    BODY: {
        FOV: 0.5,
        ACCELERATION: 0.75,
        DAMAGE: base.DAMAGE,
        SPEED: 0.5 * base.SPEED,
        HEALTH: 0.3 * base.HEALTH,
    },
    MOTION_TYPE: "motor",
    FACING_TYPE: "smoothToTarget",
    HITS_OWN_TYPE: "hard",
    HAS_NO_MASTER: true,
    DRAW_HEALTH: true,
    GIVE_KILL_MESSAGE: true,
};

let makeshottrapTurretProps = () => ({
    SHOOT_SETTINGS: combineStats([g.trap, g.weak, g.lowpower, g.shotgun, g.acc, g.mach]),
    AUTOFIRE: true,
    TYPE: "trap"
});
exports.shottrapTurret = {
    PARENT: ["genericTank"],
    LABEL: 'Turret',
    BODY: {
        FOV: 0,
    },
    INDEPENDENT: true,
    CONTROLLERS: ['nearestDifferentMaster', 'onlyAcceptInArc'], 
    COLOR: 16,
    AI: {
        SKYNET: true,
        FULL_VIEW: true,
    },
    GUNS: [ {
            POSITION: [ 4, 3, 1, 11, -3, 0, 0 ], PROPERTIES: makeshottrapTurretProps(),
    }, {
            POSITION: [ 4, 3, 1, 11,  3, 0, 0 ], PROPERTIES: makeshottrapTurretProps(),
    }, {
            POSITION: [ 4, 3, 1, 13,  0, 0, 0 ], PROPERTIES: makeshottrapTurretProps(),
    }, {
            POSITION: [ 1, 3, 1, 11,  1, 0, 0 ], PROPERTIES: makeshottrapTurretProps(),
    }, {
            POSITION: [ 1, 3, 1, 12, -1, 0, 0 ], PROPERTIES: makeshottrapTurretProps(),
    }, {
            POSITION: [ 1, 3, 1, 11,  1, 0, 0 ], PROPERTIES: makeshottrapTurretProps(),
    }, {
            POSITION: [ 1, 3, 1, 13, -1, 0, 0 ], PROPERTIES: makeshottrapTurretProps(),
    }, {
            POSITION: [ 1, 3, 1, 13,  1, 0, 0 ], PROPERTIES: makeshottrapTurretProps(),
    }, {
            POSITION: [ 1, 3, 1, 13,  2, 0, 0 ], PROPERTIES: makeshottrapTurretProps(),
    }, {
            POSITION: [ 1, 3, 1, 13, -2, 0, 0 ], PROPERTIES: makeshottrapTurretProps(),
    }, {
            POSITION: [ 1, 3, 1, 13, -2, 0, 0 ], PROPERTIES: makeshottrapTurretProps(),
    }, {
            POSITION: [ 1, 3, 1, 13,  2, 0, 0 ], PROPERTIES: makeshottrapTurretProps(),
    }, {
            POSITION: [ 1, 3, 1, 13, -2, 0, 0 ], PROPERTIES: makeshottrapTurretProps(),
    }, {
            POSITION: [ 16, 14,  1  ,  0, 0, 0, 0 ]
    }, {
            POSITION: [  4, 14,  1.8, 16, 0, 0, 0 ],
    }, {
            POSITION: [  8, 16, -1.1,  4, 0, 0, 0 ], 
    } ]
};
exports.barricadeTurret = {
    PARENT: ["genericTank"],
    LABEL: "Turret",
    BODY: {
        FOV: 0.5,
    },
    INDEPENDENT: true,
    CONTROLLERS: ["nearestDifferentMaster"],
    COLOR: 16,
    AI: {
        SKYNET: true,
        FULL_VIEW: true,
    },
    GUNS: [
        {
            POSITION: [24, 8, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [4, 8, 1.3, 22, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.mini, g.halfrange]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
        {
            POSITION: [4, 8, 1.3, 18, 0, 0, 0.333],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.mini, g.halfrange]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
        {
            POSITION: [4, 8, 1.3, 14, 0, 0, 0.667],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.mini, g.halfrange]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
    ],
};

exports.sentrySwarm = {
    PARENT: ["sentry"],
    GUNS: [
        {
            POSITION: [7, 14, 0.6, 7, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.morerecoil]),
                TYPE: "swarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
    ],
};
exports.sentryGun = makeAuto(exports.sentry, "Sentry", {
    type: exports.megaAutoTankgun,
    size: 12,
});
exports.sentryTrap = makeAuto(exports.sentry, "Sentry", {
    type: exports.trapTurret,
    size: 12,
});

exports.shinySentry = {
    PARENT: ["sentry"],
    COLOR: 1,
    DANGER: 4,
    SIZE: 12,
    VALUE: 50000,
    BODY: {
        HEALTH: 0.6 * base.HEALTH
    },
};
exports.shinySentrySwarm = {
    PARENT: ["shinySentry"],
    GUNS: [
        {
            POSITION: [6, 11, 1.3, 7, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.morerecoil]),
                TYPE: "swarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
    ],
};
exports.shinySentryGun = makeAuto(exports.shinySentry, "Sentry", {
    type: exports.artilleryAutoTankgun,
    size: 12,
});
exports.shinySentryTrap = makeAuto(exports.shinySentry, "Sentry", {
    type: exports.barricadeTurret,
    size: 12,
});

exports.squareSentry = {
    PARENT: ["genericTank"],
    TYPE: "crasher",
    LABEL: "Sentry",
    DANGER: 3,
    SHAPE: 4,
    COLOR: 13,
    SIZE: 12,
    SKILL: skillSet({
        rld: 0.5,
        dam: 0.8,
        pen: 0.8,
        str: 0.1,
        spd: 1,
        atk: 0.5,
        hlt: 0,
        shi: 0,
        rgn: 0.7,
        mob: 0,
    }),
    VALUE: 1500,
    VARIES_IN_SIZE: true,
    CONTROLLERS: ["nearestDifferentMaster", "mapTargetToGoal"],
    AI: {
        NO_LEAD: true,
    },
    BODY: {
        FOV: 0.5,
        ACCELERATION: 0.75,
        DAMAGE: base.DAMAGE,
        SPEED: 0.5 * base.SPEED,
        HEALTH: 0.3 * base.HEALTH,
    },
    MOTION_TYPE: "motor",
    FACING_TYPE: "smoothToTarget",
    HITS_OWN_TYPE: "hard",
    HAS_NO_MASTER: true,
    DRAW_HEALTH: true,
    GIVE_KILL_MESSAGE: true,
};
exports.squareGunSentry = {
    PARENT: ["squareSentry"],
    LABEL: 'Squatter Lite',
    SHAPE: 4,
    COLOR: 13,
    FACING_TYPE: 'autospin',
    SIZE: 12,
    GUNS: [],
    TURRETS: [{
        POSITION: [11, 8, 0, 0, 190, 0],
        TYPE: "single3gun"
    }, {
        POSITION: [11, 8, 0, 90, 190, 0],
        TYPE: "single3gun"
    }, {
        POSITION: [11, 8, 0, 180, 190, 0],
        TYPE: "single3gun"
    }, {
        POSITION: [11, 8, 0, 270, 190, 0],
        TYPE: "single3gun"
    }]
};
exports.squareSwarmSentry = {
    PARENT: ["squareSentry"],
    LABEL: 'Summoner Lite',
    GUNS: [ {
            POSITION: [6, 16, 0.6, 7, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.sunchip, g.halfrecoil, g.lessreload]),
                TYPE: "bee",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        }, {
            POSITION: [6, 16, 0.6, 7, 0, 90, 0.25],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.sunchip, g.halfrecoil, g.lessreload]),
                TYPE: "bee",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        }, {
            POSITION: [6, 16, 0.6, 7, 0, 180, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.sunchip, g.halfrecoil, g.lessreload]),
                TYPE: "bee",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        }, {
            POSITION: [6, 16, 0.6, 7, 0, 270, 0.75],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.sunchip, g.halfrecoil, g.lessreload]),
                TYPE: "bee",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },],
    TURRETS: [],
};
exports.triangleGunSentry = {
    PARENT: ["sentry"],
    LABEL: 'Wrangler Lite',
    COLOR: 2,
    FACING_TYPE: 'autospin',
    SIZE: 12,
    GUNS: [],
    TURRETS: [{
        POSITION: [11, 8, 0, 60, 190, 0],
        TYPE: "single3gun"
    }, {
        POSITION: [11, 8, 0, 180, 190, 0],
        TYPE: "single3gun"
    }, {
        POSITION: [11, 8, 0, 300, 190, 0],
        TYPE: "single3gun"
    }, {
        POSITION: [11, 0, 0, 0, 360, 1],
        TYPE: "single3gun"
    }]
};

// MISC SENTRIES
exports.autoBobTurret = {
    PARENT: ["genericTank"],
    LABEL: "Turret",
    BODY: {
        FOV: 2 * base.FOV,
    },
    INDEPENDENT: true,
    CONTROLLERS: [ "canRepel", "onlyAcceptInArc", "mapAltToFire", "nearestDifferentMaster",],
    GUNS: [
        {
            POSITION: [24, 8, 1, 0, 4.75, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.power, g.turret, g.mach, g.pound, g.morereload, g.morereload]),
                TYPE: "bullet",
                STAT_CALCULATOR: gunCalcNames.fixedReload,
            },
        },
        {
            POSITION: [24, 8, 1, 0, -4.75, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.power, g.turret, g.mach, g.pound, g.morereload, g.morereload]),
                TYPE: "bullet",
                STAT_CALCULATOR: gunCalcNames.fixedReload,
            },
        },
        {
            POSITION: [12, 18, 1, 0, 0, 0, 0],
        },
    ],
};
exports.armyBobSentry = {
    PARENT: ["sentry"],
    LABEL: 'Sam',
    SHAPE: 0,
    COLOR: 1,
    SIZE: 12,
    BODY: {
        FOV: 2,
        ACCELERATION: 1,
        DAMAGE: 1.5 * base.DAMAGE,
        SPEED: 2 * base.SPEED,
        HEALTH: 2 * base.HEALTH,
        DENSITY: 6 * base.DENSITY,
        REGEN: 4 * base.REGEN,
    },
    FACING_TYPE: 'toTarget',
    TURRETS: [
        {
            POSITION: [21.5, 0, 0, 0, 360, 0],
            TYPE: "smasherBody",
        },
        {
            POSITION: [21.5, 0, 0, 30, 360, 0],
            TYPE: "landmineBody",
        },
        {
            POSITION: [22.5, 0, 0, 0, 360, 0],
            TYPE: "drifterBody",
        },
    ],

};
exports.bobSentry = {
    PARENT: ["sentry"],
    LABEL: 'Bob',
    SHAPE: 0,
    COLOR: 0,
    SIZE: 16,
    BODY: {
        FOV: 2,
        ACCELERATION: 1,
        DAMAGE: 2 * base.DAMAGE,
        SPEED: 1.8 * base.SPEED,
        HEALTH: 5 * base.HEALTH,
        DENSITY: 6 * base.DENSITY,
        REGEN: 4 * base.REGEN,
    },
    TURRETS: [
        {
            POSITION: [21.5, 0, 0, 0, 360, 0],
            TYPE: "smasherBody",
        },
        {
            POSITION: [21.5, 0, 0, 30, 360, 0],
            TYPE: "landmineBody",
        },
        {
            POSITION: [23.75, 0, 0, 0, 360, 0],
            TYPE: "weirdSpikeBody1",
        },
    ],
};
exports.autoBobSentry = {
    PARENT: ["sentry"],
    LABEL: 'Mort',
    SHAPE: 0,
    COLOR: 2,
    SIZE: 16,
    BODY: {
        FOV: 2,
        ACCELERATION: 0.75,
        DAMAGE: 1.5 * base.DAMAGE,
        SPEED: 1.8 * base.SPEED,
        HEALTH: 5 * base.HEALTH,
        DENSITY: 6 * base.DENSITY,
        REGEN: 4 * base.REGEN,
    },
    TURRETS: [
        {
            POSITION: [21.5, 0, 0, 0, 360, 0],
            TYPE: "smasherBody",
        },
        {
            POSITION: [21.5, 0, 0, 30, 360, 0],
            TYPE: "landmineBody",
        },
        {
            POSITION: [22.5, 0, 0, 0, 360, 0],
            TYPE: "drifterBody",
        },
        {
            POSITION: [9, 0, 0, 0, 360, 1],
            TYPE: "autoBobTurret",
        },
    ],

};
// MISCELLANEOUS TANKS
exports.baseGunnerTurret = {
    PARENT: ["genericTank"],
    LABEL: "Protector",
    COLOR: 16,
    BODY: {
        FOV: 2,
    },
    CONTROLLERS: ["nearestDifferentMaster"],
    AI: {
        NO_LEAD: true,
        LIKES_SHAPES: true,
    },
    INDEPENDENT: true,
    GUNS: [
        {
            POSITION: [5, 4.5, 1, 7, 2, 0, 0.15],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.protectorgunner]),
                TYPE: "bullet",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [5, 4.5, 1, 7, -2, 0, 0.15],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.protectorgunner]),
                TYPE: "bullet",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [5, 4.5, 1, 7.5, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.protectorgunner]),
                TYPE: "bullet",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
    ],
};
exports.baseSwarmTurret = {
    PARENT: ["genericTank"],
    LABEL: "Protector",
    COLOR: 16,
    BODY: {
        FOV: 2,
    },
    CONTROLLERS: ["nearestDifferentMaster"],
    AI: {
        NO_LEAD: true,
        LIKES_SHAPES: true,
    },
    INDEPENDENT: true,
    GUNS: [
        {
            POSITION: [5, 4.5, 0.6, 7, 2, 0, 0.15],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.protectorswarm]),
                TYPE: "swarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [5, 4.5, 0.6, 7, -2, 0, 0.15],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.protectorswarm]),
                TYPE: "swarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [5, 4.5, 0.6, 7.5, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.protectorswarm]),
                TYPE: ["swarm", { INDEPENDENT: true, AI: { LIKES_SHAPES: true }}],
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
    ],
};
exports.baseProtector = {
    PARENT: ["genericTank"],
    LABEL: "Base",
    LEVEL: -1,
    SIZE: 64,
    DAMAGE_CLASS: 0,
    ACCEPTS_SCORE: false,
    CAN_BE_ON_LEADERBOARD: false,
    IGNORED_BY_AI: true,
    SKILL: skillSet({
        rld: 1,
        dam: 1,
        pen: 1,
        spd: 1,
        str: 1,
    }),
    BODY: {
        SPEED: 0,
        HEALTH: 1e4,
        DAMAGE: 10,
        PENETRATION: 0.25,
        SHIELD: 1e3,
        REGEN: 100,
        FOV: 1,
        PUSHABILITY: 0,
        RESIST: 10000,
        HETERO: 0,
    },
    FACING_TYPE: "autospin",
    TURRETS: [
        {
            POSITION: [25, 0, 0, 0, 360, 0],
            TYPE: "dominationBody",
        },
        {
            POSITION: [12, 7, 0, 45, 100, 0],
            TYPE: "baseSwarmTurret",
        },
        {
            POSITION: [12, 7, 0, 135, 100, 0],
            TYPE: "baseSwarmTurret",
        },
        {
            POSITION: [12, 7, 0, 225, 100, 0],
            TYPE: "baseSwarmTurret",
        },
        {
            POSITION: [12, 7, 0, 315, 100, 0],
            TYPE: "baseSwarmTurret",
        },
    ],
    GUNS: [
        {
            POSITION: [4.5, 11.5, -1.3, 6, 0, 45, 0],
        },
        {
            POSITION: [4.5, 11.5, -1.3, 6, 0, 135, 0],
        },
        {
            POSITION: [4.5, 11.5, -1.3, 6, 0, 225, 0],
        },
        {
            POSITION: [4.5, 11.5, -1.3, 6, 0, 315, 0],
        },
        {
            POSITION: [4.5, 8.5, -1.5, 7, 0, 45, 0],
        },
        {
            POSITION: [4.5, 8.5, -1.5, 7, 0, 135, 0],
        },
        {
            POSITION: [4.5, 8.5, -1.5, 7, 0, 225, 0],
        },
        {
            POSITION: [4.5, 8.5, -1.5, 7, 0, 315, 0],
        },
    ],
    HITS_OWN_TYPE: "pushOnlyTeam",
};
exports.baseProtectorGunner = {
    PARENT: ["genericTank"],
    LABEL: "Base",
    LEVEL: -1,
    SIZE: 64,
    DAMAGE_CLASS: 0,
    ACCEPTS_SCORE: false,
    CAN_BE_ON_LEADERBOARD: false,
    IGNORED_BY_AI: true,
    SKILL: skillSet({
        rld: 1,
        dam: 1,
        pen: 1,
        spd: 1,
        str: 1,
    }),
    BODY: {
        SPEED: 0,
        HEALTH: 1e4,
        DAMAGE: 10,
        PENETRATION: 0.25,
        SHIELD: 1e3,
        REGEN: 100,
        FOV: 1,
        PUSHABILITY: 0,
        RESIST: 10000,
        HETERO: 0,
    },
    FACING_TYPE: "autospin",
    TURRETS: [
        {
            POSITION: [25, 0, 0, 0, 360, 0],
            TYPE: "dominationBody",
        },
        {
            POSITION: [12, 7, 0, 45, 100, 0],
            TYPE: "baseGunnerTurret",
        },
        {
            POSITION: [12, 7, 0, 135, 100, 0],
            TYPE: "baseGunnerTurret",
        },
        {
            POSITION: [12, 7, 0, 225, 100, 0],
            TYPE: "baseGunnerTurret",
        },
        {
            POSITION: [12, 7, 0, 315, 100, 0],
            TYPE: "baseGunnerTurret",
        },
    ],
    GUNS: [
        {
            POSITION: [4.5, 11.5, -1.3, 6, 0, 45, 0],
        },
        {
            POSITION: [4.5, 11.5, -1.3, 6, 0, 135, 0],
        },
        {
            POSITION: [4.5, 11.5, -1.3, 6, 0, 225, 0],
        },
        {
            POSITION: [4.5, 11.5, -1.3, 6, 0, 315, 0],
        },
        {
            POSITION: [4.5, 8.5, -1.5, 7, 0, 45, 0],
        },
        {
            POSITION: [4.5, 8.5, -1.5, 7, 0, 135, 0],
        },
        {
            POSITION: [4.5, 8.5, -1.5, 7, 0, 225, 0],
        },
        {
            POSITION: [4.5, 8.5, -1.5, 7, 0, 315, 0],
        },
    ],
    HITS_OWN_TYPE: "pushOnlyTeam",
};
exports.mothership = {
    PARENT: ["genericTank"],
    LABEL: "Mothership",
    DANGER: 10,
    SIZE: genericTank.SIZE * (7 / 3),
    SHAPE: 16,
    STAT_NAMES: statnames.drone,
    VALUE: 5e5,
    SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    BODY: {
        REGEN: 0,
        FOV: 1,
        SHIELD: 0,
        ACCEL: 0.2,
        SPEED: 0.3,
        HEALTH: 2000,
        PUSHABILITY: 0.15,
        DENSITY: 0.2,
        DAMAGE: 1.5,
    },
    HITS_OWN_TYPE: "pushOnlyTeam",
    GUNS: (() => {
        let e = [],
            T = [1];
        for (let e = 1; e < 8.5; e += 0.5) {
            let t = e / 16;
            T.push(t);
        }
        for (let t = 0; t < 16; t++) {
            let S = 22.5 * (t + 1),
                E = {
                    MAX_CHILDREN: 2,
                    SHOOT_SETTINGS: combineStats([g.drone, g.over, g.mothership]),
                    TYPE: "drone",
                    AUTOFIRE: true,
                    SYNCS_SKILLS: true,
                    STAT_CALCULATOR: gunCalcNames.drone,
                    WAIT_TO_CYCLE: true,
                };
            t % 2 == 0 &&
                (E.TYPE = [
                    "drone",
                    {
                        AI: {
                            skynet: true,
                        },
                        INDEPENDENT: true,
                        LAYER: 10,
                        BODY: {
                            FOV: 2,
                        },
                    },
                ]);
            let O = {
                POSITION: [4.3, 3.1, 1.2, 8, 0, S, T[t]],
                PROPERTIES: E,
            };
            e.push(O);
        }
        return e;
    })(),
};
exports.arenaCloserBody = {
    PARENT: ["genericTank"],
    LABEL: "Arena Closer",
    NAME: "Arena Closer",
    DANGER: 10,
    SIZE: 34,
    COLOR: 3,
    LAYER: 13,
    BODY: {
        REGEN: 1e5,
        HEALTH: 1e6,
        DENSITY: 30,
        DAMAGE: 1e5,
        FOV: 10,
        SPEED: 8,
    },
    SKILL: skillSet({ rld: 1, dam: 1, pen: 1, str: 1, spd: 1, atk: 1, hlt: 1, shi: 1, rgn: 1, mob: 1 }),
    DRAW_HEALTH: false,
    HITS_OWN_TYPE: "never",
    ARENA_CLOSER: true,/*
    GUNS: [{
        POSITION: [14, 10, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.closer]),
            TYPE: [ "bullet", { LAYER: 12 } ]
        }
    }]*/
};
exports.arenaCloser = {
    PARENT: ["genericTank"],
    LABEL: "Arena Closer",
    NAME: "Arena Closer",
    DANGER: 10,
    SIZE: 34,
    COLOR: 3,
    LAYER: 13,
    BODY: {
        REGEN: 1e5,
        HEALTH: 1e6,
        DENSITY: 30,
        DAMAGE: 1e5,
        FOV: 10,
        SPEED: 8,
    },
    SKILL: skillSet({ rld: 1, dam: 1, pen: 1, str: 1, spd: 1, atk: 1, hlt: 1, shi: 1, rgn: 1, mob: 1 }),
    DRAW_HEALTH: false,
    HITS_OWN_TYPE: "never",
    ARENA_CLOSER: true,
    GUNS: [{
        POSITION: [14, 10, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.closer]),
            TYPE: [ "bullet", { LAYER: 12 } ]
        }
    }]
};
exports.twinArenaCloser = {
    PARENT: ["arenaCloserBody"],
    LABEL: "Twin Closer",
    GUNS: [{
        POSITION: [16, 9, 1, 0, 5.5, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.closer]),
            TYPE: [ "bullet", { LAYER: 12 } ]
        }, }, {
        POSITION: [16, 9, 1, 0, -5.5, 0, 0.5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.closer]),
            TYPE: [ "bullet", { LAYER: 12 } ]
        },
    }]
};
exports.sniperArenaCloser = {
    PARENT: ["arenaCloserBody"],
    LABEL: "Sniper Closer",
    GUNS: [{
        POSITION: [20, 10, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.closer]),
            TYPE: [ "bullet", { LAYER: 12 } ]
        }
    }]
};
exports.machArenaCloser = {
    PARENT: ["arenaCloserBody"],
    LABEL: "Machine Closer",
    GUNS: [{
        POSITION: [10, 10, 1.4, 8, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.closer]),
            TYPE: [ "bullet", { LAYER: 12 } ]
        }
    }]
};
exports.flankArenaCloser = {
    PARENT: ["arenaCloserBody"],
    LABEL: "Flank Closer",
    GUNS: [{
        POSITION: [14, 10, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.closer]),
            TYPE: [ "bullet", { LAYER: 12 } ]
        }, }, {
        POSITION: [14, 10, 1, 0, 0, 120, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.closer]),
            TYPE: [ "bullet", { LAYER: 12 } ]
        }, }, {
        POSITION: [14, 10, 1, 0, 0, 240, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.closer]),
            TYPE: [ "bullet", { LAYER: 12 } ]
        }, 
    }]
};
exports.directorArenaCloser = {
    PARENT: ["arenaCloserBody"],
    LABEL: "Director Closer",
    GUNS: [{
        POSITION: [9, 13, 1.3, 7, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.closer]),
            TYPE: [ "drone", { LAYER: 12 } ],
            MAX_CHILDREN: 6,
        }
    }]
};
exports.smasherArenaCloser = {
    PARENT: ["arenaCloserBody"],
    LABEL: "Smasher Closer",
    BODY: {
        SPEED: 16,
    },
    TURRETS: [
        {
            POSITION: [21.5, 0, 0, 0, 360, 0],
            TYPE: "smasherBody",
        },
    ],
};
// DIRECTOR CLOSER UPGRADES
exports.cruiserArenaCloser = {
    PARENT: ["arenaCloserBody"],
    LABEL: "Cruiser Closer",
    GUNS: [{
        POSITION: [7, 9, 0.6, 5, 4.5, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.closer]),
            TYPE: [ "swarm", { LAYER: 12 } ]
        }, }, {
        POSITION: [7, 9, 0.6, 5, -4.5, 0, 0.5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.closer]),
            TYPE: [ "swarm", { LAYER: 12 } ]
        },
    }]
};
exports.antiTankMachineGunArm = {
    PARENT: ["genericTank"],
    CONTROLLERS: ["mapTargetToGoal"],
    SKILL_CAP: Array(10).fill(255),
    SKILL: Array(10).fill(255),
    GUNS: [
        {
            POSITION: [14.25, 3, 1, 0, -2, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.op, {recoil: 0, spray: 0.1}]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [14.25, 3, 1, 0, 2, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.op, {recoil: 0, spray: 0.1}]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [15.85, 3, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.op, {recoil: 0, spray: 0.1}]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [5, 8.5, -1.6, 6.25, 0, 0, 0],
        },
    ],
}
exports.antiTankMachineGun = {
    PARENT: ["dominator"],
    LABEL: "Anti Tank Machine Gun",
    CONTROLLERS: [['spin', {onlyWhenIdle: true}], 'nearestDifferentMaster'],
    LEVEL: 45,
    BODY: {
        RESIST: 100,
        SPEED: 1.32,
        ACCELERATION: 0.8,
        HEALTH: 1e99,
        DAMAGE: 6,
        PENETRATION: 0.25,
        FOV: 0.35,
        PUSHABILITY: 0,
        HETERO: 0,
        SHIELD: base.SHIELD * 1.4,
    },
    SKILL_CAP: Array(10).fill(255),
    SKILL: Array(10).fill(255),
    GUNS: [
        {
            POSITION: [18, 12, 0.8, 0, 0, 90, 0],
        },
        {
            POSITION: [18, 12, 0.8, 0, 0, 270, 0],
        },
        {
            POSITION: [14.25, 3, 1, 0, -2, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.op, {recoil: 0, spray: 0.1}]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [14.25, 3, 1, 0, 2, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.op, {recoil: 0, spray: 0.1}]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [15.85, 3, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.op, {recoil: 0, spray: 0.1}]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [5, 8.5, -1.6, 6.25, 0, 0, 0],
        },
    ],
    TURRETS: [{
        POSITION: [20, 0, 25, 0, 180, 1],
        TYPE: ["antiTankMachineGunArm"]
    }, {
        POSITION: [20, 0, -25, 0, 180, 1],
        TYPE: ["antiTankMachineGunArm"]
    }, {
        POSITION: [22, 0, 0, 0, 360, 0],
        TYPE: ["dominationBody"]
    }]
}

// OLD TANKS
exports.oldSpreadshot = {
    PARENT: ["genericTank"],
    LABEL: "Old Spreadshot",
    DANGER: 7,
    GUNS: [
        {
            POSITION: [13, 4, 1, 0, -0.8, -75, 5 / 6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.gunner,
                    g.arty,
                    g.twin,
                    g.spread,
                ]),
                TYPE: "bullet",
                LABEL: "Spread",
            },
        },
        {
            POSITION: [14.5, 4, 1, 0, -1.0, -60, 4 / 6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.gunner,
                    g.arty,
                    g.twin,
                    g.spread,
                ]),
                TYPE: "bullet",
                LABEL: "Spread",
            },
        },
        {
            POSITION: [16, 4, 1, 0, -1.6, -45, 3 / 6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.gunner,
                    g.arty,
                    g.twin,
                    g.spread,
                ]),
                TYPE: "bullet",
                LABEL: "Spread",
            },
        },
        {
            POSITION: [17.5, 4, 1, 0, -2.4, -30, 2 / 6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.gunner,
                    g.arty,
                    g.twin,
                    g.spread,
                ]),
                TYPE: "bullet",
                LABEL: "Spread",
            },
        },
        {
            POSITION: [19, 4, 1, 0, -3.0, -15, 1 / 6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.gunner,
                    g.arty,
                    g.twin,
                    g.spread,
                ]),
                TYPE: "bullet",
                LABEL: "Spread",
            },
        },
        {
            POSITION: [13, 4, 1, 0, 0.8, 75, 5 / 6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.gunner,
                    g.arty,
                    g.twin,
                    g.spread,
                ]),
                TYPE: "bullet",
                LABEL: "Spread",
            },
        },
        {
            POSITION: [14.5, 4, 1, 0, 1.0, 60, 4 / 6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.gunner,
                    g.arty,
                    g.twin,
                    g.spread,
                ]),
                TYPE: "bullet",
                LABEL: "Spread",
            },
        },
        {
            POSITION: [16, 4, 1, 0, 1.6, 45, 3 / 6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.gunner,
                    g.arty,
                    g.twin,
                    g.spread,
                ]),
                TYPE: "bullet",
                LABEL: "Spread",
            },
        },
        {
            POSITION: [17.5, 4, 1, 0, 2.4, 30, 2 / 6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.gunner,
                    g.arty,
                    g.twin,
                    g.spread,
                ]),
                TYPE: "bullet",
                LABEL: "Spread",
            },
        },
        {
            POSITION: [19, 4, 1, 0, 3.0, 15, 1 / 6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.gunner,
                    g.arty,
                    g.twin,
                    g.spread,
                ]),
                TYPE: "bullet",
                LABEL: "Spread",
            },
        },
        {
            POSITION: [13, 10, 1.3, 8, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.pound,
                    g.spreadmain,
                    g.spread,
                ]),
                TYPE: "bullet",
                LABEL: "Pounder",
            },
        },
    ],
};
exports.oldBentBoomer = {
    PARENT: ["genericTank"],
    DANGER: 7,
    LABEL: "Old Bent Boomer",
    STAT_NAMES: statnames.trap,
    BODY: {
        SPEED: 0.8 * base.SPEED,
        FOV: 1.15 * base.FOV,
    },
    GUNS: [
        {
            POSITION: [8, 10, 1, 8, -2, -35, 0],
        },
        {
            POSITION: [8, 10, 1, 8, 2, 35, 0],
        },
        {
            POSITION: [2, 10, 1.3, 16, -2, -35, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.block, g.fast, g.twin]),
                TYPE: "boomerang",
            },
        },
        {
            POSITION: [2, 10, 1.3, 16, 2, 35, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.block, g.fast, g.twin]),
                TYPE: "boomerang",
            },
        },
    ],
};
exports.quadBuilder = {
    PARENT: ["genericTank"],
    DANGER: 7,
    LABEL: "Quad Builder",
    STAT_NAMES: statnames.trap,
    BODY: {
        SPEED: 0.8 * base.SPEED,
        FOV: 1.15 * base.FOV,
    },
    GUNS: [
        {
            POSITION: [14, 6, 1, 0, 0, 45, 0],
        },
        {
            POSITION: [2, 6, 1.1, 14, 0, 45, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.block, g.weak]),
                TYPE: "setTrap",
            },
        },
        {
            POSITION: [14, 6, 1, 0, 0, 135, 0],
        },
        {
            POSITION: [2, 6, 1.1, 14, 0, 135, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.block, g.weak]),
                TYPE: "setTrap",
            },
        },
        {
            POSITION: [14, 6, 1, 0, 0, 225, 0],
        },
        {
            POSITION: [2, 6, 1.1, 14, 0, 225, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.block, g.weak]),
                TYPE: "setTrap",
            },
        },
        {
            POSITION: [14, 6, 1, 0, 0, 315, 0],
        },
        {
            POSITION: [2, 6, 1.1, 14, 0, 315, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.block, g.weak]),
                TYPE: "setTrap",
            },
        },
    ],
};
exports.weirdSpike = {
    PARENT: ["genericTank"],
    LABEL: "Weird Spike",
    DANGER: 7,
    BODY: {
        DAMAGE: 1.15 * base.DAMAGE,
        FOV: 1.05 * base.FOV,
        DENSITY: 1.5 * base.DENSITY,
    },
    IS_SMASHER: true,
    SKILL_CAP: [smshskl, 0, 0, 0, 0, smshskl, smshskl, smshskl, smshskl, smshskl],
    STAT_NAMES: statnames.smasher,
    TURRETS: [
        {
            POSITION: [20.5, 0, 0, 0, 360, 0],
            TYPE: "weirdSpikeBody1",
        },
        {
            POSITION: [20.5, 0, 0, 180, 360, 0],
            TYPE: "weirdSpikeBody2",
        },
    ],
};
exports.master = {
    PARENT: ["genericTank"],
    LABEL: "Master",
    STAT_NAMES: statnames.drone,
    BODY: {
        HEALTH: base.HEALTH * 0.4,
        SHIELD: base.SHIELD * 0.4,
        DENSITY: base.DENSITY * 0.3,
    },
    MAX_CHILDREN: 6,
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [18, 16, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic]),
                TYPE: "masterBullet",
            },
        },
        {
            POSITION: [13, 8, 1, 0, -1, 140, 0.6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
                TYPE: "bullet",
                LABEL: gunCalcNames.thruster,
            },
        },
        {
            POSITION: [13, 8, 1, 0, 1, 220, 0.6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
                TYPE: "bullet",
                LABEL: gunCalcNames.thruster,
            },
        },
        {
            POSITION: [16, 8, 1, 0, 0, 150, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
                TYPE: "bullet",
                LABEL: gunCalcNames.thruster,
            },
        },
        {
            POSITION: [16, 8, 1, 0, 0, 210, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
                TYPE: "bullet",
                LABEL: gunCalcNames.thruster,
            },
        },
    ],
};
exports.oldCommanderGun = {
    PARENT: ["genericTank"],
    LABEL: "",
    BODY: {
        FOV: 3,
    },
    CONTROLLERS: ["nearestDifferentMaster"],
    COLOR: 16,
    MAX_CHILDREN: 6,
    AI: {
        NO_LEAD: true,
        SKYNET: true,
        FULL_VIEW: true,
    },
    GUNS: [
        {
            POSITION: [8, 14, 1.3, 8, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.commander]),
                TYPE: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
            },
        },
    ],
};
exports.oldCommander = {
    PARENT: ["genericTank"],
    LABEL: "Old Commander",
    STAT_NAMES: statnames.drone,
    DANGER: 7,
    BODY: {
        FOV: 1.15 * base.FOV,
    },
    FACING_TYPE: "autospin",
    TURRETS: [
        {
            POSITION: [16, 1, 0, 0, 0, 0],
            TYPE: "oldCommanderGun",
        },
        {
            POSITION: [16, 1, 0, 120, 0, 0],
            TYPE: ["oldCommanderGun", { INDEPENDENT: true }],
        },
        {
            POSITION: [16, 1, 0, 240, 0, 0],
            TYPE: ["oldCommanderGun", { INDEPENDENT: true }],
        },
    ],
};
exports.blunderbuss = {
    PARENT: ["genericTank"],
    LABEL: "Blunderbuss",
    DANGER: 7,
    BODY: {
        FOV: base.FOV * 1.225,
    },
    GUNS: [
        {
            POSITION: [13, 4, 1, 0, -3, -9, 0.3],
            PROPERTIES: {
                TYPE: "bullet",
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle, g.blunderbuss]),
            },
        },
        {
            POSITION: [15, 4, 1, 0, -2.5, -6, 0.2],
            PROPERTIES: {
                TYPE: "bullet",
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle, g.blunderbuss]),
            },
        },
        {
            POSITION: [16, 4, 1, 0, -2, -3, 0.1],
            PROPERTIES: {
                TYPE: "bullet",
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle, g.blunderbuss]),
            },
        },
        {
            POSITION: [13, 4, 1, 0, 3, 9, 0.3],
            PROPERTIES: {
                TYPE: "bullet",
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle, g.blunderbuss]),
            },
        },
        {
            POSITION: [15, 4, 1, 0, 2.5, 6, 0.2],
            PROPERTIES: {
                TYPE: "bullet",
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle, g.blunderbuss]),
            },
        },
        {
            POSITION: [16, 4, 1, 0, 2, 3, 0.1],
            PROPERTIES: {
                TYPE: "bullet",
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle, g.blunderbuss]),
            },
        },
        {
            POSITION: [25, 7, 1, 0, 0, 0, 0],
            PROPERTIES: {
                TYPE: "bullet",
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle]),
            },
        },
        {
            POSITION: [14, 10.5, 1, 0, 0, 0, 0],
        },
    ],
};
exports.oldRimfire = {
    PARENT: ["genericTank"],
    LABEL: "Old Rimfire",
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [12, 5, 1, 0, 7.25, 15, 0.8],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner, g.fast]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [12, 5, 1, 0, -7.25, -15, 0.8],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner, g.fast]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [16, 5, 1, 0, 3.75, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner, g.fast]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [16, 5, 1, 0, -3.75, -0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner, g.fast]),
                TYPE: "bullet",
            },
        },
    ],
};

// SCRAPPED TANKS
exports.autoTrapper = makeAuto(trapper);
exports.oldDreadnought = {
    PARENT: ["genericTank"],
    LABEL: "Old Dreadnought",
    DANGER: 7,
    FACING_TYPE: "locksFacing",
    STAT_NAMES: statnames.swarm,
    BODY: {
        FOV: base.FOV * 1.2,
    },
    TURRETS: [
        {
            /*  SIZE     X       Y     ANGLE    ARC */
            POSITION: [20, -4, 0, 0, 0, 0],
            TYPE: "genericEntity",
        },
    ],
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [18, 8, 1, 0, 0, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm]),
                TYPE: "swarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [6, 16, 1, 16, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.fake]),
                TYPE: "swarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [1, 3, 1, 3, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.twin,
                    g.puregunner,
                    g.machgun,
                    g.thruster,
                    [0.1, 3, 1, 1, 1, 1, 1, 1, 1, 0.075, 1, 2, 1],
                ]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.menderDeco = makeDeco(3);
exports.mender = {
    PARENT: ["genericTank"],
    LABEL: "Mender",
    DANGER: 7,
    TOOLTIP: "Right click to heal yourself (use sparingly, has a long cooldown once used!)",
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [17, 3, 1, 0, -6, -7, 0.25],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty]),
                TYPE: "bullet",
                LABEL: "Secondary",
            },
        },
        {
            POSITION: [17, 3, 1, 0, 6, 7, 0.75],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty]),
                TYPE: "bullet",
                LABEL: "Secondary",
            },
        },
        {
            POSITION: [19, 12, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty]),
                TYPE: "bullet",
                LABEL: "Heavy",
            },
        },
        { POSITION: [17, 10, 1, 0, 0, 180, 0] },
        {
            POSITION: [5, 18, 1, -19, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.pound,
                    g.destroy,
                    [2, 0, 1, 1, 1, -1, 1, 1, 1, 0.1, 1, 1, 1],
                ]),
                TYPE: ["bullet", { HEAL_MYSELF: true }],
                ALT_FIRE: true,
            },
        },
    ],
    TURRETS: [
        {
            POSITION: [7, 0, 0, 0, 0, 1],
            TYPE: "menderDeco",
        },
    ],
};
exports.prodigy = {
    PARENT: ["genericTank"],
    LABEL: "Prodigy",
    DANGER: 7,
    STAT_NAMES: statnames.generic,
    SHAPE: 6,
    MAX_CHILDREN: 14,
    BODY: {
        FOV: base.FOV * 1.15,
    },
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [8, 11, 1.3, 6, 0, 60, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
                TYPE: "sunchip",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
            },
        },
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [8, 11, 1.3, 6, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
                TYPE: "sunchip",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
            },
        },
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [8, 11, 1.3, 6, 0, 300, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
                TYPE: "sunchip",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
            },
        },
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [14, 9, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [4, 9, 1.5, 14, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.halfrange, g.slow]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
        {
            POSITION: [14, 9, 1, 0, 0, 120, 0],
        },
        {
            POSITION: [4, 9, 1.5, 14, 0, 120, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.halfrange, g.slow]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
        {
            POSITION: [14, 9, 1, 0, 0, 240, 0],
        },
        {
            POSITION: [4, 9, 1.5, 14, 0, 240, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.halfrange, g.slow]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
    ],
}; // TOOLTIP: "Generated by Zenphia!",
exports.randomTankTemp = {
PARENT: ["genericTank"],
LABEL: "Sritilner",
GUNS : [
/* {
POSITION: [ 13.2, 12, 0.8, 0, 0, 0, 0],
PROPERTIES: {
SHOOT_SETTINGS: combineStats([ g.drone, g.gunner, g.blank, g.blank, g.blank, g.blank, g.blank, g.blank, g.blank, g.flank, g.carrier, g.battle]),
TYPE: "drone",
AUTOFIRE: true,
SYNCS_SKILLS: true,
STAT_CALCULATOR: gunCalcNames.drone,
MAX_CHILDREN: 4,
//
}, },0*/ {
POSITION: [ 10.2, 12, 0.8, 0, 2, 15, 1/2 ],
PROPERTIES: {
SHOOT_SETTINGS: combineStats([ g.drone, g.blank, g.blank, g.blank, g.blank, g.blank, g.blank, g.blank, g.blank, g.flank, g.bent, g.twin]),
TYPE: "drone",
AUTOFIRE: true,
SYNCS_SKILLS: true,
STAT_CALCULATOR: gunCalcNames.drone,
MAX_CHILDREN: 4,
// dam: 1.913625, str: 0.24786, pen: 0.8640000000000001, rld: 343750000.0000001
}, },{
POSITION: [ 10.2, 12, 0.8, 0, -2, -15, 0/2 ],
PROPERTIES: {
SHOOT_SETTINGS: combineStats([ g.drone, g.blank, g.blank, g.blank, g.blank, g.blank, g.blank, g.blank, g.blank, g.flank, g.twin, g.bent]),
TYPE: "drone",
AUTOFIRE: true,
SYNCS_SKILLS: true,
STAT_CALCULATOR: gunCalcNames.drone,
MAX_CHILDREN: 4,
// dam: 1.913625, str: 0.24786, pen: 0.8640000000000001, rld: 343750000.0000001
}, },{
POSITION: [ 13.2, 12, 0.8, 0, 0, 0, 0/2 ],
PROPERTIES: {
SHOOT_SETTINGS: combineStats([ g.drone, g.blank, g.blank, g.blank, g.blank, g.blank, g.blank, g.blank, g.blank, g.twin, g.bent, g.flank]),
TYPE: "drone",
AUTOFIRE: true,
SYNCS_SKILLS: true,
STAT_CALCULATOR: gunCalcNames.drone,
MAX_CHILDREN: 4,
// dam: 1.913625, str: 0.24786, pen: 0.8640000000000001, rld: 343750000.0000001
}, },
/* {
POSITION: [ 17.6, 12.5, 0.7, 0, 0, 180, 0],
},{
POSITION: [ 7.3, 8.75, 1.1, 17.6, 0, 180, 0],
PROPERTIES: {
SHOOT_SETTINGS: combineStats([ g.trap, g.pound, g.blank, g.blank, g.blank, g.blank, g.blank, g.blank, g.blank, g.flank]),
TYPE: "trap",
AUTOFIRE: false,
SYNCS_SKILLS: false,
STAT_CALCULATOR: gunCalcNames.trap,
MAX_CHILDREN: 0,
//
}, },0*/ {
POSITION: [ 17.6, 12.5, 0.7, 0, 0, 180, 0/1 ],
},{
POSITION: [ 7.3, 8.75, 1.1, 17.6, 0, 180, 0/1],
PROPERTIES: {
SHOOT_SETTINGS: combineStats([ g.trap, g.pound, g.blank, g.blank, g.blank, g.blank, g.blank, g.blank, g.blank, g.flank]),
TYPE: "trap",
AUTOFIRE: false,
SYNCS_SKILLS: false,
STAT_CALCULATOR: gunCalcNames.trap,
MAX_CHILDREN: 0,
// dam: 0.94921875, str: 0.5, pen: 1, rld: 1679616
}, },{
POSITION: [ 11.0976, 12.5, -1.3, 0, 0, 180, 0],
}, ],
BODY: {
SPEED: 1 * base.SPEED,
FOV: 1.1 * base.FOV,
},
};


exports.randomTankZenphia1 = {
    PARENT: ["genericTank"],
    LABEL: "Tsiper",
    TOOLTIP: "Generated by Zenphia!",
    GUNS: [
        /*{
        POSITION: [ 13.76, 5, 0.9, 0, 0, 0, 0],
        PROPERTIES: {
        SHOOT_SETTINGS: combineStats([ g.basic, g.gunner, g.blank, g.blank, g.blank, ]),
        TYPE: "bullet", // dam: 0.8859374999999999, str: 0.165
        }, },0*/
        {
            POSITION: [13.76, 5, 0.9, 0, 0, 0, 0 / 1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.blank, g.blank, g.blank, ]),
                TYPE: "bullet", // dam: 0.8859374999999999, str: 0.165
            },
        },
    ],
    BODY: {
        SPEED: 1 * base.SPEED,
        FOV: 1 * base.FOV,
    },
};




// BOTS
exports.bot = {
    FACING_TYPE: "looseToTarget",
    NAME: "[AI] ",
    CONTROLLERS: ["nearestDifferentMaster", "mapAltToFire", "minion", "fleeAtLowHealth", ["mapFireToAlt", { onlyIfHasAltFireGun: true }], ["wanderAroundMap", { immitatePlayerMovement: true, lookAtGoal: true }]],
};

// SCORE KEEPING
exports.tagMode = {
    PARENT: ["bullet"],
    LABEL: "Players",
};
