const { basePolygonDamage, basePolygonHealth } = require('../constants.js'),
// Code by Damocles (https://discord.com/channels/366661839620407297/508125275675164673/1090010998053818488)
// Albeit heavily modified because the math in the original didn't work LOL
makeRelic = (type, scale = 1, gem, SIZE) => {
    let relicCasing = {
        PARENT: ['genericEntity'],
        LABEL: 'Relic Casing',
        COLOR: type.COLOR,
        SHAPE: [[-0.4,-1],[0.4,-0.25],[0.4,0.25],[-0.4,1]].map(r => r.map(s => s * scale))
    }, relicBody = {
        PARENT: ['genericEntity'],
        LABEL: 'Relic Mantle',
        COLOR: type.COLOR,
        SHAPE: type.SHAPE
    };
    exports[Math.random().toString(36)] = relicCasing;
    exports[Math.random().toString(36)] = relicBody;
    let width = 6 * scale,
        y = 8.25 + ((scale % 1) * 5),
        isEgg = type.SHAPE == 0,
        casings = isEgg ? 8 : type.SHAPE,
        fraction = 360 / casings,
        GUNS = [],
        TURRETS = [{ POSITION: [32.5, 0, 0, 0, 0, 0], TYPE: relicBody }],
        PARENT = [type],
        additionalAngle = type.SHAPE % 2 === 0 ? 0 : fraction / 2;

    if (SIZE) {
        PARENT.push({ SIZE });
    }

    for (let i = 0; i < casings; i++) {
        let angle = i * fraction,
            gunAngle = angle + additionalAngle;
        if (isEgg) {
            GUNS.push({
                POSITION: [4, width, 2.5, 12,  0, gunAngle, 0]
            });
            TURRETS.push({
                POSITION: [8, -15,  0, angle, 0, 1],
                TYPE: relicCasing
            });
        } else {
            GUNS.push({
                POSITION: [4, width, 2.5, 12,  y, gunAngle, 0]
            });
            GUNS.push({
                POSITION: [4, width, 2.5, 12, -y, gunAngle, 0]
            });
            TURRETS.push({
                POSITION: [8, -15,  y, angle, 0, 1],
                TYPE: relicCasing
            });
            TURRETS.push({
                POSITION: [8, -15, -y, angle, 0, 1],
                TYPE: relicCasing
            });
        }
    }

    if (gem) {
        TURRETS.push({
            POSITION: [8, 0, 0, 0, 0, 1],
            TYPE: gem
        });
    }

    return {
        PARENT,
        LABEL: type.LABEL + ' Relic',
        COLOR: 18, // This is the color of the floor, this makes it look hollow.
        BODY: {
            ACCELERATION: 0.001
        },
        CONTROLLERS: [],
        VALUE: type.VALUE * 100_000,
        GUNS,
        TURRETS
    };
},
makeUpgraded = (type, level) => ({
    PARENT: ["food"],
    LABEL: ["Beta", "Alpha", "Omega"][level] + " " + type.LABEL,
    VALUE: [6.25, 37.5][level] * type.VALUE,
    SHAPE: type.SHAPE,
    SIZE: type.SIZE + (7 * (1 + level)),
    COLOR: type.COLOR,
    //ALPHA: level == 2 ? 0.25 : 1,
    BODY: {
        DAMAGE: type.BODY.DAMAGE * (4/3),//[4/3, 4/3][level],
        DENSITY: type.BODY.DENSITY * [3.75, 10][level],
        HEALTH: [5, 30][level] * type.BODY.HEALTH,
        RESIST: Math.pow(type.BODY.RESIST != null ? type.BODY.RESIST : 1, [2, 3][level]),
        PENETRATION: 1,
        ACCELERATION: type.BODY.ACCELERATION * ([6/7, 5/7][level]),
        REGEN: [0.2, 0.6][level],
    },
    DRAW_HEALTH: true,
    INTANGIBLE: false,
    GIVE_KILL_MESSAGE: (level != 0 || ([6.25, 37.5][level] * type.VALUE) >= 2500) ? true : false,
});
makeLaby = (type, level) => {
    let usableSHAPE = Math.max(type.SHAPE, 3),
        downscale = Math.cos(Math.PI / usableSHAPE),
        strenghtMultiplier = 5 ** (level - 1);
    return {
        PARENT: ["food"],
        LABEL: ["", "Beta ", "Alpha ", "Omega ", "Gamma ", "Delta "][level] + type.LABEL,
        VALUE: type.VALUE * strenghtMultiplier,
        SHAPE: type.SHAPE,
        SIZE: type.SIZE / downscale ** (level - 1),
        COLOR: type.COLOR,
        ALPHA: type.ALPHA,
        BODY: {
            DAMAGE: type.BODY.DAMAGE,
            DENSITY: type.BODY.DENSITY,
            HEALTH: type.BODY.HEALTH * strenghtMultiplier,
            PENETRATION: type.BODY.PENETRATION,
            ACCELERATION: type.BODY.ACCELERATION
        },
        DRAW_HEALTH: type.DRAW_HEALTH,
        GIVE_KILL_MESSAGE: type.GIVE_KILL_MESSAGE || level > 2,
        GUNS: type.GUNS,
        GIVE_KILL_MESSAGE: (level > 1 || (type.VALUE * strenghtMultiplier) >= 2500) ? true : false,
        TURRETS: [...(type.TURRETS ? type.TURRETS : []), ...Array(level).fill().map((_, i) => ({
            POSITION: [20 * downscale ** (i + 1), 0, 0, !(i & 1) ? 180 / usableSHAPE : 0, 0, 1],
            TYPE: [type, { MIRROR_MASTER_ANGLE: true }]
        }))]
    };
};
makeRare = (type, level) => ({
    PARENT: ["food"],
    LABEL: ["Shiny", "Legendary", "Shadow", "Rainbow", "Transgender"][level] + " " + type.LABEL,
    VALUE: type.VALUE * [100, 500, 2000, 4000, 5000][level],
    SHAPE: type.SHAPE,
    SIZE: type.SIZE + level,
    COLOR: (type.COLOR == [1, 0, 19, 36, 37][level]) ? [1, "legendaryTeal", 19, 36, 37][level] : [1, 0, 19, 36, 37][level],
    ALPHA: level == 2 ? 0.25 : 1,
    BODY: {
        DAMAGE: type.BODY.DAMAGE + level,
        DENSITY: type.BODY.DENSITY + level,
        HEALTH: [10, 20, 40, 80, 100][level] * type.BODY.HEALTH,
        PENETRATION: type.BODY.PENETRATION + level,
        ACCELERATION: type.BODY.ACCELERATION
    },
    DRAW_HEALTH: true,
    INTANGIBLE: false,
    GIVE_KILL_MESSAGE: true,
});

// EGGS
exports.egg = {
    PARENT: ["food"],
    LABEL: "Egg",
    VALUE: 10,
    SHAPE: 0,
    SIZE: 5,
    COLOR: 6,
    INTANGIBLE: true,
    BODY: {
        DAMAGE: 0,
        DENSITY: 2,
        HEALTH: 0.0011,
        PUSHABILITY: 0,
        ACCELERATION: 0.015
    },
    DRAW_HEALTH: false,
};

exports.betaEgg = makeUpgraded(exports.egg, 0);
exports.alphaEgg = makeUpgraded(exports.egg, 1);

exports.newBetaEgg = makeLaby(exports.egg, 1);
exports.newAlphaEgg = makeLaby(exports.egg, 2);
exports.omegaEgg = makeLaby(exports.egg, 3);
exports.gammaEgg = makeLaby(exports.egg, 4);
exports.deltaEgg = makeLaby(exports.egg, 5);

exports.carbonEgg = {
    PARENT: ["food"],
    LABEL: "Coal",
    VALUE: 10,
    SHAPE: 0,
    SIZE: 6,
    COLOR: 46,
    INTANGIBLE: true,
    BODY: {
        DAMAGE: 0,
        DENSITY: 2,
        HEALTH: 0.0024,
        PUSHABILITY: 0,
        ACCELERATION: 0.015
    },
    DRAW_HEALTH: false,
};

exports.betaCarbonEgg = makeLaby(exports.carbonEgg, 1);
exports.alphaCarbonEgg = makeLaby(exports.carbonEgg, 2);

exports.gem = {
    PARENT: ["food"],
    LABEL: "Gem",
    VALUE: 2e3,
    SHAPE: 6,
    SIZE: 5,
    COLOR: 0,
    BODY: {
        DAMAGE: basePolygonDamage / 4,
        DENSITY: 4,
        HEALTH: 10,
        PENETRATION: 2,
        RESIST: 2,
        PUSHABILITY: 0.25,
        ACCELERATION: 0.015
    },
    DRAW_HEALTH: true,
    INTANGIBLE: false,
};

exports.betaGem =  makeLaby(exports.gem, 1);
exports.alphaGem = makeLaby(exports.gem, 2);

exports.jewel = {
    PARENT: ["food"],
    LABEL: "Jewel",
    VALUE: 1e5,
    SHAPE: 6,
    SIZE: 12,
    COLOR: 3,
    BODY: {
        DAMAGE: basePolygonDamage / 4,
        DENSITY: 4,
        HEALTH: 50,
        PENETRATION: 2,
        RESIST: 2,
        PUSHABILITY: 0.25,
        ACCELERATION: 0.015
    },
    DRAW_HEALTH: true,
    INTANGIBLE: false,
    GIVE_KILL_MESSAGE: true,
};

exports.betaJewel = makeLaby(exports.jewel, 1);
exports.alphaJewel = makeLaby(exports.jewel, 2);

// SQUARES
exports.square = {
    PARENT: ["food"],
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
        ACCELERATION: 0.0075
    },
    DRAW_HEALTH: true,
    INTANGIBLE: false,
};
exports.shinySquare = makeRare(exports.square, 0);
exports.legendarySquare = makeRare(exports.square, 1);
exports.shadowSquare = makeRare(exports.square, 2);
exports.rainbowSquare = makeRare(exports.square, 3);
exports.transSquare = makeRare(exports.square, 4);

exports.betaSquare = makeUpgraded(exports.square, 0);
exports.alphaSquare = makeUpgraded(exports.square, 1);

exports.newBetaSquare = makeLaby(exports.square, 1);
exports.newAlphaSquare = makeLaby(exports.square, 2);
exports.omegaSquare = makeLaby(exports.square, 3);
exports.gammaSquare = makeLaby(exports.square, 4);
exports.deltaSquare = makeLaby(exports.square, 5);

exports.shinyBetaSquare = makeLaby(exports.shinySquare, 1);
exports.legendaryBetaSquare = makeLaby(exports.legendarySquare, 1);
exports.shadowBetaSquare = makeLaby(exports.shadowSquare, 1);
exports.rainbowBetaSquare = makeLaby(exports.rainbowSquare, 1);
exports.transBetaSquare = makeLaby(exports.transSquare, 1);

exports.shinyAlphaSquare = makeLaby(exports.shinySquare, 2);
exports.legendaryAlphaSquare = makeLaby(exports.legendarySquare, 2);
exports.shadowAlphaSquare = makeLaby(exports.shadowSquare, 2);
exports.rainbowAlphaSquare = makeLaby(exports.rainbowSquare, 2);
exports.transAlphaSquare = makeLaby(exports.transSquare, 2);

exports.shinyOmegaSquare = makeLaby(exports.shinySquare, 3);
exports.legendaryOmegaSquare = makeLaby(exports.legendarySquare, 3);
exports.shadowOmegaSquare = makeLaby(exports.shadowSquare, 3);
exports.rainbowOmegaSquare = makeLaby(exports.rainbowSquare, 3);
exports.transOmegaSquare = makeLaby(exports.transSquare, 3);

exports.shinyGammaSquare = makeLaby(exports.shinySquare, 4);
exports.legendaryGammaSquare = makeLaby(exports.legendarySquare, 4);
exports.shadowGammaSquare = makeLaby(exports.shadowSquare, 4);
exports.rainbowGammaSquare = makeLaby(exports.rainbowSquare, 4);
exports.transGammaSquare = makeLaby(exports.transSquare, 4);

exports.shinyDeltaSquare = makeLaby(exports.shinySquare, 5);
exports.legendaryDeltaSquare = makeLaby(exports.legendarySquare, 5);
exports.shadowDeltaSquare = makeLaby(exports.shadowSquare, 5);
exports.rainbowDeltaSquare = makeLaby(exports.rainbowSquare, 5);
exports.transDeltaSquare = makeLaby(exports.transSquare, 5);

exports.carbonSquare = {
    PARENT: ["food"],
    LABEL: "Diamond",
    VALUE: 30,
    SHAPE: 4.5,
    SIZE: 12,
    COLOR: 63,
    BODY: {
        DAMAGE: basePolygonDamage,
        DENSITY: 4,
        HEALTH: basePolygonHealth * 2,
        PENETRATION: 2,
        ACCELERATION: 0.0075
    },
    DRAW_HEALTH: true,
    INTANGIBLE: false,
};

exports.betaCarbonSquare = makeLaby(exports.carbonSquare, 1);
exports.alphaCarbonSquare = makeLaby(exports.carbonSquare, 2);
// TRIANGLES
exports.triangle = {
    PARENT: ["food"],
    LABEL: "Triangle",
    VALUE: 120,
    SHAPE: 3,
    SIZE: 9,
    COLOR: 2,
    BODY: {
        DAMAGE: basePolygonDamage,
        DENSITY: 6,
        HEALTH: 3 * basePolygonHealth,
        RESIST: 1.15,
        PENETRATION: 1.5,
        ACCELERATION: 0.005
    },
    DRAW_HEALTH: true,
};
exports.shinyTriangle = makeRare(exports.triangle, 0);
exports.legendaryTriangle = makeRare(exports.triangle, 1);
exports.shadowTriangle = makeRare(exports.triangle, 2);
exports.rainbowTriangle = makeRare(exports.triangle, 3);
exports.transTriangle = makeRare(exports.triangle, 4);

exports.betaTriangle = makeUpgraded(exports.triangle, 0);
exports.alphaTriangle = makeUpgraded(exports.triangle, 1);

exports.newBetaTriangle = makeLaby(exports.triangle, 1);
exports.newAlphaTriangle = makeLaby(exports.triangle, 2);
exports.omegaTriangle = makeLaby(exports.triangle, 3);
exports.gammaTriangle = makeLaby(exports.triangle, 4);
exports.deltaTriangle = makeLaby(exports.triangle, 5);

exports.shinyBetaTriangle = makeLaby(exports.shinyTriangle, 1);
exports.legendaryBetaTriangle = makeLaby(exports.legendaryTriangle, 1);
exports.shadowBetaTriangle = makeLaby(exports.shadowTriangle, 1);
exports.rainbowBetaTriangle = makeLaby(exports.rainbowTriangle, 1);
exports.transBetaTriangle = makeLaby(exports.transTriangle, 1);

exports.shinyAlphaTriangle = makeLaby(exports.shinyTriangle, 2);
exports.legendaryAlphaTriangle = makeLaby(exports.legendaryTriangle, 2);
exports.shadowAlphaTriangle = makeLaby(exports.shadowTriangle, 2);
exports.rainbowAlphaTriangle = makeLaby(exports.rainbowTriangle, 2);
exports.transAlphaTriangle = makeLaby(exports.transTriangle, 2);

exports.shinyOmegaTriangle = makeLaby(exports.shinyTriangle, 3);
exports.legendaryOmegaTriangle = makeLaby(exports.legendaryTriangle, 3);
exports.shadowOmegaTriangle = makeLaby(exports.shadowTriangle, 3);
exports.rainbowOmegaTriangle = makeLaby(exports.rainbowTriangle, 3);
exports.transOmegaTriangle = makeLaby(exports.transTriangle, 3);

exports.shinyGammaTriangle = makeLaby(exports.shinyTriangle, 4);
exports.legendaryGammaTriangle = makeLaby(exports.legendaryTriangle, 4);
exports.shadowGammaTriangle = makeLaby(exports.shadowTriangle, 4);
exports.rainbowGammaTriangle = makeLaby(exports.rainbowTriangle, 4);
exports.transGammaTriangle = makeLaby(exports.transTriangle, 4);

exports.shinyDeltaTriangle = makeLaby(exports.shinyTriangle, 5);
exports.legendaryDeltaTriangle = makeLaby(exports.legendaryTriangle, 5);
exports.shadowDeltaTriangle = makeLaby(exports.shadowTriangle, 5);
exports.rainbowDeltaTriangle = makeLaby(exports.rainbowTriangle, 5);
exports.transDeltaTriangle = makeLaby(exports.transTriangle, 5);

exports.carbonTriangle = {
    PARENT: ["food"],
    LABEL: "Cone",
    VALUE: 120,
    SHAPE: 3.5,
    SIZE: 11,
    COLOR: 52,
    BODY: {
        DAMAGE: basePolygonDamage,
        DENSITY: 6,
        HEALTH: 6 * basePolygonHealth,
        RESIST: 1.15,
        PENETRATION: 1.5,
        ACCELERATION: 0.005
    },
    DRAW_HEALTH: true,
};

exports.betaCarbonTriangle = makeLaby(exports.carbonTriangle, 1);
exports.alphaCarbonTriangle = makeLaby(exports.carbonTriangle, 2);
// PENTAGONS
exports.pentagon = {
    PARENT: ["food"],
    LABEL: "Pentagon",
    VALUE: 400,
    SHAPE: 5,
    SIZE: 16,
    COLOR: 14,
    BODY: {
        DAMAGE: 1.5 * basePolygonDamage,
        DENSITY: 8,
        HEALTH: 10 * basePolygonHealth,
        RESIST: 1.25,
        PENETRATION: 1.1,
        ACCELERATION: 0.0035
    },
    DRAW_HEALTH: true,
};
exports.shinyPentagon = makeRare(exports.pentagon, 0);
exports.legendaryPentagon = makeRare(exports.pentagon, 1);
exports.shadowPentagon = makeRare(exports.pentagon, 2);
exports.rainbowPentagon = makeRare(exports.pentagon, 3);
exports.transPentagon = makeRare(exports.pentagon, 4);

exports.betaPentagon = makeUpgraded(exports.pentagon, 0);
exports.alphaPentagon = makeUpgraded(exports.pentagon, 1);

exports.newBetaPentagon = makeLaby(exports.pentagon, 1);
exports.newAlphaPentagon = makeLaby(exports.pentagon, 2);
exports.omegaPentagon = makeLaby(exports.pentagon, 3);
exports.gammaPentagon = makeLaby(exports.pentagon, 4);
exports.deltaPentagon = makeLaby(exports.pentagon, 5);

exports.shinyBetaPentagon = makeLaby(exports.shinyPentagon, 1);
exports.legendaryBetaPentagon = makeLaby(exports.legendaryPentagon, 1);
exports.shadowBetaPentagon = makeLaby(exports.shadowPentagon, 1);
exports.rainbowBetaPentagon = makeLaby(exports.rainbowPentagon, 1);
exports.transBetaPentagon = makeLaby(exports.transPentagon, 1);

exports.shinyAlphaPentagon = makeLaby(exports.shinyPentagon, 2);
exports.legendaryAlphaPentagon = makeLaby(exports.legendaryPentagon, 2);
exports.shadowAlphaPentagon = makeLaby(exports.shadowPentagon, 2);
exports.rainbowAlphaPentagon = makeLaby(exports.rainbowPentagon, 2);
exports.transAlphaPentagon = makeLaby(exports.transPentagon, 2);

exports.shinyOmegaPentagon = makeLaby(exports.shinyPentagon, 3);
exports.legendaryOmegaPentagon = makeLaby(exports.legendaryPentagon, 3);
exports.shadowOmegaPentagon = makeLaby(exports.shadowPentagon, 3);
exports.rainbowOmegaPentagon = makeLaby(exports.rainbowPentagon, 3);
exports.transOmegaPentagon = makeLaby(exports.transPentagon, 3);

exports.shinyGammaPentagon = makeLaby(exports.shinyPentagon, 4);
exports.legendaryGammaPentagon = makeLaby(exports.legendaryPentagon, 4);
exports.shadowGammaPentagon = makeLaby(exports.shadowPentagon, 4);
exports.rainbowGammaPentagon = makeLaby(exports.rainbowPentagon, 4);
exports.transGammaPentagon = makeLaby(exports.transPentagon, 4);

exports.shinyDeltaPentagon = makeLaby(exports.shinyPentagon, 5);
exports.legendaryDeltaPentagon = makeLaby(exports.legendaryPentagon, 5);
exports.shadowDeltaPentagon = makeLaby(exports.shadowPentagon, 5);
exports.rainbowDeltaPentagon = makeLaby(exports.rainbowPentagon, 5);
exports.transDeltaPentagon = makeLaby(exports.transPentagon, 5);

exports.carbonPentagon = {
    PARENT: ["food"],
    LABEL: "Pentangle",
    VALUE: 400,
    SHAPE: 5.5,
    SIZE: 19,
    COLOR: 64,
    BODY: {
        DAMAGE: 1.5 * basePolygonDamage,
        DENSITY: 8,
        HEALTH: 18 * basePolygonHealth,
        RESIST: 1.25,
        PENETRATION: 1.1,
        ACCELERATION: 0.0035
    },
    DRAW_HEALTH: true,
};

exports.betaCarbonPentagon = makeLaby(exports.carbonPentagon, 1);
exports.alphaCarbonPentagon = makeLaby(exports.carbonPentagon, 2);
// HEXAGON
exports.hexagon = {
    PARENT: ["food"],
    LABEL: "Hexagon",
    VALUE: 2500,
    SHAPE: 6,
    SIZE: 18,
    COLOR: 0, //34
    BODY: {
        DAMAGE: 1.7 * basePolygonDamage,
        DENSITY: 8,
        HEALTH: 12 * basePolygonHealth,
        RESIST: 1.3,
        PENETRATION: 1.1,
        ACCELERATION: 0.003
    },
    DRAW_HEALTH: true,
};
exports.shinyHexagon = makeRare(exports.hexagon, 0);
exports.legendaryHexagon = makeRare(exports.hexagon, 1);
exports.shadowHexagon = makeRare(exports.hexagon, 2);
exports.rainbowHexagon = makeRare(exports.hexagon, 3);
exports.transHexagon = makeRare(exports.hexagon, 4);

exports.betaHexagon = makeUpgraded(exports.hexagon, 0);
exports.alphaHexagon = makeUpgraded(exports.hexagon, 1);

exports.newBetaHexagon = makeLaby(exports.hexagon, 1);
exports.newAlphaHexagon = makeLaby(exports.hexagon, 2);
exports.omegaHexagon = makeLaby(exports.hexagon, 3);
exports.gammaHexagon = makeLaby(exports.hexagon, 4);
exports.deltaHexagon = makeLaby(exports.hexagon, 5);

exports.shinyBetaHexagon = makeLaby(exports.shinyHexagon, 1);
exports.legendaryBetaHexagon = makeLaby(exports.legendaryHexagon, 1);
exports.shadowBetaHexagon = makeLaby(exports.shadowHexagon, 1);
exports.rainbowBetaHexagon = makeLaby(exports.rainbowHexagon, 1);
exports.transBetaHexagon = makeLaby(exports.transHexagon, 1);

exports.shinyAlphaHexagon = makeLaby(exports.shinyHexagon, 2);
exports.legendaryAlphaHexagon = makeLaby(exports.legendaryHexagon, 2);
exports.shadowAlphaHexagon = makeLaby(exports.shadowHexagon, 2);
exports.rainbowAlphaHexagon = makeLaby(exports.rainbowHexagon, 2);
exports.transAlphaHexagon = makeLaby(exports.transHexagon, 2);

exports.shinyOmegaHexagon = makeLaby(exports.shinyHexagon, 3);
exports.legendaryOmegaHexagon = makeLaby(exports.legendaryHexagon, 3);
exports.shadowOmegaHexagon = makeLaby(exports.shadowHexagon, 3);
exports.rainbowOmegaHexagon = makeLaby(exports.rainbowHexagon, 3);
exports.transOmegaHexagon = makeLaby(exports.transHexagon, 3);

exports.shinyGammaHexagon = makeLaby(exports.shinyHexagon, 4);
exports.legendaryGammaHexagon = makeLaby(exports.legendaryHexagon, 4);
exports.shadowGammaHexagon = makeLaby(exports.shadowHexagon, 4);
exports.rainbowGammaHexagon = makeLaby(exports.rainbowHexagon, 4);
exports.transGammaHexagon = makeLaby(exports.transHexagon, 4);

exports.shinyDeltaHexagon = makeLaby(exports.shinyHexagon, 5);
exports.legendaryDeltaHexagon = makeLaby(exports.legendaryHexagon, 5);
exports.shadowDeltaHexagon = makeLaby(exports.shadowHexagon, 5);
exports.rainbowDeltaHexagon = makeLaby(exports.rainbowHexagon, 5);
exports.transDeltaHexagon = makeLaby(exports.transHexagon, 5);
exports.carbonHexagon = {
    PARENT: ["food"],
    LABEL: "Hexangle",
    VALUE: 2500,
    SHAPE: 6,
    SIZE: 20,
    COLOR: 50,
    BODY: {
        DAMAGE: 1.7 * basePolygonDamage,
        DENSITY: 8,
        HEALTH: 22 * basePolygonHealth,
        RESIST: 1.3,
        PENETRATION: 1.1,
        ACCELERATION: 0.003
    },
    DRAW_HEALTH: true,
};

exports.betaCarbonHexagon = makeLaby(exports.carbonHexagon, 1);
exports.alphaCarbonHexagon = makeLaby(exports.carbonHexagon, 2);
// BETA PENTAGONS 
/*exports.betaPentagon = {
    PARENT: ["food"],
    LABEL: "Beta Pentagon",
    VALUE: 2500,
    SHAPE: 5,
    SIZE: 30,
    COLOR: 14,
    BODY: {
        DAMAGE: 2 * basePolygonDamage,
        DENSITY: 30,
        HEALTH: 50 * basePolygonHealth,
        RESIST: Math.pow(1.25, 2),
        SHIELD: 20 * basePolygonHealth,
        REGEN: 0.2,
        ACCELERATION: 0.003
    },
    DRAW_HEALTH: true,
    GIVE_KILL_MESSAGE: true,
};
exports.shinyBetaPentagon = makeRare(exports.betaPentagon, 0);
exports.legendaryBetaPentagon = makeRare(exports.betaPentagon, 1);
exports.shadowBetaPentagon = makeRare(exports.betaPentagon, 2);
exports.rainbowBetaPentagon = makeRare(exports.betaPentagon, 3);
exports.transBetaPentagon = makeRare(exports.betaPentagon, 4);


// ALPHA PENTAGONS
exports.alphaPentagon = {
    PARENT: ["food"],
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
        ACCELERATION: 0.0025
    },
    DRAW_HEALTH: true,
    GIVE_KILL_MESSAGE: true,
};
exports.shinyAlphaPentagon = makeRare(exports.alphaPentagon, 0);
exports.legendaryAlphaPentagon = makeRare(exports.alphaPentagon, 1);
exports.shadowAlphaPentagon = makeRare(exports.alphaPentagon, 2);
exports.rainbowAlphaPentagon = makeRare(exports.alphaPentagon, 3);
exports.transAlphaPentagon = makeRare(exports.alphaPentagon, 4); */
// 3D POLYGONS
exports.sphereGlow = { BORDERLESS: true };
exports.sphere = {
    PARENT: ["food"],
    LABEL: "The Sphere",
    VALUE: 1e7,
    SHAPE: 0,
    SIZE: 9,
    COLOR: 18,
    BODY: {
        DAMAGE: 10,
        DENSITY: 15,
        HEALTH: 300,
        PENETRATION: 15,
        ACCELERATION: 0.002
    },
    DRAW_HEALTH: true,
    GIVE_KILL_MESSAGE: true,
    TURRETS: [{
        POSITION: [17, 0, 0, 0, 0, 1],
        TYPE: ["sphereGlow", { COLOR: { BASE: 18, BRIGHTNESS_SHIFT: -14 } }]
    }, {
        POSITION: [15, 1, -1, 0, 0, 1],
        TYPE: ["sphereGlow", { COLOR: { BASE: 18, BRIGHTNESS_SHIFT: -9 } }]
    }, {
        POSITION: [13, 2, -2, 0, 0, 1],
        TYPE: ["sphereGlow", { COLOR: { BASE: 18, BRIGHTNESS_SHIFT: -8 } }]
    }, {
        POSITION: [11, 3, -3, 0, 0, 1],
        TYPE: ["sphereGlow", { COLOR: { BASE: 18, BRIGHTNESS_SHIFT: -3 } }]
    }, {
        POSITION: [8, 3.25, -3.25, 0, 0, 1],
        TYPE: ["sphereGlow", { COLOR: { BASE: 18, BRIGHTNESS_SHIFT: 3 } }]
    }, {
        POSITION: [6, 3, -3, 0, 0, 1],
        TYPE: ["sphereGlow", { COLOR: { BASE: 18, BRIGHTNESS_SHIFT: 9 } }]
    }]
};
exports.cube = {
    PARENT: ["food"],
    LABEL: "The Cube",
    VALUE: 2e7,
    SIZE: 10,
    COLOR: 18,
    SHAPE: "M 0.0575 0.0437 V 0.9921 L 0.8869 0.5167 V -0.4306 L 0.0575 0.0437 Z M -0.0583 0.0437 V 0.9921 L -0.8869 0.5159 V -0.4306 L -0.0583 0.0437 Z M 0 -0.0556 L 0.829 -0.5266 L 0 -1 L -0.8254 -0.527 L 0 -0.0556",
    BODY: {
        DAMAGE: 12,
        DENSITY: 20,
        HEALTH: 500,
        PENETRATION: 17.5,
        ACCELERATION: 0.002
    },
    DRAW_HEALTH: true,
    INTANGIBLE: false,
    GIVE_KILL_MESSAGE: true,
};
exports.tetrahedron = {
    PARENT: ["food"],
    LABEL: "The Tetrahedron",
    VALUE: 3e7,
    SIZE: 12,
    COLOR: 18,
    SHAPE: "M 0.058 0.044 V 1 L 0.894 -0.434 L 0.058 0.044 Z M -0.0588 0.044 V 1 L -0.894 -0.434 L -0.0588 0.044 Z M 0 -0.056 L 0.8356 -0.5308 L -0.832 -0.5312 L 0 -0.056",
    BODY: {
        DAMAGE: 15,
        DENSITY: 23,
        HEALTH: 666,
        PENETRATION: 22.5,
        ACCELERATION: 0.002
    },
    DRAW_HEALTH: true,
    GIVE_KILL_MESSAGE: true
};
exports.octahedron = {
    PARENT: ["food"],
    LABEL: "The Octahedron",
    VALUE: 4e7,
    SIZE: 13,
    COLOR: 18,
    SHAPE: "M 0.06 -0.06 L 0.95 -0.06 L 0.06 -0.95 L 0.06 -0.06 M -0.06 0.06 L -0.06 0.95 L -0.95 0.06 L -0.06 0.06 M -0.06 -0.06 L -0.95 -0.06 L -0.06 -0.95 L -0.06 -0.06 M 0.06 0.06 L 0.06 0.95 L 0.95 0.06 L 0.06 0.06",
    BODY: {
        DAMAGE: 18,
        DENSITY: 26,
        HEALTH: 866,
        PENETRATION: 30,
        ACCELERATION: 0.002
    },
    DRAW_HEALTH: true,
    GIVE_KILL_MESSAGE: true
};
exports.dodecahedron = {
    PARENT: ["food"],
    LABEL: "The Dodecahedron",
    VALUE: 5e7,
    SIZE: 18,
    COLOR: 18,
    SHAPE: "M -0.3273 -0.4318 H 0.3045 L 0.5068 0.1727 L -0.0091 0.5455 L -0.5227 0.1727 L -0.3273 -0.4318 Z M -0.6068 0.2682 L -0.0773 0.6545 V 0.9591 L -0.5955 0.7977 L -0.9136 0.3545 L -0.6068 0.2682 Z M 0.5909 0.2682 L 0.0523 0.6591 V 0.9636 L 0.5773 0.7955 L 0.8955 0.3545 L 0.5909 0.2682 Z M -0.65 0.1455 L -0.4477 -0.4818 L -0.6318 -0.7505 L -0.9545 -0.3182 V 0.2318 L -0.65 0.1455 Z M 0.4273 -0.4841 L 0.6318 0.1455 L 0.9341 0.2341 V -0.3136 L 0.6145 -0.7591 L 0.4273 -0.4841 Z M -0.0091 -1 L -0.5318 -0.8341 L -0.3455 -0.5609 H 0.3227 L 0.5159 -0.8314 L -0.0091 -1",
    BODY: {
        DAMAGE: 22.5,
        DENSITY: 30,
        HEALTH: 1000,
        RESIST: 10,
        PENETRATION: 35,
        ACCELERATION: 0.002
    },
    DRAW_HEALTH: true,
    GIVE_KILL_MESSAGE: true,
};
exports.icosahedron = {
    PARENT: ["food"],
    LABEL: "The Icosahedron",
    VALUE: 1e8,
    SIZE: 20,
    COLOR: 18,
    SHAPE: "M -0.39 -0.245 L 0.392 -0.245 L 0 0.47 L -0.39 -0.245 Z M -0.465 -0.2 L -0.893 0.475 L -0.073 0.51 L -0.465 -0.2 Z M 0.4636 -0.2 L 0.073 0.509 L 0.891 0.4736 L 0.4636 -0.2 Z M 0 -1 L -0.39 -0.33 L 0.389 -0.328 L 0 -1 Z M -0.142 -0.925 L -0.875 -0.506 L -0.48 -0.339 L -0.142 -0.925 Z M -0.925 0.366 L -0.925 -0.431 L -0.525 -0.266 L -0.925 0.366 Z M -0.042 0.595 L -0.808 0.562 L -0.042 1 L -0.042 0.595 Z M 0.042 0.595 L 0.808 0.562 L 0.042 1 L 0.042 0.595 Z M 0.142 -0.925 L 0.858 -0.516 L 0.48 -0.339 L 0.142 -0.925 Z M 0.925 0.366 L 0.925 -0.452 L 0.523 -0.269 L 0.925 0.366 Z",
    BODY: {
        DAMAGE: 17.5,
        DENSITY: 25,
        HEALTH: 1200,
        RESIST: 7.5,
        PENETRATION: 22.5,
        ACCELERATION: 0.002
    },
    DRAW_HEALTH: true,
    GIVE_KILL_MESSAGE: true,
};

// RELICS
for (let [gemColor, name] of [
    [undefined, ""],
    [30, "Power"],
    [31, "Space"],
    [32, "Reality"],
    [33, "Soul"],
    [34, "Time"],
    [35, "Mind"]
]) {
    let gem;
    if (gemColor) {
        gem = exports[name + "Gem"] = {
            PARENT: ['gem'],
            LABEL: name + ' Gem',
            SHAPE: 6,
            COLOR: gemColor
        }
    }

    exports[name + "EggRelic"] = makeRelic(exports.egg, 0.5, gem, 7);
    exports[name + "BetaEggRelic"] = makeRelic(exports.betaEgg, 0.5, gem, 7);
    exports[name + "AlphaEggRelic"] = makeRelic(exports.alphaEgg, 0.5, gem, 7);
    exports[name + "SquareRelic"] = makeRelic(exports.square, 1, gem);
    exports[name + "BetaSquareRelic"] = makeRelic(exports.betaSquare, 1, gem);
    exports[name + "AlphaSquareRelic"] = makeRelic(exports.alphaSquare, 1, gem);
    exports[name + "TriangleRelic"] = makeRelic(exports.triangle, 1.45, gem);
    exports[name + "BetaTriangleRelic"] = makeRelic(exports.betaTriangle, 1.45, gem);
    exports[name + "AlphaTriangleRelic"] = makeRelic(exports.alphaTriangle, 1.45, gem);
    exports[name + "PentagonRelic"] = makeRelic(exports.pentagon, -0.6, gem);
    exports[name + "BetaPentagonRelic"] = makeRelic(exports.betaPentagon, -0.6, gem);
    exports[name + "AlphaPentagonRelic"] = makeRelic(exports.alphaPentagon, -0.6, gem);
    exports[name + "HexagonRelic"] = makeRelic(exports.hexagon, -0.4, gem);
    exports[name + "BetaHexagonRelic"] = makeRelic(exports.betaHexagon, -0.4, gem);
    exports[name + "AlphaHexagonRelic"] = makeRelic(exports.alphaHexagon, -0.4, gem);
}

exports.tesseract = {
    PARENT: ["food"],
    LABEL: "The Tesseract",
    VALUE: 42e7,
    SIZE: 25,
    COLOR: 18,
    SHAPE: "M -0.43 0.35 L -0.71 0.63 L -0.71 -0.63 L -0.43 -0.35 L -0.43 0.35 M -0.35 0.43 L -0.63 0.71 L 0.63 0.71 L 0.35 0.43 L -0.35 0.43 M 0.35 -0.43 L 0.63 -0.71 L -0.63 -0.71 L -0.35 -0.43 L 0.35 -0.43 M 0.43 -0.35 L 0.71 -0.63 L 0.71 0.63 L 0.43 0.35 L 0.43 -0.35 M 0.32 0.32 L 0.32 -0.32 L -0.32 -0.32 L -0.32 0.32 L 0.32 0.32",
    BODY: {
        DAMAGE: 25,
        DENSITY: 40,
        HEALTH: 2000,
        PENETRATION: 50,
        ACCELERATION: 0.003
    },
    DRAW_HEALTH: true,
    GIVE_KILL_MESSAGE: true
};
//MISC
