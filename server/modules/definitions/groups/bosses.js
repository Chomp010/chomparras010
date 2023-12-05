const { combineStats, makeAuto, skillSet } = require('../facilitators.js');
const { base, gunCalcNames } = require('../constants.js');
const g = require('../gunvals.js');

exports.miniboss = {
    PARENT: ["genericTank"],
    TYPE: "miniboss",
    DANGER: 6,
    SKILL: skillSet({
        rld: 0.7,
        dam: 0.5,
        pen: 0.8,
        str: 0.8,
        spd: 0.2,
        atk: 0.3,
        hlt: 1,
        shi: 0.7,
        rgn: 0.7,
        mob: 0,
    }),
    LEVEL: 45,
    //CONTROLLERS: ["nearestDifferentMaster", "minion", "canRepel"],
    AI: {
        NO_LEAD: true,
    },
    FACING_TYPE: "autospin",
    HITS_OWN_TYPE: "hardOnlyBosses",
    BROADCAST_MESSAGE: "A visitor has left!",
};
// GUNS
exports.baseTrapTurret = {
    PARENT: ["genericTank"],
    LABEL: "Turret",
    INDEPENDENT: true,
    COLOR: 16,
    GUNS: [
        {
            POSITION: [16, 14, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [4, 14, 1.8, 16, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.lowpower, g.slow, g.pound, g.hexatrap]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
                AUTOFIRE: true,
            },
        },
    ],
}
exports.terrestrialTrapTurret = {
    PARENT: ["genericTank"],
    LABEL: "Turret",
    INDEPENDENT: true,
    COLOR: 16,
    GUNS: [
        {
            POSITION: [13, 14, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [4, 14, 1.8, 13, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.lowpower, g.pound, g.destroy, g.doublereload, g.hexatrap]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
                AUTOFIRE: true,
            },
        },
    ],
}
exports.titanTrapTurret = {
    PARENT: ["genericTank"],
    LABEL: "Turret",
    INDEPENDENT: true,
    COLOR: 16,
    GUNS: [ {
            POSITION: [16, 14, 1, 0, 0, 0, 0],
        }, {
        POSITION: [7, 16, 1, 5, 0, 0, 0]
    }, {
            POSITION: [4, 14, 1.8, 16, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.lowpower, g.slow, g.pound, g.hexatrap, g.doublereload]),
                TYPE: "turretedTrap",
                STAT_CALCULATOR: gunCalcNames.trap,
                AUTOFIRE: true,
            },
        },
    ],
}
exports.machineTripleTurret = {
    PARENT: ["genericTank"],
    LABEL: "Machine Gun",
    BODY: {
        FOV: 2,
    },
    CONTROLLERS: [
        "canRepel",
        "onlyAcceptInArc",
        "mapAltToFire",
        "nearestDifferentMaster",
    ],
    COLOR: 5,
    GUNS: [
        {
            POSITION: [12, 10, 1.4, 8, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.flank]),
                TYPE: "bullet",
                AUTOFIRE: true,
            },
        },
        {
            POSITION: [12, 10, 1.4, 8, 0, 120, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.flank]),
                TYPE: "bullet",
                AUTOFIRE: true,
            },
        },
        {
            POSITION: [12, 10, 1.4, 8, 0, 240, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.flank]),
                TYPE: "bullet",
                AUTOFIRE: true,
            },
        },
    ],
};
exports.skimmerTurret = {
    PARENT: ["genericTank"],
    LABEL: "Skimmer",
    BODY: {
        FOV: 2 * base.FOV,
    },
    COLOR: 2,
    CONTROLLERS: [
        "canRepel",
        "onlyAcceptInArc",
        "mapAltToFire",
        "nearestDifferentMaster",
    ],
    GUNS: [
        {
            POSITION: [10, 14, -0.5, 9, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.pound,
                    g.arty,
                    g.arty,
                    g.skim,
                    { reload: 2 }
                ]),
                TYPE: "hypermissile",
            },
        },
        {
            POSITION: [17, 15, 1, 0, 0, 0, 0],
        },
    ],
};
exports.deltaSkimmerTurret = {
    PARENT: ["genericTank"],
    LABEL: "Skimmer",
    BODY: {
        FOV: 2 * base.FOV,
    },
    COLOR: 2,
    CONTROLLERS: [
        "canRepel",
        "onlyAcceptInArc",
        "mapAltToFire",
        "nearestDifferentMaster",
    ],
    GUNS: [
        {
            POSITION: [10, 14, -0.5, 9, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([ g.basic, g.pound, g.arty, g.arty, g.skim, { reload: 2 } ]),
                TYPE: "deltamissile",
            },
        },
        {
            POSITION: [10, 11, 0.8, 9, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([ g.basic, g.pound, g.arty, g.arty, g.skim, g.fake, { reload: 2 } ]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [17, 15, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [17, 10, -0.6, 0, 0, 0, 0],
        },
    ],
};
exports.twisterTurret = {
    PARENT: ["genericTank"],
    LABEL: "Twister",
    BODY: {
        FOV: 2,
    },
    COLOR: 13,
    CONTROLLERS: [
        "canRepel",
        "onlyAcceptInArc",
        "mapAltToFire",
        "nearestDifferentMaster",
    ],
    GUNS: [
        {
            POSITION: [10, 13, -0.5, 9, 0, 0, 0],
        },
        {
            POSITION: [17, 14, -1.4, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.pound,
                    g.arty,
                    g.arty,
                    g.skim,
                    g.morespeed,
                    g.one_third_reload,
                ]),
                TYPE: "spinmissile",
                STAT_CALCULATOR: gunCalcNames.sustained,
            },
        },
    ],
};
exports.hyperTwisterTurret = {
    PARENT: ["genericTank"],
    LABEL: "Twister",
    BODY: {
        FOV: 2,
    },
    COLOR: 13,
    CONTROLLERS: [
        "canRepel",
        "onlyAcceptInArc",
        "mapAltToFire",
        "nearestDifferentMaster",
    ],
    GUNS: [
        {
            POSITION: [10, 13, -0.5, 9, 0, 0, 0],
        },
        {
            POSITION: [17, 14, -1.4, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.pound,
                    g.arty,
                    g.arty,
                    g.skim,
                    g.morespeed,
                    g.one_third_reload,
                ]),
                TYPE: "hyperspinmissile",
                STAT_CALCULATOR: gunCalcNames.sustained,
            },
        },
    ],
};
exports.boomerTurret = {
    PARENT: ["genericTank"],
    LABEL: "Boomer",
    BODY: {
        FOV: 2,
    },
    CONTROLLERS: [
        "canRepel",
        "onlyAcceptInArc",
        "mapAltToFire",
        "nearestDifferentMaster",
    ],
    COLOR: 14,
    GUNS: [
        {
            POSITION: [7.75, 10, 1, 12, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.block, g.boomerang, g.fake]),
                TYPE: "boomerang",
            },
        },
        {
            POSITION: [6, 10, -1.5, 7, 0, 0, 0],
        },
        {
            POSITION: [2, 10, 1.3, 18, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.block, g.boomerang]),
                TYPE: "boomerang",
            },
        },
    ],
};
exports.triTrapGuardTurret = {
    PARENT: ["genericTank"],
    COLOR: 5,
    CONTROLLERS: [["spin", { independent: true }]],
    GUNS: [],
};
for(let i = 0; i < 3; i++) {
    exports.triTrapGuardTurret.GUNS.push(
        {
            POSITION: [17, 8, 1, 0, 0, 120*i, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [13, 8, 1, 0, 0, 120*i+60, 0],
        },
        {
            POSITION: [4, 8, 1.7, 13, 0, 120*i+60, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
    )
};
exports.eliteSpinnerCyclone = {
    PARENT: ["genericTank"],
    COLOR: 5,
    CONTROLLERS: [["spin", { independent: true }]],
    GUNS: [],
};
for (let i = 0; i < 12; i++) {
    let delay;
    switch (i % 4) {
        case 0:
            delay = 0;
            break;
        case 1:
            delay = 0.5;
            break;
        case 2:
            delay = 0.25;
            break;
        case 3:
            delay = 0.75;
            break;
    }
    exports.eliteSpinnerCyclone.GUNS.push(
        {
            POSITION: [15, 3.5, 1, 0, 0, 30 * i, delay],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.twin,
                    g.puregunner,
                    g.hurricane,
                ]),
                TYPE: "bullet",
            },
        },
    )
};

// ELITE CRASHERS
exports.elite = {
    PARENT: ["miniboss"],
    LABEL: "Elite Crasher",
    COLOR: 5,
    SHAPE: 3,
    SIZE: 27,
    VARIES_IN_SIZE: true,
    VALUE: 15e4,
    BODY: {
        FOV: 1.25,
        SPEED: 0.1 * base.SPEED,
        HEALTH: 7 * base.HEALTH,
        DAMAGE: 2.5 * base.DAMAGE,
    },
    CONTROLLERS: ["nearestDifferentMaster", "minion", "canRepel"],
};
exports.eliteDestroyer = {
    PARENT: ["elite"],
    //LABEL: "Elite Destroyer",
    GUNS: [
        {
            POSITION: [5, 16, 1, 6, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.pound, g.destroy]),
                TYPE: "bullet",
                LABEL: "Devastator",
            },
        },
        {
            POSITION: [5, 16, 1, 6, 0, 60, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.pound, g.destroy]),
                TYPE: "bullet",
                LABEL: "Devastator",
            },
        },
        {
            POSITION: [5, 16, 1, 6, 0, -60, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.pound, g.destroy]),
                TYPE: "bullet",
                LABEL: "Devastator",
            },
        },
    ],
    TURRETS: [
        {
            POSITION: [11, 0, 0, 180, 360, 0],
            TYPE: ["crasherSpawner"],
        },
        {
            POSITION: [11, 0, 0, 60, 360, 0],
            TYPE: ["crasherSpawner"],
        },
        {
            POSITION: [11, 0, 0, -60, 360, 0],
            TYPE: ["crasherSpawner"],
        },
        {
            POSITION: [11, 0, 0, 0, 360, 1],
            TYPE: [
                "bigauto4gun",
                {
                    INDEPENDENT: true,
                    COLOR: 5,
                },
            ],
        },
    ],
};
exports.eliteGunner = {
    PARENT: ["elite"],
    //LABEL: "Elite Gunner",
    FACING_TYPE: "toTarget",
    GUNS: [
        {
            POSITION: [14, 16, 1, 0, 0, 180, 0],
        },
        {
            POSITION: [4, 16, 1.5, 14, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                TYPE: [
                    "pillbox",
                    {
                        INDEPENDENT: true,
                    },
                ],
            },
        },
        {
            POSITION: [6, 14, -2, 2, 0, 60, 0],
        },
        {
            POSITION: [6, 14, -2, 2, 0, 300, 0],
        },
    ],
    AI: {
        NO_LEAD: false,
    },
    TURRETS: [
        {
            POSITION: [14, 8, 0, 60, 180, 0],
            TYPE: ["auto4gun"],
        },
        {
            POSITION: [14, 8, 0, 300, 180, 0],
            TYPE: ["auto4gun"],
        },
    ],
};
exports.eliteSprayer = {
    PARENT: ["elite"],
    //LABEL: "Elite Sprayer",
    SKILL: [0, 9, 3, 9, 2, 9, 9, 9, 9, 0],
    AI: { NO_LEAD: false },
    HAS_NO_RECOIL: true,
    TURRETS: [
        {
            /*    SIZE         X             Y         ANGLE        ARC */
            POSITION: [6, 0, 0, 0, 360, 1],
            TYPE: ["machineTripleTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [9, 6, -5, 180, 130, 0],
            TYPE: ["sprayer", { COLOR: 16 }],
        },
        {
            POSITION: [9, 6, 5, 180, 130, 0],
            TYPE: ["sprayer", { COLOR: 16 }],
        },
        {
            POSITION: [9, 6, 5, 60, 130, 0],
            TYPE: ["sprayer", { COLOR: 16 }],
        },
        {
            POSITION: [9, 6, -5, 60, 130, 0],
            TYPE: ["sprayer", { COLOR: 16 }],
        },
        {
            POSITION: [9, 6, 5, -60, 130, 0],
            TYPE: ["sprayer", { COLOR: 16 }],
        },
        {
            POSITION: [9, 6, -5, -60, 130, 0],
            TYPE: ["sprayer", { COLOR: 16 }],
        },
    ],
};
exports.eliteBattleship = {
    PARENT: ["elite"],
    //LABEL: "Elite Battleship",
    GUNS: [
        {
            POSITION: [4, 6, 0.6, 7, -8, 60, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
                TYPE: "autoswarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [4, 6, 0.6, 7, 0, 60, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
                TYPE: "autoswarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [4, 6, 0.6, 7, 8, 60, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
                TYPE: "autoswarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [4, 6, 0.6, 7, -8, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
                TYPE: "autoswarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [4, 6, 0.6, 7, 0, 180, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
                TYPE: "autoswarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [4, 6, 0.6, 7, 8, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
                TYPE: "autoswarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [4, 6, 0.6, 7, -8, -60, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
                TYPE: "autoswarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [4, 6, 0.6, 7, 0, -60, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
                TYPE: "autoswarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [4, 6, 0.6, 7, 8, -60, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
                TYPE: "autoswarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
    ],
    TURRETS: [
        {
            POSITION: [5, 7, 0, 0, 360, 1],
            TYPE: [
                "autoTankGun",
                {
                    INDEPENDENT: true,
                    COLOR: 5,
                },
            ],
        },
        {
            POSITION: [5, 7, 0, 120, 360, 1],
            TYPE: [
                "autoTankGun",
                {
                    INDEPENDENT: true,
                    COLOR: 5,
                },
            ],
        },
        {
            POSITION: [5, 7, 0, 240, 360, 1],
            TYPE: [
                "autoTankGun",
                {
                    INDEPENDENT: true,
                    COLOR: 5,
                },
            ],
        },
    ],
};
exports.eliteSpawner = {
    PARENT: ["elite"],
    //LABEL: "Elite Spawner",
    //MAX_CHILDREN: 9,
    AI: { STRAFE: false },
    GUNS: [
        {
            POSITION: [11, 16, 1, 0, 0, 60, 0],
        },
        {
            POSITION: [11, 16, 1, 0, 0, 180, 0],
        },
        {
            POSITION: [11, 16, 1, 0, 0, 300, 0],
        },
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [2, 18, 1, 11, 0, 60, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.weak, g.weak, g.weak, g.celeslower]),
                TYPE: "sentrySwarm",
                SYNCS_SKILLS: true,
                AUTOFIRE: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                MAX_CHILDREN: 3,
            },
        },
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [2, 18, 1, 11, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.weak, g.weak, g.weak, g.celeslower]),
                TYPE: "sentryTrap",
                SYNCS_SKILLS: true,
                AUTOFIRE: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                MAX_CHILDREN: 3,
            },
        },
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [2, 18, 1, 11, 0, 300, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.weak, g.weak, g.weak, g.celeslower]),
                TYPE: "sentryGun",
                SYNCS_SKILLS: true,
                AUTOFIRE: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                MAX_CHILDREN: 3,
            },
        },
    ],
    TURRETS: [
        {
            POSITION: [11, 0, 0, 0, 360, 1],
            TYPE: ["auto4gun", { INDEPENDENT: false, COLOR: 5 }],
        },
    ],
};
exports.eliteTrapGuard = {
    PARENT: ["elite"],
    //LABEL: "Elite Trap Guard",
    AI: { STRAFE: false },
    GUNS: [],
    TURRETS: [
        {
            POSITION: [9.5, 0, 0, 0, 360, 1],
            TYPE: "triTrapGuardTurret",
        },
    ],
};
for (let i = 0; i < 3; i++) {
    exports.eliteTrapGuard.GUNS.push(
        {
            POSITION: [10.5, 6, 1, 0, 0, 120*i+60, 0],
        },
        {
            POSITION: [3, 6, 1.7, 10.5, 0, 120*i+60, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
    )
    exports.eliteTrapGuard.TURRETS.push(
        {
            POSITION: [5, 8, -7, 120*i+60, 160, 0],
            TYPE: ["autoTurret", { INDEPENDENT: false }],
        },
        {
            POSITION: [5, 8, 7, 120*i+60, 160, 0],
            TYPE: ["autoTurret", { INDEPENDENT: false }],
        },
    )
};
exports.eliteSpinner = {
    PARENT: ["elite"],
    //LABEL: "Elite Spinner",
    AI: { STRAFE: false },
    FACING_TYPE: "turnWithSpeed",
    GUNS: [],
    TURRETS: [
        {
            POSITION: [9.5, 0, 0, 0, 360, 1],
            TYPE: ["eliteSpinnerCyclone", {COLOR: 5}],
        },
    ],
};
for (let i = 0; i < 3; i++) {
    exports.eliteSpinner.GUNS.push(
        {
            POSITION: [9.5, 2, 1, -1.5, 11.5, 120*i+10, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.hurricane]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [9.5, 2, 1, 3.5, 6.5, 120*i+10, 1/3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.hurricane]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [9.5, 2, 1, 8.5, 1.5, 120*i+10, 2/3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.hurricane]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [2, 20, 0.75, 8, 0, 120*i+60, 0],
        },
    )
};
// FANMADE ELITE
exports.eliteBasic = {
    PARENT: ["elite"],
    //LABEL: "Elite Basic",
    AI: {
        NO_LEAD: false,
    },
    TURRETS: [
        {
            POSITION: [11, 0, 0, 0, 360, 1],
            TYPE: ["singlePound", { INDEPENDENT: true, CONTROLLERS: [ "canRepel", "onlyAcceptInArc", "mapAltToFire", "nearestDifferentMaster", ], }],
        },
    ],
};
for (let i = 0; i < 3; i++) {
    /*exports.eliteBasic.GUNS.push(
        {
            POSITION: [10.5, 6, 1, 0, 0, 120*i+60, 0],
        },
        {
            POSITION: [3, 6, 1.7, 10.5, 0, 120*i+60, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
    )*/
    exports.eliteBasic.TURRETS.push(
        {
            POSITION: [11, 6, 0, 120*i+60, 160, 0],
            TYPE: ["single3gun", { INDEPENDENT: false }],
        },
    )
};

exports.eliteRifle = {
    PARENT: ["elite"],
    LABEL: "Elite Rifle",
    SHAPE: 12,
    COLOR: 71,
    SIZE: 30,
    GUNS: [],
    TURRETS: [
        {
            POSITION: [10, 0, 0, 0, 360, 1],
            TYPE: [
                "musket",
                {
                    COLOR: 71,
                },
            ],
        },
    ],
};
for (let i = 0; i < 6; i++) {
    exports.eliteRifle.GUNS.push(
        {
            POSITION: [4, 3, 0.6, 8, -4, 60*i+60, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.lowpower]),
                TYPE: "autoswarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [4, 3, 0.6, 8, 4, 60*i+60, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.lowpower]),
                TYPE: "autoswarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
    )
    exports.eliteRifle.TURRETS.push(
        {
            POSITION: [6, 9, 0, 60*i+60, 160, 0],
            TYPE: ["rifle", { INDEPENDENT: false }],
        },
    )
};
// OLD ELITE
exports.oldEliteSprayer = {
    PARENT: ["elite"],
    AI: {
        NO_LEAD: false,
    },
    TURRETS: [
        {
            POSITION: [14, 6, 0, 180, 190, 0],
            TYPE: [
                "sprayer",
                {
                    COLOR: 5,
                },
            ],
        },
        {
            POSITION: [14, 6, 0, 60, 190, 0],
            TYPE: [
                "sprayer",
                {
                    COLOR: 5,
                },
            ],
        },
        {
            POSITION: [14, 6, 0, -60, 190, 0],
            TYPE: [
                "sprayer",
                {
                    COLOR: 5,
                },
            ],
        },
    ],
};

// DELTA CRASHERS
exports.armsraceElite = {
    PARENT: ["miniboss"],
    LABEL: "Delta Crasher",
    COLOR: 5,
    SHAPE: 3,
    SIZE: 28,
    VARIES_IN_SIZE: true,
    VALUE: 5e5,
    BODY: {
        FOV: 1.25,
        SPEED: 0.1 * base.SPEED,
        HEALTH: 15 * base.HEALTH,
        DAMAGE: 4 * base.DAMAGE,
    },
    CONTROLLERS: ["nearestDifferentMaster", "minion", "canRepel"],
};
exports.deltaSpawner = {
    PARENT: ["armsraceElite"],
    //LABEL: "Delta Spawner",
    //MAX_CHILDREN: 12,
    AI: { STRAFE: false },
    GUNS: [
        {
            POSITION: [11, 17, 1, 0, 0, 60, 0],
        },
        {
            POSITION: [11, 17, 1, 0, 0, 180, 0],
        },
        {
            POSITION: [11, 17, 1, 0, 0, 300, 0],
        },
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [3, 19, 1, 11, 0, 60, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.weak, g.weak, g.weak, g.celeslower]),
                TYPE: "sentrySwarm",
                SYNCS_SKILLS: true,
                AUTOFIRE: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                MAX_CHILDREN: 4,
            },
        },
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [3, 19, 1, 11, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.weak, g.weak, g.weak, g.celeslower]),
                TYPE: "sentryTrap",
                SYNCS_SKILLS: true,
                AUTOFIRE: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                MAX_CHILDREN: 4,
            },
        },
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [3, 19, 1, 11, 0, 300, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.weak, g.weak, g.weak, g.celeslower]),
                TYPE: "sentryGun",
                SYNCS_SKILLS: true,
                AUTOFIRE: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                MAX_CHILDREN: 4,
            },
        },
    ],
    TURRETS: [
        {
            POSITION: [11, 0, 0, 0, 360, 1],
            TYPE: ["bigauto4gun", { INDEPENDENT: false, COLOR: 5 }],
        },
    ],
};
exports.deltaBattleship = {
    PARENT: ["armsraceElite"],
    //LABEL: "Delta Battleship",
    GUNS: [
        {
            POSITION: [4, 6, 0.6, 7, -9, 60, 0.75],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
                TYPE: "autoswarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [4, 6, 0.6, 7, 3, 60, 0.25],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
                TYPE: "autoswarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [4, 6, 0.6, 7, -3, 60, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
                TYPE: "autoswarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [4, 6, 0.6, 7, 9, 60, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
                TYPE: "autoswarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [4, 6, 0.6, 7, -9, -60, 0.75],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
                TYPE: "autoswarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [4, 6, 0.6, 7, 3, -60, 0.25],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
                TYPE: "autoswarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [4, 6, 0.6, 7, -3, -60, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
                TYPE: "autoswarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [4, 6, 0.6, 7, 9, -60, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
                TYPE: "autoswarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [4, 6, 0.6, 7, -9, 180, 0.75],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
                TYPE: "autoswarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [4, 6, 0.6, 7, 3, 180, 0.25],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
                TYPE: "autoswarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [4, 6, 0.6, 7, -3, 180, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
                TYPE: "autoswarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [4, 6, 0.6, 7, 9, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
                TYPE: "autoswarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
    ],
    TURRETS: [
        {
            POSITION: [5, 7, 0, 0, 360, 1],
            TYPE: [
                "megaAutoTankgun",
                {
                    INDEPENDENT: true,
                    COLOR: 5,
                },
            ],
        },
        {
            POSITION: [5, 7, 0, 120, 360, 1],
            TYPE: [
                "megaAutoTankgun",
                {
                    INDEPENDENT: true,
                    COLOR: 5,
                },
            ],
        },
        {
            POSITION: [5, 7, 0, 240, 360, 1],
            TYPE: [
                "megaAutoTankgun",
                {
                    INDEPENDENT: true,
                    COLOR: 5,
                },
            ],
        },
    ],
};

exports.deltaSkimmer = {
    PARENT: ["armsraceElite"],
    LABEL: "Delta Skimmer",
    COLOR: 2,
    TURRETS: [
        {
            POSITION: [15, 5, 0, 60, 170, 0],
            TYPE: "deltaSkimmerTurret",
        },
        {
            POSITION: [15, 5, 0, 180, 170, 0],
            TYPE: "deltaSkimmerTurret",
        },
        {
            POSITION: [15, 5, 0, 300, 170, 0],
            TYPE: "deltaSkimmerTurret",
        },
        {
            POSITION: [10, 0, 0, 180, 0, 1],
            TYPE: ["enchantress", { MIRROR_MASTER_ANGLE: true, INDEPENDENT: true}],
        },
    ],
};
// Legionary Crasher
exports.legionaryTwin = {
    PARENT: ["auto4gun"],
    COLOR: 16,
    GUNS: [
        {
            POSITION: [17.5, 5, 1, 0, -4.5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.auto, g.gunner, g.twin, g.power, g.slow]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [17.5, 5, 1, 0, 4.5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.auto, g.gunner, g.twin, g.power, g.slow]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.legionaryPillbox = {
    PARENT: ["unsetTrap"],
    LABEL: "Pillbox",
    BODY: {
        SPEED: 1,
        DENSITY: 5,
    },
    DIE_AT_RANGE: true,
    TURRETS: [
        {
            POSITION: [11, 0, 0, 0, 360, 1],
            TYPE: "legionaryTwin",
        },
    ],
};
exports.legionaryCrasherTop = {
    PARENT: ["elite"],
    AI: { STRAFE: false, NO_LEAD: false },
    CONTROLLERS: [
        ["spin", { independent: true, speed: -0.005 }],
        //"nearestDifferentMaster",
    ],
    INDEPENDENT: true,
    GUNS: [],
    TURRETS: [],
};
for (let i = 0; i < 3; i++) {
    exports.legionaryCrasherTop.GUNS.push(
        {
            POSITION: [4, 9.5, 0.7, 7, 5, 120*i+60, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.pound, g.morespeed, g.morespeed, g.mini, {range: 1.5}]),
                TYPE: [ "swarm", { INDEPENDENT: true } ],
                STAT_CALCULATOR: gunCalcNames.swarm,
                AUTOFIRE: true,
                
            },
        },
        {
            POSITION: [4, 9.5, 0.7, 7, -5, 120*i+60, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.pound, g.morespeed, g.morespeed, g.mini, {range: 1.5}]),
                TYPE: [ "swarm", { INDEPENDENT: true } ],
                STAT_CALCULATOR: gunCalcNames.swarm,
                AUTOFIRE: true,
            },
        },
    )
    exports.legionaryCrasherTop.TURRETS.push(
        {
            POSITION: [9.5, 10, 0, 120*i, 190, 0],
            TYPE: "auto4gun",
        },
    )
};
exports.legionaryCrasher = {
    PARENT: ["elite"],
    LABEL: "Legionary Crasher",
    AI: { STRAFE: false, NO_LEAD: false },
    HAS_NO_RECOIL: true,
    VALUE: 5e6,
    SIZE: 80,
    BODY: {
        FOV: 1.5,
        SPEED: 0.1 * base.SPEED,
        HEALTH: 2000,
        DAMAGE: 5 * base.DAMAGE,
    },
    GUNS: [],
    TURRETS: [
        {
            POSITION: [12, 0, 0, 0, 360, 1],
            TYPE: "legionaryCrasherTop",
        }
    ],
};
for (let i = 0; i < 3; i++) {
    exports.legionaryCrasher.GUNS.push(
        {
            POSITION: [14.5, 13, 1, 0, 0, 120*i, 0],
        },
        {
            POSITION: [3, 13, 1.7, 14.5, 0, 120*i, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.block, g.pound, g.destroy, g.veryfast, g.mini, {maxSpeed: 3}]),
                TYPE: "legionaryPillbox",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
    )
};
for (let i = 0; i < 3; i++) {
    exports.legionaryCrasher.GUNS.push(
        {
            POSITION: [5, 12, 1.6, -11, 0, 120*i, 0],
        }
    )
    exports.legionaryCrasher.TURRETS.push(
        {
            POSITION: [14, 8, 0, 120*i+60, 180, 0],
            TYPE: [ "sprayer", { COLOR: 5, } ],
        },
    )
};

exports.sprayerLegion = {
    PARENT: ["elite"],
    UPGRADE_LABEL: "Sprayer Legion",
    AI: {
        NO_LEAD: false,
    },
    TURRETS: [
        {
            POSITION: [14, 6, 0, 180, 190, 0],
            TYPE: ["machineGun", {COLOR: 5}],
        },
        {
            POSITION: [14, 6, 0, 60, 190, 0],
            TYPE: ["machineGun", {COLOR: 5}],
        },
        {
            POSITION: [14, 6, 0, -60, 190, 0],
            TYPE: ["machineGun", {COLOR: 5}],
        },
    ],
};

// STRANGE BOSSES
exports.waferbread = {
    PARENT: ["sunchip"],
    SHAPE: 0
};
exports.eggBossBody = {
    PARENT: ["miniboss"],
    LABEL: "Egg Body",
    DANGER: 7,
    COLOR: 6,
    SHAPE: 0,
    SIZE: 26,
    FACING_TYPE: "autospin",
    VALUE: 2e5,
    BODY: {
        FOV: 0.5,
        SPEED: 0.12 * base.SPEED,
        HEALTH: 6 * base.HEALTH,
        DAMAGE: 2 * base.DAMAGE,
    },
    CONTROLLERS: ["nearestDifferentMaster", "minion", "canRepel"],
};
exports.sorcerer = {
    PARENT: ["miniboss"],
    LABEL: "Sorcerer",
    DANGER: 7,
    SHAPE: 0,
    COLOR: 6,
    SIZE: 26,
    MAX_CHILDREN: 50,
    FACING_TYPE: "autospin",
    VALUE: 2e5,
    BODY: {
        FOV: 0.5,
        SPEED: 0.12 * base.SPEED,
        HEALTH: 6 * base.HEALTH,
        DAMAGE: 2 * base.DAMAGE,
    },
    CONTROLLERS: ["nearestDifferentMaster", "minion", "canRepel"],
    GUNS: Array(2).fill().map((_, i) => ({
        POSITION: [3.5, 8.65, 1.2, 8, 0, i * 180, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.summoner, g.mach, g.machgun, { size: 0.4, spray: 150, speed: 2, shudder: 1.75 }]),
            TYPE: "waferbread",
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.necro,
            WAIT_TO_CYCLE: true,
        },
    }))
};
exports.squareBossBody = {
    PARENT: ["miniboss"],
    LABEL: "Square Body",
    DANGER: 8,
    COLOR: 13,
    SHAPE: 4,
    SIZE: 26,
    FACING_TYPE: "autospin",
    VALUE: 3e5,
    BODY: {
        FOV: 0.5,
        SPEED: 0.1 * base.SPEED,
        HEALTH: 7 * base.HEALTH,
        DAMAGE: 2.6 * base.DAMAGE,
    },
    CONTROLLERS: ["nearestDifferentMaster", "minion", "canRepel"],
};
exports.summoner = {
    PARENT: ["miniboss"],
    LABEL: "Summoner",
    DANGER: 8,
    SHAPE: 4,
    COLOR: 13,
    SIZE: 26,
    MAX_CHILDREN: 28,
    FACING_TYPE: "autospin",
    VALUE: 3e5,
    BODY: {
        FOV: 0.5,
        SPEED: 0.1 * base.SPEED,
        HEALTH: 7 * base.HEALTH,
        DAMAGE: 2.6 * base.DAMAGE,
    },
    CONTROLLERS: ["nearestDifferentMaster", "minion", "canRepel"],
    GUNS: Array(4).fill().map((_, i) => ({
        POSITION: [3.5, 8.65, 1.2, 8, 0, i * 90, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.summoner, { size: 0.8 }]),
            TYPE: ["sunchip"],
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.necro,
            WAIT_TO_CYCLE: true,
        },
    }))
};
exports.triangleBossBody = {
    PARENT: ["miniboss"],
    LABEL: "Triangle Body",
    DANGER: 8,
    SHAPE: 3.5,
    COLOR: 2,
    SIZE: 26,
    FACING_TYPE: "autospin",
    VALUE: 4e5,
    BODY: {
        FOV: 0.5,
        SPEED: 0.09 * base.SPEED,
        HEALTH: 10 * base.HEALTH,
        DAMAGE: 3 * base.DAMAGE,
    },
    CONTROLLERS: ["nearestDifferentMaster", "minion", "canRepel"],
};
exports.dorito = {
    PARENT: ["sunchip"],
    SHAPE: 3
};
exports.enchantress = {
    PARENT: ["miniboss"],
    LABEL: "Enchantress",
    DANGER: 8,
    SHAPE: 3.5,
    COLOR: 2,
    SIZE: 26,
    MAX_CHILDREN: 28,
    FACING_TYPE: "autospin",
    VALUE: 4e5,
    BODY: {
        FOV: 0.5,
        SPEED: 0.09 * base.SPEED,
        HEALTH: 10 * base.HEALTH,
        DAMAGE: 3 * base.DAMAGE,
    },
    CONTROLLERS: ["nearestDifferentMaster", "minion", "canRepel"],
    GUNS: Array(3).fill().map((_, i) => ({
        POSITION: [3.5, 8.65, 1.2, 8, 0, i * 120, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.summoner, { size: 0.9 }]),
            TYPE: "dorito",
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.necro,
            WAIT_TO_CYCLE: true,
        },
    }))
};
exports.pentagonBossBody = {
    PARENT: ["miniboss"],
    LABEL: "Pentagon Body",
    DANGER: 8,
    SHAPE: 5.5,
    COLOR: 14,
    SIZE: 26,
    FACING_TYPE: "autospin",
    VALUE: 5e5,
    BODY: {
        FOV: 0.5,
        SPEED: 0.08 * base.SPEED,
        HEALTH: 15 * base.HEALTH,
        DAMAGE: 4 * base.DAMAGE,
    },
    CONTROLLERS: ["nearestDifferentMaster", "minion", "canRepel"],
};
exports.demonchip = {
    PARENT: ["sunchip"],
    SHAPE: 5
};
exports.exorcistor = {
    PARENT: ["miniboss"],
    LABEL: "Exorcistor",
    DANGER: 8,
    SHAPE: 5.5,
    COLOR: 14,
    SIZE: 26,
    MAX_CHILDREN: 20,
    FACING_TYPE: "autospin",
    VALUE: 5e5,
    BODY: {
        FOV: 0.5,
        SPEED: 0.08 * base.SPEED,
        HEALTH: 15 * base.HEALTH,
        DAMAGE: 4 * base.DAMAGE,
    },
    CONTROLLERS: ["nearestDifferentMaster", "minion", "canRepel"],
    GUNS: Array(5).fill().map((_, i) => ({
        POSITION: [3.5, 8.65, 1.2, 8, 0, i * 72, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.summoner, g.destroy]),
            TYPE: "demonchip",
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.necro,
            WAIT_TO_CYCLE: true,
        },
    }))
};
exports.hexagonBossBody = {
    PARENT: ["miniboss"],
    LABEL: "Hexagon Body",
    DANGER: 8,
    SHAPE: 6,
    COLOR: 0,
    SIZE: 26,
    FACING_TYPE: "autospin",
    VALUE: 6e5,
    BODY: {
        FOV: 0.5,
        SPEED: 0.07 * base.SPEED, //0.08, 0.09, 0.1, 0.12
        HEALTH: 22 * base.HEALTH, //15, 10, 7, 6
        DAMAGE: 4.6 * base.DAMAGE, //4, 3, 2.6, 2
    },
    CONTROLLERS: ["nearestDifferentMaster", "minion", "canRepel"],
};
exports.shamanBoss = {
    PARENT: ["hexagonBossBody"],
    LABEL: "Shaman",
    MAX_CHILDREN: 20,
    GUNS: [],
};
for(let i = 0; i < 3; i++) {
    exports.shamanBoss.GUNS.push({
        POSITION: [3.5, 8.65, 1.2, 8, 0, i * 120, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.summoner, g.destroy, {size: 1.2,}]),
            TYPE: ["gemDrone", {INDEPENDENT: false}],
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.necro,
            WAIT_TO_CYCLE: true,
        },
    }, {
        POSITION: [3.5, 8.65, 1.2, 8, 0, i * 120 + 60, 0.5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.summoner, g.destroy, {size: 1.2,}]),
            TYPE: "gemDrone",
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.necro,
            WAIT_TO_CYCLE: true,
        },
    },
    );
};

exports.heptagonBossBody = {
    PARENT: ["miniboss"],
    LABEL: "Heptagon Body",
    DANGER: 8,
    SHAPE: 7.5,
    COLOR: 11,
    SIZE: 26,
    FACING_TYPE: "autospin",
    VALUE: 7e5,
    BODY: {
        FOV: 0.5,
        SPEED: 0.06 * base.SPEED, //0.08, 0.09, 0.1, 0.12
        HEALTH: 31 * base.HEALTH, //15, 10, 7, 6 (+1+i*2)
        DAMAGE: 5 * base.DAMAGE, //4, 3, 2.6, 2
    },
    CONTROLLERS: ["nearestDifferentMaster", "minion", "canRepel"],
};

exports.heptagonDrone = {
    PARENT: ["drone"],
    COLOR: 11,
    DRAW_HEALTH: true,
    SHAPE: 7,
    INDEPENDENT: true,
    BODY: {
        PUSHABILITY: 0.3,
        HEALTH: 0.3*5,
        DAMAGE: 3.375/5,
        SPEED: 1,
        DENSITY: 0.1,
        RESIST: 3,
        FOV: 100,
    },
}
exports.sangomaBoss = {
    PARENT: ["heptagonBossBody"],
    LABEL: "Sangoma",
    MAX_CHILDREN: 21,
    GUNS: [],
};
for(let i = 0; i < 7; i++) {
    exports.sangomaBoss.GUNS.push({
        POSITION: [3.5, 8.65, 1.2, 8, 0, i * (360/7), i / 7],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.summoner, g.destroy, {size: 1.2,}]),
            TYPE: "heptagonDrone",
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.necro,
            WAIT_TO_CYCLE: true,
        },
    },
    );
};
exports.eliteSkimmer = {
    PARENT: ["elite"],
    LABEL: "Elite Skimmer",
    COLOR: 2,
    TURRETS: [
        {
            POSITION: [15, 5, 0, 60, 170, 0],
            TYPE: "skimmerTurret",
        },
        {
            POSITION: [15, 5, 0, 180, 170, 0],
            TYPE: "skimmerTurret",
        },
        {
            POSITION: [15, 5, 0, 300, 170, 0],
            TYPE: "skimmerTurret",
        },
    ],
};
// ARMY MINIBOSSES
exports.armySentry = {
    PARENT: ["miniboss"],
    LABEL: "Army Sentry",
    DANGER: 5,
    SHAPE: 3,
    COLOR: 2,
    SIZE: 14,
    VARIES_IN_SIZE: true,
    VALUE: 13e2,
    BODY: {
        FOV: 1.25,
        SPEED: 0.5 * base.SPEED,
        HEALTH: 4 * base.HEALTH,
        DAMAGE: 1.5 * base.DAMAGE,
    },
    CONTROLLERS: ["nearestDifferentMaster", "minion", "canRepel"],
    MOTION_TYPE: 'motor',
    FACING_TYPE: 'locksFacing',
    DRAW_HEALTH: true,
    GIVE_KILL_MESSAGE: true
};
exports.armySentrySwarm = {
    PARENT: ["armySentry"],
    LABEL: "Army Cascader",
    GUNS: [{
        POSITION: [7, 14, .6, 7, 0, 60, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.flank, g.flank]),
            TYPE: ["swarm", { COLOR: 13,
                CONTROLLERS: ['canRepel']
            }],
            STAT_CALCULATOR: gunCalcNames.swarm,
        }
    }, {
        POSITION: [7, 14, .6, 7, 0, 180, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.flank, g.flank]),
            TYPE: ["swarm", { COLOR: 13,
                CONTROLLERS: ['canRepel']
            }],
            STAT_CALCULATOR: gunCalcNames.swarm,
        }
    }, {
        POSITION: [7, 14, .6, 7, 0, 300, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.flank, g.flank]),
            TYPE: ["swarm", { COLOR: 13,
                CONTROLLERS: ['canRepel']
            }],
            STAT_CALCULATOR: gunCalcNames.swarm,
        }
    }]
};
exports.armySentryGunTurret = {
    PARENT: ["genericTank"],
    LABEL: "",
    BODY: {
        FOV: 2.25
    },
    COLOR: 16,
    GUNS: [{
        POSITION: [21, 19.5, 1.2, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.anni, g.halfreload]),
            TYPE: ["bullet", { COLOR: 13, }],
            AUTOFIRE: true,
        }
    }]
};
exports.armySentryGun = makeAuto(exports.armySentry, 'Army Devastator', {
    type: exports.armySentryGunTurret,
    size: 12
});
exports.armyTrapTurret = {
    PARENT: ["genericTank"],
    LABEL: '',
    COLOR: 16,
    HAS_NO_RECOIL: true,
    GUNS: [{
        POSITION: [16, 14, 1, 0, 0, 0, 0]
    }, {
        POSITION: [4, 14, 1.8, 16, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.lowpower, g.fast, g.halfreload]),
            TYPE: ["trap", { COLOR: 13, }],
            STAT_CALCULATOR: gunCalcNames.trap,
        }
    }, {
        POSITION: [16, 14, 1, 0, 0, 120, 0]
    }, {
        POSITION: [4, 14, 1.8, 16, 0, 120, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.lowpower, g.fast, g.halfreload]),
            TYPE: ["trap", { COLOR: 13, }],
            STAT_CALCULATOR: gunCalcNames.trap,
        }
    }, {
        POSITION: [16, 14, 1, 0, 0, 240, 0]
    }, {
        POSITION: [4, 14, 1.8, 16, 0, 240, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.lowpower, g.fast, g.halfreload]),
            TYPE: ["trap", { COLOR: 13, }],
            STAT_CALCULATOR: gunCalcNames.trap,
        }
    }]
};
exports.armySentryTrap = makeAuto(exports.armySentry, 'Army Caltrop', {
    type: exports.armyTrapTurret,
    size: 12
});
exports.armyRangerTurret = {
    PARENT: ["genericTank"],
    LABEL: '',
    BODY: {
        FOV: 2.75
    },
    COLOR: 16,
    GUNS: [{
        POSITION: [27, 8.5, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass, g.lessreload]),
            TYPE: ["bullet", { COLOR: 13, }],
        }
    }, {
        POSITION: [5, 8.5, -1.6, 8, 0, 0, 0]
    }, {
        POSITION: [27, 8.5, 1, 0, 0, 180, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass, g.lessreload]),
            TYPE: ["bullet", { COLOR: 13, }],
        }
    }, {
        POSITION: [5, 8.5, -1.6, 8, 0, 180, 0]
    }]
};
exports.armySentryRanger = makeAuto(exports.armySentry, 'Army Expunger', {
    type: exports.armyRangerTurret,
    size: 12
});
exports.armySoldier = {
    PARENT: ["miniboss"],
    LABEL: "Army Soldier",
    DANGER: 5,
    SHAPE: "M 1.0607 0.3536 C 1.4142 -0 1.4142 -0 1.0607 -0.3536 C 0.8839 -0.5303 1.5026 -0.4419 0.7071 -0.7071 C 0.5303 -0.8839 0.8839 -0.8839 0.2652 -0.9723 C -0.5303 -1.2374 -0 -1.4142 -0.7071 -0.7071 C -1.2374 -0.1768 -1.2374 0.1768 -0.7071 0.7071 C 0 1.4142 -0.5303 1.2374 0.2652 0.9723 C 0.8839 0.8839 0.5303 0.8839 0.7071 0.7071 C 1.5026 0.4419 0.8839 0.5303 1.0607 0.3536",
    COLOR: 72,
    SIZE: 16,
    VARIES_IN_SIZE: true,
    VALUE: 13e2,
    BODY: {
        FOV: 1.25,
        SPEED: 0.5 * base.SPEED,
        HEALTH: 3 * base.HEALTH,
        DAMAGE: 1.5 * base.DAMAGE,
    },
    CONTROLLERS: ["nearestDifferentMaster", "minion", "canRepel"],
    MOTION_TYPE: 'motor',
    FACING_TYPE: 'locksFacing',
    DRAW_HEALTH: true,
    GIVE_KILL_MESSAGE: true
};
exports.armySoldierGun = {
    PARENT: ["armySoldier"],
    LABEL: 'Brute Combatant',
    FACING_TYPE: 'toTarget',
    GUNS: [
        {
            POSITION: [13, 3, 1, 0, -8, -7, 0.6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin]),
                TYPE: ["bullet", { COLOR: 3, }],
                LABEL: "Secondary",
            },
        },
        {
            POSITION: [13, 3, 1, 0, 8, 7, 0.8],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin]),
                TYPE: ["bullet", { COLOR: 3, }],
                LABEL: "Secondary",
            },
        },
        {
            POSITION: [17, 3, 1, 0, -6, -7, 0.2],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin]),
                TYPE: ["bullet", { COLOR: 3, }],
                LABEL: "Secondary",
            },
        },
        {
            POSITION: [17, 3, 1, 0, 6, 7, 0.4],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin]),
                TYPE: ["bullet", { COLOR: 3, }],
                LABEL: "Secondary",
            },
        },
        {
            POSITION: [20, 12, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty]),
                TYPE: ["bullet", { COLOR: 3, }],
                LABEL: "Heavy",
            },
        },
        {
            POSITION: [13.25, 12, -1.5, 2, 0, 0, 0],
        },
    {
        /********* LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
        POSITION: [6, 12, 1.2, 8, 0, 180, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.factory]),
            TYPE: ["minion", { INDEPENDENT: true }],
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: false,
            MAX_CHILDREN: 3,
        },
    }]
};
exports.armySoldierSwarm = {
    PARENT: ["armySoldier"],
    LABEL: 'Brute Conveyor',
    FACING_TYPE: 'toTarget',
    GUNS: [
        {
            POSITION: [7, 8, 0.6, 7, 2, 60, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier]),
                TYPE: ["swarm", { COLOR: 3, }],
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [7, 8, 0.6, 7, -2, -60, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier]),
                TYPE: ["swarm", { COLOR: 3, }],
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [7, 8, 0.6, 7, -2, -30, 0.25],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.arty]),
                TYPE: ["swarm", { COLOR: 3, INDEPENDENT: true }],
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.swarm,
                WAIT_TO_CYCLE: true,
                LABEL: "Secondary",
            },
        },
        {
            POSITION: [7, 8, 0.6, 7, 2, 30, 0.75],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.arty]),
                TYPE: ["swarm", { COLOR: 3, INDEPENDENT: true }],
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.swarm,
                WAIT_TO_CYCLE: true,
                LABEL: "Secondary",
            },
        },
        {
            POSITION: [20, 12, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty]),
                TYPE: ["bullet", { COLOR: 3, }],
                LABEL: "Heavy",
            },
        },
        {
            POSITION: [13.25, 12, -1.5, 2, 0, 0, 0],
        },
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [7, 8, 0.6, 7, 0, 180, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier]),
                TYPE: ["swarm", { COLOR: 3, }],
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },]
};
exports.nestKeeper = {
    PARENT: ["miniboss"],
    LABEL: "Nest Keeper",
    COLOR: 14,
    SHAPE: 5,
    SIZE: 50,
    BODY: {
        FOV: 1.3,
        SPEED: base.SPEED * 0.25,
        HEALTH: base.HEALTH * 9,
        SHIELD: base.SHIELD * 1.5,
        REGEN: base.REGEN,
        DAMAGE: base.DAMAGE * 2.5,
    },
    MAX_CHILDREN: 15,
    CONTROLLERS: ["nearestDifferentMaster", "minion", "canRepel"],
    GUNS: [
        {
            POSITION: [3.5, 6.65, 1.2, 8, 0, 35, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.nest_keeper]),
                TYPE: "drone",
                AUTOFIRE: true,
                LABEL: "Mega Crasher",
            },
        },
        {
            POSITION: [3.5, 6.65, 1.2, 8, 0, -35, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.nest_keeper]),
                TYPE: "drone",
                AUTOFIRE: true,
                LABEL: "Mega Crasher",
            },
        },
        {
            POSITION: [3.5, 6.65, 1.2, 8, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.nest_keeper]),
                TYPE: "drone",
                AUTOFIRE: true,
                LABEL: "Mega Crasher",
            },
        },
        {
            POSITION: [3.5, 6.65, 1.2, 8, 0, 108, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.nest_keeper]),
                TYPE: "drone",
                AUTOFIRE: true,
                LABEL: "Mega Crasher",
            },
        },
        {
            POSITION: [3.5, 6.65, 1.2, 8, 0, -108, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.nest_keeper]),
                TYPE: "drone",
                AUTOFIRE: true,
                LABEL: "Mega Crasher",
            },
        },
    ],
    TURRETS: [
        {
            POSITION: [8, 9, 0, 72, 120, 0],
            TYPE: [
                "auto4gun",
                {
                    INDEPENDENT: true,
                    COLOR: 14,
                },
            ],
        },
        {
            POSITION: [8, 9, 0, 0, 120, 0],
            TYPE: [
                "auto4gun",
                {
                    INDEPENDENT: true,
                    COLOR: 14,
                },
            ],
        },
        {
            POSITION: [8, 9, 0, 144, 120, 0],
            TYPE: [
                "auto4gun",
                {
                    INDEPENDENT: true,
                    COLOR: 14,
                },
            ],
        },
        {
            POSITION: [8, 9, 0, 216, 120, 0],
            TYPE: [
                "auto4gun",
                {
                    INDEPENDENT: true,
                    COLOR: 14,
                },
            ],
        },
        {
            POSITION: [8, 9, 0, -72, 120, 0],
            TYPE: [
                "auto4gun",
                {
                    INDEPENDENT: true,
                    COLOR: 14,
                },
            ],
        },
        {
            POSITION: [9, 0, 0, 0, 360, 1],
            TYPE: [
                "boomerTurret",
                {
                    INDEPENDENT: true,
                    COLOR: 14,
                },
            ],
        },
    ],
};
exports.nestWarden = {
    PARENT: ["miniboss"],
    LABEL: "Nest Warden",
    COLOR: 14,
    SHAPE: 5,
    SIZE: 50,
    BODY: {
        FOV: 1.3,
        SPEED: base.SPEED * 0.25,
        HEALTH: base.HEALTH * 9,
        SHIELD: base.SHIELD * 1.5,
        REGEN: base.REGEN,
        DAMAGE: base.DAMAGE * 2.5,
    },
    CONTROLLERS: ["nearestDifferentMaster", "minion", "canRepel"],
    GUNS: [],
    TURRETS: [
        {
            POSITION: [9, 0, 0, 0, 360, 1],
            TYPE: [
                "barricadeTurret",
                {
                    INDEPENDENT: true,
                    COLOR: 14,
                },
            ],
        },
    ],
};
for(let i = 0; i < 5; i++) {
    exports.nestWarden.GUNS.push(
        {
            POSITION: [10.7, 8, 1, 0, 0, 72*i+36, 0],
        },
        {
            POSITION: [1.5, 8, 1.2, 10.7, 0, 72*i+36, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.fast, g.block, g.construct]),
                TYPE: "unsetTrap",
            },
        },
    );
    exports.nestWarden.TURRETS.push(
        {
            POSITION: [8, 9, 0, 72*i, 120, 0],
            TYPE: [
                "cruiserTurret",
                {
                    INDEPENDENT: true,
                    COLOR: 14,
                },
            ],
        }
    );
};
exports.nestGuardian = {
    PARENT: ["miniboss"],
    LABEL: "Nest Guardian",
    COLOR: 14,
    SHAPE: 5,
    SIZE: 50,
    BODY: {
        FOV: 1.3,
        SPEED: base.SPEED * 0.25,
        HEALTH: base.HEALTH * 9,
        SHIELD: base.SHIELD * 1.5,
        REGEN: base.REGEN,
        DAMAGE: base.DAMAGE * 2.5,
    },
    CONTROLLERS: ["nearestDifferentMaster", "minion", "canRepel"],
    GUNS: [],
    TURRETS: [
        {
            POSITION: [9, 0, 0, 0, 360, 1],
            TYPE: [
                "twisterTurret",
                {
                    INDEPENDENT: true,
                    COLOR: 14,
                },
            ],
        },
    ],
};
for(let i = 0; i < 5; i++) {
    exports.nestGuardian.GUNS.push(
        {
            POSITION: [5.5, 7, 1, 6, 0, 72*i+36, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.pound, g.destroy]),
                TYPE: "bullet",
                LABEL: "Devastator",
            },
        },
    );
    exports.nestGuardian.TURRETS.push(
        {
            POSITION: [8, 9, 0, 72*i, 120, 0],
            TYPE: [
                "swarmerTurret",
                {
                    INDEPENDENT: true,
                    COLOR: 14,
                },
            ],
        }
    );
};

// FALLEN BOSSES
exports.fallenBody = {
    PARENT: ["miniboss"],
    LABEL: "Fallen Tank",
    COLOR: 18,
    SHAPE: 0,
    SIZE: 27,
    VARIES_IN_SIZE: true,
    VALUE: 15e4,
    BODY: {
        FOV: 1.25,
        SPEED: 0.25 * base.SPEED,
        HEALTH: 8 * base.HEALTH,
        DAMAGE: 2.5 * base.DAMAGE,
    },
    CONTROLLERS: ["nearestDifferentMaster", "minion", "canRepel"],
};
exports.fallenOverlord = {
    PARENT: ["fallenBody"],
    //LABEL: 'Fallen Overlord',
    MAX_CHILDREN: 28,
    FACING_TYPE: 'autospin',
    GUNS: [{
        POSITION: [6, 12, 1.2, 8, 0, 90, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.fallen_overlord]),
            TYPE: "drone",
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: true
        }
    }, {
        POSITION: [6, 12, 1.2, 8, 0, 180, .25],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.fallen_overlord]),
            TYPE: "drone",
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: true
        }
    }, {
        POSITION: [6, 12, 1.2, 8, 0, 270, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.fallen_overlord]),
            TYPE: "drone",
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: true
        }
    }, {
        POSITION: [6, 12, 1.2, 8, 0, 0, .75],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.fallen_overlord]),
            TYPE: "drone",
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: true
        }
    }]
};
exports.fallenBooster = {
    PARENT: ["fallenBody"],
    //LABEL: 'Fallen Booster',
    FACING_TYPE: "toTarget",
    BODY: {
        SPEED: 0.5 * base.SPEED,
        HEALTH: 10 * base.HEALTH,
    },
    GUNS: [{
        POSITION: [18, 8, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront, g.muchmorerecoil, g.fallen]),
            TYPE: "bullet",
            LABEL: 'Front'
        }
    }, {
        POSITION: [13, 8, 1, 0, -1, 135, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.halfrecoil]),
            TYPE: "bullet",
            STAT_CALCULATOR: gunCalcNames.thruster
        }
    }, {
        POSITION: [13, 8, 1, 0, 1, 225, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.halfrecoil]),
            TYPE: "bullet",
            STAT_CALCULATOR: gunCalcNames.thruster
        }
    }, {
        POSITION: [16, 8, 1, 0, 0, 145, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
            TYPE: "bullet",
            STAT_CALCULATOR: gunCalcNames.thruster
        }
    }, {
        POSITION: [16, 8, 1, 0, 0, 215, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
            TYPE: "bullet",
            STAT_CALCULATOR: gunCalcNames.thruster
        }
    }],
};
exports.fallenHybrid = {
    PARENT: ["fallenBody"],
    //LABEL: 'Fallen Hybrid',
    FACING_TYPE: 'toTarget',
    GUNS: [{
            POSITION: [21, 14, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy]),
                TYPE: "bullet",
            },
        }, {
        /********* LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
        POSITION: [6, 12, 1.2, 8, 0, 180, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone]),
            TYPE: ["drone", { INDEPENDENT: true }],
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: false,
            MAX_CHILDREN: 3,
        },
    }]
};
exports.fallenFalcon = {
    PARENT: ["fallenBody"],
    //LABEL: 'Fallen Falcon',
    FACING_TYPE: 'toTarget',
    GUNS: [{
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [27, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.sniper,
                    g.assass,
                    g.lessreload, 
                    g.fallen,
                ]),
                TYPE: "bullet",
                LABEL: "Assassin",
                //ALT_FIRE: true,
            }, }, {
            POSITION: [5, 8, -1.4, 8, 0, 0, 0],
        }, {
            POSITION: [16, 8, 1, 0, 0, 150, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.flank,
                    g.tri,
                    g.thruster,
                    g.halfrecoil,
                ]),
                TYPE: "bullet",
                LABEL: gunCalcNames.thruster,
            }, }, {
            POSITION: [16, 8, 1, 0, 0, 210, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.flank,
                    g.tri,
                    g.thruster,
                    g.halfrecoil,
                ]),
                TYPE: "bullet",
                LABEL: gunCalcNames.thruster,
            }, }, {
            POSITION: [18, 8, 1, 0, 0, 180, 0.6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.flank,
                    g.tri,
                    g.thruster,
                    g.halfrecoil,
                ]),
                TYPE: "bullet",
                LABEL: gunCalcNames.thruster,
            }, },
        ]
};
exports.fallenFactory = {
    PARENT: ["fallenBody"],
    //LABEL: "Fallen Factory",
    SHAPE: 4,
    FACING_TYPE: 'toTarget',
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [5.25, 12, 1.2, 8, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.factory, g.fallen]),
                TYPE: "minion",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                MAX_CHILDREN: 6,
            },
        },
    ],
};
exports.fallenConqueror = {
    PARENT: ["fallenBody"],
    FACING_TYPE: 'toTarget',
    GUNS: [
        {
            POSITION: [21, 14, 1, 0, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [18, 12, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [2, 12, 1.1, 18, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.block]),
                TYPE: "setTrap",
            },
        },
    ],
};
exports.fallenBulwark = {
    PARENT: ["fallenBody"],
    FACING_TYPE: 'toTarget',
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [20, 8, 1, 0, 5.5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.twin, g.fallen]),
                TYPE: "bullet",
            },
        },
        {
            /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [20, 8, 1, 0, -5.5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.twin, g.fallen]),
                TYPE: "bullet",
            },
        },
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [13, 8, 1, 0, 5.5, 185, 0],
        },
        {
            POSITION: [3, 9, 1.5, 13, 5.5, 185, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.twin, g.fallen]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
        {
            /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [13, 8, 1, 0, -5.5, 175, 0],
        },
        {
            POSITION: [3, 9, 1.5, 13, -5.5, 175, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.twin, g.fallen]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
    ],
};
exports.fallenOctoTank = {
    PARENT: ["fallenBody"],
    FACING_TYPE: 'toTarget',
    GUNS: [
        {
            POSITION: [18, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam, g.fallen, g.lowpower]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [18, 8, 1, 0, 0, 90, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam, g.fallen, g.lowpower]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [18, 8, 1, 0, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam, g.fallen, g.lowpower]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [18, 8, 1, 0, 0, 270, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam, g.fallen, g.lowpower]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [18, 8, 1, 0, 0, 45, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam, g.fallen, g.lowpower]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [18, 8, 1, 0, 0, 135, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam, g.fallen, g.lowpower]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [18, 8, 1, 0, 0, 225, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam, g.fallen, g.lowpower]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [18, 8, 1, 0, 0, 315, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam, g.fallen, g.lowpower]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.roguePalisade = {
    PARENT: ["miniboss"],
    LABEL: "Rogue Palisade",
    COLOR: 17,
    SHAPE: 6,
    SIZE: 30,
    VALUE: 5e5,
    CONTROLLERS: ["nearestDifferentMaster", "minion", "canRepel", 'onlyAcceptInArc'],  //CONTROLLERS: ['nearestDifferentMaster', 'onlyAcceptInArc'],
    BODY: {
        FOV: 1.4,
        SPEED: 0.05 * base.SPEED,
        HEALTH: 16 * base.HEALTH,
        SHIELD: 3 * base.SHIELD,
        DAMAGE: 3 * base.DAMAGE,
    },
    GUNS: [
        { POSITION: [4, 6, -1.6, 8, 0, 0, 0], PROPERTIES: { SHOOT_SETTINGS: combineStats([ g.factory, g.pound, g.halfreload, g.halfreload ]), TYPE: "minion", STAT_CALCULATOR: gunCalcNames.drone, AUTOFIRE: true, MAX_CHILDREN: 1, SYNCS_SKILLS: true, WAIT_TO_CYCLE: true }},
        { POSITION: [4, 6, -1.6, 8, 0, 60, 0], PROPERTIES: { SHOOT_SETTINGS: combineStats([ g.factory, g.pound, g.halfreload, g.halfreload ]), TYPE: "minion", STAT_CALCULATOR: gunCalcNames.drone, AUTOFIRE: true, MAX_CHILDREN: 1, SYNCS_SKILLS: true, WAIT_TO_CYCLE: true }},
        { POSITION: [4, 6, -1.6, 8, 0, 120, 0], PROPERTIES: { SHOOT_SETTINGS: combineStats([ g.factory, g.pound, g.halfreload, g.halfreload ]), TYPE: "minion", STAT_CALCULATOR: gunCalcNames.drone, AUTOFIRE: true, MAX_CHILDREN: 1, SYNCS_SKILLS: true, WAIT_TO_CYCLE: true }},
        { POSITION: [4, 6, -1.6, 8, 0, 180, 0], PROPERTIES: { SHOOT_SETTINGS: combineStats([ g.factory, g.pound, g.halfreload, g.halfreload ]), TYPE: "minion", STAT_CALCULATOR: gunCalcNames.drone, AUTOFIRE: true, MAX_CHILDREN: 1, SYNCS_SKILLS: true, WAIT_TO_CYCLE: true }},
        { POSITION: [4, 6, -1.6, 8, 0, 240, 0], PROPERTIES: { SHOOT_SETTINGS: combineStats([ g.factory, g.pound, g.halfreload, g.halfreload ]), TYPE: "minion", STAT_CALCULATOR: gunCalcNames.drone, AUTOFIRE: true, MAX_CHILDREN: 1, SYNCS_SKILLS: true, WAIT_TO_CYCLE: true }},
        { POSITION: [4, 6, -1.6, 8, 0, 300, 0], PROPERTIES: { SHOOT_SETTINGS: combineStats([ g.factory, g.pound, g.halfreload, g.halfreload ]), TYPE: "minion", STAT_CALCULATOR: gunCalcNames.drone, AUTOFIRE: true, MAX_CHILDREN: 1, SYNCS_SKILLS: true, WAIT_TO_CYCLE: true }},
    ],
    TURRETS: [
        { POSITION: [5, 10, 0, 30, 110, 0], TYPE: "trapTurret" },
        { POSITION: [5, 10, 0, 90, 110, 0], TYPE: "trapTurret" },
        { POSITION: [5, 10, 0, 150, 110, 0], TYPE: "trapTurret" },
        { POSITION: [5, 10, 0, 210, 110, 0], TYPE: "trapTurret" },
        { POSITION: [5, 10, 0, 270, 110, 0], TYPE: "trapTurret" },
        { POSITION: [5, 10, 0, 330, 110, 0], TYPE: "trapTurret" },
    ],
};
exports.rogueAlcazar = {
    PARENT: ["miniboss"],
    LABEL: "Alcazar",
    COLOR: 17,
    SHAPE: 6,
    SIZE: 32,
    VALUE: 5e5,
    CONTROLLERS: ["nearestDifferentMaster", "minion", "canRepel", 'onlyAcceptInArc'],  //CONTROLLERS: ['nearestDifferentMaster', 'onlyAcceptInArc'],
    BODY: {
        FOV: 1.4,
        SPEED: 0.05 * base.SPEED,
        HEALTH: 21 * base.HEALTH,
        SHIELD: 4 * base.SHIELD,
        DAMAGE: 4 * base.DAMAGE,
    },
    GUNS: [
        { POSITION: [4, 6, -1.6, 8, 0, 0, 0], PROPERTIES: { SHOOT_SETTINGS: combineStats([ g.factory, g.pound, g.halfreload, g.halfreload ]), TYPE: "turretedMinion", STAT_CALCULATOR: gunCalcNames.drone, AUTOFIRE: true, MAX_CHILDREN: 1, SYNCS_SKILLS: true, WAIT_TO_CYCLE: true }},
        { POSITION: [4, 6, -1.6, 8, 0, 60, 0], PROPERTIES: { SHOOT_SETTINGS: combineStats([ g.factory, g.pound, g.halfreload, g.halfreload ]), TYPE: "turretedMinion", STAT_CALCULATOR: gunCalcNames.drone, AUTOFIRE: true, MAX_CHILDREN: 1, SYNCS_SKILLS: true, WAIT_TO_CYCLE: true }},
        { POSITION: [4, 6, -1.6, 8, 0, 120, 0], PROPERTIES: { SHOOT_SETTINGS: combineStats([ g.factory, g.pound, g.halfreload, g.halfreload ]), TYPE: "turretedMinion", STAT_CALCULATOR: gunCalcNames.drone, AUTOFIRE: true, MAX_CHILDREN: 1, SYNCS_SKILLS: true, WAIT_TO_CYCLE: true }},
        { POSITION: [4, 6, -1.6, 8, 0, 180, 0], PROPERTIES: { SHOOT_SETTINGS: combineStats([ g.factory, g.pound, g.halfreload, g.halfreload ]), TYPE: "turretedMinion", STAT_CALCULATOR: gunCalcNames.drone, AUTOFIRE: true, MAX_CHILDREN: 1, SYNCS_SKILLS: true, WAIT_TO_CYCLE: true }},
        { POSITION: [4, 6, -1.6, 8, 0, 240, 0], PROPERTIES: { SHOOT_SETTINGS: combineStats([ g.factory, g.pound, g.halfreload, g.halfreload ]), TYPE: "turretedMinion", STAT_CALCULATOR: gunCalcNames.drone, AUTOFIRE: true, MAX_CHILDREN: 1, SYNCS_SKILLS: true, WAIT_TO_CYCLE: true }},
        { POSITION: [4, 6, -1.6, 8, 0, 300, 0], PROPERTIES: { SHOOT_SETTINGS: combineStats([ g.factory, g.pound, g.halfreload, g.halfreload ]), TYPE: "turretedMinion", STAT_CALCULATOR: gunCalcNames.drone, AUTOFIRE: true, MAX_CHILDREN: 1, SYNCS_SKILLS: true, WAIT_TO_CYCLE: true }},
        { POSITION: [2.5, 3.5, -1.6, 8, 0, 0, 0], },
        { POSITION: [2.5, 3.5, -1.6, 8, 0, 60, 0], },
        { POSITION: [2.5, 3.5, -1.6, 8, 0, 120, 0], },
        { POSITION: [2.5, 3.5, -1.6, 8, 0, 180, 0], },
        { POSITION: [2.5, 3.5, -1.6, 8, 0, 240, 0], },
        { POSITION: [2.5, 3.5, -1.6, 8, 0, 300, 0], },
    ],
    TURRETS: [
        { POSITION: [5, 10, 0, 30, 110, 0], TYPE: "megaTrapTurret" },
        { POSITION: [5, 10, 0, 90, 110, 0], TYPE: "megaTrapTurret" },
        { POSITION: [5, 10, 0, 150, 110, 0], TYPE: "megaTrapTurret" },
        { POSITION: [5, 10, 0, 210, 110, 0], TYPE: "megaTrapTurret" },
        { POSITION: [5, 10, 0, 270, 110, 0], TYPE: "megaTrapTurret" },
        { POSITION: [5, 10, 0, 330, 110, 0], TYPE: "megaTrapTurret" },
    ],
};
exports.rogueArmada = (() => {
    let SHAPE = 7,
        GUNS = [],
        TURRETS = [];
    for (let i = 0; i < SHAPE; i++) {
        for (let j = 0; j < 12; j++) {
            GUNS.push({
                POSITION: [ 4, 0.3 * Math.floor(j / 4), 1, 0, (j + 3) % SHAPE - 3, (i + 0.5) * (360 / SHAPE), 0 ],
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                    TYPE: j % SHAPE < 2 ? "bullet" : "casing"
                }
            });
        }
        GUNS.push({
            POSITION: [ 9, 6  ,  1  , 4,  0, (i + 0.5) * (360 / SHAPE), 0 ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.fake]),
                TYPE: "casing"
            }
        }, {
            POSITION: [ 8, 6  , -1.1, 4,  0, (i + 0.5) * (360 / SHAPE), 0 ]
        });
    }
    for (let i = 0; i < SHAPE; i++) {
        TURRETS.push({
            POSITION: [ 5, 10, 0, i * 360 / SHAPE, 110, 0],
            TYPE: "shottrapTurret"
        });
    }
    return {
        PARENT: ["miniboss"],
        LABEL: 'Rogue Armada',
        COLOR: 17,
        SHAPE,
        SIZE: 28,
        VALUE: 500000,
        CONTROLLERS: ["nearestDifferentMaster", "minion", "canRepel", 'onlyAcceptInArc'], //CONTROLLERS: ['nearestDifferentMaster', 'onlyAcceptInArc'],
        BODY: {
            FOV: 1.3,
            SPEED: base.SPEED * 0.1,
            HEALTH: base.HEALTH * 2,
            SHIELD: base.SHIELD * 2,
            REGEN: base.REGEN,
            DAMAGE: base.DAMAGE * 3,
        },
        FACING_TYPE: 'autospin',
        GUNS, TURRETS
    };
})();
// REVAMPED WOOMY BOSSES
exports.snowflakeShard = makeAuto({
    PARENT: ["genericTank"],
    LABEL: "Segment",
    BODY: {
        HEALTH: 1 / 200000,
    },
    CAN_BE_ON_LEADERBOARD: false,
    VARIES_IN_SIZE: false,
    FACING_TYPE: 'sourceToTarget',
    MOTION_TYPE: 'withMaster',
    SKILL: skillSet({
        rld: 0.3,
        dam: 0.2,
        pen: 0.4,
        str: 0.1,
        spd: 0.1,
        atk: 0.1,
        hlt: 0.4,
        shi: 0.7,
        rgn: 0,
        mob: 0,
    }),
    VALUE: 1e5,
    SHAPE: 6.5,
    COLOR: "invertGold",
    MAX_CHILDREN: 2,
    GUNS: [{
        POSITION: [4, 9, 1.2, 8, 0, 30, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over]),
            TYPE: "drone",
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone
        }
    }, {
        POSITION: [4, 9, 1.2, 8, 0, 330, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over]),
            TYPE: "drone",
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone
        }
    }],
}, 'Segment', {
    type: exports.armySentryGunTurret,
    size: 8.35
});
exports.snowflakeProp = {
    PARENT: ["genericTank"],
    LABEL: "",
    IGNORED_BY_AI: true,
    SHAPE: 1,
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [0, 20, 1, -50, 0, 0, 0.01],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.probe, { reload: 60, size: 1}]),
                TYPE: "snowflakeShard",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                MAX_CHILDREN: 1,
            },
        },
    ],
};
exports.snowflakeBoss = {
    PARENT: ["hexagonBossBody"],
    LABEL: "Snowflake",
    COLOR: "cyan",
    GUNS: [],
    TURRETS: [],
    BODY: {
      HEALTH: 0.22 * base.HEALTH, //22
    },
};
for(let i = 0; i < 3; i++) {
    exports.snowflakeBoss.TURRETS.push(
        {
        POSITION: [4.75, 19, 0, 120*i + 30, 0, 0],
        TYPE: "snowflakeProp"
    }, {
        POSITION: [4.75, 19, 0, 120*i + 90, 0, 0],
        TYPE: "snowflakeProp"
    }, {
            POSITION: [5, 6.2, 0, 120*i, 190, 1],
            TYPE: ["demolisher", { CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'], }, ],
        }
    );
};
// WINTER MAYHEM STRANGE BOSSES
exports.pumpkinEmperor = {
    PARENT: ["nestKeeper"],
    LABEL: "Pumpkin Emperor",
    NAME: "Jack Skeleton",
    COLOR: 40,
    BODY: {
        SPEED: base.SPEED * 0.5,
    },
};

// DIEP BOSSES
exports.guardianOfThePentagons = {
    PARENT: ["elite"],
    LABEL: "Guardian",
    FACING_TYPE: "toTarget",
    GUNS: [
        {
            POSITION: [4, 12, 1.4, 8, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.celeslower]),
                TYPE: "swarm",
                AUTOFIRE: true,
            },
        },
    ],
    AI: {
        NO_LEAD: false,
    },
};
exports.defender = {
    PARENT: ["elite"],
    LABEL: "Defender",
    SIZE: 26,
    COLOR: 2,
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
            POSITION: [5, 7, 0, 0, 190, 1],
            TYPE: "autoTankGun",
        },
        {
            POSITION: [5, 7, 0, 120, 190, 1],
            TYPE: "autoTankGun",
        },
        {
            POSITION: [5, 7, 0, 240, 190, 1],
            TYPE: "autoTankGun",
        },
    ],
    AI: {
        NO_LEAD: false,
    },
};
// TITANS
exports.titanCelestial = {
    PARENT: ["miniboss"],
    LABEL: "Titan",
    //SKILL_CAP: Array(10).fill(255),
    SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    VALUE: 2e5,
    SHAPE: 8,
    LEVEL: 150,
    SIZE: 35,
    BODY: {
        FOV: 1,
        HEALTH: 1000,
        SHIELD: 2,
        REGEN: base.REGEN * 0.1,
        SPEED: 0.75,
        DAMAGE: 5,
    },
    CONTROLLERS: ["nearestDifferentMaster", "minion", "canRepel"],
};
exports.titanHowlerTopTurret = {
    PARENT: ["genericTank"],
    LABEL: 'Top Turret',
    CONTROLLERS: [/*"canRepel", */["spin", { onlyWhenIdle: true, speed: 0.05 }], "onlyAcceptInArc", "mapAltToFire", "nearestDifferentMaster"],
    SHAPE: 6,
    COLOR: 0,
    DANGER: 7,
    BODY: {
        SPEED: base.SPEED * .8,
        FOV: 1.2
    },
    GUNS: [{
        POSITION: [8, .1, -54, 21, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.sidewind, g.fake]),
            TYPE: "bullet",
        }
    }, {
        POSITION: [10, 11, -0.5, 14, 0, 0, 0]
    }, {
        POSITION: [21, 12, -1.1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.sidewind, { health: 1.4, damage: 1.4, pen: 1.4 }]),
            TYPE: "hypersnake",
            STAT_CALCULATOR: gunCalcNames.sustained
        }
    }]
};
exports.titanHowlerMiddleBody = {
    LABEL: "",
    CONTROLLERS: [["spin", { independent: true, speed: -0.05 }]],
    COLOR: 0,
    SIZE: 100,
    SKILL: [7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
    SHAPE: 6,
    INDEPENDENT: true,
    TURRETS: [
        {
            //**     SIZE         X             Y         ANGLE        ARC
            POSITION: [9, 7.5, 0, 0, 160, 0],
            TYPE: ["auto4gun"],
        },
        {
            POSITION: [9, 7.5, 0, 60, 160, 0],
            TYPE: ["auto4gun"],
        },
        {
            POSITION: [9, 7.5, 0, 120, 160, 0],
            TYPE: ["auto4gun"],
        },
        {
            POSITION: [9, 7.5, 0, 180, 160, 0],
            TYPE: ["auto4gun"],
        },
        {
            POSITION: [9, 7.5, 0, 240, 160, 0],
            TYPE: ["auto4gun"],
        },
        {
            POSITION: [9, 7.5, 0, 300, 160, 0],
            TYPE: ["auto4gun"],
        },
    ],
};

exports.titanHowler = {
    PARENT: ["titanCelestial"],
    NAME: "Rhigohr",
    COLOR: 0,
    GUNS: [
        {
            POSITION: [2, 3, 0.6, 9, -2, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battle, { health: 0.8, damage: 0.8, pen: 0.8 }]),
                TYPE: "swarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [2, 3, 0.6, 9, 2, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
                TYPE: "autoswarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [2, 3, 0.6, 9, -2, 90, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battle, { health: 0.8, damage: 0.8, pen: 0.8 }]),
                TYPE: "swarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [2, 3, 0.6, 9, 2, 90, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
                TYPE: "autoswarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [2, 3, 0.6, 9, -2, -90, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battle, { health: 0.8, damage: 0.8, pen: 0.8 }]),
                TYPE: "swarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [2, 3, 0.6, 9, 2, -90, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
                TYPE: "autoswarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [2, 3, 0.6, 9, -2, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battle, { health: 0.8, damage: 0.8, pen: 0.8 }]),
                TYPE: "swarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [2, 3, 0.6, 9, 2, 180, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
                TYPE: "autoswarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
    ],
    TURRETS: [
        {
            /*********    SIZE         X             Y         ANGLE        ARC */
            POSITION: [9, 7.5, 0, 45, 0, 0],
            TYPE: ["titanTrapTurret", {CONTROLLERS: ["mapAltToFire", "nearestDifferentMaster"],}], //["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [9, 7.5, 0, 135, 0, 0],
            TYPE: ["titanTrapTurret", {CONTROLLERS: ["mapAltToFire", "nearestDifferentMaster"],}],
        },
        {
            POSITION: [9, 7.5, 0, 225, 0, 0],
            TYPE: ["titanTrapTurret", {CONTROLLERS: ["mapAltToFire", "nearestDifferentMaster"],}],
        },
        {
            POSITION: [9, 7.5, 0, 315, 0, 0],
            TYPE: ["titanTrapTurret", {CONTROLLERS: ["mapAltToFire", "nearestDifferentMaster"],}],
        },
        {
            POSITION: [14.77, 0, 0, 0, 360, 1],
            TYPE: ["titanHowlerMiddleBody"],
        },
        {
            POSITION: [8.7, 0, 0, 0, 360, 1],
            TYPE: ["titanHowlerTopTurret"],
        },
    ],
};

exports.titanGliderTopTurret = {
    PARENT: ["genericTank"],
    LABEL: 'Top Turret',
    CONTROLLERS: [/*"canRepel", */["spin", { onlyWhenIdle: true, speed: 0.05 }], "onlyAcceptInArc", "mapAltToFire", "nearestDifferentMaster"],
    SHAPE: 6,
    COLOR: 2,
    DANGER: 7,
    BODY: {
        FOV: 1.15
    },
    GUNS: [
        {
            POSITION: [4, 11,  1, 14, 0, 0, 0],
            },
        {
            POSITION: [3, 11, 1.3, 17, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.launcher, g.rocketeer, g.glider, {recoil: 0.1, health: 1.25, damage: 1.25, pen: 1.25 } ]),
                TYPE: "gliderMissile",
                STAT_CALCULATOR: gunCalcNames.sustained,
            },
        },
        {
            POSITION: [15, 11, -1.6, 0, 0, 0, 0],
        },]
};
exports.titanGliderMiddleBody = {
    LABEL: "",
    CONTROLLERS: [["spin", { independent: true, speed: -0.05 }]],
    COLOR: 2,
    SIZE: 100,
    SKILL: [7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
    SHAPE: 6,
    INDEPENDENT: true,
    TURRETS: [
        {
            //**     SIZE         X             Y         ANGLE        ARC
            POSITION: [9, 7.5, 0, 0, 160, 0],
            TYPE: ["machineAutoTurret"],
        },
        {
            POSITION: [9, 7.5, 0, 60, 160, 0],
            TYPE: ["machineAutoTurret"],
        },
        {
            POSITION: [9, 7.5, 0, 120, 160, 0],
            TYPE: ["machineAutoTurret"],
        },
        {
            POSITION: [9, 7.5, 0, 180, 160, 0],
            TYPE: ["machineAutoTurret"],
        },
        {
            POSITION: [9, 7.5, 0, 240, 160, 0],
            TYPE: ["machineAutoTurret"],
        },
        {
            POSITION: [9, 7.5, 0, 300, 160, 0],
            TYPE: ["machineAutoTurret"],
        },
    ],
};
exports.titanGlider = {
    PARENT: ["titanCelestial"],
    NAME: "Alios",
    COLOR: 2,
    GUNS: [{
        POSITION: [4, 6, 1.2, 8, 0, 90, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.summoner, { size: 0.9 }]),
            TYPE: "dorito",
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            MAX_CHILDREN: 6,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: true
        }
    }, {
        POSITION: [4, 6, 1.2, 8, 0, 180, .25],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.summoner, { size: 0.9 }]),
            TYPE: "dorito",
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            MAX_CHILDREN: 6,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: true
        }
    }, {
        POSITION: [4, 6, 1.2, 8, 0, 270, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.summoner, { size: 0.9 }]),
            TYPE: "dorito",
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            MAX_CHILDREN: 6,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: true
        }
    }, {
        POSITION: [4, 6, 1.2, 8, 0, 0, .75],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.summoner, { size: 0.9 }]),
            TYPE: "dorito",
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            MAX_CHILDREN: 6,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: true
        }
    }
    ],
    TURRETS: [
        {
            /*********    SIZE         X             Y         ANGLE        ARC */
            POSITION: [9, 7.5, 0, 45, 0, 0],
            TYPE: ["titanTrapTurret", {CONTROLLERS: ["mapAltToFire", "nearestDifferentMaster"],}], //["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [9, 7.5, 0, 135, 0, 0],
            TYPE: ["titanTrapTurret", {CONTROLLERS: ["mapAltToFire", "nearestDifferentMaster"],}],
        },
        {
            POSITION: [9, 7.5, 0, 225, 0, 0],
            TYPE: ["titanTrapTurret", {CONTROLLERS: ["mapAltToFire", "nearestDifferentMaster"],}],
        },
        {
            POSITION: [9, 7.5, 0, 315, 0, 0],
            TYPE: ["titanTrapTurret", {CONTROLLERS: ["mapAltToFire", "nearestDifferentMaster"],}],
        },
        {
            POSITION: [14.77, 0, 0, 0, 360, 1],
            TYPE: ["titanGliderMiddleBody"],
        },
        {
            POSITION: [8.7, 0, 0, 0, 360, 1],
            TYPE: ["titanGliderTopTurret"],
        },
    ],
};
exports.titanInvokerTopTurret = {
    PARENT: ["genericTank"],
    LABEL: 'Top Turret',
    CONTROLLERS: [/*"canRepel", */["spin", { onlyWhenIdle: true, speed: 0.05 }], "onlyAcceptInArc", "mapAltToFire", "nearestDifferentMaster"],
    SHAPE: 6,
    COLOR: 13,
    DANGER: 7,
    BODY: {
        FOV: 1.15
    },
    GUNS: [{
        POSITION: [14, 12, -0.5, 9, 0, 0, 0]
    }, {
        POSITION: [20, 14, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty, g.arty, g.skim, g.demoman, { health: 1.45, damage: 1.45, pen: 1.45 }]),
            TYPE: "demomanMissile",
            STAT_CALCULATOR: gunCalcNames.sustained,
        }
    }, {
        POSITION: [11, 14, -1.4, 3, 0, 0, 0]
    },]
};
exports.titanInvokerMiddleBody = {
    LABEL: "",
    CONTROLLERS: [["spin", { independent: true, speed: -0.05 }]],
    COLOR: 13,
    SIZE: 100,
    SKILL: [7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
    SHAPE: 6,
    INDEPENDENT: true,
    TURRETS: [
        {
            //**     SIZE         X             Y         ANGLE        ARC
            POSITION: [9, 7.5, 0, 0, 160, 0],
            TYPE: ["sniper3gun"],
        },
        {
            POSITION: [9, 7.5, 0, 60, 160, 0],
            TYPE: ["sniper3gun"],
        },
        {
            POSITION: [9, 7.5, 0, 120, 160, 0],
            TYPE: ["sniper3gun"],
        },
        {
            POSITION: [9, 7.5, 0, 180, 160, 0],
            TYPE: ["sniper3gun"],
        },
        {
            POSITION: [9, 7.5, 0, 240, 160, 0],
            TYPE: ["sniper3gun"],
        },
        {
            POSITION: [9, 7.5, 0, 300, 160, 0],
            TYPE: ["sniper3gun"],
        },
    ],
};
exports.titanInvoker = {
    PARENT: ["titanCelestial"],
    NAME: "Itmus",
    COLOR: 13,
    GUNS: [{
        POSITION: [4, 6, 1.2, 8, 0, 90, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.summoner, { size: 0.9, health: 1.2, damage: 1.2 }]),
            TYPE: "sunchip",
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            MAX_CHILDREN: 6,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: true
        }
    }, {
        POSITION: [4, 6, 1.2, 8, 0, 180, .25],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.summoner, { size: 0.9, health: 1.2, damage: 1.2 }]),
            TYPE: "sunchip",
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            MAX_CHILDREN: 6,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: true
        }
    }, {
        POSITION: [4, 6, 1.2, 8, 0, 270, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.summoner, { size: 0.9, health: 1.2, damage: 1.2 }]),
            TYPE: "sunchip",
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            MAX_CHILDREN: 6,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: true
        }
    }, {
        POSITION: [4, 6, 1.2, 8, 0, 0, .75],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.summoner, { size: 0.9, health: 1.2, damage: 1.2 }]),
            TYPE: "sunchip",
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            MAX_CHILDREN: 6,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: true
        }
    }
    ],
    TURRETS: [
        {
            /*********    SIZE         X             Y         ANGLE        ARC */
            POSITION: [9, 7.5, 0, 45, 0, 0],
            TYPE: ["titanTrapTurret", {CONTROLLERS: ["mapAltToFire", "nearestDifferentMaster"],}], //["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [9, 7.5, 0, 135, 0, 0],
            TYPE: ["titanTrapTurret", {CONTROLLERS: ["mapAltToFire", "nearestDifferentMaster"],}],
        },
        {
            POSITION: [9, 7.5, 0, 225, 0, 0],
            TYPE: ["titanTrapTurret", {CONTROLLERS: ["mapAltToFire", "nearestDifferentMaster"],}],
        },
        {
            POSITION: [9, 7.5, 0, 315, 0, 0],
            TYPE: ["titanTrapTurret", {CONTROLLERS: ["mapAltToFire", "nearestDifferentMaster"],}],
        },
        {
            POSITION: [14.77, 0, 0, 0, 360, 1],
            TYPE: ["titanInvokerMiddleBody"],
        },
        {
            POSITION: [8.7, 0, 0, 0, 360, 1],
            TYPE: ["titanInvokerTopTurret"],
        },
    ],
};
// CELESTIALS
exports.terrestrial = {
    PARENT: ["miniboss"],
    LABEL: "Terrestrial",
    SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    VALUE: 5e5,
    SHAPE: 7,
    SIZE: 35,
    BODY: {
        FOV: 1,
        HEALTH: 1000,
        SHIELD: 2,
        REGEN: base.REGEN * 0.1,
        SPEED: 0.75,
        DAMAGE: 5,
    },
    CONTROLLERS: ["nearestDifferentMaster", "minion", "canRepel"],
};
exports.celestial = {
    PARENT: ["miniboss"],
    LABEL: "Celestial",
    SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    VALUE: 1e6,
    SHAPE: 9,
    LEVEL: 200,
    SIZE: 45,
    BODY: {
        FOV: 1,
        HEALTH: 1000,
        SHIELD: 2,
        REGEN: base.REGEN * 0.1,
        SPEED: 0.75,
        DAMAGE: 5,
    },
    CONTROLLERS: ["nearestDifferentMaster", "minion", "canRepel"],
};
exports.rogueCelestial = {
    PARENT: ["celestial"],
    LABEL: "Rogue Celestial",
    COLOR: 17,
};
exports.eternal = {
    PARENT: ["miniboss"],
    LABEL: "Eternal",
    SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    VALUE: 4e6,
    SHAPE: 11,
    LEVEL: 300,
    SIZE: 75,
    BODY: {
        FOV: 1,
        HEALTH: 3000,
        SHIELD: 2,
        REGEN: base.REGEN * 0.1,
        SPEED: 0.75,
        DAMAGE: 5,
    },
    CONTROLLERS: ["nearestDifferentMaster", "minion", "canRepel"],
};

// Terrestrials
exports.protoHive = {
    PARENT: ["bullet"],
    LABEL: "Proto-Hive",
    BODY: {
        RANGE: 90,
        FOV: 0.5,
    },
    FACING_TYPE: "turnWithSpeed",
    INDEPENDENT: true,
    CONTROLLERS: ["alwaysFire", "nearestDifferentMaster", "targetSelf"],
    AI: {
        NO_LEAD: true,
    },
    GUNS: [
        {
            POSITION: [7, 9.5, 0.6, 7, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees]),
                TYPE: ["bee", { INDEPENDENT: true }],
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [7, 9.5, 0.6, 7, 0, 120, 0.2],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees]),
                TYPE: ["bee", { INDEPENDENT: true }],
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [7, 9.5, 0.6, 7, 0, -120, 0.4],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees]),
                TYPE: ["bee", { INDEPENDENT: true }],
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
    ],
};
exports.protoSwarmerTurret = {
    PARENT: ["genericTank"],
    LABEL: "Swarmer",
    BODY: {
        FOV: 2,
    },
    CONTROLLERS: [
        "canRepel",
        "onlyAcceptInArc",
        "mapAltToFire",
        "nearestDifferentMaster",
    ],
    COLOR: 16,
    GUNS: [
        {
            POSITION: [10, 14, -1.2, 5, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.hive]),
                TYPE: "protoHive",
            },
        },
        {
            POSITION: [11, 12, 1, 5, 0, 0, 0],
        },
    ],
};
exports.aresLowerBody = {
    LABEL: "",
    CONTROLLERS: [["spin", { independent: true, speed: -0.005 }]],
    COLOR: 14,
    SIZE: 100,
    SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    SHAPE: 7,
    INDEPENDENT: true,
    BODY: {
        FOV: 10,
    },
    MAX_CHILDREN: 18,
    FACING_TYPE: "autospin",
    GUNS: [],
};
for(let i = 0; i < 7; i++) {
    exports.aresLowerBody.GUNS.push(
        {
            POSITION: [3.75, 7, 1.2, 8, 0, 360/7*(i+0.5), 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.summoner, g.destroy, g.halfspeed]),
                TYPE: ["demonchip", { INDEPENDENT: true, }],
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.necro,
                WAIT_TO_CYCLE: true,
            },
        },
    )
};
exports.aresUpperBody = {
    LABEL: "",
    CONTROLLERS: [["spin", { independent: true, speed: 0.005 }]],
    AUTOSPIN: true,
    COLOR: 14,
    SIZE: 100,
    SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    MAX_CHILDREN: 28,
    SHAPE: 5,
    INDEPENDENT: true,
    TURRETS: [],
};
for(let i = 0; i < 5; i++) {
    exports.aresUpperBody.TURRETS.push(
        {
            POSITION: [10, 8.5, 0, 360/5*(i+0.5), 160, 0],
            TYPE: ["protoSwarmerTurret", { INDEPENDENT: true, }],
        },
    )
};
exports.ares = {
    PARENT: ["terrestrial"],
    NAME: "Ares",
    COLOR: 14,
    TURRETS: [
        {
            POSITION: [14.5, 0, 0, 0, 360, 1],
            TYPE: ["aresLowerBody"],
        },
        {
            POSITION: [9, 0, 0, 0, 360, 1],
            TYPE: ["aresUpperBody"],
        },
    ],
};
for(let i = 0; i < 7; i++) {
    exports.ares.TURRETS.push(
        {
            POSITION: [7, 9, 0, 360/7*(i+0.5), 180, 0],
            TYPE: ["terrestrialTrapTurret", { INDEPENDENT: true, }],
        },
    )
};

exports.swarmTurret = {
    PARENT: ["genericTank"],
    LABEL: "Swarm",
    BODY: {
        FOV: 2,
    },
    CONTROLLERS: [
        "canRepel",
        "onlyAcceptInArc",
        "mapAltToFire",
        "nearestDifferentMaster",
    ],
    COLOR: 16,
    GUNS: [
        {
            POSITION: [7, 7.5, 0.6, 7, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm]),
                TYPE: ["swarm", {INDEPENDENT: true}],
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
    ],
};
exports.basicTurret = {
    PARENT: ["genericTank"],
    LABEL: "Turret",
    BODY: {
        FOV: 2,
    },
    CONTROLLERS: [
        "canRepel",
        "onlyAcceptInArc",
        "mapAltToFire",
        "nearestDifferentMaster",
    ],
    COLOR: 16,
    GUNS: [
        {
            POSITION: [16, 4, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.auto, g.gunner, g.twin, g.power, g.slow]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.gersemiLowerBody = {
    LABEL: "",
    CONTROLLERS: [["spin", { independent: true, speed: -0.005 }]],
    COLOR: 1,
    SIZE: 100,
    SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    SHAPE: 5,
    INDEPENDENT: true,
    BODY: {
        FOV: 10,
    },
    MAX_CHILDREN: 18,
    FACING_TYPE: "autospin",
    TURRETS: [],
};
for(let i = 0; i < 5; i++) {
    exports.gersemiLowerBody.TURRETS.push(
        {
            POSITION: [9, 8, 0, 360/5*(i+0.5), 160, 0],
            TYPE: ["swarmTurret", { INDEPENDENT: true, }],
        },
    )
};
exports.gersemiUpperBody = {
    LABEL: "",
    CONTROLLERS: [["spin", { independent: true, speed: 0.005 }]],
    AUTOSPIN: true,
    COLOR: 1,
    SIZE: 100,
    SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    MAX_CHILDREN: 28,
    SHAPE: 3,
    INDEPENDENT: true,
    TURRETS: [],
};
for(let i = 0; i < 3; i++) {
    exports.gersemiUpperBody.TURRETS.push(
        {
            POSITION: [9.5, 7.5, 0, 360/3*(i+0.5), 160, 0],
            TYPE: ["basicTurret", { INDEPENDENT: true, }],
        },
    )
};
exports.gersemi = {
    PARENT: ["terrestrial"],
    NAME: "Gersemi",
    COLOR: 1,
    TURRETS: [
        {
            POSITION: [14.5, 0, 0, 0, 360, 1],
            TYPE: ["gersemiLowerBody"],
        },
        {
            POSITION: [8.5, 0, 0, 0, 360, 1],
            TYPE: ["gersemiUpperBody"],
        },
    ],
};
for(let i = 0; i < 7; i++) {
    exports.gersemi.TURRETS.push(
        {
            POSITION: [7, 9, 0, 360/7*(i+0.5), 180, 0],
            TYPE: ["terrestrialTrapTurret", { INDEPENDENT: true, }],
        },
    )
};

exports.ezekielLowerBody = {
    LABEL: "",
    CONTROLLERS: [["spin", { independent: true, speed: -0.005 }]],
    COLOR: 2,
    SIZE: 100,
    SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    SHAPE: 5,
    INDEPENDENT: true,
    BODY: {
        FOV: 10,
    },
    MAX_CHILDREN: 18,
    FACING_TYPE: "autospin",
    GUNS: [],
};
for(let i = 0; i < 5; i++) {
    exports.ezekielLowerBody.GUNS.push(
        {
            POSITION: [3.75, 7, 1.2, 8, 0, 360/5*(i+0.5), 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.summoner, g.destroy, g.halfspeed]),
                TYPE: ["dorito", { COLOR: 2, INDEPENDENT: true, }],
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.necro,
                WAIT_TO_CYCLE: true,
            },
        },
    )
};
exports.ezekielUpperBody = {
    LABEL: "",
    CONTROLLERS: [["spin", { independent: true, speed: 0.005 }]],
    AUTOSPIN: true,
    COLOR: 2,
    SIZE: 100,
    SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    MAX_CHILDREN: 28,
    SHAPE: 3,
    INDEPENDENT: true,
    TURRETS: [],
};
for(let i = 0; i < 3; i++) {
    exports.ezekielUpperBody.TURRETS.push(
        {
            POSITION: [10, 7.5, 0, 360/3*(i+0.5), 160, 0],
            TYPE: ["zaphkielSkimmerTurret", { INDEPENDENT: true, }],
        },
    )
};
exports.ezekiel = {
    PARENT: ["terrestrial"],
    NAME: "Ezekiel",
    COLOR: 2,
    TURRETS: [
        {
            POSITION: [14.5, 0, 0, 0, 360, 1],
            TYPE: ["ezekielLowerBody"],
        },
        {
            POSITION: [8.5, 0, 0, 0, 360, 1],
            TYPE: ["ezekielUpperBody"],
        },
    ],
};
for(let i = 0; i < 7; i++) {
    exports.ezekiel.TURRETS.push(
        {
            POSITION: [7, 9, 0, 360/7*(i+0.5), 180, 0],
            TYPE: ["terrestrialTrapTurret", { INDEPENDENT: true, }],
        },
    )
};

exports.erisLowerBody = {
    LABEL: "",
    CONTROLLERS: [["spin", { independent: true, speed: -0.005 }]],
    COLOR: 5,
    SIZE: 100,
    SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    SHAPE: 7,
    BODY: {
        FOV: 100,
    },
    MAX_CHILDREN: 14,
    INDEPENDENT: true,
    FACING_TYPE: "autospin",
    GUNS: [],
};
for(let i = 0; i < 7; i++) {
    exports.erisLowerBody.GUNS.push(
        {
            POSITION: [3.75, 7, 1.2, 8, 0, 360/7*(i+0.5), 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.factory, g.celeslower]),
                TYPE: ["minion", { INDEPENDENT: true, COLOR: 5, HAS_NO_RECOIL: true, }],
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.necro,
                WAIT_TO_CYCLE: true,
            },
        },
    )
};
exports.erisUpperBody = {
    LABEL: "",
    CONTROLLERS: [["spin", { independent: true, speed: 0.005 }]],
    AUTOSPIN: true,
    COLOR: 5,
    SIZE: 100,
    SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    MAX_CHILDREN: 28,
    SHAPE: 5,
    INDEPENDENT: true,
    TURRETS: [],
};
for(let i = 0; i < 5; i++) {
    exports.erisUpperBody.TURRETS.push(
        {
            POSITION: [10, 8.5, 0, 360/5*(i+0.5), 160, 0],
            TYPE: ["rocketeerTurret", { INDEPENDENT: true, }],
        },
    )
};
exports.eris = {
    PARENT: ["terrestrial"],
    NAME: "Eris",
    COLOR: 5,
    TURRETS: [
        {
            POSITION: [14.5, 0, 0, 0, 360, 1],
            TYPE: ["erisLowerBody"],
        },
        {
            POSITION: [9, 0, 0, 0, 360, 1],
            TYPE: ["erisUpperBody"],
        },
    ],
};
for(let i = 0; i < 7; i++) {
    exports.eris.TURRETS.push(
        {
            POSITION: [7, 9, 0, 360/7*(i+0.5), 180, 0],
            TYPE: ["terrestrialTrapTurret", { INDEPENDENT: true, }],
        },
    )
};

exports.seleneLowerBody = {
    LABEL: "",
    CONTROLLERS: [["spin", { independent: true, speed: -0.005 }]],
    COLOR: 13,
    SIZE: 100,
    SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    SHAPE: 5,
    INDEPENDENT: true,
    BODY: {
        FOV: 10,
    },
    MAX_CHILDREN: 18,
    FACING_TYPE: "autospin",
    GUNS: [],
};
for(let i = 0; i < 5; i++) {
    exports.seleneLowerBody.GUNS.push(
        {
            POSITION: [3.75, 7, 1.2, 8, 0, 360/5*(i+0.5), 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.summoner, g.destroy, g.halfspeed]),
                TYPE: ["sunchip", { COLOR: 13, INDEPENDENT: true, }],
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.necro,
                WAIT_TO_CYCLE: true,
            },
        },
    )
};
exports.seleneUpperBody = {
    LABEL: "",
    CONTROLLERS: [["spin", { independent: true, speed: 0.005 }]],
    AUTOSPIN: true,
    COLOR: 13,
    SIZE: 100,
    SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    MAX_CHILDREN: 28,
    SHAPE: 3,
    INDEPENDENT: true,
    TURRETS: [],
};
for(let i = 0; i < 3; i++) {
    exports.seleneUpperBody.TURRETS.push(
        {
            POSITION: [10, 7.5, 0, 360/3*(i+0.5), 160, 0],
            TYPE: ["hyperTwisterTurret", { INDEPENDENT: true, }],
        },
    )
};
exports.selene = {
    PARENT: ["terrestrial"],
    NAME: "Selene",
    COLOR: 13,
    TURRETS: [
        {
            POSITION: [14.5, 0, 0, 0, 360, 1],
            TYPE: ["seleneLowerBody"],
        },
        {
            POSITION: [8.5, 0, 0, 0, 360, 1],
            TYPE: ["seleneUpperBody"],
        },
    ],
};
for(let i = 0; i < 7; i++) {
    exports.selene.TURRETS.push(
        {
            POSITION: [7, 9, 0, 360/7*(i+0.5), 180, 0],
            TYPE: ["terrestrialTrapTurret", { INDEPENDENT: true, }],
        },
    )
};

// PALADIN
exports.swarmerTurret = {
    PARENT: ["genericTank"],
    LABEL: "Swarmer",
    BODY: {
        FOV: 2,
    },
    CONTROLLERS: [
        "canRepel",
        "onlyAcceptInArc",
        "mapAltToFire",
        "nearestDifferentMaster",
    ],
    COLOR: 16,
    GUNS: [
        {
            POSITION: [14, 14, -1.2, 5, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.hive]),
                TYPE: "hive",
            },
        },
        {
            POSITION: [15, 12, 1, 5, 0, 0, 0],
        },
    ],
};
exports.paladinDrone = {
    PARENT: ["drone"],
    SHAPE: 5,
};
exports.paladinLowerBody = {
    LABEL: "",
    CONTROLLERS: [["spin", { independent: true, speed: -0.005 }]],
    COLOR: 14,
    SIZE: 100,
    SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    SHAPE: 7,
    FOV: 1,
    MAX_CHILDREN: 16,
    FACING_TYPE: "autospin",
    GUNS: [
        {
            POSITION: [3.6, 6, 1.4, 8, 0, 26, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                TYPE: "paladinDrone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                WAIT_TO_CYCLE: true,
            },
        },
        {
            POSITION: [3.6, 6, 1.4, 8, 0, 77, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                TYPE: "paladinDrone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                WAIT_TO_CYCLE: true,
            },
        },
        {
            POSITION: [3.6, 6, 1.4, 8, 0, 129, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                TYPE: "paladinDrone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                WAIT_TO_CYCLE: true,
            },
        },
        {
            POSITION: [3.6, 6, 1.4, 8, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                TYPE: "paladinDrone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                WAIT_TO_CYCLE: true,
            },
        },
        {
            POSITION: [3.6, 6, 1.4, 8, 0, 231, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                TYPE: "paladinDrone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                WAIT_TO_CYCLE: true,
            },
        },
        {
            POSITION: [3.6, 6, 1.4, 8, 0, 282, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                TYPE: "paladinDrone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                WAIT_TO_CYCLE: true,
            },
        },
        {
            POSITION: [3.6, 6, 1.4, 8, 0, 333, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                TYPE: "paladinDrone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                WAIT_TO_CYCLE: true,
            },
        },
    ],
};
exports.paladinUpperBody = {
    LABEL: "",
    CONTROLLERS: [["spin", { independent: true, speed: 0.005 }]],
    AUTOSPIN: true,
    COLOR: 14,
    SIZE: 100,
    SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    MAX_CHILDREN: 28,
    SHAPE: 5,
    INDEPENDENT: true,
    TURRETS: [
        {
            /*********    SIZE         X             Y         ANGLE        ARC */
            POSITION: [10, 7.5, 0, 35, 160, 0],
            TYPE: ["swarmerTurret"],
        },
        {
            POSITION: [10, 7.5, 0, 110, 160, 0],
            TYPE: ["swarmerTurret"],
        },
        {
            POSITION: [10, 7.5, 0, 180, 160, 0],
            TYPE: ["swarmerTurret"],
        },
        {
            POSITION: [10, 7.5, 0, 252, 160, 0],
            TYPE: ["swarmerTurret"],
        },
        {
            POSITION: [10, 7.5, 0, 325, 160, 0],
            TYPE: ["swarmerTurret"],
        },
    ],
};
exports.paladin = {
    PARENT: ["celestial"],
    NAME: "Paladin",
    COLOR: 14,
    TURRETS: [
        {
            /*********    SIZE         X             Y         ANGLE        ARC */
            POSITION: [6.5, 9, 0, 260, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 219, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 180, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 300, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 339, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 380, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 420, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 459, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 500, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [14.94, 0, 0, 0, 360, 1],
            TYPE: ["paladinLowerBody"],
        },
        {
            POSITION: [8.6, 0, 0, 0, 360, 1],
            TYPE: ["paladinUpperBody"],
        },
    ],
};

// FREYJA
exports.cruiserTurret = {
    PARENT: ["genericTank"],
    LABEL: "Cruiser",
    BODY: {
        FOV: 2,
    },
    CONTROLLERS: [
        "canRepel",
        "onlyAcceptInArc",
        "mapAltToFire",
        "nearestDifferentMaster",
    ],
    COLOR: 16,
    GUNS: [
        {
            POSITION: [7, 7.5, 0.6, 7, 4, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm]),
                TYPE: "swarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [7, 7.5, 0.6, 7, -4, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm]),
                TYPE: "swarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
    ],
};
exports.freyjaLowerBody = {
    LABEL: "",
    CONTROLLERS: [["spin", { independent: true, speed: -0.005 }]],
    COLOR: 1,
    SIZE: 100,
    SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    MAX_CHILDREN: 28,
    SHAPE: 7,
    INDEPENDENT: true,
    FACING_TYPE: "autospin",
    TURRETS: [
        {
            //*********    SIZE         X             Y         ANGLE        ARC
            POSITION: [8.5, 9, 0, 26, 180, 0],
            TYPE: ["cruiserTurret"],
        },
        {
            POSITION: [8.5, 9, 0, 77, 180, 0],
            TYPE: ["cruiserTurret"],
        },
        {
            POSITION: [8.5, 9, 0, 129, 180, 0],
            TYPE: ["cruiserTurret"],
        },
        {
            POSITION: [8.5, 9, 0, 180, 180, 0],
            TYPE: ["cruiserTurret"],
        },
        {
            POSITION: [8.5, 9, 0, 231, 180, 0],
            TYPE: ["cruiserTurret"],
        },
        {
            POSITION: [8.5, 9, 0, 282, 180, 0],
            TYPE: ["cruiserTurret"],
        },
        {
            POSITION: [8.5, 9, 0, 333, 180, 0],
            TYPE: ["cruiserTurret"],
        },
    ],
};
exports.freyjaUpperBody = {
    LABEL: "",
    CONTROLLERS: [["spin", { independent: true, speed: 0.005 }]],
    COLOR: 1,
    SIZE: 100,
    SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    MAX_CHILDREN: 28,
    SHAPE: 5,
    INDEPENDENT: true,
    TURRETS: [
        {
            //**     SIZE         X             Y         ANGLE        ARC
            POSITION: [10.6, 7.5, 0, 35, 160, 0],
            TYPE: ["auto4gun"],
        },
        {
            POSITION: [10.6, 7.5, 0, 110, 160, 0],
            TYPE: ["auto4gun"],
        },
        {
            POSITION: [10.6, 7.5, 0, 180, 160, 0],
            TYPE: ["auto4gun"],
        },
        {
            POSITION: [10.6, 7.5, 0, 252, 160, 0],
            TYPE: ["auto4gun"],
        },
        {
            POSITION: [10.6, 7.5, 0, 325, 160, 0],
            TYPE: ["auto4gun"],
        },
    ],
};
exports.freyja = {
    PARENT: ["celestial"],
    NAME: "Freyja",
    COLOR: 1,
    TURRETS: [
        {
            /*********    SIZE         X             Y         ANGLE        ARC */
            POSITION: [6.5, 9, 0, 260, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 219, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 180, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 300, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 339, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 380, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 420, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 459, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 500, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [14.77, 0, 0, 0, 360, 1],
            TYPE: ["freyjaLowerBody"],
        },
        {
            POSITION: [8.7, 0, 0, 0, 360, 1],
            TYPE: ["freyjaUpperBody"],
        },
    ],
};

// ZAPHKIEL
exports.zaphkielSkimmerTurret = {
    PARENT: ["skimmerTurret"],
    COLOR: 16,
};
exports.zaphkielLowerBody = {
    LABEL: "",
    CONTROLLERS: [["spin", { independent: true, speed: -0.005 }]],
    COLOR: 2,
    SIZE: 100,
    SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    SHAPE: 7,
    FOV: 1,
    MAX_CHILDREN: 16,
    FACING_TYPE: "autospin",
    GUNS: [
        {
            //*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY
            POSITION: [3.6, 6, 1.4, 8, 0, 26, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                TYPE: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                WAIT_TO_CYCLE: true,
            },
        },
        {
            POSITION: [3.6, 6, 1.4, 8, 0, 77, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                TYPE: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
            },
        },
        {
            POSITION: [3.6, 6, 1.4, 8, 0, 129, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                TYPE: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
            },
        },
        {
            POSITION: [3.6, 6, 1.4, 8, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                TYPE: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
            },
        },
        {
            POSITION: [3.6, 6, 1.4, 8, 0, 231, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                TYPE: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
            },
        },
        {
            POSITION: [3.6, 6, 1.4, 8, 0, 282, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                TYPE: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
            },
        },
        {
            POSITION: [3.6, 6, 1.4, 8, 0, 333, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                TYPE: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
            },
        },
    ],
};
exports.zaphkielUpperBody = {
    LABEL: "",
    CONTROLLERS: [["spin", { independent: true, speed: 0.005 }]],
    AUTOSPIN: true,
    COLOR: 2,
    SIZE: 100,
    SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    MAX_CHILDREN: 28,
    SHAPE: 5,
    INDEPENDENT: true,
    TURRETS: [
        {
            /*********    SIZE         X             Y         ANGLE        ARC */
            POSITION: [10, 7.5, 0, 35, 160, 0],
            TYPE: ["zaphkielSkimmerTurret"],
        },
        {
            POSITION: [10, 7.5, 0, 110, 160, 0],
            TYPE: ["zaphkielSkimmerTurret"],
        },
        {
            POSITION: [10, 7.5, 0, 180, 160, 0],
            TYPE: ["zaphkielSkimmerTurret"],
        },
        {
            POSITION: [10, 7.5, 0, 252, 160, 0],
            TYPE: ["zaphkielSkimmerTurret"],
        },
        {
            POSITION: [10, 7.5, 0, 325, 160, 0],
            TYPE: ["zaphkielSkimmerTurret"],
        },
    ],
};
exports.zaphkiel = {
    PARENT: ["celestial"],
    NAME: "Zaphkiel",
    COLOR: 2,
    TURRETS: [
        {
            /*********    SIZE         X             Y         ANGLE        ARC */
            POSITION: [6.5, 9, 0, 260, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 219, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 180, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 300, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 339, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 380, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 420, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 459, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 500, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [14.94, 0, 0, 0, 360, 1],
            TYPE: "zaphkielLowerBody",
        },
        {
            POSITION: [8.6, 0, 0, 0, 360, 1],
            TYPE: "zaphkielUpperBody",
        },
    ],
};

// NYX
exports.rocketeerTurret = {
    PARENT: ["genericTank"],
    LABEL: "Rocketeer",
    BODY: {
        FOV: 2,
    },
    CONTROLLERS: [
        "canRepel",
        "onlyAcceptInArc",
        "mapAltToFire",
        "nearestDifferentMaster",
    ],
    COLOR: 16,
    GUNS: [
        {
            POSITION: [10, 12.5, -0.7, 10, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.pound,
                    g.launcher,
                    g.rocketeer,
                ]),
                TYPE: "rocketeerMissile",
                STAT_CALCULATOR: gunCalcNames.sustained,
            },
        },
        {
            POSITION: [17, 18, 0.65, 0, 0, 0, 0],
        },
    ],
};
exports.nyxLowerBody = {
    LABEL: "",
    CONTROLLERS: [["spin", { independent: true, speed: -0.005 }]],
    COLOR: 5,
    SIZE: 100,
    SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    SHAPE: 7,
    FOV: 1,
    FACING_TYPE: "autospin",
    MAX_CHILDREN: 16,
    GUNS: [
        {
            POSITION: [3.6, 7, -1.4, 8, 0, 26, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.factory, g.celeslower]),
                TYPE: "minion",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
            },
        },
        {
            POSITION: [3.6, 7, -1.4, 8, 0, 77, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.factory, g.celeslower]),
                TYPE: "minion",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
            },
        },
        {
            POSITION: [3.6, 7, -1.4, 8, 0, 129, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.factory, g.celeslower]),
                TYPE: "minion",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
            },
        },
        {
            POSITION: [3.6, 7, -1.4, 8, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.factory, g.celeslower]),
                TYPE: "minion",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
            },
        },
        {
            POSITION: [3.6, 7, -1.4, 8, 0, 231, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.factory, g.celeslower]),
                TYPE: "minion",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
            },
        },
        {
            POSITION: [3.6, 7, -1.4, 8, 0, 282, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.factory, g.celeslower]),
                TYPE: "minion",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
            },
        },
        {
            POSITION: [3.6, 7, -1.4, 8, 0, 333, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.factory, g.celeslower]),
                TYPE: "minion",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
            },
        },
    ],
};
exports.nyxUpperBody = {
    LABEL: "",
    CONTROLLERS: [["spin", { independent: true, speed: 0.005 }]],
    AUTOSPIN: true,
    COLOR: 5,
    SIZE: 100,
    SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    MAX_CHILDREN: 28,
    SHAPE: 5,
    INDEPENDENT: true,
    TURRETS: [
        {
            /*********    SIZE         X             Y         ANGLE        ARC */
            POSITION: [10, 7.5, 0, 35, 160, 0],
            TYPE: ["rocketeerTurret"],
        },
        {
            POSITION: [10, 7.5, 0, 110, 160, 0],
            TYPE: ["rocketeerTurret"],
        },
        {
            POSITION: [10, 7.5, 0, 180, 160, 0],
            TYPE: ["rocketeerTurret"],
        },
        {
            POSITION: [10, 7.5, 0, 252, 160, 0],
            TYPE: ["rocketeerTurret"],
        },
        {
            POSITION: [10, 7.5, 0, 325, 160, 0],
            TYPE: ["rocketeerTurret"],
        },
    ],
};
exports.nyx = {
    PARENT: ["celestial"],
    NAME: "Nyx",
    COLOR: 5,
    TURRETS: [
        {
            /*********    SIZE         X             Y         ANGLE        ARC */
            POSITION: [6.5, 9, 0, 260, 180, 0],
            TYPE: [
                "baseTrapTurret",
                {
                    INDEPENDENT: true,
                },
            ],
        },
        {
            POSITION: [6.5, 9, 0, 219, 180, 0],
            TYPE: [
                "baseTrapTurret",
                {
                    INDEPENDENT: true,
                },
            ],
        },
        {
            POSITION: [6.5, 9, 0, 180, 180, 0],
            TYPE: [
                "baseTrapTurret",
                {
                    INDEPENDENT: true,
                },
            ],
        },
        {
            POSITION: [6.5, 9, 0, 300, 180, 0],
            TYPE: [
                "baseTrapTurret",
                {
                    INDEPENDENT: true,
                },
            ],
        },
        {
            POSITION: [6.5, 9, 0, 339, 180, 0],
            TYPE: [
                "baseTrapTurret",
                {
                    INDEPENDENT: true,
                },
            ],
        },
        {
            POSITION: [6.5, 9, 0, 380, 180, 0],
            TYPE: [
                "baseTrapTurret",
                {
                    INDEPENDENT: true,
                },
            ],
        },
        {
            POSITION: [6.5, 9, 0, 420, 180, 0],
            TYPE: [
                "baseTrapTurret",
                {
                    INDEPENDENT: true,
                },
            ],
        },
        {
            POSITION: [6.5, 9, 0, 459, 180, 0],
            TYPE: [
                "baseTrapTurret",
                {
                    INDEPENDENT: true,
                },
            ],
        },
        {
            POSITION: [6.5, 9, 0, 500, 180, 0],
            TYPE: [
                "baseTrapTurret",
                {
                    INDEPENDENT: true,
                },
            ],
        },
        {
            POSITION: [14.94, 0, 0, 0, 360, 1],
            TYPE: ["nyxLowerBody"],
        },
        {
            POSITION: [8.6, 0, 0, 0, 360, 1],
            TYPE: ["nyxUpperBody"],
        },
    ],
};

// THEIA
exports.theiaTwisterTurret = {
    PARENT: ["twisterTurret"],
    COLOR: 16,
};
exports.theiaLowerBody = {
    LABEL: "",
    CONTROLLERS: [["spin", { independent: true, speed: -0.005 }]],
    COLOR: 35,
    SIZE: 100,
    SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    SHAPE: 7,
    FOV: 1,
    FACING_TYPE: "autospin",
    MAX_CHILDREN: 35,
    GUNS: [
        {
            POSITION: [3.6, 6, 1.4, 8, 0, 26, 1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.sunchip, g.celeslower]),
                TYPE: "summonerDrone",
                AUTOFIRE: true,
                WAIT_TO_CYCLE: true,
                SYNCS_SKILLS: true,
            },
        },
        {
            POSITION: [3.6, 6, 1.4, 8, 0, 77, 1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.sunchip, g.celeslower]),
                TYPE: "summonerDrone",
                AUTOFIRE: true,
                WAIT_TO_CYCLE: true,
                SYNCS_SKILLS: true,
            },
        },
        {
            POSITION: [3.6, 6, 1.4, 8, 0, 129, 1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.sunchip, g.celeslower]),
                TYPE: "summonerDrone",
                AUTOFIRE: true,
                WAIT_TO_CYCLE: true,
                SYNCS_SKILLS: true,
            },
        },
        {
            POSITION: [3.6, 6, 1.4, 8, 0, 180, 1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.sunchip, g.celeslower]),
                TYPE: "summonerDrone",
                AUTOFIRE: true,
                WAIT_TO_CYCLE: true,
                SYNCS_SKILLS: true,
            },
        },
        {
            POSITION: [3.6, 6, 1.4, 8, 0, 231, 1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.sunchip, g.celeslower]),
                TYPE: "summonerDrone",
                AUTOFIRE: true,
                WAIT_TO_CYCLE: true,
                SYNCS_SKILLS: true,
            },
        },
        {
            POSITION: [3.6, 6, 1.4, 8, 0, 282, 1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.sunchip, g.celeslower]),
                TYPE: "summonerDrone",
                AUTOFIRE: true,
                WAIT_TO_CYCLE: true,
                SYNCS_SKILLS: true,
            },
        },
        {
            POSITION: [3.6, 6, 1.4, 8, 0, 333, 1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.sunchip, g.celeslower]),
                TYPE: "summonerDrone",
                AUTOFIRE: true,
                WAIT_TO_CYCLE: true,
                SYNCS_SKILLS: true,
            },
        },
    ],
};
exports.theiaUpperBody = {
    LABEL: "",
    CONTROLLERS: [["spin", { independent: true, speed: 0.005 }]],
    AUTOSPIN: true,
    COLOR: 35,
    SIZE: 100,
    SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    MAX_CHILDREN: 28,
    SHAPE: 5,
    INDEPENDENT: true,
    TURRETS: [
        {
            /*********    SIZE         X             Y         ANGLE        ARC */
            POSITION: [10, 7.5, 0, 35, 160, 0],
            TYPE: "theiaTwisterTurret",
        },
        {
            POSITION: [10, 7.5, 0, 110, 160, 0],
            TYPE: "theiaTwisterTurret",
        },
        {
            POSITION: [10, 7.5, 0, 180, 160, 0],
            TYPE: "theiaTwisterTurret",
        },
        {
            POSITION: [10, 7.5, 0, 252, 160, 0],
            TYPE: "theiaTwisterTurret",
        },
        {
            POSITION: [10, 7.5, 0, 325, 160, 0],
            TYPE: "theiaTwisterTurret",
        },
    ],
};
exports.theia = {
    PARENT: ["celestial"],
    NAME: "Theia",
    COLOR: 13,
    TURRETS: [
        {
            /*********    SIZE         X             Y         ANGLE        ARC */
            POSITION: [6.5, 9, 0, 260, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 219, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 180, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 300, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 339, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 380, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 420, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 459, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 500, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [14.94, 0, 0, 0, 360, 1],
            TYPE: ["theiaLowerBody"],
        },
        {
            POSITION: [8.6, 0, 0, 0, 360, 1],
            TYPE: ["theiaUpperBody"],
        },
    ],
};
// KAIROS
exports.kairosLowerBody = {
    LABEL: "",
    CONTROLLERS: [["spin", { independent: true, speed: -0.005 }]],
    COLOR: 6,
    SIZE: 100,
    SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    MAX_CHILDREN: 28,
    SHAPE: 7,
    INDEPENDENT: true,
    FACING_TYPE: "autospin",
    TURRETS: [
        {
            //*********    SIZE         X             Y         ANGLE        ARC
            POSITION: [8.5, 9, 0, 26, 180, 0],
            TYPE: ["cruiserTurret"],
        },
        {
            POSITION: [8.5, 9, 0, 77, 180, 0],
            TYPE: ["cruiserTurret"],
        },
        {
            POSITION: [8.5, 9, 0, 129, 180, 0],
            TYPE: ["cruiserTurret"],
        },
        {
            POSITION: [8.5, 9, 0, 180, 180, 0],
            TYPE: ["cruiserTurret"],
        },
        {
            POSITION: [8.5, 9, 0, 231, 180, 0],
            TYPE: ["cruiserTurret"],
        },
        {
            POSITION: [8.5, 9, 0, 282, 180, 0],
            TYPE: ["cruiserTurret"],
        },
        {
            POSITION: [8.5, 9, 0, 333, 180, 0],
            TYPE: ["cruiserTurret"],
        },
    ],
};
exports.kairosUpperBody = {
    LABEL: "",
    CONTROLLERS: [["spin", { independent: true, speed: 0.005 }]],
    COLOR: 6,
    SIZE: 100,
    SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    MAX_CHILDREN: 28,
    SHAPE: 5,
    INDEPENDENT: true,
    TURRETS: [
        {
            //**     SIZE         X             Y         ANGLE        ARC
            POSITION: [10.6, 7.5, 0, 35, 160, 0],
            TYPE: ["kronosSkimmerTurret"],
        },
        {
            POSITION: [10.6, 7.5, 0, 110, 160, 0],
            TYPE: ["kronosSkimmerTurret"],
        },
        {
            POSITION: [10.6, 7.5, 0, 180, 160, 0],
            TYPE: ["kronosSkimmerTurret"],
        },
        {
            POSITION: [10.6, 7.5, 0, 252, 160, 0],
            TYPE: ["kronosSkimmerTurret"],
        },
        {
            POSITION: [10.6, 7.5, 0, 325, 160, 0],
            TYPE: ["kronosSkimmerTurret"],
        },
    ],
};
exports.kairos = {
    PARENT: ["celestial"],
    NAME: "Kairos",
    COLOR: 6,
    TURRETS: [
        {
            /*********    SIZE         X             Y         ANGLE        ARC */
            POSITION: [6.5, 9, 0, 260, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 219, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 180, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 300, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 339, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 380, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 420, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 459, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 500, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [14.77, 0, 0, 0, 360, 1],
            TYPE: ["kairosLowerBody"],
        },
        {
            POSITION: [8.7, 0, 0, 0, 360, 1],
            TYPE: ["kairosUpperBody"],
        },
    ],
};
// ALVISS
exports.alvissDrone = {
    PARENT: ["eggchip"],
    NECRO: false,
};
exports.launcherTurret = {
    PARENT: ["genericTank"],
    LABEL: "Launcher",
    BODY: {
        FOV: 2 * base.FOV,
    },
    COLOR: 16,
    CONTROLLERS: [
        "canRepel",
        "onlyAcceptInArc",
        "mapAltToFire",
        "nearestDifferentMaster",
    ],
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [10, 9, 1, 9, 0, 0, 0],
        },
        {
            POSITION: [17, 13, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty, g.arty]),
                TYPE: "minimissile",
                STAT_CALCULATOR: gunCalcNames.sustained,
            },
        },
    ],
};
exports.alvissLowerTurret = {
    PARENT: ["genericTank"],
    LABEL: "",
    MAX_CHILDREN: 3,
    BODY: {
        FOV: 2,
    },
    CONTROLLERS: [
        "canRepel",
        "onlyAcceptInArc",
        "mapAltToFire",
        "nearestDifferentMaster",
    ],
    COLOR: 16,
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [8.5, 11, 0.6, 6, 0, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.sunchip]),
                TYPE: "alvissDrone",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
    ],
};
exports.alvissLowerBody = {
    LABEL: "",
    CONTROLLERS: [["spin", { independent: true, speed: -0.005 }]],
    COLOR: 17,
    SIZE: 100,
    SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    SHAPE: 7,
    FOV: 1,
    FACING_TYPE: "autospin",
    MAX_CHILDREN: 24,
    TURRETS: [
        {
            //*********    SIZE         X             Y         ANGLE        ARC
            POSITION: [8.5, 9, 0, 26, 180, 0],
            TYPE: ["alvissLowerTurret"],
        },
        {
            POSITION: [8.5, 9, 0, 77, 180, 0],
            TYPE: ["alvissLowerTurret"],
        },
        {
            POSITION: [8.5, 9, 0, 129, 180, 0],
            TYPE: ["alvissLowerTurret"],
        },
        {
            POSITION: [8.5, 9, 0, 180, 180, 0],
            TYPE: ["alvissLowerTurret"],
        },
        {
            POSITION: [8.5, 9, 0, 231, 180, 0],
            TYPE: ["alvissLowerTurret"],
        },
        {
            POSITION: [8.5, 9, 0, 282, 180, 0],
            TYPE: ["alvissLowerTurret"],
        },
        {
            POSITION: [8.5, 9, 0, 333, 180, 0],
            TYPE: ["alvissLowerTurret"],
        },
    ],
};
exports.alvissUpperBody = {
    LABEL: "",
    CONTROLLERS: [["spin", { independent: true, speed: 0.005 }]],
    COLOR: 17,
    SIZE: 100,
    SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    MAX_CHILDREN: 28,
    SHAPE: 5,
    INDEPENDENT: true,
    TURRETS: [
        {
            //**     SIZE         X             Y         ANGLE        ARC
            POSITION: [10.6, 7.5, 0, 35, 160, 0],
            TYPE: ["launcherTurret"],
        },
        {
            POSITION: [10.6, 7.5, 0, 110, 160, 0],
            TYPE: ["launcherTurret"],
        },
        {
            POSITION: [10.6, 7.5, 0, 180, 160, 0],
            TYPE: ["launcherTurret"],
        },
        {
            POSITION: [10.6, 7.5, 0, 252, 160, 0],
            TYPE: ["launcherTurret"],
        },
        {
            POSITION: [10.6, 7.5, 0, 325, 160, 0],
            TYPE: ["launcherTurret"],
        },
    ],
};
exports.alviss = {
    PARENT: ["rogueCelestial"],
    NAME: "Alviss",
    TURRETS: [
        {
            /*********    SIZE         X             Y         ANGLE        ARC */
            POSITION: [6.5, 9, 0, 260, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 219, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 180, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 300, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 339, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 380, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 420, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 459, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 500, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [14.94, 0, 0, 0, 360, 1],
            TYPE: ["alvissLowerBody"],
        },
        {
            POSITION: [8.6, 0, 0, 0, 360, 1],
            TYPE: ["alvissUpperBody"],
        },
    ],
};

// TYR
exports.tyrLowerTurret = {
    PARENT: ["genericTank"],
    LABEL: "",
    MAX_CHILDREN: 4,
    BODY: {
        FOV: 2,
    },
    CONTROLLERS: [
        "canRepel",
        "onlyAcceptInArc",
        "mapAltToFire",
        "nearestDifferentMaster",
    ],
    COLOR: 16,
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [8.5, 11, 0.6, 6, 0, 0, 0.5],
        },
        {
            POSITION: [3.4, 14, 1, 14.3, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.babyfactory, g.lessreload]),
                TYPE: "tinyMinion",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
            },
        },
    ],
};
exports.tyrLowerBody = {
    LABEL: "",
    CONTROLLERS: [["spin", { independent: true, speed: -0.005 }]],
    COLOR: 17,
    SIZE: 100,
    SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    SHAPE: 7,
    FOV: 1,
    FACING_TYPE: "autospin",
    MAX_CHILDREN: 23,
    TURRETS: [{ //*********    SIZE         X             Y         ANGLE        ARC
        POSITION: [8.5, 9, 0, 26, 180, 0],
        TYPE: ["tyrLowerTurret"],
    },{
        POSITION: [8.5, 9, 0, 77, 180, 0],
        TYPE: ["tyrLowerTurret"],
    },{
        POSITION: [8.5, 9, 0, 129, 180, 0],
        TYPE: ["tyrLowerTurret"],
    },{
        POSITION: [8.5, 9, 0, 180, 180, 0],
        TYPE: ["tyrLowerTurret"],
    },{
        POSITION: [8.5, 9, 0, 231, 180, 0],
        TYPE: ["tyrLowerTurret"],
    },{
        POSITION: [8.5, 9, 0, 282, 180, 0],
        TYPE: ["tyrLowerTurret"],
    },{
        POSITION: [8.5, 9, 0, 333, 180, 0],
        TYPE: ["tyrLowerTurret"],
    }]
};
exports.tyrUpperBody = {
    LABEL: "",
    CONTROLLERS: [["spin", { independent: true, speed: 0.005 }]],
    COLOR: 17,
    SIZE: 100,
    SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    MAX_CHILDREN: 28,
    SHAPE: 5,
    INDEPENDENT: true,
    TURRETS: [{ //**     SIZE         X             Y         ANGLE        ARC
        POSITION: [10.6, 7.5, 0, 35, 160, 0],
        TYPE: ["auto4gun"],
    },{
        POSITION: [10.6, 7.5, 0, 110, 160, 0],
        TYPE: ["auto4gun"],
    },{
        POSITION: [10.6, 7.5, 0, 180, 160, 0],
        TYPE: ["auto4gun"],
    },{
        POSITION: [10.6, 7.5, 0, 252, 160, 0],
        TYPE: ["auto4gun"],
    },{
        POSITION: [10.6, 7.5, 0, 325, 160, 0],
        TYPE: ["auto4gun"],
    }]
};
exports.tyr = {
    PARENT: ["rogueCelestial"],
    NAME: "Tyr",
    TURRETS: [{ /*********    SIZE         X             Y         ANGLE        ARC */
        POSITION: [6.5, 9, 0, 260, 180, 0],
        TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
    },{
        POSITION: [6.5, 9, 0, 219, 180, 0],
        TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
    },{
        POSITION: [6.5, 9, 0, 180, 180, 0],
        TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
    },{
        POSITION: [6.5, 9, 0, 300, 180, 0],
        TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
    },{
        POSITION: [6.5, 9, 0, 339, 180, 0],
        TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
    },{
        POSITION: [6.5, 9, 0, 380, 180, 0],
        TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
    },{
        POSITION: [6.5, 9, 0, 420, 180, 0],
        TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
    },{
        POSITION: [6.5, 9, 0, 459, 180, 0],
        TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
    },{
        POSITION: [6.5, 9, 0, 500, 180, 0],
        TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
    },{
        POSITION: [14.94, 0, 0, 0, 360, 1],
        TYPE: ["tyrLowerBody"],
    },{
        POSITION: [8.6, 0, 0, 0, 360, 1],
        TYPE: ["tyrUpperBody"],
    }]
};

// Fiolnir
exports.fiolnirLowerTurret = {
    PARENT: ["genericTank"],
    LABEL: "",
    BODY: {
        FOV: 2,
    },
    CONTROLLERS: [
        "canRepel",
        "onlyAcceptInArc",
        "mapAltToFire",
        "nearestDifferentMaster",
    ],
    COLOR: 16,
    GUNS: [
        {
            POSITION: [7, 8, 0.6, 6, 0, 30, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.bees, g.pound, g.morespeed]),
                TYPE: ["bee", { INDEPENDENT: true }],
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [7, 8, 0.6, 6, 0, -30, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.bees, g.pound, g.morespeed]),
                TYPE: ["bee", { INDEPENDENT: true }],
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
    ],
};
exports.fiolnirLowerBody = {
    LABEL: "",
    CONTROLLERS: [["spin", { independent: true, speed: -0.005 }]],
    COLOR: 17,
    SIZE: 100,
    SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    SHAPE: 7,
    FOV: 1,
    FACING_TYPE: "autospin",
    MAX_CHILDREN: 23,
    TURRETS: [{ //*********    SIZE         X             Y         ANGLE        ARC
        POSITION: [8.5, 9, 0, 26, 180, 0],
        TYPE: ["fiolnirLowerTurret"],
    },{
        POSITION: [8.5, 9, 0, 77, 180, 0],
        TYPE: ["fiolnirLowerTurret"],
    },{
        POSITION: [8.5, 9, 0, 129, 180, 0],
        TYPE: ["fiolnirLowerTurret"],
    },{
        POSITION: [8.5, 9, 0, 180, 180, 0],
        TYPE: ["fiolnirLowerTurret"],
    },{
        POSITION: [8.5, 9, 0, 231, 180, 0],
        TYPE: ["fiolnirLowerTurret"],
    },{
        POSITION: [8.5, 9, 0, 282, 180, 0],
        TYPE: ["fiolnirLowerTurret"],
    },{
        POSITION: [8.5, 9, 0, 333, 180, 0],
        TYPE: ["fiolnirLowerTurret"],
    }]
};
exports.fiolnirUpperTurret = {
    PARENT: ["genericTank"],
    LABEL: "",
    BODY: {
        FOV: 2,
    },
    CONTROLLERS: [
        "canRepel",
        "onlyAcceptInArc",
        "mapAltToFire",
        "nearestDifferentMaster",
    ],
    COLOR: 16,
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [12, 16, -0.6, 0, 0, 0, 0],
        },
        {
            POSITION: [15, 12, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.bitlessspeed]),
                TYPE: ["turretedBullet", {COLOR: 6}],
            },
        },
    ],
};
exports.fiolnirUpperBody = {
    LABEL: "",
    CONTROLLERS: [["spin", { independent: true, speed: 0.005 }]],
    COLOR: 17,
    SIZE: 100,
    SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    MAX_CHILDREN: 28,
    SHAPE: 5,
    INDEPENDENT: true,
    TURRETS: [{ //**     SIZE         X             Y         ANGLE        ARC
        POSITION: [10.6, 7.5, 0, 35, 160, 0],
        TYPE: ["fiolnirUpperTurret"],
    },{
        POSITION: [10.6, 7.5, 0, 110, 160, 0],
        TYPE: ["fiolnirUpperTurret"],
    },{
        POSITION: [10.6, 7.5, 0, 180, 160, 0],
        TYPE: ["fiolnirUpperTurret"],
    },{
        POSITION: [10.6, 7.5, 0, 252, 160, 0],
        TYPE: ["fiolnirUpperTurret"],
    },{
        POSITION: [10.6, 7.5, 0, 325, 160, 0],
        TYPE: ["fiolnirUpperTurret"],
    }]
};
exports.fiolnir = {
    PARENT: ["rogueCelestial"],
    NAME: "Fiolnir",
    TURRETS: [{ /*********    SIZE         X             Y         ANGLE        ARC */
        POSITION: [6.5, 9, 0, 260, 180, 0],
        TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
    },{
        POSITION: [6.5, 9, 0, 219, 180, 0],
        TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
    },{
        POSITION: [6.5, 9, 0, 180, 180, 0],
        TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
    },{
        POSITION: [6.5, 9, 0, 300, 180, 0],
        TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
    },{
        POSITION: [6.5, 9, 0, 339, 180, 0],
        TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
    },{
        POSITION: [6.5, 9, 0, 380, 180, 0],
        TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
    },{
        POSITION: [6.5, 9, 0, 420, 180, 0],
        TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
    },{
        POSITION: [6.5, 9, 0, 459, 180, 0],
        TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
    },{
        POSITION: [6.5, 9, 0, 500, 180, 0],
        TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
    },{
        POSITION: [14.5, 0, 0, 0, 360, 1],
        TYPE: ["fiolnirLowerBody"],
    },{
        POSITION: [8.6, 0, 0, 0, 360, 1],
        TYPE: ["fiolnirUpperBody"],
    }]
};
// Eternals
exports.kronosMissile = {
    PARENT: ["missile"],
    GUNS: [
        {
            POSITION: [14, 6, 1, 0, -2, 150, 0],
            PROPERTIES: {
                AUTOFIRE: true,
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    [3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                ]),
                TYPE: [
                    "bullet",
                    {
                        PERSISTS_AFTER_DEATH: true,
                    },
                ],
                STAT_CALCULATOR: gunCalcNames.thruster,
            },
        },
        {
            POSITION: [14, 6, 1, 0, 2, 210, 0],
            PROPERTIES: {
                AUTOFIRE: true,
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    [3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                ]),
                TYPE: [
                    "bullet",
                    {
                        PERSISTS_AFTER_DEATH: true,
                    },
                ],
                STAT_CALCULATOR: gunCalcNames.thruster,
            },
        },
        {
            POSITION: [3, 7, 1, 11, -2, 90, 0],
            PROPERTIES: {
                AUTOFIRE: true,
                SHOOT_SETTINGS: combineStats([
                    g.trap,
                    g.halfrange,
                    [3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                ]),
                TYPE: [
                    "trap",
                    {
                        PERSISTS_AFTER_DEATH: true,
                    },
                ],
            },
        },
        {
            POSITION: [11, 6, 1, 0, -2, 90, 0.5],
        },
        {
            POSITION: [3, 7, 1, 11, 2, -90, 0],
            PROPERTIES: {
                AUTOFIRE: true,
                SHOOT_SETTINGS: combineStats([
                    g.trap,
                    g.halfrange,
                    [3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                ]),
                TYPE: [
                    "trap",
                    {
                        PERSISTS_AFTER_DEATH: true,
                    },
                ],
            },
        },
        {
            POSITION: [11, 6, 1, 0, 2, -90, 0.5],
        },
    ],
};
exports.kronosSkimmerTurret = {
    PARENT: ["genericTank"],
    LABEL: "Skimmer",
    BODY: {
        FOV: 10,
    },
    COLOR: 16,
    CONTROLLERS: [
        "canRepel",
        "onlyAcceptInArc",
        "mapAltToFire",
        "nearestDifferentMaster",
    ],
    GUNS: [
        {
            POSITION: [8, 20, -0.5, 9, 0, 0, 0],
        },
        {
            POSITION: [13, 18, -0.8, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.pound,
                    g.arty,
                    g.arty,
                    g.skim,
                    g.halfreload,
                ]),
                TYPE: "kronosMissile",
            },
        },
    ],
};
exports.carrierTurret = {
    PARENT: ["genericTank"],
    LABEL: "Carrier",
    BODY: {
        FOV: 2,
    },
    CONTROLLERS: [
        "canRepel",
        "onlyAcceptInArc",
        "mapAltToFire",
        "nearestDifferentMaster",
    ],
    COLOR: 16,
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [7, 8, 0.6, 7, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier, g.pound, g.morespeed]),
                TYPE: "swarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [7, 8, 0.6, 7, 2, 30, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier, g.pound, g.morespeed]),
                TYPE: "swarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [7, 8, 0.6, 7, -2, -30, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier, g.pound, g.morespeed]),
                TYPE: "swarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
    ],
};
exports.tripletTurret = {
    PARENT: ["genericTank"],
    LABEL: "Triplet",
    BODY: {
        FOV: 2,
    },
    CONTROLLERS: [
        "canRepel",
        "onlyAcceptInArc",
        "mapAltToFire",
        "nearestDifferentMaster",
    ],
    COLOR: 16,
    GUNS: [
        {
            POSITION: [18, 10, 1, 0, 5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [18, 10, 1, 0, -5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [21, 10, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.kronosBottomBody = {
    LABEL: "",
    CONTROLLERS: [["spin", { independent: true, speed: -0.01 }]],
    COLOR: 6,
    SIZE: 100,
    SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    SHAPE: 9,
    FOV: 10,
    TURRETS: [],
};
for(let i = 0; i < 9; i++) {
    exports.kronosBottomBody.TURRETS.push(
        {
            POSITION: [6.5, 9, 0, 360/9*(i+0.5), 160, 0],
            TYPE: ["kronosSkimmerTurret", { INDEPENDENT: true, }],
        },
    )
};
exports.kronosMiddleBody = {
    LABEL: "",
    CONTROLLERS: [["spin", { independent: true, speed: 0.005 }]],
    COLOR: 6,
    SIZE: 100,
    SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    SHAPE: 7,
    FOV: 1,
    TURRETS: [],
};
for(let i = 0; i < 7; i++) {
    exports.kronosMiddleBody.TURRETS.push(
        {
            POSITION: [8, 8.5, 0, 360/7*(i+0.5), 160, 0],
            TYPE: ["carrierTurret", { INDEPENDENT: true, }],
        },
    )
};
exports.kronosTopBody = {
    LABEL: "",
    CONTROLLERS: [["spin", { independent: true, speed: -0.005 }]],
    COLOR: 6,
    SIZE: 100,
    SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    SHAPE: 5,
    FOV: 1,
    TURRETS: [],
};
for(let i = 0; i < 5; i++) {
    exports.kronosTopBody.TURRETS.push(
        {
            POSITION: [9.5, 9, 0, 360/5*(i+0.5), 160, 0],
            TYPE: ["tripletTurret", { INDEPENDENT: true, }],
        },
    )
};
exports.kronos = {
    PARENT: ["eternal"],
    NAME: "Kronos",
    COLOR: 6,
    TURRETS: [
        {
            POSITION: [15.5, 0, 0, 0, 360, 1],
            TYPE: ["kronosBottomBody"],
        },
        {
            POSITION: [11, 0, 0, 0, 360, 1],
            TYPE: ["kronosMiddleBody"],
        },
        {
            POSITION: [6.5, 0, 0, 0, 360, 1],
            TYPE: ["kronosTopBody"],
        },
    ],
};
for(let i = 0; i < 11; i++) {
    exports.kronos.TURRETS.push(
        {
            POSITION: [6, 9, 0, 360/11*(i+0.5), 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true, }],
        },
    )
};

exports.autosmashTurret = {
    PARENT: ["genericTank"],
    LABEL: "Launcher",
    BODY: {
        FOV: 10,
    },
    COLOR: 16,
    CONTROLLERS: [
        "canRepel",
        "onlyAcceptInArc",
        "mapAltToFire",
        "nearestDifferentMaster",
    ],
    GUNS: [
        {
            POSITION: [3, 10, 1.2, 15, 0, 0, 0],
        },
        {
            POSITION: [16, 18, -0.7, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.pound,
                    g.arty,
                    g.arty,
                    g.skim,
                    g.halfreload,
                    g.morespeed,
                    g.morespeed,
                    //g.morespeed,
                    {range: 2.5},
                ]),
                TYPE: "autoSmasherMissile",
            },
        },
    ],
};
exports.gunnerCruiserTurret = {
    PARENT: ["genericTank"],
    LABEL: "Launcher",
    BODY: {
        FOV: 10,
    },
    COLOR: 16,
    CONTROLLERS: [ "canRepel", "onlyAcceptInArc", "mapAltToFire", "nearestDifferentMaster", ],
    GUNS: [
        {
            POSITION: [6, 7.5, 0.6, 6, 4.5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm]),
                TYPE: "swarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [6, 7.5, 0.6, 6, -4.5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm]),
                TYPE: "swarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [18, 3, 1, 0, -3, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.gunner,
                    g.power,
                    g.twin,
                    g.tonsmorrecoil,
                    g.lotsmorrecoil,
                ]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [18, 3, 1, 0, 3, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.gunner,
                    g.power,
                    g.twin,
                    g.tonsmorrecoil,
                    g.lotsmorrecoil,
                ]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.gemDrone = {
    PARENT: ["drone"],
    COLOR: 0,
    DRAW_HEALTH: true,
    SHAPE: 6,
    INDEPENDENT: true,
    BODY: {
        PUSHABILITY: 0.3,
        HEALTH: 0.3*5,
        DAMAGE: 3.375/5,
        SPEED: 1,
        DENSITY: 0.1,
        RESIST: 3,
        FOV: 100,
    },
}
exports.ragnarokBottomBody = {
    LABEL: "",
    CONTROLLERS: [["spin", { independent: true, speed: -0.01 }]],
    COLOR: 0,
    SIZE: 100,
    SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    SHAPE: 9,
    FOV: 10,
    MAX_CHILDREN: 18,
    GUNS: [],
};
for(let i = 0; i < 9; i++) {
    exports.ragnarokBottomBody.GUNS.push(
        {
            POSITION: [2.5, 3, -1.8, 9, 0, 360/9*(i+0.5), 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.factory, g.celeslower, g.pound, {size: 1.7}]),
                TYPE: "gemDrone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
            },
        },
    )
};
exports.ragnarokMiddleBody = {
    LABEL: "",
    CONTROLLERS: [["spin", { independent: true, speed: 0.005 }]],
    COLOR: 0,
    SIZE: 100,
    SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    SHAPE: 7,
    FOV: 1,
    TURRETS: [],
};
for(let i = 0; i < 7; i++) {
    exports.ragnarokMiddleBody.TURRETS.push(
        {
            POSITION: [7, 8.5, 0, 360/7*(i+0.5), 160, 0],
            TYPE: ["autosmashTurret", { INDEPENDENT: true, }],
        },
    )
};
exports.ragnarokTopBody = {
    LABEL: "",
    CONTROLLERS: [["spin", { independent: true, speed: -0.005 }]],
    COLOR: 0,
    SIZE: 100,
    SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    SHAPE: 5,
    FOV: 1,
    TURRETS: [],
};
for(let i = 0; i < 5; i++) {
    exports.ragnarokTopBody.TURRETS.push(
        {
            POSITION: [8.5, 9, 0, 360/5*(i+0.5), 160, 0],
            TYPE: ["gunnerCruiserTurret", { INDEPENDENT: true, }],
        },
    )
};
exports.ragnarok = {
    PARENT: ["eternal"],
    NAME: "Ragnarok",
    COLOR: 0,
    TURRETS: [
        {
            POSITION: [15.5, 0, 0, 0, 360, 1],
            TYPE: ["ragnarokBottomBody"],
        },
        {
            POSITION: [11, 0, 0, 0, 360, 1],
            TYPE: ["ragnarokMiddleBody"],
        },
        {
            POSITION: [6.5, 0, 0, 0, 360, 1],
            TYPE: ["ragnarokTopBody"],
        },
    ],
};
for(let i = 0; i < 11; i++) {
    exports.ragnarok.TURRETS.push(
        {
            POSITION: [5, 8.5, 0, 360/11*(i+0.5), 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true, }],
        },
    )
};
// fanmade eternal

exports.redistributorTurret = {
    PARENT: ["genericTank"],
    LABEL: "Redistributor",
    BODY: {
        FOV: 10,
    },
    COLOR: 16,
    CONTROLLERS: [ "canRepel", "onlyAcceptInArc", "mapAltToFire", "nearestDifferentMaster", ],
    GUNS: [
        {
            POSITION: [26, 7, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.lowpower, g.mach, g.morerecoil, ]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [23, 10, 1, 0, 0, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.lowpower, g.mach, g.morerecoil, ]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [12, 10, 1.4, 8, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.hyperionBottomBody = {
    LABEL: "",
    CONTROLLERS: [["spin", { independent: true, speed: -0.01 }]],
    COLOR: 2,
    SIZE: 100,
    SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    SHAPE: 9,
    FOV: 10,
    MAX_CHILDREN: 32,
    GUNS: [],
};
for(let i = 0; i < 9; i++) {
    exports.hyperionBottomBody.GUNS.push(
        {
            POSITION: [2.5, 3, 1.8, 9, 0, 360/9*(i+0.5), 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.celeslower, {size: 1.7}]),
                TYPE: ["dorito", { INDEPENDENT: true }],
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
            },
        },
    )
};
exports.hyperionMiddleBody = {
    LABEL: "",
    CONTROLLERS: [["spin", { independent: true, speed: 0.005 }]],
    COLOR: 2,
    SIZE: 100,
    SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    SHAPE: 7,
    FOV: 1,
    TURRETS: [],
};
for(let i = 0; i < 7; i++) {
    exports.hyperionMiddleBody.TURRETS.push(
        {
            POSITION: [7, 8.5, 0, 360/7*(i+0.5), 160, 0],
            TYPE: ["deltaSkimmerTurret", { INDEPENDENT: true, }],
        },
    )
};
exports.hyperionTopBody = {
    LABEL: "",
    CONTROLLERS: [["spin", { independent: true, speed: -0.005 }]],
    COLOR: 2,
    SIZE: 100,
    SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    SHAPE: 5,
    FOV: 1,
    TURRETS: [],
};
for(let i = 0; i < 5; i++) {
    exports.hyperionTopBody.TURRETS.push(
        {
            POSITION: [8.5, 9, 0, 360/5*(i+0.5), 160, 0],
            TYPE: ["redistributorTurret", { INDEPENDENT: true, }],
        },
    )
};
exports.hyperion = {
    PARENT: ["eternal"],
    NAME: "Hyperion",
    COLOR: 2,
    TURRETS: [
        {
            POSITION: [15.5, 0, 0, 0, 360, 1],
            TYPE: ["hyperionBottomBody"],
        },
        {
            POSITION: [11, 0, 0, 0, 360, 1],
            TYPE: ["hyperionMiddleBody"],
        },
        {
            POSITION: [6.5, 0, 0, 0, 360, 1],
            TYPE: ["hyperionTopBody"],
        },
    ],
};
for(let i = 0; i < 11; i++) {
    exports.hyperion.TURRETS.push(
        {
            POSITION: [5, 8.5, 0, 360/11*(i+0.5), 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true, }],
        },
    )
};

//APS
exports.bigmach4gun = {
    PARENT: ["genericTank"],
    LABEL: "",
    CONTROLLERS: [
        "canRepel",
        "onlyAcceptInArc",
        "mapAltToFire",
        "nearestDifferentMaster",
    ],
    COLOR: 16,
    GUNS: [
        {
            POSITION: [14, 6, 1.4, 0, -6, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.auto, g.gunner, g.twin, g.twin, g.mach, g.power, g.halfreload, ]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [14, 6, 1.4, 0, 6, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.auto, g.gunner, g.twin, g.twin, g.mach, g.power, g.halfreload, ]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [16, 6, 1.4, 0, 0, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.auto, g.gunner, g.twin, g.twin, g.mach, g.power, g.halfreload, ]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.APS14gun = {
    PARENT: ["genericTank"],
    LABEL: 'Mecha Gun',
    BODY: {
        FOV: 1
    },
    COLOR: 16,
    GUNS: [{ /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
    POSITION: [  9,     4,      1,      12,    3.75,     0,     1/3,  ], 
    PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast, g.mecha, g.boss]),
        TYPE: "bullet",
    }, }, { /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
    POSITION: [  9,     4,      1,      12,    -3.75,     0,     2/3,  ], 
    PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast, g.mecha, g.boss]),
        TYPE: "bullet",
    }, }, { /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
    POSITION: [  10.5,   4,      1,     12,    0,     0,     0,  ], 
    PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast, g.mecha, g.boss]),
        TYPE: "bullet",
    }, }, { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
    POSITION: [  9,    14,      1,      5,     0,     0,      0,   ], 
    }]
};
exports.APSplus14gun = {
    PARENT: ["genericTank"],
    LABEL: 'Mecha Gun',
    BODY: {
        FOV: 1
    },
    COLOR: 16,
    GUNS: [{ /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
    POSITION: [  9,     3.75,      1,      12,    4,     0,     0.5,  ], 
    PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast, g.mecha, g.boss]),
        TYPE: "bullet",
    }, }, { /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
    POSITION: [  9,     3.75,      1,      12,    -4,     0,     0.75,  ], 
    PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast, g.mecha, g.boss]),
        TYPE: "bullet",
    }, }, { /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
    POSITION: [  10.5,   3.75,      1,     12,    -2,     0,     0.25,  ], 
    PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast, g.mecha, g.boss]),
        TYPE: "bullet",
    }, }, { /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
    POSITION: [  10.5,   3.75,      1,     12,    2,     0,     0,  ], 
    PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast, g.mecha, g.boss]),
        TYPE: "bullet",
    }, }, { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
    POSITION: [  9,    14,      1,      5,     0,     0,      0,   ], 
    }]
};
exports.APSplus14cyclone = {
    PARENT: ["genericTank"],
    COLOR: "invertRed",
    CONTROLLERS: [["spin", { independent: true }]],
    GUNS: [],
};
for (let i = 0; i < 8; i++) {
    let delay;
    switch (i % 4) {
        case 0:
            delay = 0;
            break;
        case 1:
            delay = 0.5;
            break;
        case 2:
            delay = 0.25;
            break;
        case 3:
            delay = 0.75;
            break;
    }
    exports.APSplus14cyclone.GUNS.push(
        {
            POSITION: [15, 7, 1, 0, 0, 45 * i, delay],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([ g.basic, g.twin, g.fast]),
                TYPE: "bullet",
            },
        },
    )
};

exports.APSchompyturret = {
    PARENT: ["genericTank"],
    LABEL: 'Borer',
    DANGER: 6,
    BODY: {
        FOV: 1.2,
    },
    GUNS: [{
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [5, 3, 1, 9, 5, 0, 0.25],
        }, {
            POSITION: [13, 4, 1, 0, 5, 0, 0.25],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast, g.pound, g.arty, g.arty]),
                TYPE: "minimissile",
                STAT_CALCULATOR: gunCalcNames.sustained,
            },
        },{
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [5, 3, 1, 9, -5, 0, 0.75],
        }, {
            POSITION: [13, 4, 1, 0, -5, 0, 0.75],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast, g.pound, g.arty, g.arty]),
                TYPE: "minimissile",
                STAT_CALCULATOR: gunCalcNames.sustained,
            },
        },{
        POSITION: [22, 2, 1, 0, 3, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast, g.pellet, g.bore, g.boss]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [22, 2, 1, 0, -3, 0, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast, g.pellet, g.bore, g.boss]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [4.5, 8.5, 1, 7.5, 0, 0, 0]
    },]
};
exports.APS1pillbox = {
    LABEL: "Pillbox",
    PARENT: ["trap"],
    SHAPE: -4,
    MOTION_TYPE: "motor",
    CONTROLLERS: ["goToMasterTarget", "nearestDifferentMaster"],
    INDEPENDENT: true,
    BODY: {
        SPEED: 1,
        DENSITY: 5,
    },
    DIE_AT_RANGE: true,
    TURRETS: [
        {
            POSITION: [11, 0, 0, 0, 360, 1],
            TYPE: "bigmach4gun",
        },
    ],
};
exports.APS1pillboxturret = {
    PARENT: ["genericTank"],
    DANGER: 7,
    LABEL: "Engineer",
    BODY: {
        FOV: 1.15 * base.FOV,
    },
    GUNS: [{
        POSITION: [4.25, 14, 1.25, 7.75, 0, 0, 0]
        }, {
            POSITION: [5, 11, 1, 10.5, 0, 0, 0],
        }, {
            POSITION: [3, 14, 1, 15.5, 0, 0, 0],
        }, {
            POSITION: [2, 14, 1.3, 18, 0, 0, 0],
            PROPERTIES: {
                MAX_CHILDREN: 6,
                SHOOT_SETTINGS: combineStats([g.trap, g.block, {reload: 2.2, health: 1.3}]),
                TYPE: "APS1pillbox",
                SYNCS_SKILLS: true,
                DESTROY_OLDEST_CHILD: true,
            }, }, {
            POSITION: [4, 14, 1, 8, 0, 0, 0],
        },
    ],
};
exports.APSbody = {
    PARENT: ["miniboss"],
    LABEL: "APS",
    DANGER: 8,
    COLOR: 60,
    SHAPE: 8,
    SIZE: 30,
    FACING_TYPE: "autospin",
    VALUE: 3e5,
    BODY: {
        FOV: 0.5,
        SPEED: 0.1 * base.SPEED,
        HEALTH: 12 * base.HEALTH,
        DAMAGE: 2.5 * base.DAMAGE,
    },
    CONTROLLERS: ["nearestDifferentMaster", "minion", "canRepel"],
};
exports.APS1 = {
    PARENT: ["APSbody"],
    LABEL: "APS-1",
    GUNS: [],
    TURRETS: [
        {
            POSITION: [10, 0, 0, 0, 360, 1],
            TYPE: [
                "engineer",
                {
                    COLOR: 60,
                },
            ],
        },
    ],
};
for (let i = 0; i < 4; i++) {
    exports.APS1.GUNS.push(
        {
            POSITION: [6, 6, 1.2, 6, 0, 90*i+45, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, {reload: 0.6, size: 0.5}]),
                TYPE: ["drone", { INDEPENDENT: true }],
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                WAIT_TO_CYCLE: true,
                MAX_CHILDREN: 4,
            },
        },
        {
            POSITION: [5.5, 8, 1, 6, 0, 90*i+90, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.pound, g.destroy]),
                TYPE: "bullet",
                LABEL: "Devastator",
            },
        },
    )
    exports.APS1.TURRETS.push(
        {
            POSITION: [5, 11, 0, 90*i+90, 160, 0],
            TYPE: ["auto4gun", { INDEPENDENT: false }],
        },
        {
            POSITION: [5, 11, 0, 90*i+45, 160, 0],
            TYPE: ["sprayer", { INDEPENDENT: false }],
        },
    )
};
exports.APS1plus = {
    PARENT: ["APSbody"],
    LABEL: "APS(+)-1",
    SHAPE: 12,
    SIZE: 60,
    VALUE: 2e6,
    BODY: {
        FOV: 0.5,
        SPEED: 0.05 * base.SPEED,
        HEALTH: 24 * base.HEALTH,
        DAMAGE: 4.5 * base.DAMAGE,
    },
    GUNS: [],
    TURRETS: [],
};
for (let i = 0; i < 4; i++) {
    exports.APS1plus.GUNS.push(
        {
            POSITION: [5.5, 4, 1.2, 6, 0, 90*i+90, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, {reload: 0.3, size: 0.5}]),
                TYPE: ["drone", { INDEPENDENT: true }],
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                WAIT_TO_CYCLE: true,
                MAX_CHILDREN: 8,
            },
        },
        {
            POSITION: [5, 4, 1, 6, 0, 90*i+30, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.pound, g.destroy]),
                TYPE: "bullet",
                LABEL: "Devastator",
            },
        },
        {
            POSITION: [5, 4, 1, 6, 0, 90*i+60, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.pound, g.destroy]),
                TYPE: "bullet",
                LABEL: "Devastator",
            },
        },
    )
    exports.APS1plus.TURRETS.push(
        {
            POSITION: [3, 11, 0, 90*i+30, 160, 0],
            TYPE: ["auto4gun", { INDEPENDENT: false }],
        },
        {
            POSITION: [3, 11, 0, 90*i+60, 160, 0],
            TYPE: ["auto4gun", { INDEPENDENT: false }],
        },
        {
            POSITION: [3, 11, 0, 90*i+90, 160, 0],
            TYPE: ["sprayer", { INDEPENDENT: false }],
        },
        {
            POSITION: [3, 7.5, 0, 90*i+22.5, 240, 1],
            TYPE: ["bigmach4gun", { INDEPENDENT: true }],
        },
        {
            POSITION: [3, 7.5, 0, 90*i+67.5, 240, 1],
            TYPE: ["bigmach4gun", { INDEPENDENT: true }],
        },
    )
};
exports.APS1plus.TURRETS.push(
        {
            POSITION: [7, 0, 0, 0, 360, 1],
            TYPE: [
                "APS1pillboxturret",
                {
                    COLOR: 60,
                },
            ],
        },
)
exports.APS1plusplus = {
    PARENT: ["APSbody"],
    LABEL: "APS(++)-1",
    SHAPE: 16,
    SIZE: 90,
    VALUE: 2e6,
    BODY: {
        FOV: 0.5,
        SPEED: 0.01 * base.SPEED,
        HEALTH: 48 * base.HEALTH,
        DAMAGE: 4.25 * base.DAMAGE,
    },
    GUNS: [],
    TURRETS: [],
};
for (let i = 0; i < 8; i++) {
    exports.APS1plusplus.GUNS.push(
        {
            POSITION: [5, 2.5, 1.2, 6, 0, 45*i+22.5, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, {reload: 0.6, size: 0.5}]),
                TYPE: ["drone", { INDEPENDENT: true }],
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                WAIT_TO_CYCLE: true,
                MAX_CHILDREN: 8,
            },
        },
        {
            POSITION: [5, 2.5, 1, 6, 0, 45*i+45, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.pound, g.destroy]),
                TYPE: "bullet",
                LABEL: "Devastator",
            },
        },
    )
    exports.APS1plusplus.TURRETS.push(
        {
            POSITION: [2, 10.5, 0, 45*i+45, 160, 0],
            TYPE: ["auto4gun", { INDEPENDENT: false }],
        },
        {
            POSITION: [2, 10.5, 0, 45*i+22.5, 160, 0],
            TYPE: ["sprayer", { INDEPENDENT: false }],
        },
        {
            POSITION: [2, 7.5, 0, 45*i+33.75, 240, 1],
            TYPE: ["machineAutoTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [3, 5, 0, 45*i+11.25, 240, 1],
            TYPE: ["bigmach4gun", { INDEPENDENT: true }],
        },
    )
};
exports.APS1plusplus.TURRETS.push(
        {
            POSITION: [6, 0, 0, 0, 360, 1],
            TYPE: [
                "APS1pillboxturret",
                {
                    COLOR: 60,
                },
            ],
        },
)
exports.APS14 = {
    PARENT: ["APSbody"],
    LABEL: "APS-14",
    SHAPE: 0,
    COLOR: "invertRed",
    FACING_TYPE: 'toTarget',
    BODY: {
        SPEED: 1.3 * base.SPEED,
    },
    GUNS: [
        {
            POSITION: [14, 3, 4, -1.5, 3.75, 180, 0.667],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([ g.basic, g.twin, g.puregunner, g.machgun, g.thruster, g.morereload, ]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [14, 3, 4, -1.5, -3.75, 180, 0.333],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([ g.basic, g.twin, g.puregunner, g.machgun, g.thruster, g.morereload, ]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [14, 3, 4, 3, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([ g.basic, g.twin, g.puregunner, g.machgun, g.thruster, g.morereload, ]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [12, 3.5, 1, 0, 6.625, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast, g.boss]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [12, 3.5, 1, 0, -6.625, 0, 0.75],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast, g.boss]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [16, 3.5, 1, 0, 5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast, g.boss]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [16, 3.5, 1, 0, -5, 0, 0.25],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast, g.boss]),
                TYPE: "bullet",
            },
        },
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [21, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.boss]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [19, 8, 1, 0, 0, 0, 1 / 3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.boss]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [17, 8, 1, 0, 0, 0, 2 / 3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.boss]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [12, 11, 1, 0, 0, 0, 0],
        },],
    TURRETS: [{
        POSITION: [9, 0, 12, 0, 90, 0],
        TYPE: "APS14gun",
    },{
        POSITION: [9, 0, -12, 0, 90, 0],
        TYPE:"APS14gun",
    }],
};
exports.APSplus14 = {
    PARENT: ["APSbody"],
    LABEL: "APS(+)-14",
    SHAPE: 0,
    SIZE: 60,
    COLOR: "invertRed",
    FACING_TYPE: 'toTarget',
    BODY: {
        SPEED: 1.2 * base.SPEED,
        HEALTH: 24 * base.HEALTH,
        DAMAGE: 4.5 * base.DAMAGE,
    },
    GUNS: [
        {
            POSITION: [14, 3, 4, -3, 5, 180, 0.6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.machgun, g.thruster, g.morereload, ]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [14, 3, 4, -3, -5, 180, 0.8],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.machgun, g.thruster, g.morereload, ]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [14, 3, 4, 0, 2.5, 180, 0.4],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.machgun, g.thruster, g.morereload, ]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [14, 3, 4, 0, -2.5, 180, 0.2],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.machgun, g.thruster, g.morereload, ]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [14, 3, 4, 3, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.machgun, g.thruster, g.morereload, ]),
                TYPE: "bullet",
            },
        },{
        POSITION: [22, 2, 1, 0, 4.5, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast, g.pellet, g.bore, g.boss]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [22, 2, 1, 0, -4.5, 0, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast, g.pellet, g.bore, g.boss]),
            TYPE: "bullet"
        }
    }, 
        {
            POSITION: [12, 3.5, 1, 0, 6.625, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast, g.boss]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [12, 3.5, 1, 0, -6.625, 0, 0.75],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast, g.boss]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [16, 3.5, 1, 0, 5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast, g.boss]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [16, 3.5, 1, 0, -5, 0, 0.25],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast, g.boss]),
                TYPE: "bullet",
            },
        },
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [25, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream, g.boss]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [23, 8, 1, 0, 0, 0, 0.2],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream, g.boss]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [21, 8, 1, 0, 0, 0, 0.4],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream, g.boss]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [19, 8, 1, 0, 0, 0, 0.6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream, g.boss]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [17, 8, 1, 0, 0, 0, 0.8],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream, g.boss]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [12, 11, 1, 0, 0, 0, 0],
        },],
    TURRETS: [{
        POSITION: [9, 0, 12, 0, 90, 0],
        TYPE: "APSplus14gun",
    },{
        POSITION: [9, 0, -12, 0, 90, 0],
        TYPE:"APSplus14gun",
    },{
        POSITION: [9, 0, 0, 0, 360, 1],
        TYPE:"APSplus14cyclone",
    }],
};
exports.APSchompySegment = {
    PARENT: ["chainSegment"],
    LABEL: "Segment",
    SHAPE: 8.5,
    COLOR: 11,
    BODY: {
        REGEN: 1,
    },
    GUNS: [{
         POSITION: [ 12, 8, -0.6, 0, 0, 113.5, 0, ],
         }, {
         POSITION: [ 2, 8, 1, 12, 0, 113.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.obli, g.boss]),
            TYPE: "bullet",
         }, },{
         POSITION: [ 12, 8, -0.6, 0, 0, 247.5, 0, ],
         }, {
         POSITION: [ 2, 8, 1, 12, 0, 247.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.obli, g.boss]),
            TYPE: "bullet",
         }, }, {
            POSITION: [12, 2, 1.4, 0, -2, 202.5, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.twin, g.twin, g.mach, g.power, ]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [12, 2, 1.4, 0, 2, 202.5, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.twin, g.twin, g.mach, g.power, ]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [13, 2, 1.4, 0, 0, 202.5, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.twin, g.twin, g.mach, g.power, ]),
                TYPE: "bullet",
            },
        }, {
            POSITION: [12, 2, 1.4, 0, -2, 158.5, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.twin, g.twin, g.mach, g.power, ]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [12, 2, 1.4, 0, 2, 158.5, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.twin, g.twin, g.mach, g.power, ]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [13, 2, 1.4, 0, 0, 158.5, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.twin, g.twin, g.mach, g.power, ]),
                TYPE: "bullet",
            },
        },{
        POSITION: [12, 7, 1, 0, 0, 67.5, 0]
    }, {
        POSITION: [5, 8, 1, 6, 0, 67.5, 0]
    }, {
        POSITION: [2, 7, 1.2, 12, 0, 67.5, 0],
        PROPERTIES: {
            MAX_CHILDREN: 8,
            DESTROY_OLDEST_CHILD: true,
            SHOOT_SETTINGS: combineStats([g.trap, g.block, g.halfreload]),
            TYPE: "unsettrapbox",
            STAT_CALCULATOR: gunCalcNames.trap
        }
    },{
        POSITION: [12, 7, 1, 0, 0, -67.5, 0]
    }, {
        POSITION: [5, 8, 1, 6, 0, -67.5, 0]
    }, {
        POSITION: [2, 7, 1.2, 12, 0, -67.5, 0],
        PROPERTIES: {
            MAX_CHILDREN: 8,
            DESTROY_OLDEST_CHILD: true,
            SHOOT_SETTINGS: combineStats([g.trap, g.block, g.halfreload]),
            TYPE: "unsettrapbox",
            STAT_CALCULATOR: gunCalcNames.trap
        }
    },],
};
exports.APSchompy = {
    PARENT: ["APSbody"],
    LABEL: "APS-chompy",
    SHAPE: 6.5,
    COLOR: 11,
    FACING_TYPE: 'toTarget',
    SIZE: 25,
    BODY: {
        SPEED: 1.3 * base.SPEED,
    },
    GUNS: [{
            POSITION: [0, 20, 1, 0, 0, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.noRandom, { reload: 10, health: 25, damage: 3.5, speed: 0.001}]),
                TYPE: "APSchompySegment",
                MAX_CHILDREN: 1,
            },
        }, {
            POSITION: [8, 3, 1.4, 4, -6, 150, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.mach, g.thruster]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [8, 3, 1.4, 4, 6, -150, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.mach, g.thruster]),
                TYPE: "bullet",
            },
        }, {
            POSITION: [8, 3, 1.4, 4, -7, 135, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.mach, g.thruster]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [8, 3, 1.4, 4, 7, -135, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.mach, g.thruster]),
                TYPE: "bullet",
            },
        }, {
            POSITION: [8, 3, 1.4, 4, -8, 120, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.mach, g.thruster]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [8, 3, 1.4, 4, 8, -120, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.mach, g.thruster]),
                TYPE: "bullet",
            },
        },],
    TURRETS: [{
        POSITION: [7, 9, 0, 30, 90, 0],
        TYPE: "bigauto4gun",
    },{
        POSITION: [7, 9, 0, -30, 90, 0],
        TYPE:"bigauto4gun",
    },{
        POSITION: [10, 0, 0, 0, 360, 1],
        TYPE: "APSchompyturret",
    },],
};
exports.APSbattlecrusher = {
    PARENT: ["APSbody"],
    LABEL: "APS-battlecrusher",
    SHAPE: 0,
    COLOR: 5,
    FACING_TYPE: 'toTarget',
    GUNS: [{
        /********* LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
        POSITION: [6, 12, 1.2, 8, 0, 180, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.weak, {reload: 0.8, size: 0.6}]),
            TYPE: ["drone", { INDEPENDENT: true }],
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: false,
            MAX_CHILDREN: 9,
        }, }, {
        POSITION: [11.25, 11.75, 1.4, 14, 0, 0, 0]
    }, {
         POSITION: [ 14, 12, -0.6, 0, 0, 0, 0, ],
         }, {
         POSITION: [ 14, 12, 1, 14, 0, 0, 0.75, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.obli, g.obli, g.boss]),
            TYPE: "bullet",
         }, },
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [5, 12, 0.6, 7, 0, 90, 0],
        },
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [7, 8, 0.6, 7, 0, 90, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.pound, g.hive, g.boss]),
                TYPE: "lilNesterHive",
            },
        },
        {
            POSITION: [3.5, 4, 0.6, 8.75, -2, 60, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier]),
                TYPE: "autoswarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [3.5, 4, 0.6, 8.75, 2, 120, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier]),
                TYPE: "autoswarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        }, 
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [5, 12, 0.6, 7, 0, -90, 0],
        },
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [7, 8, 0.6, 7, 0, -90, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.pound, g.hive, g.boss]),
                TYPE: "lilNesterHive",
            },
        },
        {
            POSITION: [3.5, 4, 0.6, 8.75, 2, -60, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier]),
                TYPE: "autoswarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [3.5, 4, 0.6, 8.75, -2, -120, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier]),
                TYPE: "autoswarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },],
};