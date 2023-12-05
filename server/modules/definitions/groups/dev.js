const { combineStats, addAura } = require('../facilitators.js');
const { base, gunCalcNames, basePolygonDamage, basePolygonHealth, dfltskl, statnames } = require('../constants.js');
const g = require('../gunvals.js');

// TESTBED TANKS
exports.menu = {
    PARENT: ["genericTank"],
    LABEL: "",
    RESET_UPGRADES: true,
    ALPHA: 1,
    SKILL_CAP: [
        dfltskl,
        dfltskl,
        dfltskl,
        dfltskl,
        dfltskl,
        dfltskl,
        dfltskl,
        dfltskl,
        dfltskl,
        dfltskl,
    ],
    IGNORED_BY_AI: true,
    TURRETS: [],
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [18, 10, -1.4, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.developer = {
    PARENT: ["menu"],
    LABEL: "Developer",
    BODY: {
        SHIELD: 1000,
        REGEN: 10,
        HEALTH: 100,
        DAMAGE: 10,
        DENSITY: 20,
        FOV: 2,
    },
    SHAPE: [
        [-1, -0.8],
        [-0.8, -1],
        [0.8, -1],
        [1, -0.8],
        [0.2, 0],
        [1, 0.8],
        [0.8, 1],
        [-0.8, 1],
        [-1, 0.8],
    ],
    GUNS: [
        {
            /*** LENGTH WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [18, 10, -1.4, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.op]),
                TYPE: "developerBullet",
            },
        },
    ],
};
exports.spectator = {
    PARENT: ["menu"],
    LABEL: "Spectator",
    ALPHA: 0,
    CAN_BE_ON_LEADERBOARD: false,
    ACCEPTS_SCORE: false,
    DRAW_HEALTH: false,
    HITS_OWN_TYPE: "never",
    ARENA_CLOSER: true,
    SKILL_CAP: [0, 0, 0, 0, 0, 0, 0, 0, 0, 255],
    BODY: {
        DAMAGE: 0,
        SPEED: 5,
        FOV: 2.5,
        HEALTH: 1e100,
        SHIELD: 1e100,
        REGEN: 1e100,
    },
};
exports.mapoverview = {
    PARENT: ["menu"],
    LABEL: "Map Overview",
    ALPHA: 0,
    CAN_BE_ON_LEADERBOARD: false,
    ACCEPTS_SCORE: false,
    DRAW_HEALTH: false,
    HITS_OWN_TYPE: "never",
    ARENA_CLOSER: true,
    SKILL_CAP: [0, 0, 0, 0, 0, 0, 0, 0, 0, 255],
    BODY: {
        DAMAGE: 0,
        SPEED: 5,
        FOV: 7.5,
        HEALTH: 1e100,
        SHIELD: 1e100,
        REGEN: 1e100,
    },
};
exports.bosses = {
    PARENT: ["menu"],
    LABEL: "Bosses",
};
exports.fun = {
    PARENT: ["menu"],
    LABEL: "Fun",
};
exports.bosses = {
    PARENT: ["menu"],
    LABEL: "Bosses",
};
exports.armybosses = {
    PARENT: ["menu"],
    LABEL: "Army Bosses",
};
exports.terrestrials = {
    PARENT: ["menu"],
    LABEL: "Terrestrials",
};
exports.titans = {
    PARENT: ["menu"],
    LABEL: "Titans",
};
exports.celestials = {
    PARENT: ["menu"],
    LABEL: "Celestials",
};
exports.eternals = {
    PARENT: ["menu"],
    LABEL: "Eternals",
};
exports.elites = {
    PARENT: ["menu"],
    LABEL: "Elites",
};
exports.mysticals = {
    PARENT: ["menu"],
    LABEL: "Mysticals",
};
exports.nesters = {
    PARENT: ["menu"],
    LABEL: "Nesters",
};
exports.rogues = {
    PARENT: ["menu"],
    LABEL: "Rogues",
};
exports.fallenBosses = {
    PARENT: ["menu"],
    LABEL: "Fallen Bosses",
};
exports.APSbosses = {
    PARENT: ["menu"],
    LABEL: "APS Bosses",
};
exports.miscBosses = {
    PARENT: ["menu"],
    LABEL: "Misc Bosses",
};
exports.otherTanks = {
    PARENT: ["menu"],
    LABEL: "Tanks",
};
exports.oldTanks = {
    PARENT: ["menu"],
    LABEL: "Old Tanks",
};
exports.scrappedTanks = {
    PARENT: ["menu"],
    LABEL: "Scrapped Tanks",
};
exports.randomTanks = {
    PARENT: ["menu"],
    LABEL: "Random Tanks",
};
exports.specialTanks = {
    PARENT: ["menu"],
    LABEL: "Special Tanks",
};
exports.miscEntities = {
    PARENT: ["menu"],
    LABEL: "Misc Entities",
};
exports.dominators = {
    PARENT: ["menu"],
    LABEL: "Dominators",
};
exports.arenaClosers = {
    PARENT: ["menu"],
    LABEL: "Arena Closers",
};
exports.sentries = {
    PARENT: ["menu"],
    LABEL: "Sentries",
};
exports.betaTesterMenu = {
    PARENT: ["menu"],
    LABEL: "Beta Tester",
};
exports.betaTanks = {
    PARENT: ["menu"],
    LABEL: "Beta Tanks",
};
exports.unusedTanks = {
    PARENT: ["menu"],
    LABEL: "Unused Tanks",
};
exports.armsraceTanks = {
    PARENT: ["menu"],
    LABEL: "Arms Race Tanks",
};

// GENERATOR-SPECIFIC POLYGONS
exports.spawnedEgg = {
    PARENT: ["genericEntity"],
    LABEL: "Egg",
    VALUE: 10,
    SHAPE: 0,
    SIZE: 5,
    COLOR: 6,
    BODY: {
        DAMAGE: 0,
        DENSITY: 2,
        HEALTH: 0.0011,
        PUSHABILITY: 0,
    },
    DRAW_HEALTH: false,
    INTANGIBLE: true,
    MOTION_TYPE: "drift",
    FACING_TYPE: "turnWithSpeed",
};
exports.spawnedSquare = {
    PARENT: ["genericEntity"],
    LABEL: "Square",
    VALUE: 30,
    SHAPE: 4,
    SIZE: 10,
    COLOR: 13,
    BODY: {
        DAMAGE: basePolygonDamage,
        DENSITY: 4,
        HEALTH: basePolygonHealth,
        PENETRATION: 2,
    },
    DRAW_HEALTH: true,
    INTANGIBLE: false,
    MOTION_TYPE: "drift",
    FACING_TYPE: "turnWithSpeed",
};
exports.spawnedAlphaPentagon = {
    PARENT: ["genericEntity"],
    LABEL: "Alpha Pentagon",
    VALUE: 15e3,
    SHAPE: 5,
    SIZE: 58,
    COLOR: 14,
    BODY: {
        DAMAGE: 2 * basePolygonDamage,
        DENSITY: 80,
        HEALTH: 300 * basePolygonHealth,
        RESIST: Math.pow(1.25, 3),
        SHIELD: 40 * basePolygonHealth,
        REGEN: 0.6,
    },
    DRAW_HEALTH: true,
    MOTION_TYPE: "drift",
    FACING_TYPE: "turnWithSpeed",
};

// GENERATORS
function compileMatrix(matrix, matrix2Entrance) {
    let matrixWidth = matrix[0].length,
        matrixHeight = matrix.length;
    for (let x = 0; x < matrixWidth; x++) for (let y = 0; y < matrixHeight; y++) {
        let str = matrix[y][x],
            LABEL = str[0].toUpperCase() + str.slice(1).replace(/[A-Z]/g, m => ' ' + m) + " Generator",
            code = str + 'Generator';
        exports[code] = matrix[y][x] = {
            PARENT: ["genericTank"],
            LABEL,
            SKILL_CAP: [31, 0, 0, 0, 0, 0, 0, 0, 0, 31],
            ALPHA: [0, 0],
            IGNORED_BY_AI: true,
            TURRETS: [{
                POSITION: [5 + y * 2, 0, 0, 0, 0, 1],
                TYPE: str,
            }],
            GUNS: [{
                POSITION: [14, 12, 1, 4, 0, 0, 0],
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.fake]),
                    TYPE: "bullet"
                }
            }, {
                POSITION: [12, 12, 1.4, 4, 0, 0, 0],
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, { recoil: 0 }]),
                    INDEPENDENT_CHILDREN: true,
                    TYPE: str
                },
            }],
        };
    }
}

function connectMatrix(matrix, matrix2Entrance) {
    let matrixWidth = matrix[0].length,
        matrixHeight = matrix.length;
    for (let x = 0; x < matrixWidth; x++) for (let y = 0; y < matrixHeight; y++) {
        let top = (y + matrixHeight - 1) % matrixHeight,
            bottom = (y + matrixHeight + 1) % matrixHeight,
            left = (x + matrixWidth - 1) % matrixWidth,
            right = (x + matrixWidth + 1) % matrixWidth,

        center = matrix[y     ][x    ];
        top    = matrix[top   ][x    ];
        bottom = matrix[bottom][x    ];
        left   = matrix[y     ][left ];
        right  = matrix[y     ][right];

        matrix[y][x].UPGRADES_TIER_0 = [
            "basic"     , top    , "developer",
             left       , center , right      ,
            "spectator" , bottom , matrix2Entrance
        ];
    }
}
let generatorMatrix = [/*
    [ "egg"           , "gem"                , "jewel"                  , "crasher"             , "sentry"               , "shinySentry"        , "EggRelic"           ],
    [ "square"        , "shinySquare"        , "legendarySquare"        , "shadowSquare"        , "rainbowSquare"        , "transSquare"        , "SquareRelic"        ],
    [ "triangle"      , "shinyTriangle"      , "legendaryTriangle"      , "shadowTriangle"      , "rainbowTriangle"      , "transTriangle"      , "TriangleRelic"      ],
    [ "pentagon"      , "shinyPentagon"      , "legendaryPentagon"      , "shadowPentagon"      , "rainbowPentagon"      , "transPentagon"      , "PentagonRelic"      ],
    [ "betaPentagon"  , "shinyBetaPentagon"  , "legendaryBetaPentagon"  , "shadowBetaPentagon"  , "rainbowBetaPentagon"  , "transBetaPentagon"  , "BetaPentagonRelic"  ],
    [ "alphaPentagon" , "shinyAlphaPentagon" , "legendaryAlphaPentagon" , "shadowAlphaPentagon" , "rainbowAlphaPentagon" , "transAlphaPentagon" , "AlphaPentagonRelic" ],
    [ "sphere"        , "cube"               , "tetrahedron"            , "octahedron"          , "dodecahedron"         , "icosahedron"        , "tesseract"          ],
*/
    [ "egg"           , "newBetaEgg"           , "newAlphaEgg"          , "EggRelic"         , "BetaEggRelic"         , "AlphaEggRelic" ],
    [ "square"        , "newBetaSquare"        , "newAlphaSquare"       , "SquareRelic"      , "BetaSquareRelic"      , "AlphaSquareRelic" ],
    [ "triangle"      , "newBetaTriangle"      , "newAlphaTriangle"     , "TriangleRelic"    , "BetaTriangleRelic"    , "AlphaTriangleRelic" ],
    [ "pentagon"      , "newBetaPentagon"      , "newAlphaPentagon"     , "PentagonRelic"    , "BetaPentagonRelic"    , "AlphaPentagonRelic" ],
    [ "hexagon"       , "newBetaHexagon"       , "newAlphaHexagon"      , "HexagonRelic"     , "BetaHexagonRelic"     , "AlphaHexagonRelic" ],
    [ "crasher"       , "omegaEgg"             , "omegaSquare"          , "omegaTriangle"    , "omegaPentagon"        , "omegaHexagon" ],
    [ "bladeCrasher"  , "gammaEgg"             , "gammaSquare"          , "gammaTriangle"    , "gammaPentagon"        , "gammaHexagon" ],
    [ "invisoCrasher"    , "deltaEgg"             , "deltaSquare"          , "deltaTriangle"    , "deltaPentagon"        , "deltaHexagon" ],
    [ "gem"             , "betaGem"           , "alphaGem"          , "jewel"               , "betaJewel"            , "alphaJewel" ],
    [ "shinySquare"     , "shinyBetaSquare"   , "shinyAlphaSquare"  , "legendarySquare"     , "legendaryBetaSquare"  , "legendaryAlphaSquare" ],
    [ "shinyTriangle"   , "shinyBetaTriangle" , "shinyAlphaTriangle", "legendaryTriangle"   , "legendaryBetaTriangle", "legendaryAlphaTriangle" ],
    [ "shinyPentagon"   , "shinyBetaPentagon" , "shinyAlphaPentagon", "legendaryPentagon"   , "legendaryBetaPentagon", "legendaryAlphaPentagon" ],
    [ "shinyHexagon"    , "shinyBetaHexagon"  , "shinyAlphaHexagon" , "legendaryHexagon"    , "legendaryBetaHexagon" , "legendaryAlphaHexagon" ],
    [ "shinyOmegaSquare"  , "shinyGammaSquare"    , "shinyDeltaSquare"    , "legendaryOmegaSquare"  , "legendaryGammaSquare"   , "legendaryDeltaSquare" ],
    [ "shinyOmegaTriangle", "shinyGammaTriangle"  , "shinyDeltaTriangle"  , "legendaryOmegaTriangle", "legendaryGammaTriangle" , "legendaryDeltaTriangle" ],
    [ "shinyOmegaPentagon", "shinyGammaPentagon"  , "shinyDeltaPentagon"  , "legendaryOmegaPentagon", "legendaryGammaPentagon" , "legendaryDeltaPentagon" ],
    [ "shinyOmegaHexagon" , "shinyGammaHexagon"   , "shinyDeltaHexagon"   , "legendaryOmegaHexagon" , "legendaryGammaHexagon"  , "legendaryDeltaHexagon" ],
],

gemRelicMatrix = []; //
for (let tier of [ "", "Egg", "BetaEgg", "AlphaEgg", "Square", "BetaSquare", "AlphaSquare",  "Triangle", "BetaTriangle", "AlphaTriangle", "Pentagon", "BetaPentagon", "AlphaPentagon", "Hexagon", "BetaHexagon", "AlphaHexagon"  ]) {
    let row = [];
    for (let gem of [ "Power", "Space", "Reality", "Soul", "Time", "Mind" ]) {
        row.push(gem + (tier ? tier + 'Relic' : 'Gem'));
    }
    gemRelicMatrix.push(row);
}

compileMatrix(generatorMatrix);
compileMatrix(gemRelicMatrix);
connectMatrix(generatorMatrix, 'PowerGemGenerator');
connectMatrix(gemRelicMatrix, 'eggGenerator');

exports.diamondShape = {
    PARENT: ["basic"],
    LABEL: "Diamond Test Shape",
    SHAPE: 4.5
};

exports.rotatedTrap = {
    PARENT: ["basic"],
    LABEL: "Rotated Trap Test Shape",
    SHAPE: -3.5
};
exports.mummyHat = {
    SHAPE: 4.5,
    COLOR: 10
};
exports.mummy = {
    PARENT: ["drone"],
    SHAPE: 4,
    TURRETS: [{
        POSITION: [20 * Math.SQRT1_2, 0, 0, 180, 360, 1],
        TYPE: ["mummyHat"]
    }]
};
exports.mummifier = {
    PARENT: ["genericTank"],
    LABEL: "Mummifier",
    DANGER: 6,
    STAT_NAMES: statnames.drone,
    BODY: {
        SPEED: 0.8 * base.SPEED,
    },
    SHAPE: 4,
    MAX_CHILDREN: 10,
    GUNS: [{
        POSITION: [5.5, 13, 1.1, 8, 0, 90, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
            TYPE: "mummy",
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.necro
        }
    },{
        POSITION: [5.5, 13, 1.1, 8, 0, 270, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
            TYPE: "mummy",
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.necro
        }
    }],
    TURRETS: [{
        POSITION: [20 * Math.SQRT1_2, 0, 0, 180, 360, 1],
        TYPE: ["mummyHat"]
    }]
};

exports.colorMan = {
    PARENT: ["genericTank"],
    LABEL: "Testing Animated Colors",
    SHAPE: 4,
    COLOR: 36,
    TURRETS: [{
        POSITION: [20, -20, -20, 0, 0, 1],
        TYPE: { SHAPE: 4, COLOR: 20 }
    },{
        POSITION: [20,  0 , -20, 0, 0, 1],
        TYPE: { SHAPE: 4, COLOR: 21 }
    },{
        POSITION: [20,  20, -20, 0, 0, 1],
        TYPE: { SHAPE: 4, COLOR: 22 }
    },{
        POSITION: [20, -20,  0 , 0, 0, 1],
        TYPE: { SHAPE: 4, COLOR: 23 }
    },{
        POSITION: [20,  20,  0 , 0, 0, 1],
        TYPE: { SHAPE: 4, COLOR: 29 }
    },{
        POSITION: [20,  20,  20, 0, 0, 1],
        TYPE: { SHAPE: 4, COLOR: 24 }
    },{
        POSITION: [20,  0 ,  20, 0, 0, 1],
        TYPE: { SHAPE: 4, COLOR: 37 }
    },{
        POSITION: [20,  20,  20, 0, 0, 1],
        TYPE: { SHAPE: 4, COLOR: 38 }
    }]
};

exports.miscTestHelper2 = {
    PARENT: ["genericTank"],
    MIRROR_MASTER_ANGLE: true,
    COLOR: -1,
    GUNS: [
        {
            POSITION: [18, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.noRandom]),
                TYPE: "bullet",
                COLOR: -1,
            },
        },
    ],
};
exports.miscTestHelper = {
    PARENT: ["genericTank"],
    MIRROR_MASTER_ANGLE: true,
    COLOR: {
        BASE: -1,
        BRIGHTNESS_SHIFT: 15,
    },
    GUNS: [
        {
            POSITION: [18, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.noRandom]),
                TYPE: "bullet",
                COLOR: -1,
            },
        },
    ],
    TURRETS: [
        {
          POSITION: [20, 0, 20, 0, 0, 1],
          TYPE: "miscTestHelper2",
        }
    ]
};
exports.miscTest = {
    PARENT: ["genericTank"],
    LABEL: "Turret Reload Test",
    GUNS: [
        {
            POSITION: [18, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.noRandom]),
                TYPE: "bullet",
            },
        },
    ],
    TURRETS: [
        {
            POSITION: [20, 0, 20, 0, 0, 1],
            TYPE: "miscTestHelper",
        }
    ]
};
exports.auraBasicGen = addAura(1, 1, 0);
exports.auraBasic = {
    PARENT: ["genericTank"],
    LABEL: "Aura Basic",
    GUNS: [
        {
            POSITION: [18, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic]),
                TYPE: "bullet",
            },
        },
    ],
    TURRETS: [
        {
            POSITION: [14, 0, 0, 0, 0, 1],
            TYPE: "auraBasicGen",
        }
    ],
};
exports.auraHealerGen = addAura(-1, 1, 12);
exports.auraHealer = {
    PARENT: ["genericTank"],
    LABEL: "Aura Healer",
    TURRETS: [
        {
            POSITION: [14, 0, 0, 0, 0, 1],
            TYPE: "auraHealerGen",
        }
    ],
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [8, 9, -0.5, 12.5, 0, 0, 0],
        },
        {
            POSITION: [18, 10, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.healer]),
                TYPE: "healerBullet",
            },
        },
    ],
};

exports.auraGravityGen = addAura(0.00001, 2, 30, {knockbackFactor: -1});
exports.auraGravity = {
    PARENT: ["genericTank"],
    LABEL: "Aura Gravity",
    GUNS: [
        {
            POSITION: [18, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic]),
                TYPE: "bullet",
            },
        },
    ],
    TURRETS: [
        {
            POSITION: [14, 0, 0, 0, 0, 1],
            TYPE: "auraGravityGen",
        }
    ],
};
exports.auraRepelGen = addAura(0.00001, 2, 76, {knockbackFactor: 1});
exports.auraRepel = {
    PARENT: ["genericTank"],
    LABEL: "Aura Repelling",
    GUNS: [
        {
            POSITION: [18, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic]),
                TYPE: "bullet",
            },
        },
    ],
    TURRETS: [
        {
            POSITION: [14, 0, 0, 0, 0, 1],
            TYPE: "auraRepelGen",
        }
    ],
};
exports.trplnrsTestTank = {
    PARENT: ['genericTank'],
    LABEL: "Trplnr's Test Tank",
    COLOR: 'teal',
    GUNS: [
    {
        POSITION: [18, 10, 0.75, -5, 0, 0, 0],
        PROPERTIES: {
            COLOR: 'lavender',
            SHOOT_SETTINGS: combineStats([g.anni, {reload: 250}]),
            TYPE: 'kronosMissile'
        }
    },
    {
        POSITION: [10, 6, 1, 0, 14, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, {size: 0.8, reload: 5}]),
            TYPE: 'swarm'
        }
    }, {
        POSITION: [10, 6, 1, 0, -14, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, {size: 0.8, reload: 5}]),
            TYPE: 'swarm'
        }
    }, {
        POSITION: [10, 6, 1, 0, 14, 180, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, {size: 1.2, recoil: 1.5, reload: 0.8}]),
            TYPE: 'bullet'
        }
    }, {
        POSITION: [10, 6, 1, 0, -14, 180, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, {size: 1.2, recoil: 1.5, reload: 0.8}]),
            TYPE: 'bullet'
        }
    }, {
        POSITION: [18, 8, 1, 0, 0, 90, 0],
        PROPERTIES: {
            COLOR: 'black'
        }
    }, {
        POSITION: [18, 8, 1, 0, 0, 270, 0],
        PROPERTIES: {
            COLOR: 'black'
        }
    }],
    TURRETS: [{
        POSITION: [15, 12.5, 12.5, 0, 0, 0],
        TYPE: { SHAPE: 4, COLOR: 'black', MIRROR_MASTER_ANGLE: true }
    }, {
        POSITION: [15, 12.5, -12.5, 0, 0, 0],
        TYPE: { SHAPE: 4, COLOR: 'black', MIRROR_MASTER_ANGLE: true }
    }, {
        POSITION: [15, -12.5, -12.5, 0, 0, 0],
        TYPE: { SHAPE: 4, COLOR: 'black', MIRROR_MASTER_ANGLE: true }
    }, {
        POSITION: [15, -12.5, 12.5, 0, 0, 0],
        TYPE: { SHAPE: 4, COLOR: 'black', MIRROR_MASTER_ANGLE: true }
    }]
}

exports.chompyTestTank = {
    PARENT: ['genericTank'],
    LABEL: "Chompy's Test Tank",
    SHAPE: "M -1 -1 L -1 1 L 0 1 A 1 1 0 0 0 0 -1 L -1 -1",
    BODY: {
          RAGE_MULTIPLIER: 1,
          KNOCKBACK_MULTIPLIER: 2,
    },
    GUNS: [
        {
            POSITION: [0, 20, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, { health: 10}]),
                TYPE: "chainSegment",
                MAX_CHILDREN: 1,
            },
        },
    ],
}
// FUN
exports.vanquisher = {
    PARENT: ["genericTank"],
    DANGER: 8,
    LABEL: "Vanquisher",
    STAT_NAMES: statnames.generic,
    BODY: {
        SPEED: 0.8 * base.SPEED,
    },
    //destroyer
    GUNS: [{
        POSITION: [21, 14, 1, 0, 0, 180, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy]),
            TYPE: "bullet"
        }

    //builder
    },{
        POSITION: [18, 12, 1, 0, 0, 0, 0],
    },{
        POSITION: [2, 12, 1.1, 18, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.block]),
            TYPE: "setTrap"
        }

    //launcher
    },{
        POSITION: [10, 9, 1, 9, 0, 90, 0],
    },{
        POSITION: [17, 13, 1, 0, 0, 90, 0],
        PROPERTIES: { SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty, g.arty]), TYPE: "minimissile", STAT_CALCULATOR: gunCalcNames.sustained }

    //shotgun
    },{
        POSITION: [4, 3, 1, 11, -3, 270, 0],
        PROPERTIES: { SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]), TYPE: "bullet" }
    },{
        POSITION: [4, 3, 1, 11, 3, 270, 0],
        PROPERTIES: { SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]), TYPE: "bullet" }
    },{
        POSITION: [4, 4, 1, 13, 0, 270, 0],
        PROPERTIES: { SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]), TYPE: "casing" }
    },{
        POSITION: [1, 4, 1, 12, -1, 270, 0],
        PROPERTIES: { SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]), TYPE: "casing" }
    },{
        POSITION: [1, 4, 1, 11, 1, 270, 0],
        PROPERTIES: { SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]), TYPE: "casing" }
    },{
        POSITION: [1, 3, 1, 13, -1, 270, 0],
        PROPERTIES: { SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]), TYPE: "bullet" }
    },{
        POSITION: [1, 3, 1, 13, 1, 270, 0],
        PROPERTIES: { SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]), TYPE: "bullet" }
    },{
        POSITION: [1, 2, 1, 13, 2, 270, 0],
        PROPERTIES: { SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]), TYPE: "casing" }
    }, {
        POSITION: [1, 2, 1, 13, -2, 270, 0],
        PROPERTIES: { SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]), TYPE: "casing" }
    }, {
        POSITION: [15, 14, 1, 6, 0, 270, 0],
        PROPERTIES: { SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.fake]), TYPE: "casing" }
    }, {
        POSITION: [8, 14, -1.3, 4, 0, 270, 0],
    }]
};
exports.armyOfOneBullet = {
    PARENT: ["bullet"],
    LABEL: "Unstoppable",
    TURRETS: [
        {
            /** SIZE         X             Y         ANGLE        ARC */
            POSITION: [18.5, 0, 0, 0, 360, 0],
            TYPE: ["spikeBody", { COLOR: null }],
        },
        {
            POSITION: [18.5, 0, 0, 180, 360, 0],
            TYPE: ["spikeBody", { COLOR: null }],
        },
    ],
};
exports.armyOfOne = {
    PARENT: ["genericTank"],
    LABEL: "Army Of One",
    DANGER: 9,
    SKILL_CAP: [31, 31, 31, 31, 31, 31, 31, 31, 31, 31],
    BODY: {
        SPEED: 0.5 * base.SPEED,
        FOV: 1.8 * base.FOV,
    },
    GUNS: [
        {
            POSITION: [21, 19, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.destroy, g.destroy, g.destroy, g.sniper, g.sniper, g.sniper, g.sniper, g.sniper, g.sniper, g.sniper, g.doublereload, g.doublereload, g.doublereload, g.doublereload]),
                TYPE: "armyOfOneBullet",
            },
        },{
            POSITION: [21, 11, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.destroy, g.destroy, g.destroy, g.sniper, g.sniper, g.sniper, g.sniper, g.sniper, g.sniper, g.sniper, g.doublereload, g.doublereload, g.doublereload, g.doublereload, g.fake]),
                TYPE: "bullet",
            },
        }
    ],
};
exports.godbasic = {
    PARENT: ["genericTank"],
    LABEL: "God Basic",
    SKILL_CAP: [31, 31, 31, 31, 31, 31, 31, 31, 31, 31],
    SKILL: [ 31, 31, 31, 31, 31, 31, 31, 31, 31, 31 ],
    BODY: {
        ACCELERATION: base.ACCEL * 1,
        SPEED: base.SPEED * 1,
        HEALTH: base.HEALTH * 1,
        DAMAGE: base.DAMAGE * 1,
        PENETRATION: base.PENETRATION * 1,
        SHIELD: base.SHIELD * 1,
        REGEN: base.REGEN * 1,
        FOV: base.FOV * 1,
        DENSITY: base.DENSITY * 1,
        PUSHABILITY: 1,
        HETERO: 3,
    },
    GUNS: [
        {
            POSITION: [18, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic]),
                TYPE: "bullet",
                COLOR: 16,
                LABEL: "",
                STAT_CALCULATOR: 0,
                WAIT_TO_CYCLE: false,
                AUTOFIRE: false,
                SYNCS_SKILLS: false,
                MAX_CHILDREN: 0,
                ALT_FIRE: false,
                NEGATIVE_RECOIL: false,
            },
        },
    ],
};
exports.maximumOverdrive = {
    PARENT: ["overdrive"],
    LABEL: "Maximum Overdrive",
    SKILL_CAP: Array(10).fill(255),
    SKILL: Array(10).fill(255),
};

exports.repelTank = {
    PARENT: ["genericTank"],
    DANGER: 7,
    LABEL: "Repel Tank",
    BODY: {
        SPEED: 0.8 * base.SPEED,
        FOV: 1.15 * base.FOV,
    },
    GUNS: [
        {
            POSITION: [18, 8, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [18, 4, 1, 0, 0, 0, 0],
            PROPERTIES: {
                COLOR: 76
            },
        },
        {
            POSITION: [2, 8, 1, 18, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic]),
                TYPE: "repelBullet",
                COLOR: 76
            },
        },
    ],
};
exports.gravityTank = {
    PARENT: ["genericTank"],
    DANGER: 7,
    LABEL: "Gravity Tank",
    BODY: {
        SPEED: 0.8 * base.SPEED,
        FOV: 1.15 * base.FOV,
    },
    GUNS: [
        {
            POSITION: [18, 8, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [18, 4, 1, 0, 0, 0, 0],
            PROPERTIES: {
                COLOR: 30
            },
        },
        {
            POSITION: [2, 8, 1, 18, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic]),
                TYPE: "gravityBullet",
                COLOR: 30
            },
        },
    ],
};
exports.levels = {
    PARENT: ["menu"],
    LABEL: "Levels",
    UPGRADES_TIER_0: ["basic", "developer"]
};
for (let i = 0; i < 186; i += c.TIER_MULTIPLIER) { //c.MAX_UPGRADE_TIER is irrelevant
    let LEVEL = i;
    exports["level" + LEVEL] = {
        PARENT: ["levels"],
        LEVEL,
        LABEL: "Level " + LEVEL
    };
    exports.levels.UPGRADES_TIER_0.push(exports["level" + LEVEL]);
}

exports.teams = {
    PARENT: ["menu"],
    LABEL: "Teams",
    UPGRADES_TIER_0: ["developer"]
};
for (let i = 1; i <= c.TEAMS; i++) {
    let TEAM = i;
    exports["Team" + TEAM] = {
        PARENT: ["teams"],
        TEAM: -TEAM,
        COLOR: getTeamColor(-TEAM),
        LABEL: "Team " + TEAM
    };
    exports.teams.UPGRADES_TIER_0.push(exports["Team" + TEAM]);
}
exports.Team101 = {
    PARENT: ["teams"],
    TEAM: TEAM_ROOM,
    COLOR: 3,
    LABEL: "Room Team"
};
exports.Team101 = {
    PARENT: ["teams"],
    TEAM: TEAM_ENEMIES,
    COLOR: 3,
    LABEL: "Enemies Team"
};
exports.teams.UPGRADES_TIER_0.push("Team101");

// DEV "UPGRADE PATHS"
exports.developer.UPGRADES_TIER_0 = ["basic", "betaTesterMenu", "healer", "miscEntities", "randomTanks", "eggGenerator", "bosses", "fun", "levels", "teams", "specialTanks"];
    exports.miscEntities.UPGRADES_TIER_0 = ["baseProtector", "dominators", "mothership", "arenaClosers", "antiTankMachineGun", "ikeBase", "baseProtectorGunner", "weirdShelly"];
        exports.dominators.UPGRADES_TIER_0 = ["dominator", "destroyerDominator", "gunnerDominator", "trapperDominator", "bulldozerDominator", "sprayerDominator"];
        exports.arenaClosers.UPGRADES_TIER_0 = ["arenaCloser", "twinArenaCloser", "sniperArenaCloser", "machArenaCloser", "flankArenaCloser", "directorArenaCloser", "smasherArenaCloser", "cruiserArenaCloser"];
    exports.bosses.UPGRADES_TIER_0 = ["sentries", "elites", "mysticals", "nesters", "rogues", "terrestrials", "celestials", "eternals", "titans", "fallenBosses", "armybosses", "APSbosses", "miscBosses"];
        exports.sentries.UPGRADES_TIER_0 = ["sentrySwarm", "sentryGun", "sentryTrap", "shinySentrySwarm", "shinySentryGun", "shinySentryTrap", "bobSentry", "armyBobSentry", "autoBobSentry", "squareGunSentry", "squareSwarmSentry", "triangleGunSentry"];
        exports.elites.UPGRADES_TIER_0 = ["eliteDestroyer", "eliteGunner", "eliteSprayer", "eliteBattleship", "eliteSpawner", "eliteTrapGuard", "eliteSpinner", "eliteSkimmer", "eliteBasic", "eliteRifle", "legionaryCrasher", "deltaBattleship", "deltaSpawner", "deltaSkimmer"];
        exports.mysticals.UPGRADES_TIER_0 = ["sorcerer", "summoner", "enchantress", "exorcistor", "shamanBoss", "sangomaBoss"];
        exports.nesters.UPGRADES_TIER_0 = ["nestKeeper", "nestWarden", "nestGuardian"];
        exports.rogues.UPGRADES_TIER_0 = ["roguePalisade", "rogueArmada", "rogueAlcazar", "alviss", "tyr", "fiolnir"];
        exports.terrestrials.UPGRADES_TIER_0 = ["ares", "gersemi", "ezekiel", "eris", "selene",];
        exports.titans.UPGRADES_TIER_0 = ["titanHowler", "titanGlider", "titanInvoker"];
        exports.celestials.UPGRADES_TIER_0 = ["paladin", "freyja", "zaphkiel", "nyx", "theia", "kairos"];
        exports.eternals.UPGRADES_TIER_0 = ["ragnarok", "kronos", "hyperion"];
        exports.fallenBosses.UPGRADES_TIER_0 = ["fallenOverlord", "fallenBooster", "fallenHybrid", "fallenFalcon", "fallenFactory", "fallenOctoTank", "fallenBulwark", "fallenConqueror"];
        exports.armybosses.UPGRADES_TIER_0 = ["armySentrySwarm", "armySentryGun", "armySentryTrap", "armySentryRanger", "armySoldierGun", "armySoldierSwarm"];
        exports.APSbosses.UPGRADES_TIER_0 = ["APS1", "APS1plus", "APS1plusplus", "APS14", "APSplus14", "APSbattlecrusher", "APSchompy"];
        exports.miscBosses.UPGRADES_TIER_0 = ["snowflakeBoss"];
    exports.oldTanks.UPGRADES_TIER_0 = ["oldSpreadshot", "oldBentBoomer", "quadBuilder", "weirdSpike", "master", "oldCommander", "blunderbuss", "oldRimfire"];
    exports.scrappedTanks.UPGRADES_TIER_0 = ["autoTrapper", "oldDreadnought", "mender", "prodigy"];
    exports.randomTanks.UPGRADES_TIER_0 = ["randomTankTemp"];
    exports.fun.UPGRADES_TIER_0 = ["vanquisher", "armyOfOne", "godbasic", "maximumOverdrive", "diamondShape", "rotatedTrap", "mummifier", "colorMan", "miscTest", "auraBasic", 'trplnrsTestTank', "chompyTestTank", "repelTank", "gravityTank"];
    exports.auraBasic.UPGRADES_TIER_0 = ["auraHealer", "auraGravity", "auraRepel"];


    exports.specialTanks.UPGRADES_TIER_0 = [];

 exports.betaTesterMenu.UPGRADES_TIER_0 = ["basic", "betaTanks", "armsraceTanks", "unusedTanks", "spectator"];
   exports.betaTanks.UPGRADES_TIER_0 = ["betaTesterMenu", "gemini", "stunAssassin", "rageSpike", "scorpionSmash", "stabilizer", "wallBuilder"];
   exports.armsraceTanks.UPGRADES_TIER_0 = ["miniEliteDestroyer", "miniEliteGunner", "miniEliteSpawner"];
   exports.unusedTanks.UPGRADES_TIER_0 = ["obliStabilize"];
    exports.spectator.UPGRADES_TIER_0 = ["basic", "betaTanks", "mapoverview"];