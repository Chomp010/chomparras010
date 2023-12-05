const { combineStats, makeAuto, makeHybrid, makeSwarming, makeOver, makeDeco, makeGuard } = require('../facilitators.js');
const { base, statnames, gunCalcNames, dfltskl, smshskl } = require('../constants.js');
const generics = require('./generics.js');
const g = require('../gunvals.js');

// Whatever the hell is needed
exports.missile = {
    PARENT: ["bullet"],
    LABEL: "Missile",
    INDEPENDENT: true,
    BODY: {
        RANGE: 120,
    },
    GUNS: [
        {
            POSITION: [14, 6, 1, 0, -2, 130, 0],
            PROPERTIES: {
                AUTOFIRE: true,
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.skim,
                    g.doublereload,
                    g.lowpower,
                    g.muchmorerecoil,
                    g.morespeed,
                    g.morespeed,
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
            POSITION: [14, 6, 1, 0, 2, 230, 0],
            PROPERTIES: {
                AUTOFIRE: true,
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.skim,
                    g.doublereload,
                    g.lowpower,
                    g.muchmorerecoil,
                    g.morespeed,
                    g.morespeed,
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
    ],
};
exports.hypermissile = {
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
            POSITION: [14, 6, 1, 0, -2, 90, 0.5],
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
            },
        },
        {
            POSITION: [14, 6, 1, 0, 2, 270, 0.5],
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
            },
        },
    ],
};
exports.deltamissile = {
    PARENT: ["missile"],
    GUNS: [
        {
            POSITION: [13, 6, 1, 0, -2, 140, 0.5],
            PROPERTIES: {
                AUTOFIRE: true,
                SHOOT_SETTINGS: combineStats([ g.basic, [3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], ]),
                TYPE: [ "bullet", { PERSISTS_AFTER_DEATH: true, }, ],
                STAT_CALCULATOR: gunCalcNames.thruster,
            },
        },
        {
            POSITION: [13, 6, 1, 0, 2, 220, 0.5],
            PROPERTIES: {
                AUTOFIRE: true,
                SHOOT_SETTINGS: combineStats([ g.basic, [3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], ]),
                TYPE: [ "bullet", { PERSISTS_AFTER_DEATH: true, }, ],
                STAT_CALCULATOR: gunCalcNames.thruster,
            },
        },
        {
            POSITION: [14, 6, 1, 0, -2, 150, 0],
            PROPERTIES: {
                AUTOFIRE: true,
                SHOOT_SETTINGS: combineStats([ g.basic, [3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], ]),
                TYPE: [ "bullet", { PERSISTS_AFTER_DEATH: true, }, ],
                STAT_CALCULATOR: gunCalcNames.thruster,
            },
        },
        {
            POSITION: [14, 6, 1, 0, 2, 210, 0],
            PROPERTIES: {
                AUTOFIRE: true,
                SHOOT_SETTINGS: combineStats([ g.basic, [3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], ]),
                TYPE: [ "bullet", { PERSISTS_AFTER_DEATH: true, }, ],
                STAT_CALCULATOR: gunCalcNames.thruster,
            },
        },
        {
            POSITION: [14, 6, 1, 0, -2, 90, 0.5],
            PROPERTIES: {
                AUTOFIRE: true,
                SHOOT_SETTINGS: combineStats([ g.basic, [3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], ]),
                TYPE: [ "bullet", { PERSISTS_AFTER_DEATH: true, }, ],
            },
        },
        {
            POSITION: [14, 6, 1, 0, 2, 270, 0.5],
            PROPERTIES: {
                AUTOFIRE: true,
                SHOOT_SETTINGS: combineStats([ g.basic, [3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], ]),
                TYPE: [ "bullet", { PERSISTS_AFTER_DEATH: true, }, ],
            },
        },
    ],
};
exports.minimissile = {
    PARENT: ["missile"],
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [14, 6, 1, 0, 0, 180, 0],
            PROPERTIES: {
                AUTOFIRE: true,
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.skim,
                    g.doublereload,
                    g.lowpower,
                    g.muchmorerecoil,
                    g.morespeed,
                ]),
                TYPE: ["bullet", { PERSISTS_AFTER_DEATH: true }],
                STAT_CALCULATOR: gunCalcNames.thruster,
            },
        },
    ],
};
exports.spinmissile = {
    PARENT: ["bullet"],
    LABEL: "Missile",
    INDEPENDENT: !0,
    BODY: {
        RANGE: 120,
    },
    FACING_TYPE: "fastspin",
    GUNS: [
        {
            POSITION: [14, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                AUTOFIRE: !0,
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.skim,
                    g.doublereload,
                    g.lowpower,
                    g.morereload,
                    g.morespeed,
                ]),
                TYPE: [
                    "bullet",
                    {
                        PERSISTS_AFTER_DEATH: !0,
                    },
                ],
                STAT_CALCULATOR: gunCalcNames.thruster,
            },
        },
        {
            POSITION: [14, 8, 1, 0, 0, 180, 0],
            PROPERTIES: {
                AUTOFIRE: !0,
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.skim,
                    g.doublereload,
                    g.lowpower,
                    g.morereload,
                    g.morespeed,
                ]),
                TYPE: [
                    "bullet",
                    {
                        PERSISTS_AFTER_DEATH: !0,
                    },
                ],
                STAT_CALCULATOR: gunCalcNames.thruster,
            },
        },
    ],
};
exports.demomanMissile = {
    PARENT: ["bullet"],
    LABEL: "Missile",
    INDEPENDENT: !0,
    BODY: {
        RANGE: 120,
    },
    FACING_TYPE: "fastspin",
    GUNS: [],
};

for(let i = 0; i < 3; i++) {
    exports.demomanMissile.GUNS.push(
        {
            POSITION: [14, 8, 1, 0, 0, 120 * i + 60, 0.5],
            PROPERTIES: {
                AUTOFIRE: !0,
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.skim,
                    g.lowpower,
                    g.morereload,
                    g.morespeed,
                    g.morespeed,
                ]),
                TYPE: [
                    "bullet",
                    {
                        PERSISTS_AFTER_DEATH: !0,
                    },
                ],
                STAT_CALCULATOR: gunCalcNames.thruster,
            },
        },
        {
            POSITION: [14, 8, 1, 0, 0, 120 * i + 120, 0],
            PROPERTIES: {
                AUTOFIRE: !0,
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.skim,
                    g.lowpower,
                    g.morereload,
                    g.morespeed,
                    g.morespeed,
                ]),
                TYPE: [
                    "bullet",
                    {
                        PERSISTS_AFTER_DEATH: !0,
                    },
                ],
                STAT_CALCULATOR: gunCalcNames.thruster,
            },
        },
    );
    /*exports.nestGuardian.TURRETS.push(
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
    );*/
};
exports.hyperspinmissile = {
    PARENT: ["bullet"],
    LABEL: "Missile",
    INDEPENDENT: !0,
    BODY: {
        RANGE: 120,
    },
    FACING_TYPE: "fastspin",
    GUNS: [
        {
            POSITION: [14, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                AUTOFIRE: !0,
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.skim,
                    g.doublereload,
                    g.lowpower,
                    g.morereload,
                    g.morespeed,
                ]),
                TYPE: [
                    "bullet",
                    {
                        PERSISTS_AFTER_DEATH: !0,
                    },
                ],
                STAT_CALCULATOR: gunCalcNames.thruster,
            },
        },
        {
            POSITION: [14, 8, 1, 0, 0, 180, 0],
            PROPERTIES: {
                AUTOFIRE: !0,
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.skim,
                    g.doublereload,
                    g.lowpower,
                    g.morereload,
                    g.morespeed,
                ]),
                TYPE: [
                    "bullet",
                    {
                        PERSISTS_AFTER_DEATH: !0,
                    },
                ],
                STAT_CALCULATOR: gunCalcNames.thruster,
            },
        },
        {
            POSITION: [14, 8, 1, 0, 0, 90, 0],
            PROPERTIES: {
                AUTOFIRE: !0,
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.skim,
                    g.doublereload,
                    g.lowpower,
                    g.morereload,
                    g.morespeed,
                ]),
                TYPE: [
                    "bullet",
                    {
                        PERSISTS_AFTER_DEATH: !0,
                    },
                ],
                STAT_CALCULATOR: gunCalcNames.thruster,
            },
        },
        {
            POSITION: [14, 8, 1, 0, 0, 270, 0],
            PROPERTIES: {
                AUTOFIRE: !0,
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.skim,
                    g.doublereload,
                    g.lowpower,
                    g.morereload,
                    g.morespeed,
                ]),
                TYPE: [
                    "bullet",
                    {
                        PERSISTS_AFTER_DEATH: !0,
                    },
                ],
                STAT_CALCULATOR: gunCalcNames.thruster,
            },
        },
    ],
};

exports.hive = {
    PARENT: ["bullet"],
    LABEL: "Hive",
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
            POSITION: [7, 9.5, 0.6, 7, 0, 108, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees]),
                TYPE: "bee",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [7, 9.5, 0.6, 7, 0, 180, 0.2],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees]),
                TYPE: "bee",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [7, 9.5, 0.6, 7, 0, 252, 0.4],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees]),
                TYPE: "bee",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [7, 9.5, 0.6, 7, 0, 324, 0.6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees]),
                TYPE: "bee",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [7, 9.5, 0.6, 7, 0, 36, 0.8],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees]),
                TYPE: "bee",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
    ],
};
exports.nesterHive = {
    PARENT: ["bullet"],
    LABEL: "Hive",
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
            POSITION: [7, 8, 0.6, 7, 0, 108, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.nesterhive]),
                TYPE: ["swarm", { PERSISTS_AFTER_DEATH: true, }],
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [7, 8, 0.6, 7, 0, 180, 0.2],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.nesterhive]),
                TYPE: ["swarm", { PERSISTS_AFTER_DEATH: true, }],
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [7, 8, 0.6, 7, 0, 252, 0.4],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.nesterhive]),
                TYPE: ["swarm", { PERSISTS_AFTER_DEATH: true, }],
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [7, 8, 0.6, 7, 0, 324, 0.6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.nesterhive]),
                TYPE: ["swarm", { PERSISTS_AFTER_DEATH: true, }],
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [7, 8, 0.6, 7, 0, 36, 0.8],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.nesterhive]),
                TYPE: ["swarm", { PERSISTS_AFTER_DEATH: true, }],
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
    ],
};
exports.lilNesterHive = {
    PARENT: ["bullet"],
    LABEL: "Hive",
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
            POSITION: [7, 8, 0.6, 7, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.nesterhive]),
                TYPE: ["swarm", { PERSISTS_AFTER_DEATH: true, }],
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [7, 8, 0.6, 7, 0, 120, 1/3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.nesterhive]),
                TYPE: ["swarm", { PERSISTS_AFTER_DEATH: true, }],
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [7, 8, 0.6, 7, 0, 240, 2/3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.nesterhive]),
                TYPE: ["swarm", { PERSISTS_AFTER_DEATH: true, }],
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
    ],
};
exports.snake = {
    PARENT: ["bullet"],
    LABEL: "Snake",
    INDEPENDENT: true,
    BODY: {
        RANGE: 120,
    },
    GUNS: [
        {
            POSITION: [6, 12, 1.4, 8, 0, 180, 0],
            PROPERTIES: {
                AUTOFIRE: true,
                STAT_CALCULATOR: gunCalcNames.thruster,
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.sniper,
                    g.hunter,
                    g.hunter2,
                    g.snake,
                    g.snakeskin,
                ]),
                TYPE: [
                    "bullet",
                    {
                        PERSISTS_AFTER_DEATH: true,
                    },
                ],
            },
        },
        {
            POSITION: [10, 12, 0.8, 8, 0, 180, 0.5],
            PROPERTIES: {
                AUTOFIRE: true,
                NEGATIVE_RECOIL: true,
                STAT_CALCULATOR: gunCalcNames.thruster,
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.sniper,
                    g.hunter,
                    g.hunter2,
                    g.snake,
                ]),
                TYPE: [
                    "bullet",
                    {
                        PERSISTS_AFTER_DEATH: true,
                    },
                ],
            },
        },
    ],
};
exports.hypersnake = {
    PARENT: ["bullet"],
    LABEL: "Anaconda",
    INDEPENDENT: true,
    BODY: {
        RANGE: 120,
    },
    GUNS: [{
        POSITION: [7, 10, 1.6, 8, 3, 212, 2 / 3],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.blaster, g.twin, g.bent, g.one_third_reload, g.morerecoil]),
            TYPE: ["bullet", {
                PERSISTS_AFTER_DEATH: true
            }],
            STAT_CALCULATOR: gunCalcNames.thruster,
            AUTOFIRE: true
        }
    }, {
        POSITION: [7, 10, 1.6, 8, -3, 148, 2 / 3],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.blaster, g.twin, g.bent, g.one_third_reload, g.morerecoil]),
            TYPE: ["bullet", {
                PERSISTS_AFTER_DEATH: true
            }],
            STAT_CALCULATOR: gunCalcNames.thruster,
            AUTOFIRE: true
        }
    }, {
        POSITION: [9, 10, 1.6, 8, 2, 196, 1 / 3],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.blaster, g.twin, g.bent, g.one_third_reload, g.morerecoil]),
            TYPE: ["bullet", {
                PERSISTS_AFTER_DEATH: true
            }],
            STAT_CALCULATOR: gunCalcNames.thruster,
            AUTOFIRE: true
        }
    }, {
        POSITION: [9, 10, 1.6, 8, -2, 164, 1 / 3],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.blaster, g.twin, g.bent, g.one_third_reload, g.morerecoil]),
            TYPE: ["bullet", {
                PERSISTS_AFTER_DEATH: true
            }],
            STAT_CALCULATOR: gunCalcNames.thruster,
            AUTOFIRE: true
        }
    }, {
        POSITION: [11, 10, 1.6, 8, 0, 180, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.blaster, g.twin, g.bent, g.one_third_reload, g.morerecoil]),
            TYPE: ["bullet", {
                PERSISTS_AFTER_DEATH: true
            }],
            STAT_CALCULATOR: gunCalcNames.thruster,
            AUTOFIRE: true
        }
    }]
};
exports.rocketeerMissile = {
    PARENT: ["bullet"],
    LABEL: "Missile",
    BODY: {
        RANGE: 120,
    },
    GUNS: [
        {
            POSITION: [16.5, 10, 1.5, 0, 0, 180, 7.5],
            PROPERTIES: {
                AUTOFIRE: true,
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.missileTrail,
                    g.rocketeerMissileTrail,
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
    ],
};

exports.gliderMissile = {
    PARENT: ["missile"],
    LABEL: "Missile",
    BODY: {
        RANGE: 120,
    },
    GUNS: [
        {
            POSITION: [16.5, 10, 1.5, 0, -2, 130, 7.5],
            PROPERTIES: {
                AUTOFIRE: true,
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.skim,
                    g.doublereload,
                    g.lowpower,
                    g.morespeed,
                    g.morespeed,
                    g.rocketeerMissileTrail,
                    g.halfrecoil,
                    g.halfrecoil,
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
            POSITION: [16.5, 10, 1.5, 0, 2, 230, 7.5],
            PROPERTIES: {
                AUTOFIRE: true,
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.skim,
                    g.doublereload,
                    g.lowpower,
                    g.morespeed,
                    g.morespeed,
                    g.rocketeerMissileTrail,
                    g.halfrecoil,
                    g.halfrecoil,
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
    ],
};
exports.promenaderMissile = {
    PARENT: ["bullet"],
    LABEL: 'Missile',
    INDEPENDENT: true,
    BODY: {
        RANGE: 120
    },
    GUNS: [{
        POSITION: [14, 6, 1, 0, 0, 180, 0]
    }, {
        POSITION: [1.25, 6, 1.5, 14, 0, 180, 0],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.trap, g.skim, g.doublereload, g.lowpower, g.muchmorerecoil, g.morespeed, g.morespeed]),
            TYPE: ["trap", {
                PERSISTS_AFTER_DEATH: true,
                CAN_GO_OUTSIDE_ROOM: true,
            }],
            STAT_CALCULATOR: gunCalcNames.thruster
        },
    },
    ]
};
exports.patherMissile = {
    PARENT: ["missile"],
    GUNS: [{
        POSITION: [14, 6, 1, 0, 5, 185.5, 0]
    }, {
        POSITION: [1.25, 6, 1.5, 14, 5, 185.5, 0],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.trap, g.skim, g.doublereload, g.lowpower, g.muchmorerecoil, g.morespeed, g.morespeed]),
            TYPE: ["trap", {
                PERSISTS_AFTER_DEATH: true,
                CAN_GO_OUTSIDE_ROOM: true,
            }],
            STAT_CALCULATOR: gunCalcNames.thruster
        },
    },{
        POSITION: [14, 6, 1, 0, -5, 174.5, 0.5]
    }, {
        POSITION: [1.25, 6, 1.5, 14, -5, 174.5, 0.5],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.trap, g.skim, g.doublereload, g.lowpower, g.muchmorerecoil, g.morespeed, g.morespeed]),
            TYPE: ["trap", {
                PERSISTS_AFTER_DEATH: true,
                CAN_GO_OUTSIDE_ROOM: true,
            }],
            STAT_CALCULATOR: gunCalcNames.thruster
        },
    },
    ],
};
exports.trapSkimMissile = {
    PARENT: ["missile"],
    GUNS: [
        {
            POSITION: [14, 6, 1, 0, -2, 150, 0],
            PROPERTIES: {
                AUTOFIRE: true,
                SHOOT_SETTINGS: combineStats([
                    g.basic, g.skim, g.doublereload, g.lowpower, g.muchmorerecoil, g.morespeed, g.morespeed,
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
                    g.basic, g.skim, g.doublereload, g.lowpower, g.muchmorerecoil, g.morespeed, g.morespeed,
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
            POSITION: [14, 6, 1, 0, -2, 90, 0.5],
        },
        {
            POSITION: [1.25, 6, 1.5, 14, -2, 90, 0],
            PROPERTIES: {
                AUTOFIRE: true,
                SHOOT_SETTINGS: combineStats([
                    g.trap, g.skim, g.doublereload, g.lowpower, g.muchmorerecoil, g.morespeed, g.morespeed, g.halfrange,
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
            POSITION: [14, 6, 1, 0, 2, -90, 0.5],
        },
        {
            POSITION: [1.25, 6, 1.5, 14, 2, -90, 0],
            PROPERTIES: {
                AUTOFIRE: true,
                SHOOT_SETTINGS: combineStats([
                    g.trap, g.skim, g.doublereload, g.lowpower, g.muchmorerecoil, g.morespeed, g.morespeed, g.halfrange,
                ]),
                TYPE: [
                    "trap",
                    {
                        PERSISTS_AFTER_DEATH: true,
                    },
                ],
            },
        },
    ],
};
exports.surgeonPillboxTurret = {
    PARENT: ["genericTank"],
    LABEL: "",
    COLOR: 16,
    BODY: {
        FOV: 3,
    },
    HAS_NO_RECOIL: true,
    CONTROLLERS: [["spin", { independent: true, speed: 0.08 }]],
    TURRETS: [
        {
            POSITION: [13, 0, 0, 0, 360, 1],
            TYPE: "healerSymbol",
        },
    ],
    GUNS: [
        {
            POSITION: [17, 11, 1, 0, 0, 90, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.healer, g.turret]),
                TYPE: "healerBullet",
                AUTOFIRE: true,
            },
        },
        {
            POSITION: [14, 11, 1, 0, 0, 90, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.healer, g.turret]),
                TYPE: "healerBullet",
                AUTOFIRE: true,
            },
        },
        {
            POSITION: [17, 11, 1, 0, 0, 270, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.healer, g.turret]),
                TYPE: "healerBullet",
                AUTOFIRE: true,
            },
        },
        {
            POSITION: [14, 11, 1, 0, 0, 270, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.healer, g.turret]),
                TYPE: "healerBullet",
                AUTOFIRE: true,
            },
        },
    ],
};
exports.surgeonPillbox = {
    LABEL: "Pillbox",
    PARENT: ["trap"],
    SHAPE: -6,
    MOTION_TYPE: "motor",
    CONTROLLERS: ["goToMasterTarget", "nearestDifferentMaster"],
    INDEPENDENT: true,
    BODY: {
        SPEED: 1,
        DENSITY: 5,
        DAMAGE: 0
    },
    DIE_AT_RANGE: true,
    TURRETS: [
        {
            POSITION: [11, 0, 0, 0, 360, 1],
            TYPE: "surgeonPillboxTurret",
        },
    ],
};
exports.doctorDrone = {
    PARENT: ["drone"],
    HITS_OWN_TYPE: "normal",
    TURRETS: [
        {
            POSITION: [13, 0, 0, 0, 360, 1],
            TYPE: "healerSymbol",
        },
    ],
};

exports.sunchip = {
    PARENT: ["drone"],
    SHAPE: 4,
    NECRO: true,
    HITS_OWN_TYPE: "hard",
    BODY: {
        FOV: 0.5,
    },
    AI: {
        BLIND: true,
        FARMER: true,
    },
    DRAW_HEALTH: false,
};
exports.eggchip = {
    PARENT: ["sunchip"],
    NECRO: [0],
    SHAPE: 0,
};
exports.autosunchip = {
    PARENT: ["sunchip"],
    AI: {
        BLIND: true,
        FARMER: true,
    },
    INDEPENDENT: true,
};
exports.autoeggchip = {
    PARENT: ["eggchip"],
    AI: {
        BLIND: true,
        FARMER: true,
    },
    INDEPENDENT: true,
};
exports.pentachip = {
    PARENT: ["sunchip"],
    SHAPE: 5,
};
exports.summonerDrone = {
    PARENT: ["sunchip"],
    NECRO: false,
};
exports.gunchip = {
    PARENT: ["drone"],
    SHAPE: -2,
    NECRO: true,
    HITS_OWN_TYPE: "hard",
    BODY: {
        FOV: 0.5,
    },
    AI: {
        BLIND: true,
        FARMER: true,
    },
    DRAW_HEALTH: false,
};

exports.shellyBullet = {
    PARENT: ["bullet"],
    BODY: {
        KNOCKBACK_MULTIPLIER: 2,
        STUN_MULTIPLIER: 0.5,
    },
};
exports.minion = {
    PARENT: ["genericTank"],
    LABEL: "Minion",
    TYPE: "minion",
    DAMAGE_CLASS: 0,
    HITS_OWN_TYPE: "hardWithBuffer",
    FACING_TYPE: "smoothToTarget",
    BODY: {
        FOV: 0.5,
        SPEED: 3,
        ACCELERATION: 0.4,
        HEALTH: 5,
        SHIELD: 0,
        DAMAGE: 1.2,
        RESIST: 1,
        PENETRATION: 1,
        DENSITY: 0.4,
    },
    AI: {
        BLIND: true,
    },
    DRAW_HEALTH: false,
    CLEAR_ON_MASTER_UPGRADE: true,
    GIVE_KILL_MESSAGE: false,
    CONTROLLERS: [
        "nearestDifferentMaster",
        "mapAltToFire",
        "minion",
        "canRepel",
        "hangOutNearMaster",
    ],
    GUNS: [
        {
            POSITION: [17, 9, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.minion]),
                WAIT_TO_CYCLE: true,
                TYPE: "bullet",
            },
        },
    ],
};
exports.megaMinion = {
    PARENT: ["minion"],
    LABEL: "Mega Minion",
    BODY: {
        ACCELERATION: base.ACCEL * 0.8,
    },
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [19.5, 13, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.minion]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.tinyMinion = {
    PARENT: ["minion"],
    LABEL: "Tiny Minion",
    ACCEPTS_SCORE: false,
    SHAPE: 0,
    MOTION_TYPE: 'swarm',
    CRAVES_ATTENTION: true,
    BODY: {
        ACCELERATION: 3,
        PENETRATION: 1.5,
        HEALTH: 0.35 * 0.5,
        DAMAGE: 2.25,
        RESIST: 1.6,
        RANGE: 300,
        DENSITY: 12,
        PUSHABILITY: 0.5,
        FOV: 1.5,
    },
    AI: {
        BLIND: true,
    },
    GUNS: [ { /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
        POSITION: [    17,         9,            1,            0,            0,            0,            0,     ], 
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.minion, g.lowpower]),
            WAIT_TO_CYCLE: true,
            TYPE: "bullet",
        }, }, 
    ],
    DIE_AT_RANGE: true,
    BUFF_VS_FOOD: true,
};

exports.setTrap = {
    LABEL: "Set Trap",
    PARENT: ["trap"],
    SHAPE: -4,
    MOTION_TYPE: "motor",
    CONTROLLERS: ["goToMasterTarget"],
    BODY: {
        SPEED: 1,
        DENSITY: 5,
    },
};
exports.unsetTrap = {
    LABEL: "Set Trap",
    PARENT: ["trap"],
    SHAPE: -4,
    MOTION_TYPE: "motor",
    BODY: {
        SPEED: 1,
        DENSITY: 5,
    },
};
exports.wallTrap = {
    LABEL: "Wall Trap",
    PARENT: ["trap"],
    SHAPE: -9,
    MOTION_TYPE: "motor",
    BODY: {
        SPEED: 1,
        DENSITY: 5,
    },
    DIE_AT_RANGE: false,
};
exports.boomerang = {
    LABEL: "Boomerang",
    PARENT: ["trap"],
    CONTROLLERS: ["boomerang"],
    MOTION_TYPE: "motor",
    HITS_OWN_TYPE: "never",
    SHAPE: -5,
    BODY: {
        SPEED: 1.25,
        RANGE: 120,
    },
};
exports.assemblerEffect = {
    PARENT: ['bullet'],
    MOTION_TYPE: 'assembler',
    LABEL: '',
    BODY: {
        DAMAGE: 0,
        RANGE: 10
    },
    ALPHA: 0.8
};
exports.assemblerDot = {
    LABEL: '',
    SHAPE: -4,
    COLOR: 17
};
exports.assemblerTrap = {
    PARENT: ['setTrap'],
    LABEL: "Assembler Trap",
    BODY: {
        SPEED: 0.7,
        ACCEL: 0.75
    },
    TURRETS: [
        {
            /**        SIZE X  Y  ANGLE ARC */
            POSITION: [4, 0, 0, 0,    360, 1],
            TYPE: 'assemblerDot'
        }
    ],
    HITS_OWN_TYPE: 'assembler'
};
exports.masterBullet = {
    PARENT: ["trap"],
    SHAPE: 0,
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [18, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.flank,
                    g.tri,
                    g.trifront,
                    g.tonsmorrecoil,
                    g.minion,
                    g.weak,
                ]),
                TYPE: "bullet",
                LABEL: "Front",
                AUTOFIRE: true,
            },
        },
        {
            POSITION: [13, 8, 1, 0, -1, 140, 0.6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.flank,
                    g.tri,
                    g.thruster,
                    g.minion,
                    g.weak,
                ]),
                TYPE: "bullet",
                LABEL: "Thruster",
                AUTOFIRE: true,
            },
        },
        {
            POSITION: [13, 8, 1, 0, 1, 220, 0.6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.flank,
                    g.tri,
                    g.thruster,
                    g.minion,
                    g.weak,
                ]),
                TYPE: "bullet",
                LABEL: "Thruster",
                AUTOFIRE: true,
            },
        },
        {
            POSITION: [16, 8, 1, 0, 0, 150, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.flank,
                    g.tri,
                    g.thruster,
                    g.minion,
                    g.weak,
                ]),
                TYPE: "bullet",
                LABEL: "Thruster",
                AUTOFIRE: true,
            },
        },
        {
            POSITION: [16, 8, 1, 0, 0, 210, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.flank,
                    g.tri,
                    g.thruster,
                    g.minion,
                    g.weak,
                ]),
                TYPE: "bullet",
                LABEL: "Thruster",
                AUTOFIRE: true,
            },
        },
    ],
};

exports.fakeAutoTankGun = {
    PARENT: ["genericTank"],
    LABEL: "",
    COLOR: 16,
    INDEPENDENT: true,
    GUNS: [
        {
            POSITION: [22, 10, 1, 0, 0, 0, 0],
        },
    ],
};
exports.autoTankGun = {
    PARENT: ["genericTank"],
    LABEL: "",
    BODY: {
        FOV: 3,
    },
    CONTROLLERS: ["canRepel", "onlyAcceptInArc", "mapAltToFire", "nearestDifferentMaster"],
    COLOR: 16,
    IGNORED_BY_AI: true,
    GUNS: [
        {
            POSITION: [22, 10, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.auto]),
                TYPE: ["bullet", { PERSISTS_AFTER_DEATH: true, }, ],
            },
        },
    ],
};
exports.squareAutoTankGun = {
    PARENT: ["genericTank"],
    LABEL: "",
    BODY: {
        FOV: 3,
    },
    SHAPE: 4,
    CONTROLLERS: ["canRepel", "onlyAcceptInArc", "mapAltToFire", "nearestDifferentMaster"],
    COLOR: 16,
    IGNORED_BY_AI: true,
    GUNS: [
        {
            POSITION: [22, 10, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.auto]),
                TYPE: ["bullet", { PERSISTS_AFTER_DEATH: true, }, ],
            },
        },
    ],
};
exports.crowbarAutoTankGun = {
    PARENT: ["genericTank"],
    LABEL: "",
    BODY: {
        FOV: 3,
    },
    CONTROLLERS: ["canRepel", "onlyAcceptInArc", "mapAltToFire", "nearestDifferentMaster"],
    COLOR: 16,
    IGNORED_BY_AI: true,
    HAS_NO_RECOIL: true,
    GUNS: [
        {
            POSITION: [22, 10, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.auto]),
                TYPE: ["bullet", { PERSISTS_AFTER_DEATH: true, }, ],
            },
        },
    ],
};
exports.weirdAutoTankGun = {
    // used from any turreted bullet
    PARENT: ["genericTank"],
    LABEL: "",
    BODY: {
        FOV: 3,
    },
    CONTROLLERS: ["canRepel", "onlyAcceptInArc", "mapAltToFire", "nearestDifferentMaster"],
    COLOR: 16,
    IGNORED_BY_AI: true,
    GUNS: [
        {
            POSITION: [22, 10, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.auto, g.morespeed, g.lowpower, g.morereload, g.norecoil]),
                TYPE: ["bullet", { PERSISTS_AFTER_DEATH: true, }, ],
            },
        },
    ],
};
exports.bansheegun = {
    PARENT: ["genericTank"],
    LABEL: "",
    CONTROLLERS: ["canRepel", "onlyAcceptInArc", "mapAltToFire", "nearestDifferentMaster"],
    COLOR: 16,
    INDEPENDENT: true,
    GUNS: [
        {
            POSITION: [26, 10, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.auto, g.lessreload]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.auto4gun = {
    PARENT: ["genericTank"],
    LABEL: "",
    BODY: {
        FOV: 2,
    },
    CONTROLLERS: ["canRepel", "onlyAcceptInArc", "mapAltToFire", "nearestDifferentMaster"],
    COLOR: 16,
    GUNS: [
        {
            POSITION: [16, 4, 1, 0, -3.5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.auto, g.gunner, g.twin, g.power, g.slow]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [16, 4, 1, 0, 3.5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.auto, g.gunner, g.twin, g.power, g.slow]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.bigauto4gun = {
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
            POSITION: [14, 5, 1, 0, -4.5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.auto, g.gunner, g.twin, g.twin, g.power, g.halfreload,]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [14, 5, 1, 0, 4.5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.auto, g.gunner, g.twin, g.twin, g.power, g.halfreload,]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [16, 5, 1, 0, 0, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.auto, g.gunner, g.twin, g.twin, g.power, g.halfreload,]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.batterauto4gun = {
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
            POSITION: [15, 5, 1, 0, -3, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.auto, g.gunner, g.twin, g.twin, g.power, g.slow]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [15, 5, 1, 0, 3, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.auto, g.gunner, g.twin, g.twin, g.power, g.slow]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [17, 5, 1, 0, 0, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.auto, g.gunner, g.twin, g.twin, g.power, g.slow]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.swarmauto4gun = {
    PARENT: ["genericTank"],
    LABEL: "",
    DANGER: 6,
    STAT_NAMES: statnames.swarm,
    COLOR: 16,
    CONTROLLERS: ["canRepel", "onlyAcceptInArc", "mapAltToFire", "nearestDifferentMaster"],
    GUNS: [
        {
            POSITION: [7, 7.5, 0.6, 7, 4, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.auto, g.gunner, g.battle, g.power, g.slow]),
                TYPE: "swarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [7, 7.5, 0.6, 7, -4, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.auto, g.gunner, g.battle, g.power, g.slow]),
                TYPE: "autoswarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
    ],
};
exports.mechagun = {
    PARENT: ["genericTank"],
    LABEL: 'Gun',
    BODY: {
        FOV: 1
    },
    COLOR: 16,
    GUNS: [{ /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
    POSITION: [  8,     4,      1,      12,    3.75,     0,     1/3,  ], 
    PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast, g.mecha]),
        TYPE: "bullet",
    }, }, { /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
    POSITION: [  8,     4,      1,      12,    -3.75,     0,     2/3,  ], 
    PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast, g.mecha]),
        TYPE: "bullet",
    }, }, { /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
    POSITION: [  9.5,   4,      1,     12,    0,     0,     0,  ], 
    PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast, g.mecha]),
        TYPE: "bullet",
    }, }, { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
    POSITION: [  9,    14,      1,      5,     0,     0,      0,   ], 
    }]
};
exports.megaAutoTankgun = {
    PARENT: ["genericTank"],
    LABEL: "",
    BODY: {
        FOV: 2,
        SPEED: 0.9,
    },
    CONTROLLERS: ["canRepel", "onlyAcceptInArc", "mapAltToFire", "nearestDifferentMaster"],
    COLOR: 16,
    GUNS: [
        {
            POSITION: [22, 14, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.auto]),
                TYPE: "bullet",
            },
        },
    ],
};

exports.sniper3gun = {
    PARENT: ["genericTank"],
    LABEL: "",
    BODY: {
        FOV: 5,
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
exports.twin3gun = {
    PARENT: ["genericTank"],
    LABEL: "",
    BODY: {
        FOV: 3,
    },
    CONTROLLERS: ["canRepel", "onlyAcceptInArc", "mapAltToFire", "nearestDifferentMaster"],
    COLOR: 16,
    GUNS: [
        {
            POSITION: [20, 9, 1, 0, 5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.auto]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [20, 9, 1, 0, -5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.auto]),
                TYPE: "bullet",
            },
        },
    ],
};

exports.single3gun = {
    PARENT: ["genericTank"],
    LABEL: "",
    BODY: {
        FOV: 3,
    },
    CONTROLLERS: [/*"canRepel", */"onlyAcceptInArc", "mapAltToFire", "nearestDifferentMaster"],
    COLOR: 16,
    GUNS: [
        {
            POSITION: [22, 10, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.single, g.flank, g.auto]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [5.5, 10, -1.6, 6.5, 0, 0, 0],
        },
    ],
};
exports.autoTurret = {
    PARENT: ["genericTank"],
    LABEL: "Turret",
    BODY: {
        FOV: 0.8,
    },
    COLOR: 16,
    GUNS: [
        {
            POSITION: [22, 10, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.morerecoil, g.turret]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.machineAutoTurret = {
    PARENT: ["genericTank"],
    LABEL: "Turret",
    COLOR: 16,
    CONTROLLERS: ["canRepel", "onlyAcceptInArc", "mapAltToFire", "nearestDifferentMaster"],
    GUNS: [
        {
            POSITION: [14, 11, 1.3, 8, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.morerecoil, g.turret, g.mach, g.slow, {reload: 0.5, maxSpeed: 0.7}]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.trapTurret = {
    PARENT: ["genericTank"],
    LABEL: "Turret",
    BODY: {
        FOV: 0.5,
    },
    INDEPENDENT: true,
    CONTROLLERS: ["nearestDifferentMaster", 'onlyAcceptInArc'],
    COLOR: 16,
    AI: {
        SKYNET: true,
        FULL_VIEW: true,
    },
    GUNS: [
        {
            POSITION: [16, 14, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [4, 14, 1.8, 16, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.lowpower, g.fast, g.halfreload]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
    ],
};
exports.megaTrapTurret = {
    PARENT: ["genericTank"],
    LABEL: "Turret",
    BODY: {
        FOV: 0.5,
    },
    INDEPENDENT: true,
    CONTROLLERS: ["nearestDifferentMaster", 'onlyAcceptInArc'],
    COLOR: 16,
    AI: {
        SKYNET: true,
        FULL_VIEW: true,
    },
    GUNS: [
        {
            POSITION: [17, 16, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [4, 16, 1.8, 16, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.megatrap, g.lowpower, g.fast, g.halfreload]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
    ],
};
exports.droneAutoTurret = {
    PARENT: ["genericTank"],
    LABEL: "Turret",
    BODY: {
        FOV: 0.8,
    },
    COLOR: 16,
    GUNS: [
        {
            POSITION: [22, 10, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.morerecoil, g.turret, g.overdrive]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.autoSmasherTurret = {
    PARENT: ["genericTank"],
    LABEL: "Turret",
    COLOR: 16,
    CONTROLLERS: [/*"canRepel", */"onlyAcceptInArc", "mapAltToFire", "nearestDifferentMaster"],
    GUNS: [
        {
            POSITION: [20, 6, 1, 0, 5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.morerecoil, g.turret, g.fast, g.mach, g.pound, g.morereload, g.morereload]),
                TYPE: "bullet",
                STAT_CALCULATOR: gunCalcNames.fixedReload,
            },
        },
        {
            POSITION: [20, 6, 1, 0, -5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.morerecoil, g.turret, g.fast, g.mach, g.pound, g.morereload, g.morereload]),
                TYPE: "bullet",
                STAT_CALCULATOR: gunCalcNames.fixedReload,
            },
        },
    ],
};
exports.architectGun = {
    PARENT: ["genericTank"],
    LABEL: "",
    COLOR: 16,
    GUNS: [
        {
            POSITION: [20, 16, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [2, 16, 1.1, 20, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.block, g.auto]),
                TYPE: "setTrap",
            },
        },
    ],
};

exports.pillboxTurret = {
    PARENT: ["genericTank"],
    LABEL: "",
    COLOR: 16,
    BODY: {
        FOV: 2,
    },
    HAS_NO_RECOIL: true,
    IGNORED_BY_AI: true,
    CONTROLLERS: [/*"canRepel", */"onlyAcceptInArc", "mapAltToFire", "nearestDifferentMaster"],
    GUNS: [
        {
            POSITION: [22, 11, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.minion, g.turret, g.power, g.auto, g.notdense]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.turretedTrap = {
    LABEL: "Trapbox",
    PARENT: ["trap"],
    CONTROLLERS: ["goToMasterTarget", "nearestDifferentMaster"],
    INDEPENDENT: true,
    DIE_AT_RANGE: true,
    TURRETS: [
        {
            POSITION: [11, 0, 0, 0, 360, 1],
            TYPE: "pillboxTurret",
        },
    ],
};
exports.pillbox = {
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
            TYPE: "pillboxTurret",
        },
    ],
};
exports.unsettrapbox = {
    LABEL: "Pillbox",
    PARENT: ["trap"],
    SHAPE: -4,
    MOTION_TYPE: "motor",
    INDEPENDENT: true,
    BODY: {
        SPEED: 1,
        DENSITY: 5,
    },
    DIE_AT_RANGE: true,
    TURRETS: [
        {
            POSITION: [11, 0, 0, 0, 360, 1],
            TYPE: "pillboxTurret",
        },
    ],
};
exports.wallbox = {
    LABEL: "Tower",
    PARENT: ["trap"],
    SHAPE: -9,
    MOTION_TYPE: "motor",
    INDEPENDENT: true,
    BODY: {
        SPEED: 1,
        DENSITY: 5,
    },
    DIE_AT_RANGE: false,
    TURRETS: [
        {
            POSITION: [11, 0, 0, 0, 360, 1],
            TYPE: "pillboxTurret",
        },
    ],
};
exports.swarm = {
    LABEL: "Swarm Drone",
    TYPE: "swarm",
    ACCEPTS_SCORE: false,
    SHAPE: 3,
    MOTION_TYPE: "swarm",
    FACING_TYPE: "smoothWithMotion",
    CONTROLLERS: ["nearestDifferentMaster", "mapTargetToGoal"],
    CRAVES_ATTENTION: true,
    BODY: {
        ACCELERATION: 3,
        PENETRATION: 1.5,
        HEALTH: 0.175,
        DAMAGE: 2.25,
        SPEED: 4.5,
        RESIST: 1.6,
        RANGE: 225,
        DENSITY: 12,
        PUSHABILITY: 0.6,
        FOV: 1.5,
    },
    DIE_AT_RANGE: true,
    BUFF_VS_FOOD: true,
};
exports.autoswarm = {
    PARENT: ["swarm"],
    AI: {
        FARMER: true,
    },
    INDEPENDENT: true,
};
exports.bee = {
    PARENT: ["swarm"],
    PERSISTS_AFTER_DEATH: true,
    SHAPE: 4,
    LABEL: "Drone",
    HITS_OWN_TYPE: "hardWithBuffer",
};
exports.homingBullet = {
    PARENT: ["autoswarm"],
    SHAPE: 0,
    BODY: {
        PENETRATION: 1,
        SPEED: 3.75,
        RANGE: 90,
        DENSITY: 1.25,
        HEALTH: 0.165,
        DAMAGE: 6,
        PUSHABILITY: 0.3,
    },
    CAN_GO_OUTSIDE_ROOM: true,
};

    exports.repeldrone = {
        PARENT: ["drone"], 
        SHAPE: 'M -0.0063 -0.8875 C -0.0063 -0.8281 -0.0063 -0.7813 -0.0094 -0.7813 C -0.0094 -0.7813 -0.0313 -0.7906 -0.0563 -0.7969 C -0.2 -0.8469 -0.3531 -0.8562 -0.475 -0.825 C -0.55 -0.8031 -0.6094 -0.7719 -0.6687 -0.725 L -0.7031 -0.6969 L -0.6312 -0.625 C -0.5938 -0.5875 -0.5625 -0.5531 -0.5625 -0.55 C -0.5625 -0.55 -0.5781 -0.5406 -0.5938 -0.5313 C -0.8219 -0.4188 -0.9656 -0.2375 -0.9844 -0.0375 L -0.9906 0.0031 L -0.8844 0.0031 C -0.8281 0.0063 -0.7813 0.0063 -0.7813 0.0063 C -0.7813 0.0094 -0.7875 0.025 -0.7969 0.0437 C -0.8156 0.1 -0.8344 0.1875 -0.8406 0.2531 C -0.8531 0.3844 -0.825 0.5188 -0.7656 0.6125 C -0.7438 0.6469 -0.7031 0.6969 -0.6969 0.6969 C -0.6937 0.6969 -0.6594 0.6656 -0.6219 0.6281 L -0.55 0.5594 L -0.525 0.6062 C -0.4562 0.7469 -0.3344 0.875 -0.2219 0.9313 C -0.1656 0.9625 -0.0719 0.9875 -0.0219 0.9844 L 0 0.9844 L 0 0.8844 C 0 0.825 0.0031 0.7813 0.0031 0.7813 C 0.0031 0.7813 0.025 0.7906 0.05 0.7969 C 0.1938 0.8469 0.3469 0.8562 0.4688 0.825 C 0.5469 0.8031 0.6031 0.775 0.6656 0.7219 L 0.6969 0.6969 L 0.625 0.6219 L 0.5531 0.55 L 0.5813 0.5313 C 0.6563 0.5031 0.7406 0.4437 0.8 0.3875 C 0.9063 0.2844 0.9688 0.1656 0.9844 0.0375 L 0.9844 -0.0031 L 0.8812 -0.0063 C 0.825 -0.0063 0.7781 -0.0031 0.7781 -0.0031 C 0.7781 -0.0094 0.7844 -0.025 0.7906 -0.0437 C 0.8125 -0.1 0.8281 -0.1875 0.8344 -0.2531 C 0.85 -0.3844 0.8219 -0.5156 0.7625 -0.6125 C 0.7406 -0.6469 0.6969 -0.6969 0.6906 -0.6969 C 0.6875 -0.6969 0.6531 -0.6656 0.6156 -0.6281 L 0.5437 -0.5625 L 0.5188 -0.6062 C 0.4469 -0.7469 0.3312 -0.875 0.2188 -0.9313 C 0.1594 -0.9625 0.0688 -0.9875 0.0156 -0.9875 L -0.0031 -0.9875 L -0.0063 -0.8875 Z', 
        LABEL: 'Whirl',
        MOTION_TYPE: 'whirl',
        FACING_TYPE: "turnWithSpeed", //'turnWithSize',
        HITS_OWN_TYPE: 'hardWithBuffer',
    BODY: {
        ACCELERATION: 1,
        HEALTH: 165/3,
        DAMAGE: 0.375,
        REGEN: 0.6,
        DENSITY: 1,
        KNOCKBACK_MULTIPLIER: 1.3,
    },
    };
exports.smasherBody = {
    LABEL: "",
    CONTROLLERS: [["spin", { independent: true }]],
    COLOR: 9,
    SHAPE: 6,
    INDEPENDENT: true,
    IGNORED_BY_AI: true,
};
exports.landmineBody = {
    LABEL: "",
    CONTROLLERS: [["spin", { independent: true, speed: 0.08 }]],
    COLOR: 9,
    SHAPE: 6,
    INDEPENDENT: !0,
};
exports.spikeBody = {
    LABEL: "",
    CONTROLLERS: [["spin", { independent: true }]],
    COLOR: 9,
    SHAPE: 3,
    INDEPENDENT: true,
};
exports.weirdSpikeBody1 = {
    LABEL: "",
    CONTROLLERS: [["spin", { independent: true, speed: 0.08 }]],
    COLOR: 9,
    SHAPE: 3,
    INDEPENDENT: true,
};
exports.weirdSpikeBody2 = {
    LABEL: "",
    CONTROLLERS: [["spin", { independent: true, speed: -0.05 }]],
    COLOR: 9,
    SHAPE: 3,
    INDEPENDENT: true,
};
exports.drifterBody = {
    LABEL: "",
    CONTROLLERS: [["spin", { independent: true, speed: 0.11 }]],
    COLOR: 9,
    SHAPE: 4,
    INDEPENDENT: true,
};
exports.geminiBody = {
    LABEL: "",
    CONTROLLERS: [["spin", { independent: true }]],
    COLOR: 9,
    SHAPE: "M 1 0 C 0.75 -0.25 1 -0.5 0.75 -0.75 C 0.5 -1 0.25 -0.75 0 -1 C -0.25 -0.75 -0.5 -1 -0.75 -0.75 C -1 -0.5 -0.75 -0.25 -1 0 C -0.75 0.25 -1 0.5 -0.75 0.75 C -0.5 1 -0.25 0.75 0 1 C 0.25 0.75 0.5 1 0.75 0.75 C 1 0.5 0.75 0.25 1 0",
    INDEPENDENT: true,
};
exports.sawSpikeBody = {
    LABEL: "",
    CONTROLLERS: [["spin", { independent: true, speed: 0.08 }]],
    COLOR: 9,
    SHAPE: "M -0.0063 -0.8875 C -0.0063 -0.8281 -0.0063 -0.7813 -0.0094 -0.7813 C -0.0094 -0.7813 -0.0313 -0.7906 -0.0563 -0.7969 C -0.2 -0.8469 -0.3531 -0.8562 -0.475 -0.825 C -0.55 -0.8031 -0.6094 -0.7719 -0.6687 -0.725 L -0.7031 -0.6969 L -0.6312 -0.625 C -0.5938 -0.5875 -0.5625 -0.5531 -0.5625 -0.55 C -0.5625 -0.55 -0.5781 -0.5406 -0.5938 -0.5313 C -0.8219 -0.4188 -0.9656 -0.2375 -0.9844 -0.0375 L -0.9906 0.0031 L -0.8844 0.0031 C -0.8281 0.0063 -0.7813 0.0063 -0.7813 0.0063 C -0.7813 0.0094 -0.7875 0.025 -0.7969 0.0437 C -0.8156 0.1 -0.8344 0.1875 -0.8406 0.2531 C -0.8531 0.3844 -0.825 0.5188 -0.7656 0.6125 C -0.7438 0.6469 -0.7031 0.6969 -0.6969 0.6969 C -0.6937 0.6969 -0.6594 0.6656 -0.6219 0.6281 L -0.55 0.5594 L -0.525 0.6062 C -0.4562 0.7469 -0.3344 0.875 -0.2219 0.9313 C -0.1656 0.9625 -0.0719 0.9875 -0.0219 0.9844 L 0 0.9844 L 0 0.8844 C 0 0.825 0.0031 0.7813 0.0031 0.7813 C 0.0031 0.7813 0.025 0.7906 0.05 0.7969 C 0.1938 0.8469 0.3469 0.8562 0.4688 0.825 C 0.5469 0.8031 0.6031 0.775 0.6656 0.7219 L 0.6969 0.6969 L 0.625 0.6219 L 0.5531 0.55 L 0.5813 0.5313 C 0.6563 0.5031 0.7406 0.4437 0.8 0.3875 C 0.9063 0.2844 0.9688 0.1656 0.9844 0.0375 L 0.9844 -0.0031 L 0.8812 -0.0063 C 0.825 -0.0063 0.7781 -0.0031 0.7781 -0.0031 C 0.7781 -0.0094 0.7844 -0.025 0.7906 -0.0437 C 0.8125 -0.1 0.8281 -0.1875 0.8344 -0.2531 C 0.85 -0.3844 0.8219 -0.5156 0.7625 -0.6125 C 0.7406 -0.6469 0.6969 -0.6969 0.6906 -0.6969 C 0.6875 -0.6969 0.6531 -0.6656 0.6156 -0.6281 L 0.5437 -0.5625 L 0.5188 -0.6062 C 0.4469 -0.7469 0.3312 -0.875 0.2188 -0.9313 C 0.1594 -0.9625 0.0688 -0.9875 0.0156 -0.9875 L -0.0031 -0.9875 L -0.0063 -0.8875 Z",
    INDEPENDENT: true,
};
exports.armyBobBody = {
    LABEL: "",
    CONTROLLERS: [["spin", { independent: true, speed: 0.11 }]],
    COLOR: 9,
    SHAPE: "M 0 2 L 0.5 0.5 L 2 0 L 0.5 -0.5 L 0 -2 L -0.5 -0.5 L -2 0 L -0.5 0.5 Z",
    INDEPENDENT: true,
};
exports.autoSmasherMissileTurret = {
    PARENT: ["genericTank"],
    LABEL: "Turret",
    CONTROLLERS: ["nearestDifferentMaster"],
    COLOR: 16,
    GUNS: [
        {
            POSITION: [20, 6, 1, 0, 5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.morerecoil, g.turret, g.fast, g.mach, g.pound, g.morereload, g.morereload]),
                TYPE: "bullet",
                STAT_CALCULATOR: gunCalcNames.fixedReload,
                AUTOFIRE: true,
            },
        },
        {
            POSITION: [20, 6, 1, 0, -5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.morerecoil, g.turret, g.fast, g.mach, g.pound, g.morereload, g.morereload]),
                TYPE: "bullet",
                STAT_CALCULATOR: gunCalcNames.fixedReload,
                AUTOFIRE: true,
            },
        },
    ],
};
exports.smasherMissile = {
    PARENT: ["missile"],
    HITS_OWN_TYPE: "never",
    LABEL: "Stabilizer Bullet",
    BODY: {
        DENSITY: 2 * base.DENSITY,
    },
    GUNS: [],
    TURRETS: [
        {
            POSITION: [21.5, 0, 0, 0, 360, 0],
            TYPE: "smasherBody",
        },
    ],
    IS_SMASHER: true,
};
exports.autoSmasherMissile = {
    PARENT: ["missile"],
    LABEL: "Auto-Smasher",
    HITS_OWN_TYPE: "never",
    DANGER: 6,
    BODY: {
        FOV: 1.05 * base.FOV,
        DENSITY: 2 * base.DENSITY,
    },
    GUNS: [],
    TURRETS: [
        {
            POSITION: [21.5, 0, 0, 0, 360, 0],
            TYPE: "smasherBody",
        },
        {
            POSITION: [11, 0, 0, 0, 360, 1],
            TYPE: ["autoSmasherMissileTurret", { INDEPENDENT: true }],
        },
    ],
    IS_SMASHER: true,
};
exports.turretedBullet = makeAuto(generics.bullet, "Auto-Bullet", {type: "weirdAutoTankGun", size: 14, color: 6, angle: 0});
exports.bomb = {
    PARENT: ["bullet"],
    LABEL: "Bomb",
    FACING_TYPE: "turnWithSpeed",
    INDEPENDENT: true,
    BODY: {
        RANGE: 120,
    },
    GUNS: [
        {
            POSITION: [14, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                AUTOFIRE: true,
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.bombTrail,
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
    ],
};
for(let i = 0; i < 16; i++) {
    exports.bomb.GUNS.push(
        {
            POSITION: [0, 8, 1, 0, 0, 22.5*i+22.5, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.bombBullet,
                    g.bombBullet2,
                ]),
                TYPE: [
                    "bullet",
                    {
                        PERSISTS_AFTER_DEATH: true,
                    },
                ],
                SHOOT_ON_DEATH: true,
            },
        },
    );
    /*exports.nestGuardian.TURRETS.push(
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
    );*/
};
exports.lilbomb = {
    PARENT: ["bullet"],
    LABEL: "Bomb",
    FACING_TYPE: "turnWithSpeed",
    INDEPENDENT: true,
    BODY: {
        RANGE: 120,
    },
    GUNS: [
        {
            POSITION: [14, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                AUTOFIRE: true,
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.bombTrail,
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
            POSITION: [0, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.bombBullet,
                ]),
                TYPE: [
                    "bullet",
                    {
                        PERSISTS_AFTER_DEATH: true,
                    },
                ],
                SHOOT_ON_DEATH: true,
            },
        },
        {
            POSITION: [0, 8, 1, 0, 0, 45, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.bombBullet,
                ]),
                TYPE: [
                    "bullet",
                    {
                        PERSISTS_AFTER_DEATH: true,
                    },
                ],
                SHOOT_ON_DEATH: true,
            },
        },
        {
            POSITION: [0, 8, 1, 0, 0, 90, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.bombBullet,
                ]),
                TYPE: [
                    "bullet",
                    {
                        PERSISTS_AFTER_DEATH: true,
                    },
                ],
                SHOOT_ON_DEATH: true,
            },
        },
        {
            POSITION: [0, 8, 1, 0, 0, 135, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.bombBullet,
                ]),
                TYPE: [
                    "bullet",
                    {
                        PERSISTS_AFTER_DEATH: true,
                    },
                ],
                SHOOT_ON_DEATH: true,
            },
        },
        {
            POSITION: [0, 8, 1, 0, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.bombBullet,
                ]),
                TYPE: [
                    "bullet",
                    {
                        PERSISTS_AFTER_DEATH: true,
                    },
                ],
                SHOOT_ON_DEATH: true,
            },
        },
        {
            POSITION: [0, 8, 1, 0, 0, 225, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.bombBullet,
                ]),
                TYPE: [
                    "bullet",
                    {
                        PERSISTS_AFTER_DEATH: true,
                    },
                ],
                SHOOT_ON_DEATH: true,
            },
        },
        {
            POSITION: [0, 8, 1, 0, 0, 270, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.bombBullet,
                ]),
                TYPE: [
                    "bullet",
                    {
                        PERSISTS_AFTER_DEATH: true,
                    },
                ],
                SHOOT_ON_DEATH: true,
            },
        },
        {
            POSITION: [0, 8, 1, 0, 0, 315, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.bombBullet,
                ]),
                TYPE: [
                    "bullet",
                    {
                        PERSISTS_AFTER_DEATH: true,
                    },
                ],
                SHOOT_ON_DEATH: true,
            },
        },
    ],
};
exports.bigbomb = {
    PARENT: ["bullet"],
    LABEL: "Bomb",
    FACING_TYPE: "turnWithSpeed",
    INDEPENDENT: true,
    BODY: {
        RANGE: 120,
    },
    GUNS: [
        {
            POSITION: [14, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                AUTOFIRE: true,
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.bombTrail,
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
    ],
};
for(let i = 0; i < 24; i++) {
    exports.bigbomb.GUNS.push(
        {
            POSITION: [0, 8, 1, 0, 0, 15*i+15, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.bombBullet,
                    g.bombBullet2,
                    g.bombBullet2,
                ]),
                TYPE: [
                    "bullet",
                    {
                        PERSISTS_AFTER_DEATH: true,
                    },
                ],
                SHOOT_ON_DEATH: true,
            },
        },
    );
    /*exports.nestGuardian.TURRETS.push(
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
    );*/
};
exports.cactusbomb = {
    PARENT: ["bullet"],
    LABEL: "Bomb",
    FACING_TYPE: "turnWithSpeed",
    INDEPENDENT: true,
    BODY: {
        RANGE: 120,
    },
    GUNS: [
        {
            POSITION: [14, 8, 0.6, 0, 0, 0, 0],
            PROPERTIES: {
                AUTOFIRE: true,
                SHOOT_SETTINGS: combineStats([
                    g.swarm,
                    g.bombTrail,
                ]),
                TYPE: [
                    "swarm",
                    {
                        PERSISTS_AFTER_DEATH: true,
                    },
                ],
                STAT_CALCULATOR: gunCalcNames.thruster,
            },
        },
    ],
};
for(let i = 0; i < 8; i++) {
    exports.cactusbomb.GUNS.push(
        {
            POSITION: [0, 8, 1, 0, 0, 45*i+45, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.swarm,
                    g.bombBullet,
                ]),
                TYPE: [
                    "swarm",
                    {
                        PERSISTS_AFTER_DEATH: true,
                    },
                ],
                SHOOT_ON_DEATH: true,
            },
        },
    );
    /*exports.nestGuardian.TURRETS.push(
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
    );*/
};
exports.clustermissile = {
    PARENT: ["missile"],
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [14, 6, 1, 0, 0, 180, 0],
            PROPERTIES: {
                AUTOFIRE: true,
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.skim,
                    g.doublereload,
                    g.lowpower,
                    g.muchmorerecoil,
                    g.morespeed,
                ]),
                TYPE: ["bullet", { PERSISTS_AFTER_DEATH: true }],
                STAT_CALCULATOR: gunCalcNames.thruster,
            },
        },
    ],
};
for(let i = 0; i < 8; i++) {
    exports.clustermissile.GUNS.push(
        {
            POSITION: [0, 8, 1, 0, 0, 45*i+45, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.bombBullet,
                ]),
                TYPE: [
                    "bullet",
                    {
                        PERSISTS_AFTER_DEATH: true,
                    },
                ],
                SHOOT_ON_DEATH: true,
            },
        },
    );
    /*exports.nestGuardian.TURRETS.push(
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
    );*/
};
exports.scorpionSeg1 = {
    PARENT: ["genericTank"],
    COLOR: 16,
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [0, 20, 1, 0, 0, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.chainSeg, g.bigdrone, { reload: 2.2, size: 1, health: 1.2, damage: 1.2, pen: 1.2 }]),
                TYPE: "scorpionSting",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                MAX_CHILDREN: 1,
            },
        },
    ],
};
exports.fakeGemini = {
    PARENT: ["drone"],
    LABEL: "Gemini",
    DANGER: 6,
    SHAPE: 0,
    MOTION_TYPE: "motor",
    HITS_OWN_TYPE: "hardWithBuffer",
    BODY: {
        ACCELERATION: 0.5 * base.ACCEL,
        SPEED: 1.1 * 0.25 * base.SPEED,
        HEALTH: base.HEALTH,
        DAMAGE: base.DAMAGE,
        PENETRATION: base.PENETRATION,
        SHIELD: base.SHIELD,
        REGEN: base.REGEN,
        FOV: 0.525,
        DENSITY: 2 * base.DENSITY,
        PUSHABILITY: 1,
        HETERO: 3,
    },
    TURRETS: [
        {
            POSITION: [22.5, 0, 0, 0, 360, 0],
            TYPE: "geminiBody",
        },
    ],
    DRAW_HEALTH: true,
    IS_SMASHER: true,
    STAT_NAMES: statnames.smasher,
    GIVE_KILL_MESSAGE: true,
};

exports.squareGunMinion = {
    PARENT: ["minion"],
    LABEL: 'Protectorate',
    SHAPE: 4,
    FACING_TYPE: 'autospin',
    GUNS: [],
    TURRETS: [{
        POSITION: [11, 8, 0, 0, 190, 0],
        TYPE: "autoTankGun"
    }, {
        POSITION: [11, 8, 0, 90, 190, 0],
        TYPE: "autoTankGun"
    }, {
        POSITION: [11, 8, 0, 180, 190, 0],
        TYPE: "autoTankGun"
    }, {
        POSITION: [11, 8, 0, 270, 190, 0],
        TYPE: "autoTankGun"
    }]
};
exports.stuxnetMinion = {
    PARENT: ["minion"],
    LABEL: 'Firewall',
    SHAPE: 5,
    AI: {
        FARMER: true
    },
    INDEPENDENT: true,
    GUNS: [{
        POSITION: [4, 11, 1.2, 8, 0, 36, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.weak, g.lessreload]),
            TYPE: "drone",
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            MAX_CHILDREN: 1
        }
    }, {
        POSITION: [4, 11, 1.2, 8, 0, 108, .2],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.weak, g.lessreload]),
            TYPE: "drone",
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            MAX_CHILDREN: 1
        }
    }, {
        POSITION: [4, 11, 1.2, 8, 0, 180, .4],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.weak, g.lessreload]),
            TYPE: "drone",
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            MAX_CHILDREN: 1
        }
    }, {
        POSITION: [4, 11, 1.2, 8, 0, 252, .6],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.weak, g.lessreload]),
            TYPE: ["drone", { INDEPENDENT: true, }],
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            MAX_CHILDREN: 3
        }
    }, {
        POSITION: [4, 11, 1.2, 8, 0, 324, .8],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.weak, g.lessreload]),
            TYPE: "drone",
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            MAX_CHILDREN: 1
        }
    }]
};
// BASIC TANK AND STARTING UPGRADES
exports.basic = {
    PARENT: ["genericTank"],
    LABEL: "Basic",
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
exports.twin = {
    PARENT: ["genericTank"],
    LABEL: "Twin",
    GUNS: [
        {
            POSITION: [20, 8, 1, 0, 5.5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [20, 8, 1, 0, -5.5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.sniper = {
    PARENT: ["genericTank"],
    LABEL: "Sniper",
    BODY: {
        FOV: 1.2 * base.FOV,
    },
    GUNS: [
        {
            POSITION: [24, 8.5, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.machineGun = {
    PARENT: ["genericTank"],
    LABEL: "Machine Gun",
    GUNS: [
        {
            POSITION: [12, 10, 1.4, 8, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.flankGuard = {
    PARENT: ["genericTank"],
    LABEL: "Flank Guard",
    BODY: {
        SPEED: 1.1 * base.SPEED,
    },
    GUNS: [
        {
            POSITION: [18, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [18, 8, 1, 0, 0, 120, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [18, 8, 1, 0, 0, 240, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.director = {
    PARENT: ["genericTank"],
    LABEL: "Director",
    STAT_NAMES: statnames.drone,
    BODY: {
        FOV: base.FOV * 1.1,
    },
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [6, 11, 1.3, 7, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone]),
                TYPE: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                MAX_CHILDREN: 6,
            },
        },
    ],
};
exports.pounder = {
    PARENT: ["genericTank"],
    LABEL: "Pounder",
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [20.5, 12, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.trapper = {
    PARENT: ["genericTank"],
    LABEL: "Trapper",
    STAT_NAMES: statnames.trap,
    GUNS: [
        {
            POSITION: [15, 7, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [3, 7, 1.7, 15, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
    ],
};
exports.weirdTrapper = {
    // For use with -trapper combos only.
    PARENT: ["genericTank"],
    LABEL: "Trapper",
    DANGER: 6,
    STAT_NAMES: statnames.generic,
    BODY: {
        SPEED: base.SPEED * 0.8,
        FOV: base.FOV * 1.2,
    },
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [14, 8, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [4, 8, 1.5, 14, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
    ],
};
exports.pelleter = {
    PARENT: ["genericTank"],
    LABEL: "Pelleter",
    DANGER: 6,
    STAT_NAMES: statnames.generic,
    BODY: {
        FOV: 1.25 * base.FOV,
    },
    GUNS: [
        {
            POSITION: [19, 2, 1, 0, -2.5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast, g.pellet ]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [19, 2, 1, 0, 2.5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast, g.pellet ]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [12, 11, 1, 0, 0, 0, 0],
        },
    ],
};
exports.weirdPelleter = {
    // For use with -pelleter combos only.
    PARENT: ["genericTank"],
    LABEL: "Pelleter",
    DANGER: 6,
    STAT_NAMES: statnames.generic,
    BODY: {
        FOV: 1.25 * base.FOV,
    },
    GUNS: [
        {
            POSITION: [19, 2, 1, 0, -2.5, 0, 0],
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
            POSITION: [19, 2, 1, 0, 2.5, 0, 0.5],
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
            POSITION: [12, 11, 1, 0, 0, 0, 0],
        },
    ],
};
exports.minishot = {
    PARENT: ["genericTank"],
    DANGER: 6,
    LABEL: "Minishot",
    GUNS: [
        {
            POSITION: [17, 3, 1, 0, -4, -6, 0.25],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty]),
                TYPE: "bullet",
                LABEL: "Secondary",
            },
        },
        {
            POSITION: [17, 3, 1, 0, 4, 6, 0.75],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty]),
                TYPE: "bullet",
                LABEL: "Secondary",
            },
        },
        {
            POSITION: [19, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.arty]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.inceptioner = {
    PARENT: ["genericTank"],
    LABEL: "Inceptioner",
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
                SHOOT_SETTINGS: combineStats([g.basic, { reload: 1.1 }]),
                TYPE: "turretedBullet",
                SYNCS_SKILLS: true,
            },
        },
    ],
    TURRETS: [
        {
            POSITION: [5, 18, 0, 0, 0, 0],
            TYPE: "fakeAutoTankGun",
        },
    ],
};
exports.smasher = {
    PARENT: ["genericTank"],
    LABEL: "Smasher",
    DANGER: 6,
    BODY: {
        FOV: 1.05 * base.FOV,
        SPEED: 1 * base.SPEED,
        DENSITY: 2 * base.DENSITY,
    },
    TURRETS: [
        {
            POSITION: [21.5, 0, 0, 0, 360, 0],
            TYPE: "smasherBody",
        },
    ],
    IS_SMASHER: true,
    SKILL_CAP: [smshskl, 0, 0, 0, 0, smshskl, smshskl, smshskl, smshskl, smshskl],
    STAT_NAMES: statnames.smasher,
};
exports.healer = {
    PARENT: ["genericTank"],
    LABEL: "Healer",
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
                SHOOT_SETTINGS: combineStats([g.basic, g.healer]),
                TYPE: "healerBullet",
            },
        },
    ],
};
exports.single = {
    PARENT: ["genericTank"],
    LABEL: "Single",
    CONTROLLERS: ["zoom"],
    TOOLTIP: "Hold right click to zoom.",
    GUNS: [
        {
            POSITION: [19, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.single]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [5.5, 8, -1.8, 6.5, 0, 0, 0],
        },
    ],
};
// PELLETER UPGRADES
exports.borer = {
    PARENT: ["genericTank"],
    LABEL: 'Borer',
    DANGER: 6,
    BODY: {
        FOV: 1.2,
    },
    GUNS: [{
        POSITION: [22, 2, 1, 0, 3, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast, g.pellet, g.bore]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [22, 2, 1, 0, -3, 0, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast, g.pellet, g.bore]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [4.5, 8.5, -1.6, 7.5, 0, 0, 0]
    }]
};
exports.autoBorer = makeAuto(exports.borer);
// TWIN UPGRADES
exports.doubleTwin = {
    PARENT: ["genericTank"],
    LABEL: "Double Twin",
    DANGER: 6,
    GUNS: [
        {
            POSITION: [20, 8, 1, 0, 5.5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [20, 8, 1, 0, -5.5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [20, 8, 1, 0, 5.5, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [20, 8, 1, 0, -5.5, 180, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.tripleShot = {
    PARENT: ["genericTank"],
    LABEL: "Triple Shot",
    DANGER: 6,
    BODY: {
        SPEED: base.SPEED * 0.9,
    },
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [19, 8, 1, 0, -2, -17.5, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [19, 8, 1, 0, 2, 17.5, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [22, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
                TYPE: "bullet",
            },
        },
    ],
};

exports.twinSniper = {
    PARENT: ["genericTank"],
    LABEL: 'Twin Sniper',
    DANGER: 6,
    BODY: {
        FOV: 1.2,
    },
    GUNS: [{
        POSITION: [22, 8, 1, 0, 5.5, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.sniper]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [22, 8, 1, 0, -5.5, 0, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.sniper]),
            TYPE: "bullet"
        }
    }]
};
// DOUBLE TWIN UPGRADES
exports.tripleTwin = {
    PARENT: ["genericTank"],
    LABEL: "Triple Twin",
    DANGER: 7,
    GUNS: [
        {
            POSITION: [20, 8, 1, 0, 5.5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [20, 8, 1, 0, -5.5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [20, 8, 1, 0, 5.5, 120, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [20, 8, 1, 0, -5.5, 120, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [20, 8, 1, 0, 5.5, 240, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [20, 8, 1, 0, -5.5, 240, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.autoDouble = makeAuto(exports.doubleTwin, "Auto-Double");
exports.hewnDouble = {
    PARENT: ["genericTank"],
    LABEL: "Hewn Double",
    DANGER: 7,
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [19, 8, 1, 0, 5.5, 205, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.twin,
                    g.twin,
                    g.double,
                    g.hewn,
                    g.morerecoil,
                ]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [19, 8, 1, 0, -5.5, -205, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.twin,
                    g.twin,
                    g.double,
                    g.hewn,
                    g.morerecoil,
                ]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [20, 8, 1, 0, 5.5, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.twin,
                    g.double,
                    g.hewn,
                    g.morerecoil,
                ]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [20, 8, 1, 0, -5.5, 180, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.twin,
                    g.double,
                    g.hewn,
                    g.morerecoil,
                ]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [20, 8, 1, 0, 5.5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double, g.hewn]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [20, 8, 1, 0, -5.5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double, g.hewn]),
                TYPE: "bullet",
            },
        },
    ],
};
// AUTO DOUBLE UPGRADES
exports.autoHewnDouble = makeAuto(exports.hewnDouble, "Auto-Hewn Double");
// TRIPLE SHOT UPGRADES
exports.pentaShot = {
    PARENT: ["genericTank"],
    LABEL: "Penta Shot",
    DANGER: 7,
    BODY: {
        SPEED: 0.85 * base.SPEED,
    },
    GUNS: [
        {
            POSITION: [16, 8, 1, 0, -3, -30, 0.667],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.penta]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [16, 8, 1, 0, 3, 30, 0.667],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.penta]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [19, 8, 1, 0, -2, -15, 0.333],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.penta]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [19, 8, 1, 0, 2, 15, 0.333],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.penta]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [22, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.penta]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.spreadshot = {
    PARENT: ["genericTank"],
    LABEL: "Spreadshot",
    DANGER: 7,
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [13, 4, 1, 0, -0.5, -75, 5 / 6],
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
            POSITION: [13, 4, 1, 0, 0.5, 75, 5 / 6],
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
            POSITION: [14.5, 4, 1, 0, -0.5, -60, 4 / 6],
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
            POSITION: [14.5, 4, 1, 0, 0.5, 60, 4 / 6],
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
            POSITION: [16, 4, 1, 0, -0.5, -45, 3 / 6],
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
            POSITION: [16, 4, 1, 0, 0.5, 45, 3 / 6],
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
            POSITION: [17.5, 4, 1, 0, -0.5, -30, 2 / 6],
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
            POSITION: [17.5, 4, 1, 0, 0.5, 30, 2 / 6],
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
            POSITION: [19, 4, 1, 0, -1, -15, 1 / 6],
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
            POSITION: [19, 4, 1, 0, 1, 15, 1 / 6],
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
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [12, 8, 1, 8, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.pound,
                    g.spreadmain,
                    g.spread,
                ]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.bentHybrid = makeHybrid(exports.tripleShot, "Bent Hybrid");
exports.bentDouble = {
    PARENT: ["genericTank"],
    LABEL: "Bent Double",
    DANGER: 7,
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [19, 8, 1, 0, -2, -17.5, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [19, 8, 1, 0, 2, 17.5, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [22, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [19, 8, 1, 0, -2, -197.5, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [19, 8, 1, 0, 2, 197.5, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [22, 8, 1, 0, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.triplet = {
    PARENT: ["genericTank"],
    DANGER: 6,
    BODY: {
        FOV: 1.05 * base.FOV,
    },
    LABEL: "Triplet",
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
// BENT DOUBLE UPGRADES
exports.bentTriple = {
    PARENT: ["genericTank"],
    LABEL: 'Bent Triple',
    DANGER: 7,
    BODY: {
        ACCELERATION: base.ACCEL * .9
    },
    GUNS: [{
        POSITION: [19, 8, 1, 0, 1, 17.5, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double, g.spam]),
            TYPE: "bullet",
        }
    }, {
        POSITION: [19, 8, 1, 0, -1, -17.5, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double, g.spam]),
            TYPE: "bullet",
        }
    }, {
        POSITION: [22, 8, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double, g.spam]),
            TYPE: "bullet",
        }
    }, {
        POSITION: [19, 8, 1, 0, 1, 137.5, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double, g.spam]),
            TYPE: "bullet",
        }
    }, {
        POSITION: [19, 8, 1, 0, -1, 102.5, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double, g.spam]),
            TYPE: "bullet",
        }
    }, {
        POSITION: [22, 8, 1, 0, 0, 120, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double, g.spam]),
            TYPE: "bullet",
        }
    }, {
        POSITION: [19, 8, 1, 0, 1, 257.5, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double, g.spam]),
            TYPE: "bullet",
        }
    }, {
        POSITION: [19, 8, 1, 0, -1, 222.5, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double, g.spam]),
            TYPE: "bullet",
        }
    }, {
        POSITION: [22, 8, 1, 0, 0, 240, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double, g.spam]),
            TYPE: "bullet",
        }
    }]
};
// TRIPLET UPGRADES
exports.quintuplet = {
    PARENT: ["genericTank"],
    DANGER: 7,
    BODY: {
        FOV: 1.1 * base.FOV,
    },
    LABEL: "Quintuplet",
    GUNS: [
        {
            POSITION: [16, 10, 1, 0, -5, 0, 0.667],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.quint]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [16, 10, 1, 0, 5, 0, 0.667],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.quint]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [19, 10, 1, 0, -3, 0, 0.333],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.quint]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [19, 10, 1, 0, 3, 0, 0.333],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.quint]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [22, 10, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.quint]),
                TYPE: "bullet",
            },
        },
    ],
};
// SNIPER UPGRADES
exports.assassin = {
    PARENT: ["genericTank"],
    DANGER: 6,
    LABEL: "Assassin",
    BODY: {
        SPEED: 0.85 * base.SPEED,
        FOV: 1.4 * base.FOV,
    },
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [27, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [5, 8, -1.4, 8, 0, 0, 0],
        },
    ],
};
exports.hunter = {
    PARENT: ["genericTank"],
    LABEL: "Hunter",
    DANGER: 6,
    BODY: {
        SPEED: base.SPEED * 0.9,
        FOV: base.FOV * 1.25,
    },
    CONTROLLERS: ["zoom"],
    TOOLTIP: "Hold right click to zoom.",
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [24, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunter2]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [21, 12, 1, 0, 0, 0, 0.25],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.rifle = {
    PARENT: ["genericTank"],
    LABEL: "Rifle",
    BODY: {
        FOV: base.FOV * 1.225,
    },
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [20, 12, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [24, 7, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.demolisher = {
   PARENT: ["genericTank"],
   LABEL: 'Demolisher',
   DANGER: 6,
   BODY: {
      FOV: base.FOV * 1.2,
   },
   GUNS: [ {
         POSITION: [ 5, 12, -0.7, 13, 0, 0, 0, ],
         }, {
         POSITION: [ 10, 12, 1, 18, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.obli]),
            TYPE: "bullet",
         }, }, 
        {
            POSITION: [5, 12, 0.7, 8, 0, 0, 0],
        },
     ],
};
// DEMOLISHER UPGRADES


exports.jackhammer = {
   PARENT: ["genericTank"],
   LABEL: 'Jack Hammer',
   DANGER: 7,
   BODY: {
      SPEED: 0.85 * base.SPEED,
      FOV: base.FOV * 1.4,
   },
   GUNS: [ {
         POSITION: [ 5, 12, -0.7, 13, 0, 0, 0, ],
         }, {
         POSITION: [ 13, 12, 1, 18, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass, g.obli]),
            TYPE: "bullet",
         }, }, 
        {
            POSITION: [5, 12, 0.7, 8, 0, 0, 0],
        },
     ],
};

exports.bulldozer = {
   PARENT: ["genericTank"],
   LABEL: 'Bulldozer',
   DANGER: 7,
   BODY: {
      FOV: base.FOV * 1.2,
   },
   GUNS: [ {
         POSITION: [ 5, 14, -0.8, 13, 0, 0, 0, ],
         }, {
         POSITION: [ 10, 14, 1, 18, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.obli, g.destroy]),
            TYPE: "bullet",
         }, }, 
        {
            POSITION: [5, 14, 0.8, 8, 0, 0, 0],
        },
     ],
};
exports.demobrid = makeHybrid(exports.demolisher, "Demobrid");
exports.punisher = makeAuto(exports.demolisher, "Punisher");

exports.tyrant = {
   PARENT: ["genericTank"],
   LABEL: 'Tyrant',
   DANGER: 7,
   BODY: {
      FOV: base.FOV * 1.4,
   },
   GUNS: [ {
         POSITION: [ 5, 14, -0.8, 13, 0, 0, 0, ],
         }, {
         POSITION: [ 13, 14, 1, 18, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass, g.obli, g.destroy]),
            TYPE: "bullet",
         }, }, 
        {
            POSITION: [5, 14, 0.8, 8, 0, 0, 0],
        },
     ],
};
exports.pavingBreaker = {
   PARENT: ["genericTank"],
   LABEL: 'Paving Breaker',
   DANGER: 7,
   BODY: {
      SPEED: 0.8 * base.SPEED,
      FOV: base.FOV * 1.5,
   },
   GUNS: [ {
         POSITION: [ 5, 12, -0.7, 13, 0, 0, 0, ],
         }, {
         POSITION: [ 16, 12, 1, 18, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass, g.obli]),
            TYPE: "bullet",
         }, }, 
        {
            POSITION: [5, 12, 0.7, 8, 0, 0, 0],
        },
     ],
};
exports.wreckingball = {
   PARENT: ["genericTank"],
   LABEL: 'Wrecking Ball',
   DANGER: 7,
   BODY: {
      FOV: base.FOV * 1.2,
   },
   GUNS: [ {
         POSITION: [ 5, 20, -0.8, 13, 0, 0, 0, ],
         }, {
         POSITION: [ 10, 20, 1, 18, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.obli, g.destroy, g.anni]),
            TYPE: "bullet",
         }, }, 
        {
            POSITION: [11, 18, 0.9, 2, 0, 0, 0],
        },
     ],
};
exports.kraken = makeHybrid(exports.jackhammer, "Kraken");
exports.anchor = makeHybrid(exports.bulldozer, "Anchor");
exports.warden = makeAuto(exports.jackhammer, "Warden");
exports.plow = makeAuto(exports.bulldozer, "Plow");
exports.trojan = makeAuto(exports.demobrid, "Trojan");
exports.obliStabilize = { //UNUSED OLD DESIGN
   PARENT: ["genericTank"],
   LABEL: 'Destabilizer',
   BODY: {
      SPEED: base.SPEED * .8,
      FOV: base.FOV * 1.2,
   },
   GUNS: [ {
        POSITION: [11.25, 11.75, 1.4, 14, 0, 0, 0]
    }, {
         POSITION: [ 14, 12, -0.6, 0, 0, 0, 0, ],
         }, {
         POSITION: [ 14, 12, 1, 14, 0, 0, 0.75, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.obli, g.stabilize]),
            TYPE: "smasherMissile",
         }, }, 
     ],
};
// ASSASSIN UPGRADES
exports.ranger = {
    PARENT: ["genericTank"],
    LABEL: "Ranger",
    DANGER: 7,
    BODY: {
        SPEED: 0.8 * base.SPEED,
        FOV: 1.5 * base.FOV,
    },
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [32, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [5, 8, -1.4, 8, 0, 0, 0],
        },
    ],
};
exports.falcon = {
    PARENT: ["genericTank"],
    LABEL: "Falcon",
    DANGER: 7,
    BODY: {
        FOV: 1.2 * base.FOV,
    },
    TOOLTIP: "Right click to fire your main barrel.",
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [27, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.sniper,
                    g.assass,
                    g.lessreload,
                ]),
                TYPE: "bullet",
                LABEL: "Assassin",
                ALT_FIRE: true,
            },
        },
        {
            POSITION: [5, 8, -1.4, 8, 0, 0, 0],
        },
        {
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
            },
        },
        {
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
            },
        },
        {
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
            },
        },
    ],
};
exports.stalker = {
    PARENT: ["genericTank"],
    DANGER: 7,
    LABEL: "Stalker",
    BODY: {
        SPEED: 0.85 * base.SPEED,
        FOV: 1.35 * base.FOV,
    },
    INVISIBLE: [0.08, 0.03],
    TOOLTIP: "Stay still to turn invisible.",
    GUNS: [
        {
            POSITION: [27, 8, -1.8, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.stunAssassin = {
    PARENT: ["genericTank"],
    DANGER: 7,
    LABEL: "Stunner",
    BODY: {
        SPEED: 0.85 * base.SPEED,
        FOV: 1.4 * base.FOV,
    },
    GUNS: [
        {
            // LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY 
            POSITION: [27, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass]),
                TYPE: "stunBullet",
            },
        },
        {
            POSITION: [5, 8, -1.4, 8, 0, 0, 0],
        },
        {
            POSITION: [2, 9, 1, 12, 0, 0, 0],
        },
    ],
};
exports.autoAssassin = makeAuto(exports.assassin);
// STALKER UPGRADES
exports.owl = {
    PARENT: ["genericTank"],
    LABEL: "Owl",
    DANGER: 7,
    BODY: {
        SPEED: 0.85 * base.SPEED,
        FOV: 1.15 * base.FOV,
    },
    INVISIBLE: [0.08, 0.03],
    TOOLTIP: "Right click to fire your main barrel. Stay still to turn invisible.",
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [27, 8, -1.8, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([ g.basic, g.sniper, g.assass, g.lessreload, ]),
                TYPE: "bullet",
                LABEL: "Assassin",
                ALT_FIRE: true,
            },
        },
        {
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
            },
        },
        {
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
            },
        },
        {
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
            },
        },
    ],
};
// HUNTER UPGRADES
exports.predator = {
    PARENT: ["genericTank"],
    LABEL: "Predator",
    DANGER: 7,
    BODY: {
        SPEED: base.SPEED * 0.9,
        FOV: base.FOV * 1.25,
    },
    CONTROLLERS: ["zoom"],
    TOOLTIP: "Hold right click to zoom.",
    GUNS: [
        {
            POSITION: [24, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.sniper,
                    g.hunter,
                    g.hunter2,
                    g.hunter2,
                    g.preda,
                ]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [21, 12, 1, 0, 0, 0, 0.15],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.sniper,
                    g.hunter,
                    g.hunter2,
                    g.preda,
                ]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [18, 16, 1, 0, 0, 0, 0.3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.preda]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.xHunter = {
    PARENT: ["genericTank"],
    LABEL: "X-Hunter",
    DANGER: 7,
    BODY: {
        SPEED: base.SPEED * 0.9,
        FOV: base.FOV * 1.25,
    },
    CONTROLLERS: [["zoom", { distance: 550 }]],
    TOOLTIP: "Hold right click to zoom.",
    GUNS: [
        {
            POSITION: [24, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.sniper,
                    g.hunter,
                    g.hunter2,
                ]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [21, 12, 1, 0, 0, 0, 0.25],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.sniper,
                    g.hunter,
                ]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [5, 11.5, -1.25, 7, 0, 0, 0],
        },
    ],
};
exports.poacher = makeHybrid(exports.hunter, "Poacher");
exports.dual = {
    PARENT: ["genericTank"],
    LABEL: "Dual",
    DANGER: 7,
    BODY: {
        FOV: 1.1 * base.FOV,
    },
    CONTROLLERS: ["zoom"],
    TOOLTIP: "Hold right click to zoom.",
    GUNS: [
        {
            POSITION: [18, 7, 1, 0, 5.5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.lowpower]),
                TYPE: "bullet",
                LABEL: "Small",
            },
        },
        {
            POSITION: [18, 7, 1, 0, -5.5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.lowpower]),
                TYPE: "bullet",
                LABEL: "Small",
            },
        },
        {
            POSITION: [16, 8.5, 1, 0, 5.5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [16, 8.5, 1, 0, -5.5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual]),
                TYPE: "bullet",
            },
        },
    ],
};

// RIFLE UPGRADES
exports.musket = {
    PARENT: ["genericTank"],
    LABEL: "Musket",
    BODY: {
        FOV: base.FOV * 1.225,
    },
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [16, 19, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [18, 7, 1, 0, 4, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle, g.twin]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [18, 7, 1, 0, -4, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle, g.twin]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.crossbow = {
    PARENT: ["genericTank"],
    LABEL: "Crossbow",
    BODY: {
        FOV: base.FOV * 1.225,
    },
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [12.5, 2.5, 1, 0, 3.5, 35, 1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.sniper,
                    g.rifle,
                    g.slow,
                    g.crossbow,
                    g.halfrecoil,
                ]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [12.5, 2.5, 1, 0, -3.5, -35, 1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.sniper,
                    g.rifle,
                    g.slow,
                    g.crossbow,
                    g.halfrecoil,
                ]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [15, 2.5, 1, 0, 3.5, 35/2, 2/3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.sniper,
                    g.rifle,
                    g.slow,
                    g.crossbow,
                    g.halfrecoil,
                ]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [15, 2.5, 1, 0, -3.5, -35/2, 2/3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.sniper,
                    g.rifle,
                    g.slow,
                    g.crossbow,
                    g.halfrecoil,
                ]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [20, 3.5, 1, 0, 4, 0, 1/3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.sniper,
                    g.rifle,
                    g.slow,
                    g.crossbow,
                    g.halfrecoil,
                ]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [20, 3.5, 1, 0, -4, 0, 1/3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.sniper,
                    g.rifle,
                    g.slow,
                    g.crossbow,
                    g.halfrecoil,
                ]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [24, 7, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.sniper,
                    g.rifle,
                    g.slow,
                    g.halfreload,
                    g.halfrecoil,
                ]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.armsman = makeHybrid(exports.rifle, "Armsman");

// MACHINE GUN UPGRADES
exports.minigun = {
    PARENT: ["genericTank"],
    LABEL: "Minigun",
    DANGER: 6,
    BODY: {
        FOV: 1.2,
    },
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [21, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mini]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [19, 8, 1, 0, 0, 0, 1 / 3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mini]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [17, 8, 1, 0, 0, 0, 2 / 3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mini]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.gunner = {
    PARENT: ["genericTank"],
    LABEL: "Gunner",
    DANGER: 6,
    GUNS: [
        {
            POSITION: [12, 3.5, 1, 0, 7.25, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [12, 3.5, 1, 0, -7.25, 0, 0.75],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [16, 3.5, 1, 0, 3.75, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [16, 3.5, 1, 0, -3.75, 0, 0.25],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.weirdGunner = {
    // For use with -gunner combos only.
    PARENT: ["genericTank"],
    LABEL: "Gunner",
    DANGER: 6,
    GUNS: [
        {
            POSITION: [19, 2, 1, 0, -2.5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.gunner,
                    g.power,
                    g.twin,
                    g.slow,
                    g.flank,
                    g.lotsmorrecoil,
                ]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [19, 2, 1, 0, 2.5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.gunner,
                    g.power,
                    g.twin,
                    g.slow,
                    g.flank,
                    g.lotsmorrecoil,
                ]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [12, 11, 1, 0, 0, 0, 0],
        },
    ],
};
exports.sprayer = {
    PARENT: ["genericTank"],
    LABEL: "Sprayer",
    GUNS: [
        {
            POSITION: [23, 7, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.gunner,
                    g.lowpower,
                    g.mach,
                    g.morerecoil,
                ]),
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
exports.grenadier = {
    PARENT: ["genericTank"],
    LABEL: "Grenadier",
    GUNS: [
        {
            POSITION: [12, 10, 1.4, 8, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.grenadier]),
                TYPE: "lilbomb",
                PERSISTS_AFTER_DEATH: true,
            },
        },
        {
            POSITION: [5, 12.6, 0.001, 15, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.grenadier, g.fake]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.blaster = {
    PARENT: ["genericTank"],
    LABEL: "Blaster",
    DANGER: 6,
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [11.5, 10.5, 1.4, 4, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.blaster]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.gatlingGun = {
    PARENT: ["genericTank"],
    LABEL: "Gatling Gun",
    DANGER: 6,
    BODY: {
        FOV: base.FOV * 1.2,
    },
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [16, 10, 1.4, 8, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.chain]),
                TYPE: "bullet",
            },
        },
    ],
};
// GRENADIER UPGRADES
exports.bombardier = {
    PARENT: ["genericTank"],
    LABEL: "Bombardier",
    GUNS: [
        {
            POSITION: [12, 14, 1.2, 8, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.grenadier, g.bombardier]),
                TYPE: "bomb",
                PERSISTS_AFTER_DEATH: true,
            },
        },
        {
            POSITION: [5, 14.28, 0.001, 15, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.grenadier, g.bombardier, g.fake]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.nuclearBomb = {
    PARENT: ["genericTank"],
    LABEL: "Nuclear Bomb",
    GUNS: [
        {
            POSITION: [14, 16, 1.1, 6, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.grenadier, g.bombardier, g.nuclearbomb]),
                TYPE: "bigbomb",
                PERSISTS_AFTER_DEATH: true,
            },
        },
        {
            POSITION: [5, 15.84, 0.001, 15, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.grenadier, g.bombardier, g.nuclearbomb, g.fake]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.swarmGrenadier = {
    PARENT: ["genericTank"],
    LABEL: "Cactus",
    GUNS: [
        {
            POSITION: [12, 10, 1.4, 8, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.grenadier]),
                TYPE: "cactusbomb",
                PERSISTS_AFTER_DEATH: true,
            },
        },
        {
            POSITION: [5, 12.6, 0.4, 15, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.grenadier, g.fake]),
                TYPE: "bullet",
            },
        },
    ],
};
// MINIGUN UPGRADES
exports.streamliner = {
    PARENT: ["genericTank"],
    LABEL: "Streamliner",
    DANGER: 7,
    BODY: {
        FOV: 1.3,
    },
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [25, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [23, 8, 1, 0, 0, 0, 0.2],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [21, 8, 1, 0, 0, 0, 0.4],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [19, 8, 1, 0, 0, 0, 0.6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [17, 8, 1, 0, 0, 0, 0.8],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.cropDuster = makeHybrid(exports.minigun, "Crop Duster");
exports.vulture = {
    PARENT: ["genericTank"],
    LABEL: "Vulture",
    DANGER: 7,
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [20, 6, -2, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront, g.mini]),
                TYPE: "bullet",
                ALT_FIRE: true,
                LABEL: "Minigun",
            },
        },
        {
            POSITION: [18, 6.5, -2, 0, 0, 0, 0.333],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront, g.mini]),
                TYPE: "bullet",
                ALT_FIRE: true,
                LABEL: "Minigun",
            },
        },
        {
            POSITION: [16, 7, -2, 0, 0, 0, 0.667],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront, g.mini]),
                TYPE: "bullet",
                ALT_FIRE: true,
                LABEL: "Minigun",
            },
        },
        {
            POSITION: [16, 8, 1, 0, 0, 150, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.halfrecoil]),
                TYPE: "bullet",
                LABEL: gunCalcNames.thruster,
            },
        },
        {
            POSITION: [16, 8, 1, 0, 0, 210, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.halfrecoil]),
                TYPE: "bullet",
                LABEL: gunCalcNames.thruster,
            },
        },
        {
            POSITION: [18, 8, 1, 0, 0, 180, 0.6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.halfrecoil]),
                TYPE: "bullet",
                LABEL: gunCalcNames.thruster,
            },
        },
    ],
};

exports.subverter = {
    PARENT: ["genericTank"],
    LABEL: "Subverter",
    DANGER: 7,
    BODY: {
        FOV: base.FOV * 1.2,
    },
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [21, 12, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.mini]),
                TYPE: "bullet",
            },
        },
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [19, 12, 1, 0, 0, 0, 0.333],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.mini]),
                TYPE: "bullet",
            },
        },
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [17, 12, 1, 0, 0, 0, 0.667],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.mini]),
                TYPE: "bullet",
            },
        },
    ],
};
// SUBVERTER UPGRADES
exports.toppler = {
    PARENT: ["genericTank"],
    LABEL: "Toppler",
    DANGER: 7,
    BODY: {
        FOV: base.FOV * 1.2,
    },
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [21, 14, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.mini]),
                TYPE: "bullet",
            },
        },
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [19, 14, 1, 0, 0, 0, 0.333],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.mini]),
                TYPE: "bullet",
            },
        },
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [17, 14, 1, 0, 0, 0, 0.667],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.mini]),
                TYPE: "bullet",
            },
        },
    ],
};
// GUNNER UPGRADES
exports.autoGunner = makeAuto(exports.gunner);
exports.nailgun = {
    PARENT: ["genericTank"],
    LABEL: "Nailgun",
    DANGER: 7,
    BODY: {
        FOV: base.FOV * 1.1,
        SPEED: base.SPEED * 0.9,
    },
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [19, 2, 1, 0, -2.5, 0, 0.25],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.gunner,
                    g.power,
                    g.twin,
                    g.nail,
                ]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [19, 2, 1, 0, 2.5, 0, 0.75],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.gunner,
                    g.power,
                    g.twin,
                    g.nail,
                ]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [20, 2, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.gunner,
                    g.power,
                    g.twin,
                    g.nail,
                ]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [5.5, 7, -1.8, 6.5, 0, 0, 0],
        },
    ],
};
exports.machineGunner = {
    PARENT: ["genericTank"],
    LABEL: "Machine Gunner",
    DANGER: 6,
    BODY: {
        SPEED: 0.9 * base.SPEED,
    },
    GUNS: [
        {
            POSITION: [14, 3, 4, -3, 5, 0, 0.6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.twin,
                    g.puregunner,
                    g.machgun,
                ]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [14, 3, 4, -3, -5, 0, 0.8],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.twin,
                    g.puregunner,
                    g.machgun,
                ]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [14, 3, 4, 0, 2.5, 0, 0.4],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.twin,
                    g.puregunner,
                    g.machgun,
                ]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [14, 3, 4, 0, -2.5, 0, 0.2],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.twin,
                    g.puregunner,
                    g.machgun,
                ]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [14, 3, 4, 3, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.twin,
                    g.puregunner,
                    g.machgun,
                ]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.overgunner = makeOver(exports.weirdGunner);
// BLASTER UPGRADES
exports.splasher = {
    PARENT: ["genericTank"],
    LABEL: "Splasher",
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [17, 7, 1, 4, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.lowpower, g.mach, g.morerecoil,
                ]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [10, 10, 1.4, 8, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.blaster]),
                TYPE: "bullet",
            },
        },
    ],
};
// SPRAYER UPGRADES
exports.redistributor = {
    PARENT: ["genericTank"],
    LABEL: "Redistributor",
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
exports.phoenix = {
    PARENT: ["genericTank"],
    LABEL: "Phoenix",
    DANGER: 7,
    TOOLTIP: "Right click to fire your main barrel.",
    GUNS: [
        {
            POSITION: [23, 7, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.gunner,
                    g.lowpower,
                    g.mach,
                    g.morerecoil,
                ]),
                TYPE: "bullet",
                LABEL: "Sprayer",
                ALT_FIRE: true,
            },
        },
        {
            POSITION: [12, 10, 1.4, 8, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
                TYPE: "bullet",
                LABEL: "Sprayer",
                ALT_FIRE: true,
            },
        },
        {
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
            },
        },
        {
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
            },
        },
        {
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
            },
        },
    ],
};
exports.atomizer = {
    PARENT: ["genericTank"],
    LABEL: "Atomizer",
    GUNS: [
        {
            POSITION: [5, 7.5, 1.3, 18.5, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.gunner,
                    g.lowpower,
                    g.mach,
                    g.morerecoil,
                    g.atomizer,
                ]),
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
exports.focal = {
    PARENT: ["genericTank"],
    LABEL: "Focal",
    GUNS: [
        {
            POSITION: [25, 7, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.gunner,
                    g.lowpower,
                    g.mach,
                    g.morerecoil,
                ]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [14, 10, 1.3, 8, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.chain]),
                TYPE: "bullet",
            },
        },
    ],
};

// FLANK GUARD UPGRADES
exports.hexaTank = {
    PARENT: ["genericTank"],
    LABEL: "Hexa Tank",
    DANGER: 6,
    GUNS: [
        {
            POSITION: [18, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [18, 8, 1, 0, 0, 120, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [18, 8, 1, 0, 0, 240, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [18, 8, 1, 0, 0, 60, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [18, 8, 1, 0, 0, 180, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [18, 8, 1, 0, 0, 300, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.triAngle = {
    PARENT: ["genericTank"],
    LABEL: "Tri-Angle",
    BODY: {
        HEALTH: 0.8 * base.HEALTH,
        SHIELD: 0.8 * base.SHIELD,
        DENSITY: 0.6 * base.DENSITY,
    },
    DANGER: 6,
    GUNS: [
        {
            POSITION: [18, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.flank,
                    g.tri,
                    g.trifront,
                    g.tonsmorrecoil,
                ]),
                TYPE: "bullet",
                LABEL: "Front",
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
exports.auto3 = {
    PARENT: ["genericTank"],
    LABEL: "Auto-3",
    DANGER: 6,
    FACING_TYPE: "autospin",
    TURRETS: [
        {
            POSITION: [11, 8, 0, 0, 190, 0],
            TYPE: "autoTankGun",
        },
        {
            POSITION: [11, 8, 0, 120, 190, 0],
            TYPE: "autoTankGun",
        },
        {
            POSITION: [11, 8, 0, 240, 190, 0],
            TYPE: "autoTankGun",
        },
    ],
};

// HEXA TANK UPGRADES
exports.octoTank = {
    PARENT: ["genericTank"],
    LABEL: "Octo Tank",
    DANGER: 7,
    GUNS: [
        {
            POSITION: [18, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [18, 8, 1, 0, 0, 90, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [18, 8, 1, 0, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [18, 8, 1, 0, 0, 270, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [18, 8, 1, 0, 0, 45, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [18, 8, 1, 0, 0, 135, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [18, 8, 1, 0, 0, 225, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [18, 8, 1, 0, 0, 315, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.cyclone = {
    PARENT: ["genericTank"],
    LABEL: "Cyclone",
    DANGER: 7,
    GUNS: [
        {
            POSITION: [15, 3.5, 1, 0, 0, 0, 0],
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
        {
            POSITION: [15, 3.5, 1, 0, 0, 30, 0.5],
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
        {
            POSITION: [15, 3.5, 1, 0, 0, 60, 0.25],
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
        {
            POSITION: [15, 3.5, 1, 0, 0, 90, 0.75],
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
        {
            POSITION: [15, 3.5, 1, 0, 0, 120, 0],
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
        {
            POSITION: [15, 3.5, 1, 0, 0, 150, 0.5],
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
        {
            POSITION: [15, 3.5, 1, 0, 0, 180, 0.25],
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
        {
            POSITION: [15, 3.5, 1, 0, 0, 210, 0.75],
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
        {
            POSITION: [15, 3.5, 1, 0, 0, 240, 0],
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
        {
            POSITION: [15, 3.5, 1, 0, 0, 270, 0.5],
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
        {
            POSITION: [15, 3.5, 1, 0, 0, 300, 0.25],
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
        {
            POSITION: [15, 3.5, 1, 0, 0, 330, 0.75],
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
    ],
};

// TRI-ANGLE UPGRADES
exports.fighter = {
    PARENT: ["genericTank"],
    LABEL: "Fighter",
    BODY: {
        DENSITY: 0.6 * base.DENSITY,
    },
    DANGER: 7,
    GUNS: [
        {
            POSITION: [18, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
                TYPE: "bullet",
                LABEL: "Front",
            },
        },
        {
            POSITION: [16, 8, 1, 0, -1, 90, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
                TYPE: "bullet",
                LABEL: "Side",
            },
        },
        {
            POSITION: [16, 8, 1, 0, 1, -90, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
                TYPE: "bullet",
                LABEL: "Side",
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
exports.booster = {
    PARENT: ["genericTank"],
    LABEL: "Booster",
    BODY: {
        HEALTH: base.HEALTH * 0.4,
        SHIELD: base.SHIELD * 0.4,
        DENSITY: base.DENSITY * 0.3,
    },
    DANGER: 7,
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [18, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.flank,
                    g.tri,
                    g.trifront,
                    g.tonsmorrecoil,
                ]),
                TYPE: "bullet",
                LABEL: "Front",
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
exports.autoTriAngle = makeAuto(exports.triAngle);
exports.autoTriAngle.BODY = { SPEED: base.SPEED };
exports.surfer = {
    PARENT: ["genericTank"],
    LABEL: "Surfer",
    BODY: {
        DENSITY: 0.6 * base.DENSITY,
    },
    DANGER: 7,
    GUNS: [
        {
            POSITION: [18, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
                TYPE: "bullet",
                LABEL: "Front",
            },
        },
        {
            POSITION: [7, 7.5, 0.6, 7, -1, 90, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm]),
                TYPE: "autoswarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [7, 7.5, 0.6, 7, 1, -90, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm]),
                TYPE: "autoswarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
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
// BOOSTER UPGRADES
exports.speedDemonDeco = makeDeco(0, 50);
exports.spedDemon = {
    PARENT: ["genericTank"],
    LABEL: "Speed Demon",
    BODY: {
        HEALTH: base.HEALTH * 0.4,
        SHIELD: base.SHIELD * 0.4,
        DENSITY: base.DENSITY * 0.3,
        RAGE_MULTIPLIER: 1,
    },
    DANGER: 7,
    TURRETS: [
        {
            POSITION: [9, 0, 0, 0, 360, 1],
            TYPE: "speedDemonDeco",
        },
    ],
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [18, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.flank,
                    g.tri,
                    g.trifront,
                    g.tonsmorrecoil,
                ]),
                TYPE: "bullet",
                LABEL: "Front",
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
// AUTO-3 UPGRADES
exports.auto5 = {
    PARENT: ["genericTank"],
    LABEL: "Auto-5",
    DANGER: 7,
    FACING_TYPE: "autospin",
    TURRETS: [
        {
            POSITION: [11, 8, 0, 0, 190, 0],
            TYPE: "autoTankGun",
        },
        {
            POSITION: [11, 8, 0, 72, 190, 0],
            TYPE: "autoTankGun",
        },
        {
            POSITION: [11, 8, 0, 144, 190, 0],
            TYPE: "autoTankGun",
        },
        {
            POSITION: [11, 8, 0, 216, 190, 0],
            TYPE: "autoTankGun",
        },
        {
            POSITION: [11, 8, 0, 288, 190, 0],
            TYPE: "autoTankGun",
        },
    ],
};
exports.mega3 = {
    PARENT: ["genericTank"],
    LABEL: "Mega-3",
    BODY: {
        SPEED: 0.95 * base.SPEED,
    },
    DANGER: 7,
    FACING_TYPE: "autospin",
    TURRETS: [
        {
            POSITION: [14, 8, 0, 0, 190, 0],
            TYPE: "megaAutoTankgun",
        },
        {
            POSITION: [14, 8, 0, 120, 190, 0],
            TYPE: "megaAutoTankgun",
        },
        {
            POSITION: [14, 8, 0, 240, 190, 0],
            TYPE: "megaAutoTankgun",
        },
    ],
};
exports.sniper3 = {
    PARENT: ["genericTank"],
    LABEL: "Sniper-3",
    DANGER: 7,
    BODY: {
        SPEED: 0.8 * base.SPEED,
        FOV: 1.25 * base.FOV,
    },
    FACING_TYPE: "autospin",
    TURRETS: [
        {
            POSITION: [13, 8, 0, 0, 170, 0],
            TYPE: "sniper3gun",
        },
        {
            POSITION: [13, 8, 0, 120, 170, 0],
            TYPE: "sniper3gun",
        },
        {
            POSITION: [13, 8, 0, 240, 170, 0],
            TYPE: "sniper3gun",
        },
    ],
};
exports.twin3 = {
    PARENT: ["genericTank"],
    LABEL: "Twin-3",
    DANGER: 7,
    FACING_TYPE: "autospin",
    TURRETS: [
        {
            POSITION: [11, 8, 0, 0, 170, 0],
            TYPE: "twin3gun",
        },
        {
            POSITION: [11, 8, 0, 120, 170, 0],
            TYPE: "twin3gun",
        },
        {
            POSITION: [11, 8, 0, 240, 170, 0],
            TYPE: "twin3gun",
        },
    ],
};
exports.mach3 = {
    PARENT: ["genericTank"],
    LABEL: "Machine-3",
    DANGER: 7,
    FACING_TYPE: "autospin",
    TURRETS: [
        {
            POSITION: [11, 8, 0, 0, 170, 0],
            TYPE: "machineAutoTurret",
        },
        {
            POSITION: [11, 8, 0, 120, 170, 0],
            TYPE: "machineAutoTurret",
        },
        {
            POSITION: [11, 8, 0, 240, 170, 0],
            TYPE: "machineAutoTurret",
        },
    ],
};
exports.single3 = {
    PARENT: ["genericTank"],
    LABEL: "Single-3",
    DANGER: 7,
    FACING_TYPE: "autospin",
    CONTROLLERS: ["zoom"],
    TOOLTIP: "Hold right click to zoom.",
    TURRETS: [
        {
            POSITION: [11, 8, 0, 0, 170, 0],
            TYPE: "single3gun",
        },
        {
            POSITION: [11, 8, 0, 120, 170, 0],
            TYPE: "single3gun",
        },
        {
            POSITION: [11, 8, 0, 240, 170, 0],
            TYPE: "single3gun",
        },
    ],
};
exports.auto4 = {
    PARENT: ["genericTank"],
    LABEL: "Auto-4",
    FACING_TYPE: "autospin",
    TURRETS: [
        {
            POSITION: [13, 6, 0, 45, 160, 0],
            TYPE: "auto4gun",
        },
        {
            POSITION: [13, 6, 0, 135, 160, 0],
            TYPE: "auto4gun",
        },
        {
            POSITION: [13, 6, 0, 225, 160, 0],
            TYPE: "auto4gun",
        },
        {
            POSITION: [13, 6, 0, 315, 160, 0],
            TYPE: "auto4gun",
        },
    ],
};
exports.banshee = {
    PARENT: ["genericTank"],
    LABEL: "Banshee",
    DANGER: 7,
    BODY: {
        SPEED: 0.8 * base.SPEED,
        FOV: 1.1 * base.FOV,
    },
    FACING_TYPE: "autospin",
    TURRETS: [
        {
            POSITION: [10, 8, 0, 0, 80, 0],
            TYPE: "bansheegun",
        },
        {
            POSITION: [10, 8, 0, 120, 80, 0],
            TYPE: "bansheegun",
        },
        {
            POSITION: [10, 8, 0, 240, 80, 0],
            TYPE: "bansheegun",
        },
    ],
    GUNS: [
        {
            POSITION: [6, 11, 1.2, 8, 0, 60, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                TYPE: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                WAIT_TO_CYCLE: true,
                MAX_CHILDREN: 2,
            },
        },
        {
            POSITION: [6, 11, 1.2, 8, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                TYPE: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                WAIT_TO_CYCLE: true,
                MAX_CHILDREN: 2,
            },
        },
        {
            POSITION: [6, 11, 1.2, 8, 0, 300, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                TYPE: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                WAIT_TO_CYCLE: true,
                MAX_CHILDREN: 2,
            },
        },
    ],
};
exports.autoTank = {
    PARENT: ["genericTank"],
    LABEL: "Auto-Tank",
    TOOLTIP: "You can actually turn to aim.",
    TURRETS: [
        {
            POSITION: [11, 8, 0, 0, 190, 0],
            TYPE: "autoTankGun",
        },
        {
            POSITION: [11, 8, 0, 90, 190, 0],
            TYPE: "autoTankGun",
        },
        {
            POSITION: [11, 8, 0, 180, 190, 0],
            TYPE: "autoTankGun",
        },
        {
            POSITION: [11, 8, 0, 270, 190, 0],
            TYPE: "autoTankGun",
        },
    ],
};

exports.crowbar = {
    PARENT: ["genericTank"],
    DANGER: 7,
    LABEL: "Crowbar",
    BODY: {
        SPEED: base.SPEED * 0.9,
        FOV: base.FOV * 1.4,
    },
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [37, 6.5, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [5, 8.5, -1.5, 8, 0, 0, 0],
        },
    ],
    TURRETS: [
        {
            /*    SIZE         X             Y         ANGLE        ARC */
            POSITION: [6, 38, 0, 0, 360, 1],
            TYPE: [ "crowbarAutoTankGun", { INDEPENDENT: true, }, ],
        },
        {
            POSITION: [6, 28, 0, 0, 360, 1],
            TYPE: [ "crowbarAutoTankGun", { INDEPENDENT: true, }, ],
        },
        {
            POSITION: [6, 18, 0, 0, 360, 1],
            TYPE: [ "crowbarAutoTankGun", { INDEPENDENT: true, }, ],
        },
    ],
};
exports.mecha = {
    PARENT: ["genericTank"],
    LABEL: 'Mecha',
    DANGER: 7,
    HAS_NO_RECOIL: true,
    BODY: {
        FOV: 1.1
    },
    TURRETS: [{
        POSITION: [15, 0, 12, 0, 90, 0],
        TYPE: "mechagun",
    },{
        POSITION: [15, 0, -12, 0, 90, 0],
        TYPE:"mechagun",
    }]
};
// AUTO-4 UPGRADES
exports.batter4 = {
    PARENT: ["genericTank"],
    LABEL: "Batter-4",
    FACING_TYPE: "autospin",
    TURRETS: [
        {
            POSITION: [13, 6, 0, 45, 160, 0],
            TYPE: "batterauto4gun",
        },
        {
            POSITION: [13, 6, 0, 135, 160, 0],
            TYPE: "batterauto4gun",
        },
        {
            POSITION: [13, 6, 0, 225, 160, 0],
            TYPE: "batterauto4gun",
        },
        {
            POSITION: [13, 6, 0, 315, 160, 0],
            TYPE: "batterauto4gun",
        },
    ],
};
exports.swarm4 = {
    PARENT: ["genericTank"],
    LABEL: "Swarm-4",
    DANGER: 7,
    FACING_TYPE: "autospin",
    TURRETS: [
        {
            POSITION: [13, 6, 0, 45, 160, 0],
            TYPE: "swarmauto4gun",
        },
        {
            POSITION: [13, 6, 0, 135, 160, 0],
            TYPE: "swarmauto4gun",
        },
        {
            POSITION: [13, 6, 0, 225, 160, 0],
            TYPE: "swarmauto4gun",
        },
        {
            POSITION: [13, 6, 0, 315, 160, 0],
            TYPE: "swarmauto4gun",
        },
    ],
};
//TWIN-3 UPGRADES
// ARMS RACE MECHA UPGRADES
exports.miniEliteGunner = {
    PARENT: ["genericTank"],
    LABEL: 'Prime Gunner',
    DANGER: 7,
    HAS_NO_RECOIL: true,
    SHAPE: 3,
    SIZE: 15,
    BODY: {
        SPEED: base.SPEED * 0.8,
        FOV: 1.15,
    },
    TURRETS: [{
        POSITION: [12, 8, 0, 60, 180, 0],
        TYPE: "mechagun",
    },{
        POSITION: [12, 8, 0, -60, 180, 0],
        TYPE:"mechagun",
    }],
    GUNS: [
        {
            POSITION: [5, 11, 1, 8.5, 0, 180, 0],
        },
        {
            POSITION: [3, 14, 1, 13.5, 0, 180, 0],
        },
        {
            POSITION: [2, 14, 1.3, 16, 0, 180, 0],
            PROPERTIES: {
                MAX_CHILDREN: 6,
                SHOOT_SETTINGS: combineStats([g.trap, g.block, g.flank]),
                TYPE: "pillbox",
                SYNCS_SKILLS: true,
                DESTROY_OLDEST_CHILD: true,
            },
        },
        {
            POSITION: [4, 14, 1, 6, 0, 180, 0],
        },
    ],
};
// CROWBAR UPGRADES
exports.wrench = {
    PARENT: ["genericTank"],
    DANGER: 7,
    LABEL: "Wrench",
    BODY: {
        SPEED: base.SPEED * 0.85,
        FOV: base.FOV * 1.4,
    },
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [63, 6.5, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [5, 8.5, -1.5, 8, 0, 0, 0],
        },
    ],
    TURRETS: [
        {
            /*    SIZE         X             Y         ANGLE        ARC */
            POSITION: [6, 63, 0, 0, 360, 1],
            TYPE: [ "crowbarAutoTankGun", { INDEPENDENT: true, }, ],
        },
        {
            POSITION: [6, 53, 0, 0, 360, 1],
            TYPE: [ "crowbarAutoTankGun", { INDEPENDENT: true, }, ],
        },
        {
            POSITION: [6, 43, 0, 0, 360, 1],
            TYPE: [ "crowbarAutoTankGun", { INDEPENDENT: true, }, ],
        },
    ],
};
// DIRECTOR UPGRADES
exports.overseer = {
    PARENT: ["genericTank"],
    LABEL: "Overseer",
    DANGER: 6,
    STAT_NAMES: statnames.drone,
    BODY: {
        SPEED: 0.9 * base.SPEED,
        FOV: 1.1 * base.FOV,
    },
    MAX_CHILDREN: 8,
    GUNS: [
        {
            POSITION: [6, 12, 1.2, 8, 0, 90, 0],
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
            POSITION: [6, 12, 1.2, 8, 0, 270, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                TYPE: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                WAIT_TO_CYCLE: true,
            },
        },
    ],
};
exports.cruiser = {
    PARENT: ["genericTank"],
    LABEL: "Cruiser",
    DANGER: 6,
    FACING_TYPE: "locksFacing",
    STAT_NAMES: statnames.swarm,
    BODY: {
        FOV: 1.2 * base.FOV,
    },
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
exports.underseer = {
    PARENT: ["genericTank"],
    LABEL: "Underseer",
    DANGER: 6,
    STAT_NAMES: statnames.drone,
    BODY: {
        SPEED: 0.9 * base.SPEED,
    },
    SHAPE: 4,
    MAX_CHILDREN: 14,
    GUNS: [
        {
            POSITION: [5.25, 12, 1.2, 8, 0, 90, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
                TYPE: "sunchip",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.necro,
            },
        },
        {
            POSITION: [5.25, 12, 1.2, 8, 0, 270, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
                TYPE: "sunchip",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.necro,
            },
        },
    ],
};
exports.spawner = {
    PARENT: ["genericTank"],
    LABEL: "Spawner",
    DANGER: 6,
    STAT_NAMES: statnames.drone,
    BODY: {
        SPEED: base.SPEED * 0.8,
        FOV: 1.1,
    },
    GUNS: [
        {
            /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [4.5, 10, 1, 10.5, 0, 0, 0],
        },
        {
            POSITION: [1, 12, 1, 15, 0, 0, 0],
            PROPERTIES: {
                MAX_CHILDREN: 4,
                SHOOT_SETTINGS: combineStats([g.factory, g.babyfactory]),
                TYPE: "minion",
                STAT_CALCULATOR: gunCalcNames.drone,
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
            },
        },
        {
            POSITION: [11.5, 12, 1, 0, 0, 0, 0],
        },
    ],
};
exports.manager = {
    PARENT: ["genericTank"],
    LABEL: "Manager",
    DANGER: 7,
    STAT_NAMES: statnames.drone,
    BODY: {
        SPEED: 0.85 * base.SPEED,
        FOV: 1.1 * base.FOV,
    },
    INVISIBLE: [0.08, 0.03],
    TOOLTIP: "Stay still to turn invisible.",
    MAX_CHILDREN: 8,
    GUNS: [
        {
            POSITION: [6, 12, 1.2, 8, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over, g.doublereload]),
                TYPE: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
            },
        },
    ],
};

exports.honcho = {
    PARENT: ["genericTank"],
    LABEL: "Honcho",
    STAT_NAMES: statnames.drone,
    DANGER: 6,
    BODY: {
        FOV: base.FOV * 1.1,
    },
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [13, 14, 1.3, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.mehdrone]),
                TYPE: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                MAX_CHILDREN: 3,
            },
        },
    ],
};
exports.turretedDrone = makeAuto(generics.drone);
exports.trapTurretedDrone = makeAuto(generics.drone, "Auto-Drone", {type: "trapTurret"});
exports.swarmDrone = {
    PARENT: ["drone"],
    GUNS: [
        {
            POSITION: [7, 14, 0.6, 7, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.lowpower]),
                TYPE: "autoswarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
    ],
};
exports.overdriveDeco = makeDeco(4);
exports.directordrive = {
    PARENT: ["genericTank"],
    LABEL: "Directordrive",
    STAT_NAMES: statnames.drone,
    DANGER: 6,
    BODY: {
        FOV: base.FOV * 1.1,
    },
    TURRETS: [
        {
            POSITION: [9, 0, 0, 0, 360, 1],
            TYPE: "overdriveDeco",
        },
    ],
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [6, 11, 1.3, 7, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                TYPE: "turretedDrone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                MAX_CHILDREN: 5,
            },
        },
    ],
};
// DIRECTORDRIVE UPGRADES
exports.turretedMinion = makeAuto(exports.minion);
exports.spawnerdrive = {
    PARENT: ["genericTank"],
    LABEL: "Spawnerdrive",
    DANGER: 7,
    STAT_NAMES: statnames.drone,
    BODY: {
        SPEED: base.SPEED * 0.8,
        FOV: 1.1,
    },
    TURRETS: [
        {
            /** SIZE         X             Y         ANGLE        ARC */
            POSITION: [9, 0, 0, 0, 360, 1],
            TYPE: "overdriveDeco",
        },
    ],
    GUNS: [
        {
            /**** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [4.5, 10, 1, 10.5, 0, 0, 0],
        },
        {
            POSITION: [1, 12, 1, 15, 0, 0, 0],
            PROPERTIES: {
                MAX_CHILDREN: 4,
                SHOOT_SETTINGS: combineStats([g.factory, g.babyfactory]),
                TYPE: "turretedMinion",
                STAT_CALCULATOR: gunCalcNames.drone,
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
            },
        },
        {
            POSITION: [11.5, 12, 1, 0, 0, 0, 0],
        },
    ],
};
// AUTODRIVE UPGRADES
exports.miniEliteSpawner = {
    PARENT: ["genericTank"],
    LABEL: "Prime Spawner",
    FACING_TYPE: "autospin",
    STAT_NAMES: statnames.drone,
    SHAPE: 3.5,
    SIZE: 15,
    DANGER: 7,
    BODY: {
        SPEED: base.SPEED * 0.8,
        FOV: base.FOV * 1.15,
    },
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [8, 15, 1.2, 3.5, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                TYPE: "turretedDrone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                MAX_CHILDREN: 2,
                STAT_CALCULATOR: gunCalcNames.drone,
            },
        },
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [8, 15, 1.2, 3.5, 0, 120, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                TYPE: "trapTurretedDrone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                MAX_CHILDREN: 2,
                STAT_CALCULATOR: gunCalcNames.drone,
            },
        },
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [8, 15, 1.2, 3.5, 0, 240, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                TYPE: "swarmDrone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                MAX_CHILDREN: 2,
                STAT_CALCULATOR: gunCalcNames.drone,
            },
        },
    ],
    TURRETS: [
        {
            POSITION: [11, 0, 0, 0, 360, 1],
            TYPE: "auto4gun",
        },
    ],
};
// HONCHO UPGRADES
exports.bigCheese = {
    PARENT: ["genericTank"],
    LABEL: "Big Cheese",
    STAT_NAMES: statnames.drone,
    DANGER: 7,
    BODY: {
        FOV: base.FOV * 1.1,
    },
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [16, 16, 1.4, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.bigdrone]),
                TYPE: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                MAX_CHILDREN: 1,
            },
        },
    ],
};
exports.ventilator = {
    PARENT: ["genericTank"],
    LABEL: "Ventilator",
    STAT_NAMES: statnames.drone,
    BODY: {
        FOV: base.FOV * 1.1,
    },
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [14, 15, 0.6, 7, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.ventilator]),
                TYPE: "repeldrone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                MAX_CHILDREN: 4,
            },
        },
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [10.5, 11.25, 0.6, 7, 0, 0, 0],
            PROPERTIES: {
                COLOR: 76,
            },
        },
    ],
};
// OVERSEER UPGRADES
exports.overlord = {
    PARENT: ["genericTank"],
    LABEL: "Overlord",
    DANGER: 7,
    STAT_NAMES: statnames.drone,
    BODY: {
        SPEED: 0.8 * base.SPEED,
        FOV: 1.1 * base.FOV,
    },
    MAX_CHILDREN: 8,
    GUNS: [
        {
            POSITION: [6, 12, 1.2, 8, 0, 90, 0],
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
            POSITION: [6, 12, 1.2, 8, 0, 180, 0],
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
            POSITION: [6, 12, 1.2, 8, 0, 270, 0],
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
            POSITION: [6, 12, 1.2, 8, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                TYPE: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                WAIT_TO_CYCLE: true,
            },
        },
    ],
};
exports.autoOverseer = makeAuto(exports.overseer);
exports.overdrive = {
    PARENT: ["genericTank"],
    LABEL: "Overdrive",
    DANGER: 7,
    STAT_NAMES: statnames.drone,
    BODY: {
        SPEED: 0.9 * base.SPEED,
        FOV: 1.1 * base.FOV,
    },
    TURRETS: [
        {
            POSITION: [9, 0, 0, 0, 360, 1],
            TYPE: "overdriveDeco",
        },
    ],
    GUNS: [
        {
            POSITION: [6, 12, 1.2, 8, 0, 90, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                TYPE: "turretedDrone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                WAIT_TO_CYCLE: true,
                MAX_CHILDREN: 4,
            },
        },
        {
            POSITION: [6, 12, 1.2, 8, 0, 270, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                TYPE: "turretedDrone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                WAIT_TO_CYCLE: true,
                MAX_CHILDREN: 4,
            },
        },
    ],
};
exports.commander = {
    PARENT: ["genericTank"],
    LABEL: "Commander",
    STAT_NAMES: statnames.drone,
    DANGER: 7,
    BODY: {
        FOV: base.FOV * 1.15,
    },
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [8, 11, 1.3, 6, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.commander]),
                TYPE: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                MAX_CHILDREN: 2,
                STAT_CALCULATOR: gunCalcNames.drone,
            },
        },
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [8, 11, 1.3, 6, 0, 120, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.commander]),
                TYPE: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                MAX_CHILDREN: 2,
                STAT_CALCULATOR: gunCalcNames.drone,
            },
        },
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [8, 11, 1.3, 6, 0, 240, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.commander]),
                TYPE: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                MAX_CHILDREN: 2,
                STAT_CALCULATOR: gunCalcNames.drone,
            },
        },
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [7, 7.5, 0.6, 7, 0, 60, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm]),
                TYPE: "swarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [7, 7.5, 0.6, 7, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm]),
                TYPE: "swarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [7, 7.5, 0.6, 7, 0, 300, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm]),
                TYPE: "swarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
    ],
};
// DIRECTORDRIVE UPRADES

exports.honchodrive = {
    PARENT: ["genericTank"],
    LABEL: "Honchodrive",
    DANGER: 7,
    STAT_NAMES: statnames.drone,
    BODY: {
        FOV: base.FOV * 1.1,
    },
    TURRETS: [
        {
            POSITION: [9, 0, 0, 0, 360, 1],
            TYPE: "overdriveDeco",
        },
    ],
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [13, 14, 1.3, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.mehdrone]),
                TYPE: "turretedDrone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                MAX_CHILDREN: 3,
            },
        },
    ],
};
// OVERDRIVE UPGRADES

exports.overworker = {
    PARENT: ["genericTank"],
    LABEL: "Overworker",
    DANGER: 7,
    STAT_NAMES: statnames.drone,
    BODY: {
        SPEED: 0.8 * base.SPEED,
        FOV: 1.1 * base.FOV,
    },
    TURRETS: [
        {
            POSITION: [9, 0, 0, 0, 360, 1],
            TYPE: "overdriveDeco",
        },
    ],
    GUNS: [
        {
            POSITION: [6, 12, 1.2, 8, 0, 90, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                TYPE: "turretedDrone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                WAIT_TO_CYCLE: true,
            },
        },
        {
            POSITION: [6, 12, 1.2, 8, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                TYPE: "turretedDrone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                WAIT_TO_CYCLE: true,
            },
        },
        {
            POSITION: [6, 12, 1.2, 8, 0, 270, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                TYPE: "turretedDrone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                WAIT_TO_CYCLE: true,
            },
        },
        {
            POSITION: [6, 12, 1.2, 8, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                TYPE: "turretedDrone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                WAIT_TO_CYCLE: true,
            },
        },
    ],
};
exports.autodrive = {
    PARENT: ["genericTank"],
    LABEL: "Auto-Overdrive",
    DANGER: 7,
    STAT_NAMES: statnames.drone,
    BODY: {
        SPEED: 0.9 * base.SPEED,
        FOV: 1.1 * base.FOV,
    },
    TURRETS: [
        {
            POSITION: [9, 0, 0, 0, 360, 1],
            TYPE: ["squareAutoTankGun", { INDEPENDENT: true }],
        },
    ],
    GUNS: [
        {
            POSITION: [6, 12, 1.2, 8, 0, 90, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                TYPE: "turretedDrone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                WAIT_TO_CYCLE: true,
                MAX_CHILDREN: 4,
            },
        },
        {
            POSITION: [6, 12, 1.2, 8, 0, 270, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                TYPE: "turretedDrone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                WAIT_TO_CYCLE: true,
                MAX_CHILDREN: 4,
            },
        },
    ],
};
// CRUISER UPGRADES
exports.carrier = {
    PARENT: ["genericTank"],
    LABEL: "Carrier",
    DANGER: 7,
    STAT_NAMES: statnames.swarm,
    FACING_TYPE: "locksFacing",
    BODY: {
        FOV: base.FOV * 1.2,
    },
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [7, 8, 0.6, 7, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier]),
                TYPE: "swarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [7, 8, 0.6, 7, 2, 30, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier]),
                TYPE: "swarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [7, 8, 0.6, 7, -2, -30, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier]),
                TYPE: "swarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
    ],
};
exports.battleship = {
    PARENT: ["genericTank"],
    LABEL: "Battleship",
    DANGER: 7,
    STAT_NAMES: statnames.swarm,
    FACING_TYPE: "locksFacing",
    BODY: {
        FOV: 1.2 * base.FOV,
    },
    GUNS: [
        {
            POSITION: [7, 7.5, 0.6, 7, 4, 90, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
                TYPE: "swarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
                LABEL: "Guided",
            },
        },
        {
            POSITION: [7, 7.5, 0.6, 7, -4, 90, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm]),
                TYPE: ["autoswarm"],
                STAT_CALCULATOR: gunCalcNames.swarm,
                LABEL: "Autonomous",
            },
        },
        {
            POSITION: [7, 7.5, 0.6, 7, 4, 270, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm]),
                TYPE: ["autoswarm"],
                STAT_CALCULATOR: gunCalcNames.swarm,
                LABEL: "Autonomous",
            },
        },
        {
            POSITION: [7, 7.5, 0.6, 7, -4, 270, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
                TYPE: "swarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
                LABEL: "Guided",
            },
        },
    ],
};
exports.fortress = {
    PARENT: ["genericTank"],
    LABEL: "Fortress",
    DANGER: 7,
    STAT_NAMES: statnames.generic,
    BODY: {
        SPEED: 0.8 * base.SPEED,
        FOV: 1.2 * base.FOV,
    },
    GUNS: [
        {
            POSITION: [7, 7.5, 0.6, 7, 0, 60, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm]),
                TYPE: [
                    "swarm",
                    {
                        CONTROLLERS: ["canRepel"],
                    },
                ],
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [7, 7.5, 0.6, 7, 0, 180, 1 / 3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm]),
                TYPE: [
                    "swarm",
                    {
                        CONTROLLERS: ["canRepel"],
                    },
                ],
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [7, 7.5, 0.6, 7, 0, 300, 2 / 3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm]),
                TYPE: [
                    "swarm",
                    {
                        CONTROLLERS: ["canRepel"],
                    },
                ],
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
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
};
exports.autoCruiser = makeAuto(exports.cruiser);

// UNDERSEER UPGRADES
exports.necromancer = {
    PARENT: ["genericTank"],
    LABEL: "Necromancer",
    DANGER: 7,
    STAT_NAMES: statnames.necro,
    BODY: {
        SPEED: 0.8 * base.SPEED,
    },
    SHAPE: 4,
    MAX_CHILDREN: 14,
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [5.25, 12, 1.2, 8, 0, 90, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
                TYPE: "sunchip",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.necro,
            },
        },
        {
            POSITION: [5.25, 12, 1.2, 8, 0, 270, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
                TYPE: "sunchip",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.necro,
            },
        },
        {
            POSITION: [5.25, 12, 1.2, 8, 0, 0, 0.25],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
                TYPE: "sunchip",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                MAX_CHILDREN: 4,
                STAT_CALCULATOR: gunCalcNames.necro,
            },
        },
        {
            POSITION: [5.25, 12, 1.2, 8, 0, 180, 0.75],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
                TYPE: "sunchip",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                MAX_CHILDREN: 4,
                STAT_CALCULATOR: gunCalcNames.necro,
            },
        },
    ],
};
exports.maleficitor = {
    PARENT: ["genericTank"],
    LABEL: "Maleficitor",
    DANGER: 7,
    TOOLTIP: "Press R and wait to turn your drones invisible.",
    STAT_NAMES: statnames.necro,
    BODY: {
        SPEED: base.SPEED * 0.85,
    },
    SHAPE: 4,
    MAX_CHILDREN: 20,
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [5.25, 12, 1.2, 8, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.sunchip, g.maleficitor]),
                TYPE: [
                    "sunchip",
                    {
                        INVISIBLE: [0.06, 0.03],
                    },
                ],
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.necro,
            },
        },
    ],
};
exports.infestor = {
    PARENT: ["genericTank"],
    LABEL: "Infestor",
    DANGER: 7,
    STAT_NAMES: statnames.drone,
    BODY: {
        SPEED: base.SPEED * 0.9,
    },
    MAX_CHILDREN: 20,
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [7.25, 6, 1.2, 6, -5, 90, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
                TYPE: "eggchip",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.necro,
            },
        },
        {
            POSITION: [7.25, 6, 1.2, 6, 5, 90, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
                TYPE: "eggchip",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.necro,
            },
        },
        {
            POSITION: [7.25, 6, 1.2, 6, -5, 270, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
                TYPE: "eggchip",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.necro,
            },
        },
        {
            POSITION: [7.25, 6, 1.2, 6, 5, 270, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
                TYPE: "eggchip",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.necro,
            },
        },
    ],
};

// SPAWNER UPGRADES
exports.factory = {
    PARENT: ["genericTank"],
    LABEL: "Factory",
    DANGER: 7,
    STAT_NAMES: statnames.drone,
    BODY: {
        SPEED: base.SPEED * 0.8,
        FOV: 1.1,
    },
    MAX_CHILDREN: 6,
    GUNS: [
        {
            /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [5, 11, 1, 10.5, 0, 0, 0],
        },
        {
            POSITION: [2, 14, 1, 15.5, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.factory]),
                TYPE: "minion",
                STAT_CALCULATOR: gunCalcNames.drone,
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
            },
        },
        {
            POSITION: [12, 14, 1, 0, 0, 0, 0],
        },
    ],
};
exports.megaSpawner = {
    PARENT: ["genericTank"],
    LABEL: "Mega Spawner",
    DANGER: 7,
    STAT_NAMES: statnames.drone,
    BODY: {
        SPEED: base.SPEED * 0.6,
        FOV: 1.15,
    },
    GUNS: [
        {
            /**** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [4.5, 14, 1, 10.5, 0, 0, 0],
        },
        {
            POSITION: [1, 16, 1, 15, 0, 0, 0],
            PROPERTIES: {
                MAX_CHILDREN: 4,
                SHOOT_SETTINGS: combineStats([g.factory, g.babyfactory]),
                TYPE: "megaMinion",
                STAT_CALCULATOR: gunCalcNames.drone,
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
            },
        },
        {
            POSITION: [11.5, 16, 1, 0, 0, 0, 0],
        },
    ],
};

exports.software = {
    PARENT: ["genericTank"],
    LABEL: "Software",
    DANGER: 7,
    STAT_NAMES: statnames.drone,
    BODY: {
        FOV: 1.1,
    },
    SHAPE: 8,
    GUNS: [
        {
            /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [5, 11, 1, 10.5, 0, 180, 0],
        },
        {
            POSITION: [2, 14, 1, 15.5, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.factory]),
                TYPE: "squareGunMinion",
                STAT_CALCULATOR: gunCalcNames.drone,
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                MAX_CHILDREN: 1,
            },
        },
        {
            POSITION: [12, 14, 1, 0, 0, 180, 0],
        },
        {
            POSITION: [19, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.single]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [5.5, 8, -1.8, 6.5, 0, 0, 0],
        },
    ],
};
exports.autoSpawner = makeAuto(exports.spawner);

// SOFTWARE UPGRADES
exports.stuxnet = {
    PARENT: ["genericTank"],
    LABEL: "Stuxnet",
    DANGER: 7,
    STAT_NAMES: statnames.drone,
    BODY: {
        FOV: 1.1,
    },
    SHAPE: 8,
    GUNS: [
        {
            /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [5, 11, 1, 10.5, 0, 180, 0],
        },
        {
            POSITION: [2, 14, 1, 15.5, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.factory]),
                TYPE: "stuxnetMinion",
                STAT_CALCULATOR: gunCalcNames.drone,
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                MAX_CHILDREN: 1,
            },
        },
        {
            POSITION: [12, 14, 1, 0, 0, 180, 0],
        },
        {
            POSITION: [24, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.single, g.sniper]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [5.5, 8, -1.8, 6.5, 0, 0, 0],
        },
    ],
};
// POUNDER UPGRADES
exports.destroyer = {
    PARENT: ["genericTank"],
    LABEL: "Destroyer",
    DANGER: 6,
    GUNS: [
        {
            POSITION: [21, 14, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.artillery = {
    PARENT: ["genericTank"],
    DANGER: 6,
    LABEL: "Artillery",
    GUNS: [
        {
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
    ],
};
exports.launcher = {
    PARENT: ["genericTank"],
    LABEL: "Launcher",
    BODY: {
        FOV: base.FOV * 1.1,
    },
    DANGER: 6,
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
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
exports.eagle = {
    PARENT: ["genericTank"],
    LABEL: "Eagle",
    DANGER: 7,
    TOOLTIP: "Right click to fire your main barrel.",
    GUNS: [
        {
            POSITION: [20, 12, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound]),
                TYPE: "bullet",
                LABEL: "Pounder",
                ALT_FIRE: true,
            },
        },
        {
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
            },
        },
        {
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
            },
        },
        {
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
            },
        },
    ],
};
exports.multishot = {
    PARENT: ["genericTank"],
    LABEL: 'Multishot',
    DANGER: 6,
    BODY: {
        FOV: 1.05
    },
    GUNS: [{
        POSITION: [4, 3, 1, 11, -3, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, {reload: 0.8}]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [4, 3, 1, 11, 3, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, {reload: 0.8}]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [4, 4, 1, 13, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, {reload: 0.8}]),
            TYPE: "casing"
        }
    }, {
        POSITION: [1, 4, 1, 12, -1, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, {reload: 0.8}]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [1, 4, 1, 11, 1, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, {reload: 0.8}]),
            TYPE: "casing"
        }
    }, {
        POSITION: [1, 3, 1, 13, -1, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, {reload: 0.8}]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [15, 12, 1, 6, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.fake, {reload: 0.8}]),
            TYPE: "casing"
        }
    }, {
        POSITION: [8, 12, -1.3, 4, 0, 0, 0]
    }]
};
// MULTISHOT UPGRADES
exports.shotgun = {
    PARENT: ["genericTank"],
    DANGER: 7,
    LABEL: "Shotgun",
    GUNS: [
        {
            POSITION: [4, 3, 1, 11, -3, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [4, 3, 1, 11, 3, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [4, 4, 1, 13, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                TYPE: "casing",
            },
        },
        {
            POSITION: [1, 4, 1, 12, -1, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                TYPE: "casing",
            },
        },
        {
            POSITION: [1, 4, 1, 11, 1, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                TYPE: "casing",
            },
        },
        {
            POSITION: [1, 3, 1, 13, -1, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [1, 3, 1, 13, 1, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [1, 2, 1, 13, 2, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                TYPE: "casing",
            },
        },
        {
            POSITION: [1, 2, 1, 13, -2, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                TYPE: "casing",
            },
        },
        {
            POSITION: [15, 14, 1, 6, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.fake]),
                TYPE: "casing",
            },
        },
        {
            POSITION: [8, 14, -1.3, 4, 0, 0, 0],
        },
    ],
};
exports.buckshot = {
    PARENT: ["genericTank"],
    LABEL: 'Buckshot',
    DANGER: 7,
    BODY: {
        FOV: 1.05
    },
    GUNS: [{
        POSITION: [4, 3, 1, 11, -3, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.sniper, {reload: 0.8}]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [4, 3, 1, 11, 3, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.sniper, {reload: 0.8}]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [4, 4, 1, 13, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.sniper, {reload: 0.8}]),
            TYPE: "casing"
        }
    }, {
        POSITION: [1, 4, 1, 12, -1, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.sniper, {reload: 0.8}]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [1, 4, 1, 11, 1, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.sniper, {reload: 0.8}]),
            TYPE: "casing"
        }
    }, {
        POSITION: [1, 3, 1, 13, -1, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.sniper, {reload: 0.8}]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [18, 12, 1, 6, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.sniper, g.fake]),
            TYPE: "casing"
        }
    }, {
        POSITION: [2, 14, 1.01, 24, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.sniper, g.fake]),
            TYPE: "casing"
        }
    }, {
        POSITION: [8, 12, -1.3, 4, 0, 0, 0]
    }]
};
// BUCKSHOT UPGRADES
exports.shellyTank = {
    PARENT: ["genericTank"],
    LABEL: 'Shellcrusher',
    TOOLTIP: "Hold right click to shoot powerful shell.",
    DANGER: 7,
    BODY: {
        FOV: 1.15,
    },
    GUNS: [{
        POSITION: [1, 3, 1, 15.25, 16, -36, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.sniper, g.noRandom, {reload: 0.8}]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [1, 3, 1, 15.25, -16, 36, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.sniper, g.noRandom, {reload: 0.8}]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [1, 3, 1, 15.5, 12, -27, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.sniper, g.noRandom, {reload: 0.8}]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [1, 3, 1, 15.5, -12, 27, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.sniper, g.noRandom, {reload: 0.8}]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [1, 4, 1, 15.5, -8, 18, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.sniper, g.noRandom, {reload: 0.8}]),
            TYPE: "casing"
        }
    }, {
        POSITION: [1, 4, 1, 15.5, 8, -18, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.sniper, g.noRandom, {reload: 0.8}]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [1, 4, 1, 15.75, -4, 9, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.sniper, g.noRandom, {reload: 0.8}]),
            TYPE: "casing"
        }
    }, {
        POSITION: [1, 3, 1, 15.75, 4, -9, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.sniper, g.noRandom, {reload: 0.8}]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [1, 3, 1, 16, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.sniper, g.noRandom, {reload: 0.8}]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [1, 3, 1, 15.25, 16, -36, 0.1],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.noRandom, g.superpower, {reload: 8, size: 1.5}]),
            TYPE: "shellyBullet",
            ALT_FIRE: true,
        }
    }, {
        POSITION: [1, 3, 1, 15.25, -16, 36, 0.1],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.noRandom, g.superpower, {reload: 8, size: 1.5}]),
            TYPE: "shellyBullet",
            ALT_FIRE: true,
        }
    }, {
        POSITION: [1, 3, 1, 15.5, 12, -27, 0.1],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.noRandom, g.superpower, {reload: 8, size: 1.5}]),
            TYPE: "shellyBullet",
            ALT_FIRE: true,
        }
    }, {
        POSITION: [1, 3, 1, 15.5, -12, 27, 0.1],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.noRandom, g.superpower, {reload: 8, size: 1.5}]),
            TYPE: "shellyBullet",
            ALT_FIRE: true,
        }
    }, {
        POSITION: [1, 4, 1, 15.5, -8, 18, 0.1],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.noRandom, g.superpower, {reload: 8, size: 1.5}]),
            TYPE: "shellyBullet",
            ALT_FIRE: true,
        }
    }, {
        POSITION: [1, 4, 1, 15.5, 8, -18, 0.1],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.noRandom, g.superpower, {reload: 8, size: 1.5}]),
            TYPE: "shellyBullet",
            ALT_FIRE: true,
        }
    }, {
        POSITION: [1, 4, 1, 15.75, -4, 9, 0.1],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.noRandom, g.superpower, {reload: 8, size: 1.5}]),
            TYPE: "shellyBullet",
            ALT_FIRE: true,
        }
    }, {
        POSITION: [1, 3, 1, 15.75, 4, -9, 0.1],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.noRandom, g.superpower, {reload: 8, size: 1.5}]),
            TYPE: "shellyBullet",
            ALT_FIRE: true,
        }
    }, {
        POSITION: [1, 3, 1, 16, 0, 0, 0.1],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.noRandom, g.superpower, {reload: 8, size: 1.5}]),
            TYPE: "shellyBullet",
            ALT_FIRE: true,
        }
    }, {
        POSITION: [6, 10, 1, 12, 0, 0, 0]
    }, {
        POSITION: [8, 10, -0.7, 4, 0, 0, 0]
    }, {
        POSITION: [8, 12, 1, 16, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.sniper, g.fake, {reload: 0.8}]),
            TYPE: "casing",
        }
    }, {
        POSITION: [2, 13, 1.01, 24, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.sniper, g.fake, {reload: 0.8}]),
            TYPE: "casing"
        }
    }, ]
};
exports.weirdShellyHair = {
    SHAPE: "M -1.0625 0.0266 C -1.0625 0.0244 -1.0625 0.0234 -1.0625 0.0213 C -1.0625 -0.0234 -1.0625 -0.0489 -1.0593 -0.0744 C -1.0593 -0.0765 -1.0593 -0.0797 -1.0582 -0.0818 C -1.0497 -0.1626 -1.0274 -0.2433 -0.9924 -0.3166 C -0.9807 -0.34 -0.9701 -0.3602 -0.9584 -0.3793 C -0.9573 -0.3814 -0.9563 -0.3825 -0.9552 -0.3846 C -0.9382 -0.4123 -0.918 -0.4399 -0.8957 -0.4643 C -0.8819 -0.4803 -0.8734 -0.4888 -0.8649 -0.4973 C -0.8638 -0.4983 -0.8628 -0.4994 -0.8617 -0.5004 C -0.8362 -0.5238 -0.8309 -0.5281 -0.8256 -0.5323 C -0.8107 -0.544 -0.8001 -0.5525 -0.7873 -0.5589 C -0.7522 -0.5801 -0.7491 -0.5812 -0.7459 -0.5833 C -0.7384 -0.5876 -0.7342 -0.5908 -0.7321 -0.5992 C -0.7299 -0.6056 -0.7289 -0.6077 -0.7289 -0.6099 C -0.7246 -0.6205 -0.7214 -0.6279 -0.7172 -0.6364 C -0.697 -0.6768 -0.6726 -0.7129 -0.6439 -0.7459 C -0.6417 -0.7491 -0.6396 -0.7522 -0.6375 -0.7544 C -0.6258 -0.7682 -0.6131 -0.7809 -0.6003 -0.7937 C -0.5769 -0.8171 -0.5769 -0.8171 -0.5716 -0.8224 C -0.5599 -0.8319 -0.5546 -0.8362 -0.5504 -0.8404 C -0.5323 -0.8553 -0.5206 -0.8628 -0.51 -0.8712 C -0.5089 -0.8723 -0.5068 -0.8734 -0.5057 -0.8744 C -0.4505 -0.9148 -0.3889 -0.9456 -0.3241 -0.9669 C -0.3187 -0.969 -0.3145 -0.9711 -0.3092 -0.9722 C -0.2529 -0.9924 -0.1955 -1.0062 -0.136 -1.0126 C -0.1052 -1.0168 -0.0765 -1.0179 -0.0478 -1.0179 C -0.0457 -1.0179 -0.0425 -1.0179 -0.0404 -1.0179 C -0.0159 -1.0168 0.0096 -1.0168 0.034 -1.0136 C 0.0361 -1.0136 0.0393 -1.0136 0.0414 -1.0136 C 0.1307 -1.003 0.2189 -0.9796 0.306 -0.9329 C 0.3017 -0.9233 0.2933 -0.9169 0.2869 -0.9095 C 0.1966 -0.8203 0.1923 -0.816 0.1891 -0.8117 C 0.1838 -0.8064 0.1796 -0.8022 0.1743 -0.7969 C 0.0903 -0.7129 0.0893 -0.7119 0.0871 -0.7097 C 0.0829 -0.7055 0.0786 -0.7013 0.0744 -0.6959 C 0.0701 -0.6917 0.0659 -0.6874 0.0627 -0.6832 C -0.0213 -0.6003 -0.0223 -0.5992 -0.0244 -0.5971 C -0.0276 -0.5939 -0.0319 -0.5897 -0.0351 -0.5854 C -0.0393 -0.5801 -0.0446 -0.5759 -0.0489 -0.5706 C -0.1328 -0.4877 -0.1339 -0.4866 -0.136 -0.4845 C -0.1413 -0.4792 -0.1456 -0.4739 -0.1509 -0.4686 C -0.1477 -0.4654 -0.1445 -0.4611 -0.1413 -0.4579 C -0.1307 -0.4452 -0.1201 -0.4324 -0.1105 -0.4186 C -0.1094 -0.4165 -0.1084 -0.4154 -0.1073 -0.4133 C -0.0669 -0.3506 -0.0606 -0.3421 -0.0553 -0.3326 C -0.0351 -0.3028 -0.0351 -0.3017 -0.034 -0.3017 C -0.0319 -0.2975 -0.0308 -0.2943 -0.0287 -0.2911 C -0.0234 -0.2816 -0.0234 -0.2816 -0.0181 -0.2773 C -0.0159 -0.2741 -0.0138 -0.2709 -0.0128 -0.2677 C -0.0032 -0.2529 0.0011 -0.2465 0.0043 -0.2412 C 0.0138 -0.2263 0.0234 -0.2125 0.0319 -0.1987 C 0.0723 -0.136 0.0786 -0.1264 0.0839 -0.1179 C 0.1084 -0.0797 0.1126 -0.0733 0.1169 -0.0669 C 0.1434 -0.0255 0.1477 -0.0202 0.1509 -0.0149 C 0.1541 -0.0106 0.1551 -0.0085 0.1562 -0.0074 C 0.1594 -0.0021 0.1594 -0.0021 0.1594 0.0011 C 0.1583 0.0043 0.1562 0.0074 0.1541 0.0106 C -0.0074 0.2614 -0.0085 0.2624 -0.0106 0.2646 C -0.0117 0.2677 -0.0128 0.2699 -0.0149 0.2731 C -0.017 0.2784 -0.0202 0.2837 -0.0255 0.2858 C -0.0361 0.306 -0.0361 0.306 -0.0393 0.3102 C -0.0478 0.3241 -0.0499 0.3262 -0.0521 0.3294 C -0.0563 0.3368 -0.0606 0.3443 -0.0648 0.3528 C -0.0754 0.3751 -0.0882 0.3952 -0.102 0.4154 C -0.1041 0.4176 -0.1052 0.4197 -0.1063 0.4218 C -0.1116 0.4293 -0.1179 0.4356 -0.1233 0.4431 C -0.1264 0.4462 -0.1296 0.4505 -0.1328 0.4537 C -0.136 0.459 -0.1403 0.4632 -0.1445 0.4686 C -0.1392 0.4749 -0.1328 0.4803 -0.1275 0.4866 C -0.0946 0.5185 -0.0946 0.5185 -0.0935 0.5196 C -0.0914 0.5217 -0.0893 0.5238 -0.0882 0.5259 C -0.0829 0.5313 -0.0786 0.5366 -0.0733 0.5419 C 0.0096 0.6247 0.0117 0.6258 0.0128 0.6279 C 0.017 0.6322 0.0223 0.6364 0.0255 0.6417 C 0.0298 0.646 0.034 0.6502 0.0382 0.6545 C 0.1222 0.7374 0.1233 0.7384 0.1243 0.7406 C 0.1286 0.7448 0.1339 0.7491 0.1371 0.7544 C 0.1413 0.7586 0.1456 0.7629 0.1498 0.7671 C 0.1998 0.816 0.2072 0.8245 0.2157 0.8319 C 0.2338 0.85 0.2348 0.8511 0.2359 0.8532 C 0.2412 0.8574 0.2454 0.8617 0.2497 0.867 C 0.2518 0.8702 0.255 0.8723 0.2571 0.8755 C 0.306 0.9233 0.306 0.9233 0.3071 0.9244 C 0.3102 0.9286 0.3102 0.9286 0.3102 0.9307 C 0.289 0.9414 0.2667 0.952 0.2444 0.9616 C 0.2433 0.9616 0.2433 0.9626 0.2423 0.9626 C 0.1785 0.9881 0.1105 1.0041 0.0414 1.0115 C 0.0393 1.0115 0.0372 1.0115 0.0351 1.0115 C -0.0159 1.0179 -0.0701 1.0179 -0.1222 1.0115 C -0.1243 1.0115 -0.1264 1.0115 -0.1296 1.0104 C -0.2104 1.0019 -0.2911 0.9807 -0.3655 0.9446 C -0.3708 0.9424 -0.3772 0.9393 -0.3836 0.9371 C -0.3921 0.9329 -0.4016 0.9286 -0.4101 0.9244 C -0.4123 0.9233 -0.4144 0.9223 -0.4165 0.9223 C -0.4388 0.9095 -0.4611 0.8967 -0.4834 0.8819 C -0.4973 0.8723 -0.5089 0.8638 -0.5206 0.8553 C -0.5323 0.8468 -0.5408 0.8394 -0.5493 0.8319 C -0.5536 0.8287 -0.5578 0.8245 -0.5631 0.8213 C -0.5663 0.8181 -0.5706 0.8149 -0.5737 0.8117 C -0.5759 0.8096 -0.578 0.8075 -0.5791 0.8064 C -0.5844 0.8022 -0.5886 0.7979 -0.5939 0.7926 C -0.612 0.7746 -0.6131 0.7724 -0.6152 0.7714 C -0.6226 0.7639 -0.6279 0.7586 -0.6322 0.7533 C -0.6332 0.7522 -0.6354 0.7501 -0.6354 0.7491 C -0.6481 0.7342 -0.6609 0.7193 -0.6715 0.7034 C -0.6736 0.7013 -0.6747 0.6991 -0.6768 0.697 C -0.6917 0.6757 -0.7055 0.6524 -0.7172 0.6279 C -0.7204 0.6216 -0.7225 0.6173 -0.7236 0.6131 C -0.7257 0.6046 -0.7299 0.6014 -0.7374 0.5961 C -0.7416 0.5939 -0.7459 0.5918 -0.7501 0.5897 C -0.7576 0.5854 -0.765 0.5812 -0.7714 0.5769 C -0.7788 0.5727 -0.7863 0.5684 -0.7937 0.5642 C -0.8033 0.5589 -0.8107 0.5525 -0.8192 0.5461 C -0.8319 0.5344 -0.8351 0.5323 -0.8383 0.5302 C -0.8511 0.5196 -0.8628 0.5079 -0.8744 0.4962 C -0.8829 0.4877 -0.8872 0.4824 -0.8925 0.4771 C -0.9031 0.4643 -0.9095 0.4569 -0.9169 0.4484 C -0.9424 0.4144 -0.9616 0.3846 -0.9786 0.3528 C -0.9786 0.3506 -0.9786 0.3506 -0.9796 0.3496 C -1.0242 0.2677 -1.0497 0.1753 -1.0625 0.0266 Z",
    IGNORED_BY_AI: false,
};
exports.weirdPigtail = {
    SHAPE: "M 2.9313 0.0375 C 2.8113 0.1612 2.2937 0.675 1.705 0.9825 C 1.3788 1.17 0.8763 1.2862 0.28 0.9263 C -0.3537 0.4013 -0.4025 -0.2925 0.2987 -0.8625 C 0.8387 -1.1887 1.36 -1.1175 1.6975 -0.915 C 2.2113 -0.6563 2.8187 -0.0975 2.9313 0.0375",
    IGNORED_BY_AI: false,
};
exports.weirdShellyPonytail = {
    SHAPE: "M -4 0 C -4 1 0 1 0 -0 C 0 -1 -4 -1 -4 0",
    IGNORED_BY_AI: false,
};
exports.weirdHairTie = {
    SHAPE: "M 0 2 C 1 2 1 -2 0 -2 C -1 -2 -1 2 0 2",
    IGNORED_BY_AI: false,
};
exports.weirdShelly = {
    PARENT: ["shellyTank"],
    LABEL: "Shelly",
    TURRETS: [
        {
            POSITION: [21, 0, 0, 0, 0, 1],
            TYPE: ["weirdShellyHair", { COLOR: 30, MIRROR_MASTER_ANGLE: true, }],
        }, 
        {
            POSITION: [6, 1, 9, 0, 0, 0],
            TYPE: ["weirdPigtail", { COLOR: 30 }],
        },
        {
            POSITION: [6, 1, -9, 0, 0, 0],
            TYPE: ["weirdPigtail", { COLOR: 30 }],
        },
        {
            POSITION: [6, -8, 9, 52.5, 0, 1],
            TYPE: ["weirdShellyPonytail", { COLOR: 30 }],
        },
        {
            POSITION: [6, -8, -9, -52.5, 0, 1],
            TYPE: ["weirdShellyPonytail", { COLOR: 30 }],
        },
        {
            POSITION: [6, -9.5, 4.5, 26.25, 0, 1],
            TYPE: ["weirdShellyPonytail", { COLOR: 30 }],
        },
        {
            POSITION: [6, -9.5, -4.5, -26.25, 0, 1],
            TYPE: ["weirdShellyPonytail", { COLOR: 30 }],
        },
        {
            POSITION: [6, -11, 0, 0, 0, 1],
            TYPE: ["weirdShellyPonytail", { COLOR: 30 }],
        },
        {
            POSITION: [6, -11, 0, 0, 0, 1],
            TYPE: ["weirdHairTie", { COLOR: 35, MIRROR_MASTER_ANGLE: true, }],
        },
    ],
};
// DESTROYER UPGRADES
exports.annihilator = {
    PARENT: ["genericTank"],
    LABEL: "Annihilator",
    DANGER: 7,
    GUNS: [
        {
            POSITION: [20.5, 19.5, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.anni]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.slinker = {
    PARENT: ["genericTank"],
    LABEL: "Slinker",
    DANGER: 7,
    INVISIBLE: [0.08, 0.03],
    TOOLTIP: "Stay still to turn invisible.",
    GUNS: [
        {
            POSITION: [21, 14, -1.4, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.hybrid = makeHybrid(exports.destroyer, "Hybrid");

exports.stabilizer = {
    PARENT: ["genericTank"],
    LABEL: 'Stabilizer',
    DANGER: 7,
    BODY: {
        SPEED: base.SPEED * .8,
        FOV: 1.2
    },
    GUNS: [{
        POSITION: [7.25, 14.25, 1.25, 10, 0, 0, 0]
    }, {
        POSITION: [18.5, 14, 1, 0, 0, 0, .25],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.stabilize]),
            TYPE: "smasherMissile",
            //WAIT_TO_CYCLE: true
        }
    }, {
        POSITION: [9, 14, -1.2, 4, 0, 0, 0]
    }]
};
exports.equilibrator = {
    PARENT: ["genericTank"],
    LABEL: 'Equilibrator',
    DANGER: 7,
    BODY: {
        SPEED: base.SPEED * .8,
        FOV: 1.2
    },
    TURRETS: [
        {
            POSITION: [9, 0, 0, 0, 360, 1],
            TYPE: "overdriveDeco",
        },
    ],
    GUNS: [{
        POSITION: [7.25, 14.25, 1.25, 10, 0, 0, 0]
    }, {
        POSITION: [18.5, 14, 1, 0, 0, 0, .25],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.stabilize]),
            TYPE: "autoSmasherMissile",
            //WAIT_TO_CYCLE: true
        }
    }, {
        POSITION: [9, 14, -1.2, 4, 0, 0, 0]
    }]
};
// HYBRID UPGRADES
exports.autoHybrid = makeAuto(exports.hybrid, "Auto-Hybrid");
// AUTO-HYBRID UPGRADES
exports.miniEliteDestroyer = {
    PARENT: ["genericTank"],
    LABEL: "Prime Destroyer",
    FACING_TYPE: "autospin",
    SHAPE: 3.5,
    SIZE: 15,
    DANGER: 7,
    BODY: {
        SPEED: base.SPEED * 0.8,
        FOV: base.FOV * 1.15,
    },
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [0, 11, 1, 0, 0, 60, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.weak]),
                TYPE: [ "drone", { LABEL: "Crasher", VARIES_IN_SIZE: true, DRAW_HEALTH: true, INDEPENDENT: true, }, ],
                SYNCS_SKILLS: true,
                AUTOFIRE: true,
                MAX_CHILDREN: 2,
                STAT_CALCULATOR: gunCalcNames.drone,
            },
        },
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [0, 11, 1, 0, 0, -60, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.weak]),
                TYPE: [ "drone", { LABEL: "Crasher", VARIES_IN_SIZE: true, DRAW_HEALTH: true, INDEPENDENT: true, }, ],
                SYNCS_SKILLS: true,
                AUTOFIRE: true,
                MAX_CHILDREN: 2,
                STAT_CALCULATOR: gunCalcNames.drone,
            },
        },
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [0, 11, 1, 0, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.weak]),
                TYPE: [ "drone", { LABEL: "Crasher", VARIES_IN_SIZE: true, DRAW_HEALTH: true, INDEPENDENT: true, }, ],
                SYNCS_SKILLS: true,
                AUTOFIRE: true,
                MAX_CHILDREN: 2,
                STAT_CALCULATOR: gunCalcNames.drone,
            },
        },
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [8, 16, 1, 3.5, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.flank]),
                TYPE: "bullet",
                LABEL: "Devastator",
            },
        },
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [8, 16, 1, 3.5, 0, 120, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.flank]),
                TYPE: "bullet",
                LABEL: "Devastator",
            },
        },
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [8, 16, 1, 3.5, 0, 240, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.flank]),
                TYPE: "bullet",
                LABEL: "Devastator",
            },
        },
    ],
    TURRETS: [
        {
            POSITION: [11, 0, 0, 0, 360, 1],
            TYPE: "batterauto4gun",
        },
    ],
};
// SLINKER UPGRADES
exports.rogueTank = {
    PARENT: ["genericTank"],
    LABEL: "Rogue",
    ALPHA: [0.1, 0.1],
    TOOLTIP: "You are always invisible.",
    GUNS: [
        {
            POSITION: [18, 14, -1.3, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy]),
                TYPE: "bullet",
            },
        },
    ],
};
// ARTILLERY UPGRADES
exports.mortar = {
    PARENT: ["genericTank"],
    LABEL: "Mortar",
    DANGER: 7,
    GUNS: [
        {
            POSITION: [13, 3, 1, 0, -8, -7, 0.6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin]),
                TYPE: "bullet",
                LABEL: "Secondary",
            },
        },
        {
            POSITION: [13, 3, 1, 0, 8, 7, 0.8],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin]),
                TYPE: "bullet",
                LABEL: "Secondary",
            },
        },
        {
            POSITION: [17, 3, 1, 0, -6, -7, 0.2],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin]),
                TYPE: "bullet",
                LABEL: "Secondary",
            },
        },
        {
            POSITION: [17, 3, 1, 0, 6, 7, 0.4],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin]),
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
    ],
};
exports.ordnance = {
    PARENT: ["genericTank"],
    LABEL: "Ordnance",
    DANGER: 7,
    BODY: {
        SPEED: base.SPEED * 0.9,
        FOV: base.FOV * 1.25,
    },
    CONTROLLERS: ["zoom"],
    TOOLTIP: "Hold right click to zoom.",
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [17, 3, 1, 0, -5.75, -6, 0.25],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty]),
                TYPE: "bullet",
                LABEL: "Secondary",
            },
        },
        {
            POSITION: [17, 3, 1, 0, 5.75, 6, 0.75],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty]),
                TYPE: "bullet",
                LABEL: "Secondary",
            },
        },
        {
            POSITION: [24, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunter2]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [21, 11, 1, 0, 0, 0, 0.25],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.pollinator = {
    PARENT: ["genericTank"],
    DANGER: 7,
    LABEL: "Pollinator",
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [14, 3, 1, 0, -4, -6, 0.25],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.bees]),
                TYPE: ["bee", { INDEPENDENT: true }],
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                WAIT_TO_CYCLE: true,
                LABEL: "Secondary",
            },
        },
        {
            POSITION: [14, 3, 1, 0, 4, 6, 0.75],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.bees]),
                TYPE: ["bee", { INDEPENDENT: true }],
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                WAIT_TO_CYCLE: true,
                LABEL: "Secondary",
            },
        },
        {
            POSITION: [19, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.arty]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.beekeeper = {
    PARENT: ["genericTank"],
    DANGER: 7,
    LABEL: "Beekeeper",
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [14, 3, 1, 0, -6, -7, 0.25],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.bees]),
                TYPE: ["bee", { INDEPENDENT: true }],
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                WAIT_TO_CYCLE: true,
                LABEL: "Secondary",
            },
        },
        {
            POSITION: [14, 3, 1, 0, 6, 7, 0.75],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.bees]),
                TYPE: ["bee", { INDEPENDENT: true }],
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                WAIT_TO_CYCLE: true,
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
    ],
};
exports.fieldGun = {
    PARENT: ["genericTank"],
    LABEL: "Field Gun",
    BODY: {
        FOV: base.FOV * 1.1,
    },
    DANGER: 7,
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [15, 3, 1, 0, -6, -7, 0.25],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty]),
                TYPE: "bullet",
                LABEL: "Secondary",
            },
        },
        {
            POSITION: [15, 3, 1, 0, 6, 7, 0.75],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty]),
                TYPE: "bullet",
                LABEL: "Secondary",
            },
        },
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
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

// LAUNCHER UPGRADES
exports.skimmer = {
    PARENT: ["genericTank"],
    BODY: {
        FOV: 1.15 * base.FOV,
    },
    LABEL: "Skimmer",
    DANGER: 7,
    GUNS: [
        {
            POSITION: [10, 14, -0.5, 9, 0, 0, 0],
        },
        {
            POSITION: [17, 15, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.pound,
                    g.arty,
                    g.arty,
                    g.skim,
                ]),
                TYPE: "missile",
                STAT_CALCULATOR: gunCalcNames.sustained,
            },
        },
    ],
};
exports.twister = {
    PARENT: ["genericTank"],
    BODY: {
        FOV: 1.1 * base.FOV,
    },
    LABEL: "Twister",
    DANGER: 7,
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
                    g.twister
                ]),
                TYPE: "spinmissile",
                STAT_CALCULATOR: gunCalcNames.sustained,
            },
        },
    ],
};
exports.demoman = {
    PARENT: ["genericTank"],
    LABEL: 'Demoman',
    DANGER: 7,
    GUNS: [{
        POSITION: [14, 12, -0.5, 9, 0, 0, 0]
    }, {
        POSITION: [20, 14, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty, g.arty, g.skim, g.demoman]),
            TYPE: "demomanMissile",
            STAT_CALCULATOR: gunCalcNames.sustained,
        }
    }, {
        POSITION: [11, 14, -1.4, 3, 0, 0, 0]
    }]
};
exports.nesterTank = {
    PARENT: ["genericTank"],
    DANGER: 6,
    LABEL: "Nester",
    GUNS: [
        {
            POSITION: [12, 14, -1.2, 5, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.hive]),
                TYPE: "lilNesterHive",
            },
        },
        {
            POSITION: [13, 12, -0.8, 5, 0, 0, 0],
        },
    ],
};
exports.megaNester = {
    PARENT: ["genericTank"],
    DANGER: 7,
    LABEL: "Mega Nester",
    GUNS: [
        {
            POSITION: [14, 14, -1.2, 5, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.hive]),
                TYPE: "nesterHive",
            },
        },
        {
            POSITION: [15, 12, -0.8, 5, 0, 0, 0],
        },
    ],
};
exports.swarmer = {
    PARENT: ["genericTank"],
    DANGER: 6,
    LABEL: "Swarmer",
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
exports.sidewinder = {
    PARENT: ["genericTank"],
    LABEL: "Sidewinder",
    DANGER: 7,
    BODY: {
        SPEED: 0.8 * base.SPEED,
        FOV: 1.3 * base.FOV,
    },
    GUNS: [
        {
            POSITION: [10, 11, -0.5, 14, 0, 0, 0],
        },
        {
            POSITION: [21, 12, -1.1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.sidewind]),
                TYPE: "snake",
                STAT_CALCULATOR: gunCalcNames.sustained,
            },
        },
    ],
};
exports.rocketeer = {
    PARENT: ["genericTank"],
    LABEL: "Rocketeer",
    BODY: {
        FOV: 1.15 * base.FOV,
    },
    DANGER: 7,
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
exports.cluster = {
    PARENT: ["genericTank"],
    LABEL: "Cluster",
    BODY: {
        FOV: base.FOV * 1.1,
    },
    DANGER: 6,
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [10, 9, 0.8, 7, 0, 0, 0],
        },
        {
            POSITION: [15, 13, 1.2, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty, g.arty, g.cluster]),
                TYPE: "clustermissile",
                STAT_CALCULATOR: gunCalcNames.sustained,
            },
        },
    ],
};
exports.promenader = {
    PARENT: ["genericTank"],
    LABEL: 'Promenader',
    DANGER: 7,
    BODY: {
        FOV: 1.125
    },
    GUNS: [{
        POSITION: [10, 12, -0.5, 9, 0, 0, 0]
    }, {
        POSITION: [4, 11, 1.7, 13, 0, 0, 0]
    }, {
        POSITION: [17, 13, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty, g.arty, g.skim]),
            TYPE: "promenaderMissile",
            STAT_CALCULATOR: gunCalcNames.sustained
        }
    }]
};
// PROMENADER UPDRAGES
exports.pather = {
    PARENT: ["genericTank"],
    LABEL: 'Pather',
    DANGER: 7,
    BODY: {
        FOV: 1.125
    },
    GUNS: [{
        POSITION: [13, 11, 1, 0, 0, 0, 0]
    }, {
        POSITION: [4, 11, 1.7, 13, 0, 0, 0]
    }, {
        POSITION: [10, 12, -0.5, 9, 0, 0, 0]
    }, {
        POSITION: [17, 13, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty, g.arty, g.skim]),
            TYPE: "patherMissile",
            STAT_CALCULATOR: gunCalcNames.sustained
        },
    }, {
            POSITION: [13, 13, -1.2, 0, 0, 0, 0],
        },]
};
// ROCKETEER UPGRADES
exports.glider = {
    PARENT: ["genericTank"],
    LABEL: "Glider",
    BODY: {
        FOV: 1.15 * base.FOV,
    },
    DANGER: 7,
    GUNS: [
        {
            POSITION: [4, 11,  1, 14, 0, 0, 0],
            },
        {
            POSITION: [3, 11, 1.3, 17, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.pound,
                    g.launcher,
                    g.rocketeer,
                    g.glider,
                ]),
                TYPE: "gliderMissile",
                STAT_CALCULATOR: gunCalcNames.sustained,
            },
        },
        {
            POSITION: [15, 11, -1.6, 0, 0, 0, 0],
        },
    ],
};
// SIDEWINER UPGRADES
exports.attackMissiler = {
    PARENT: ["genericTank"],
    LABEL: 'Attack Missiler',
    DANGER: 7,
    BODY: {
        SPEED: base.SPEED * .8,
        FOV: 1.3
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
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.sidewind]),
            TYPE: "hypersnake",
            STAT_CALCULATOR: gunCalcNames.sustained
        }
    }]
};
// TRAPPER UPGRADES
exports.builder = {
    PARENT: ["genericTank"],
    DANGER: 6,
    LABEL: "Builder",
    STAT_NAMES: statnames.trap,
    BODY: {
        SPEED: 0.8 * base.SPEED,
        FOV: 1.15 * base.FOV,
    },
    GUNS: [
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
exports.triTrapper = {
    PARENT: ["genericTank"],
    LABEL: "Tri-Trapper",
    DANGER: 6,
    STAT_NAMES: statnames.trap,
    GUNS: [
        {
            POSITION: [15, 7, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [3, 7, 1.7, 15, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.flank]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
        {
            POSITION: [15, 7, 1, 0, 0, 120, 0],
        },
        {
            POSITION: [3, 7, 1.7, 15, 0, 120, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.flank]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
        {
            POSITION: [15, 7, 1, 0, 0, 240, 0],
        },
        {
            POSITION: [3, 7, 1.7, 15, 0, 240, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.flank]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
    ],
};
exports.trapGuard = {
    PARENT: ["genericTank"],
    LABEL: "Trap Guard",
    STAT_NAMES: statnames.generic,
    DANGER: 6,
    GUNS: [
        {
            POSITION: [20, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [13, 8, 1, 0, 0, 180, 0],
        },
        {
            POSITION: [4, 8, 1.7, 13, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
    ],
};

exports.wark = {
    PARENT: ["genericTank"],
    LABEL: "Wark",
    STAT_NAMES: statnames.generic,
    DANGER: 6,
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [13, 8, 1, 0, 5.5, 5, 0],
        },
        {
            POSITION: [3, 9, 1.5, 13, 5.5, 5, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
        {
            /* LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [13, 8, 1, 0, -5.5, -5, 0],
        },
        {
            POSITION: [3, 9, 1.5, 13, -5.5, -5, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
    ],
};
exports.mech = {
    PARENT: ["genericTank"],
    LABEL: 'Mech',
    DANGER: 6,
    STAT_NAMES: statnames.generic,
    GUNS: [{
        POSITION: [15, 10, 1, 0, 0, 0, 0]
    }, {
        POSITION: [5, 13, 1, 7, 0, 0, 0]
    }, {
        POSITION: [3, 10, 1.5, 15, 0, 0, 0],
        PROPERTIES: {
            MAX_CHILDREN: 16,
            DESTROY_OLDEST_CHILD: true,
            SHOOT_SETTINGS: combineStats([g.trap]),
            TYPE: "turretedTrap",
            STAT_CALCULATOR: gunCalcNames.trap
        }
    }]
};
exports.snipetrapper = {
    PARENT: ["genericTank"],
    LABEL: "Gambler",
    STAT_NAMES: statnames.trap,
    BODY: {
        FOV: base.FOV * 1.15,
    },
    GUNS: [
        {
            POSITION: [19, 7, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [3, 7, 1.7, 19, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.sniper, {reload: 0.8}]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
    ],
};
exports.megaTrapper = {
    PARENT: ["genericTank"],
    LABEL: "Mega Trapper",
    DANGER: 7,
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [15, 12, 1, -2, 0, 0, 0],
        },
        {
            POSITION: [6, 12, 1.7, 13, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.megatrap]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
    ],
};
exports.overtrapper = makeOver(exports.weirdTrapper);

exports.pen = {
    PARENT: ["genericTank"],
    LABEL: 'Pen',
    DANGER: 6,
    BODY: {
        FOV: 1.1,
    },
    GUNS: [{
        POSITION: [20, 5.5, 1, 0, 0, 0, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pen]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [15, 7, 1, 0, 0, 0, 0]
    }, {
        POSITION: [3, 7, 1.7, 15, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap]),
            TYPE: "trap",
            STAT_CALCULATOR: gunCalcNames.trap
        }
    }]
};
// PEN UPRGADES
exports.stall = {
    PARENT: ["genericTank"],
    LABEL: 'Stall',
    DANGER: 7,
    BODY: {
        SPEED: base.SPEED * .8,
        FOV: 1.15
    },
    GUNS: [{
        POSITION: [22, 5.5, 1, 0, 0, 0, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pen]),
            TYPE: "bullet",
        }
    }, {
        POSITION: [18, 12, 1, 0, 0, 0, 0]
    }, {
        POSITION: [2, 12, 1.1, 18, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.block]),
            TYPE: "setTrap",
        }
    }]
};
exports.autoPen = makeAuto(exports.pen, "Auto-Pen");
// BUILDER UPGRADES
exports.construct = {
    PARENT: ["genericTank"],
    LABEL: "Constructor",
    STAT_NAMES: statnames.trap,
    DANGER: 7,
    BODY: {
        SPEED: 0.7 * base.SPEED,
        FOV: 1.15 * base.FOV,
    },
    GUNS: [
        {
            POSITION: [18, 18, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [2, 18, 1.2, 18, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.block, g.construct]),
                TYPE: "setTrap",
            },
        },
    ],
};
exports.autoBuilder = makeAuto(exports.builder);
exports.engineer = {
    PARENT: ["genericTank"],
    DANGER: 7,
    LABEL: "Engineer",
    STAT_NAMES: statnames.trap,
    BODY: {
        SPEED: 0.75 * base.SPEED,
        FOV: 1.15 * base.FOV,
    },
    GUNS: [
        {
            POSITION: [5, 11, 1, 10.5, 0, 0, 0],
        },
        {
            POSITION: [3, 14, 1, 15.5, 0, 0, 0],
        },
        {
            POSITION: [2, 14, 1.3, 18, 0, 0, 0],
            PROPERTIES: {
                MAX_CHILDREN: 6,
                SHOOT_SETTINGS: combineStats([g.trap, g.block]),
                TYPE: "pillbox",
                SYNCS_SKILLS: true,
                DESTROY_OLDEST_CHILD: true,
            },
        },
        {
            POSITION: [4, 14, 1, 8, 0, 0, 0],
        },
    ],
};
exports.boomer = {
    PARENT: ["genericTank"],
    DANGER: 7,
    LABEL: "Boomer",
    STAT_NAMES: statnames.trap,
    FACING_TYPE: "locksFacing",
    BODY: {
        SPEED: base.SPEED * 0.8,
        FOV: base.FOV * 1.15,
    },
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [5, 10, 1, 14, 0, 0, 0],
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
exports.assembler = {
    PARENT: ['genericTank'],
    DANGER: 7,
    LABEL: 'Assembler',
    STAT_NAMES: statnames.trap,
    BODY: {
        SPEED: 0.8 * base.SPEED,
        FOV: 1.15 * base.FOV,
    },
    GUNS: [
        {
            POSITION: [18, 12, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [2, 12, 1.1, 18, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.block]),
                TYPE: 'assemblerTrap',
                MAX_CHILDREN: 8
            }
        }
    ],
    TURRETS: [
        {
            /**        SIZE X   Y  ANGLE ARC */
            POSITION: [2.5, 14, 0, 0,    360, 1],
            TYPE: 'assemblerDot'
        }
    ]
};

exports.wallBuilder = {
    PARENT: ["genericTank"],
    DANGER: 7,
    LABEL: "Bricklayer",
    STAT_NAMES: statnames.trap,
    BODY: {
        SPEED: 0.8 * base.SPEED,
        FOV: 1.15 * base.FOV,
    },
    SHAPE: 9,
    GUNS: [{
         POSITION: [ 4, 12, -1.1, 12, 0, 0, 0, ],
         },
        {
            POSITION: [4, 12, 1.1, 8, 0, 0, 0],
        },
        {
            POSITION: [4, 12, 1.1, 16, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.block, g.bricklayer]),
                TYPE: "wallTrap",
                MAX_CHILDREN: 12,
                DESTROY_OLDEST_CHILD: true,
            },
        },
    ],
};
// BRICKLAYER UPGRADES
exports.wallEngineer = {
    PARENT: ["genericTank"],
    DANGER: 7,
    LABEL: "Estimator",
    STAT_NAMES: statnames.trap,
    BODY: {
        SPEED: 0.75 * base.SPEED,
        FOV: 1.15 * base.FOV,
    },
    SHAPE: 9,
    GUNS: [
        {
            POSITION: [4, 10, 1, 11, 0, 0, 0],
        },{
         POSITION: [ 3, 12, -1.1, 14, 0, 0, 0, ],
         }, {
            POSITION: [3, 12, 1.1, 8, 0, 0, 0],
        }, {
            POSITION: [4, 12, 1.1, 17, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.block, g.bricklayer]),
                TYPE: "wallbox",
                MAX_CHILDREN: 6,
                DESTROY_OLDEST_CHILD: true,
            },
        },
    ],
};
// SNIPER TRAPPER UPGRADES
exports.barricade = {
    PARENT: ["genericTank"],
    DANGER: 6,
    LABEL: "Barricade",
    STAT_NAMES: statnames.trap,
    BODY: {
        FOV: 1.15,
    },
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
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
exports.snipeBuilder = {
    PARENT: ["genericTank"],
    LABEL: 'Producer',
    DANGER: 7,
    BODY: {
        SPEED: base.SPEED * 0.8,
        FOV: 1.25
    },
    STAT_NAMES: statnames.trap,
    GUNS: [{
        POSITION: [21, 12.5, 1, 0, 0, 0, 0]
    }, {
        POSITION: [2, 12.5, 1.1, 21, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.block, g.sniper]),
            TYPE: "setTrap"
        }
    }]
};
// BARRICADES UPGRADES
exports.miniBuilder = {
    PARENT: ["genericTank"],
    LABEL: 'Blockade',
    DANGER: 7, //7.5
    BODY: {
        FOV: 1.2,
        SPEED: base.SPEED * 0.8
    },
    STAT_NAMES: statnames.trap,
    GUNS: [{
        POSITION: [14, 10, 1, 10, 0, 0, 0]
    }, {
        POSITION: [2.5, 10.1, 1.1, 24, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.block, g.mini /*, g.barricade*/ ]),
            TYPE: "setTrap"
        }, }, {
        POSITION: [2.5, 10.1, 1.1, 19, 0, 0, 1 / 3],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.block, g.mini /*, g.barricade*/ ]),
            TYPE: "setTrap"
        }, }, {
        POSITION: [2.5, 10.1, 1.1, 14, 0, 0, 2 / 3],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.block, g.mini /*, g.barricade*/ ]),
            TYPE: "setTrap"
        }
    }]
};
// TRI-TRAPPER UPGRADES
exports.hexaTrapper = makeAuto({
        PARENT: ["genericTank"],
        DANGER: 7,
        BODY: {
            SPEED: 0.8 * base.SPEED,
        },
        STAT_NAMES: statnames.trap,
        HAS_NO_RECOIL: true,
        GUNS: [
            {
                POSITION: [15, 7, 1, 0, 0, 0, 0],
            },
            {
                POSITION: [3, 7, 1.7, 15, 0, 0, 0],
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                    TYPE: "trap",
                    STAT_CALCULATOR: gunCalcNames.trap,
                },
            },
            {
                POSITION: [15, 7, 1, 0, 0, 60, 0.5],
            },
            {
                POSITION: [3, 7, 1.7, 15, 0, 60, 0.5],
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                    TYPE: "trap",
                    STAT_CALCULATOR: gunCalcNames.trap,
                },
            },
            {
                POSITION: [15, 7, 1, 0, 0, 120, 0],
            },
            {
                POSITION: [3, 7, 1.7, 15, 0, 120, 0],
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                    TYPE: "trap",
                    STAT_CALCULATOR: gunCalcNames.trap,
                },
            },
            {
                POSITION: [15, 7, 1, 0, 0, 180, 0.5],
            },
            {
                POSITION: [3, 7, 1.7, 15, 0, 180, 0.5],
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                    TYPE: "trap",
                    STAT_CALCULATOR: gunCalcNames.trap,
                },
            },
            {
                POSITION: [15, 7, 1, 0, 0, 240, 0],
            },
            {
                POSITION: [3, 7, 1.7, 15, 0, 240, 0],
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                    TYPE: "trap",
                    STAT_CALCULATOR: gunCalcNames.trap,
                },
            },
            {
                POSITION: [15, 7, 1, 0, 0, 300, 0.5],
            },
            {
                POSITION: [3, 7, 1.7, 15, 0, 300, 0.5],
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                    TYPE: "trap",
                    STAT_CALCULATOR: gunCalcNames.trap,
                },
            },
        ],
    }, "Hexa-Trapper");
exports.septaTrapper = (() => {
    let a = 360 / 7,
        d = 1 / 7;
    return {
        PARENT: ["genericTank"],
        LABEL: "Septa-Trapper",
        DANGER: 7,
        BODY: {
            SPEED: base.SPEED * 0.8,
        },
        STAT_NAMES: statnames.trap,
        HAS_NO_RECOIL: true,
        GUNS: [
            {
                /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                POSITION: [15, 7, 1, 0, 0, 0, 0],
            },
            {
                POSITION: [3, 7, 1.7, 15, 0, 0, 0],
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                    TYPE: "trap",
                    STAT_CALCULATOR: gunCalcNames.trap,
                },
            },
            {
                POSITION: [15, 7, 1, 0, 0, a, 4 * d],
            },
            {
                POSITION: [3, 7, 1.7, 15, 0, a, 4 * d],
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                    TYPE: "trap",
                    STAT_CALCULATOR: gunCalcNames.trap,
                },
            },
            {
                POSITION: [15, 7, 1, 0, 0, 2 * a, 1 * d],
            },
            {
                POSITION: [3, 7, 1.7, 15, 0, 2 * a, 1 * d],
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                    TYPE: "trap",
                    STAT_CALCULATOR: gunCalcNames.trap,
                },
            },
            {
                POSITION: [15, 7, 1, 0, 0, 3 * a, 5 * d],
            },
            {
                POSITION: [3, 7, 1.7, 15, 0, 3 * a, 5 * d],
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                    TYPE: "trap",
                    STAT_CALCULATOR: gunCalcNames.trap,
                },
            },
            {
                POSITION: [15, 7, 1, 0, 0, 4 * a, 2 * d],
            },
            {
                POSITION: [3, 7, 1.7, 15, 0, 4 * a, 2 * d],
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                    TYPE: "trap",
                    STAT_CALCULATOR: gunCalcNames.trap,
                },
            },
            {
                POSITION: [15, 7, 1, 0, 0, 5 * a, 6 * d],
            },
            {
                POSITION: [3, 7, 1.7, 15, 0, 5 * a, 6 * d],
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                    TYPE: "trap",
                    STAT_CALCULATOR: gunCalcNames.trap,
                },
            },
            {
                POSITION: [15, 7, 1, 0, 0, 6 * a, 3 * d],
            },
            {
                POSITION: [3, 7, 1.7, 15, 0, 6 * a, 3 * d],
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                    TYPE: "trap",
                    STAT_CALCULATOR: gunCalcNames.trap,
                },
            },
        ],
    };
})();
exports.architect = {
    LABEL: "Architect",
    BODY: {
        SPEED: 1.1 * base.SPEED,
    },
    PARENT: ["genericTank"],
    DANGER: 6,
    FACING_TYPE: "autospin",
    TURRETS: [
        {
            POSITION: [12, 8, 0, 0, 190, 0],
            TYPE: "architectGun",
        },
        {
            POSITION: [12, 8, 0, 120, 190, 0],
            TYPE: "architectGun",
        },
        {
            POSITION: [12, 8, 0, 240, 190, 0],
            TYPE: "architectGun",
        },
    ],
};

// TRAP GUARD UPGRADES
exports.bushwhacker = makeGuard(exports.sniper, "Bushwhacker");
exports.gunnerTrapper = {
    PARENT: ["genericTank"],
    LABEL: "Gunner Trapper",
    DANGER: 7,
    STAT_NAMES: statnames.generic,
    BODY: {
        FOV: 1.25 * base.FOV,
    },
    GUNS: [
        {
            POSITION: [19, 2, 1, 0, -2.5, 0, 0],
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
            POSITION: [19, 2, 1, 0, 2.5, 0, 0.5],
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
            POSITION: [12, 11, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [13, 11, 1, 0, 0, 180, 0],
        },
        {
            POSITION: [4, 11, 1.7, 13, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.fast, g.halfrecoil]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
    ],
};
exports.bomber = {
    PARENT: ["genericTank"],
    LABEL: "Bomber",
    BODY: {
        DENSITY: base.DENSITY * 0.6,
    },
    DANGER: 7,
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [20, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
                TYPE: "bullet",
                LABEL: "Front",
            },
        },
        {
            POSITION: [18, 8, 1, 0, 0, 130, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri]),
                TYPE: "bullet",
                LABEL: "Wing",
            },
        },
        {
            POSITION: [18, 8, 1, 0, 0, 230, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri]),
                TYPE: "bullet",
                LABEL: "Wing",
            },
        },
        {
            POSITION: [13, 8, 1, 0, 0, 180, 0],
        },
        {
            POSITION: [4, 8, 1.7, 13, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
    ],
};
exports.conqueror = {
    PARENT: ["genericTank"],
    DANGER: 7,
    LABEL: "Conqueror",
    STAT_NAMES: statnames.generic,
    BODY: {
        SPEED: 0.8 * base.SPEED,
    },
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
exports.mechGuard = {
    PARENT: ["genericTank"],
    LABEL: "Mech Guard",
    STAT_NAMES: statnames.generic,
    DANGER: 6,
    GUNS: [
        {
            POSITION: [20, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
                TYPE: "bullet",
            },
        },{
        POSITION: [15, 10, 1, 0, 0, 180, 0]
    }, {
        POSITION: [5, 13, 1, 7, 0, 180, 0]
    }, {
        POSITION: [3, 10, 1.5, 15, 0, 180, 0],
        PROPERTIES: {
            MAX_CHILDREN: 16,
            DESTROY_OLDEST_CHILD: true,
            SHOOT_SETTINGS: combineStats([g.trap]),
            TYPE: "turretedTrap",
            STAT_CALCULATOR: gunCalcNames.trap
        }
    }],
};
exports.peashooter = makeSwarming(exports.trapGuard, "Peashooter");
// WARK UPGRADES
exports.bulwark = {
    PARENT: ["genericTank"],
    LABEL: "Bulwark",
    STAT_NAMES: statnames.generic,
    DANGER: 7,
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [20, 8, 1, 0, 5.5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.twin]),
                TYPE: "bullet",
            },
        },
        {
            /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [20, 8, 1, 0, -5.5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.twin]),
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
                SHOOT_SETTINGS: combineStats([g.trap, g.twin]),
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
                SHOOT_SETTINGS: combineStats([g.trap, g.twin]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
    ],
};

exports.bentTrapper = {
    PARENT: ["genericTank"],
    LABEL: 'Waarrk', //Bastion, Bent Trapper
    DANGER: 7,
    STAT_NAMES: statnames.trap,
    BODY: {
        FOV: 1.1,
    },
    GUNS: [{
        POSITION: [13.5, 7, 1, 0, 2, 20, 0]
    }, {
        POSITION: [3, 7, 1.6, 13.5, 2, 20, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.twin, g.bent]),
            TYPE: "trap",
            STAT_CALCULATOR: gunCalcNames.trap
        }
    }, {
        POSITION: [13.5, 7, 1, 0, -2, -20, 0]
    }, {
        POSITION: [3, 7, 1.6, 13.5, -2, -20, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.twin, g.bent]),
            TYPE: "trap",
            STAT_CALCULATOR: gunCalcNames.trap
        }
    }, {
        POSITION: [16.5, 7, 1, 0, 0, 0, 0]
    }, {
        POSITION: [3, 7, 1.6, 16.5, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.twin, g.bent]),
            TYPE: "trap",
            STAT_CALCULATOR: gunCalcNames.trap
        }
    }]
};
// BULWARK UPGRADES
exports.stockade = {
    PARENT: ["genericTank"],
    LABEL: "Stockade",
    STAT_NAMES: statnames.generic,
    DANGER: 7,
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [20, 8, 1, 0, 5.5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.twin]),
                TYPE: "bullet",
            },
        },
        {
            /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [20, 8, 1, 0, -5.5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.twin]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [7, 7.5, 0.6, 5.5, 5.5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.flank, g.flank]),
                TYPE: "swarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [7, 7.5, 0.6, 5.5, -5.5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.flank, g.flank]),
                TYPE: "swarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [13, 8, 1, 0, 5.5, 185, 0],
        },
        {
            POSITION: [3, 9, 1.5, 13, 5.5, 185, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.twin]),
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
                SHOOT_SETTINGS: combineStats([g.trap, g.twin]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
    ],
};
// SMASHER UPGRADES
exports.megaSmasher = {
    PARENT: ["genericTank"],
    LABEL: "Mega-Smasher",
    DANGER: 7,
    BODY: {
        SPEED: 1.05 * base.SPEED,
        FOV: 1.1 * base.FOV,
        DENSITY: 4 * base.DENSITY,
    },
    IS_SMASHER: true,
    SKILL_CAP: [smshskl, 0, 0, 0, 0, smshskl, smshskl, smshskl, smshskl, smshskl],
    STAT_NAMES: statnames.smasher,
    TURRETS: [
        {
            POSITION: [25, 0, 0, 0, 360, 0],
            TYPE: "smasherBody",
        },
    ],
};
exports.spike = {
    PARENT: ["genericTank"],
    LABEL: "Spike",
    DANGER: 7,
    BODY: {
        SPEED: base.SPEED * 0.9,
        DAMAGE: base.DAMAGE * 1.1,
        FOV: base.FOV * 1.05,
        DENSITY: base.DENSITY * 2,
    },
    IS_SMASHER: true,
    SKILL_CAP: [smshskl, 0, 0, 0, 0, smshskl, smshskl, smshskl, smshskl, smshskl],
    STAT_NAMES: statnames.smasher,
    TURRETS: [
        {
            /** SIZE     X       Y     ANGLE    ARC */
            POSITION: [18.5, 0, 0, 0, 360, 0],
            TYPE: "spikeBody",
        },
        {
            POSITION: [18.5, 0, 0, 90, 360, 0],
            TYPE: "spikeBody",
        },
        {
            POSITION: [18.5, 0, 0, 180, 360, 0],
            TYPE: "spikeBody",
        },
        {
            POSITION: [18.5, 0, 0, 270, 360, 0],
            TYPE: "spikeBody",
        },
    ],
};
exports.autoSmasher = makeAuto(exports.smasher, "Auto-Smasher", {
    type: "autoSmasherTurret",
    size: 11,
});
exports.autoSmasher.SKILL_CAP = [smshskl, smshskl, smshskl, smshskl, smshskl, smshskl, smshskl, smshskl, smshskl, smshskl];
exports.landmine = {
    PARENT: ["genericTank"],
    LABEL: "Landmine",
    INVISIBLE: [0.06, 0.01],
    TOOLTIP: "Stay still to turn invisible.",
    DANGER: 7,
    BODY: {
        SPEED: 1.1 * base.SPEED,
        FOV: 1.05 * base.FOV,
        DENSITY: 2 * base.DENSITY,
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
    ],
    IS_SMASHER: true,
    SKILL_CAP: [smshskl, 0, 0, 0, 0, smshskl, smshskl, smshskl, smshskl, smshskl],
    STAT_NAMES: statnames.smasher,
};
exports.drifter = {
    PARENT: ["genericTank"],
    LABEL: "Drifter",
    DANGER: 6,
    BODY: {
        FOV: 1.05 * base.FOV,
        SPEED: 1.5 * base.SPEED,
        ACCELERATION: base.ACCEL * 0.75,
        DENSITY: 2 * base.DENSITY,
    },
    TURRETS: [
        {
            POSITION: [21.5, 0, 0, 0, 360, 0],
            TYPE: "drifterBody",
        },
    ],
    IS_SMASHER: true,
    SKILL_CAP: [smshskl, 0, 0, 0, 0, smshskl, smshskl, smshskl, smshskl, smshskl],
    STAT_NAMES: statnames.smasher,
};
exports.bonker = {
    PARENT: ["genericTank"],
    LABEL: "Bonker",
    SIZE: 12 * 0.75,
    BODY: {
        SPEED: 1.4 * base.SPEED,
        DAMAGE: 1.1 * base.DAMAGE,
        FOV: 1.1 * base.FOV,
        DENSITY: 1.4 * base.DENSITY,
    },
    TURRETS: [
        {
            /** SIZE         X             Y         ANGLE        ARC */
            POSITION: [21.5, 0, 0, 0, 360, 0],
            TYPE: "smasherBody",
        },
    ],
    IS_SMASHER: true,
    SKILL_CAP: [12, 0, 0, 0, 0, 12, 12, 12, 12, 12],
    STAT_NAMES: statnames.smasher,
};
exports.gemini = {
    PARENT: ["genericTank"],
    LABEL: "Gemini",
    DANGER: 7,
    BODY: {
        FOV: 1.05 * base.FOV,
        SPEED: 1.1 * base.SPEED,
        DENSITY: 2 * base.DENSITY,
    },
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [0, 20, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.probe]),
                TYPE: "fakeGemini",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                MAX_CHILDREN: 1,
            },
        },
    ],
    TURRETS: [
        {
            POSITION: [22.5, 0, 0, 0, 360, 0],
            TYPE: "geminiBody",
        },
    ],
    SKILL_CAP: [smshskl, smshskl, smshskl, smshskl, smshskl, smshskl, smshskl, smshskl, smshskl, smshskl],
    IS_SMASHER: true,
    STAT_NAMES: statnames.smasher,
};
// BONKER UPGRADES
exports.basher = {
    PARENT: ["genericTank"],
    LABEL: "Basher",
    SIZE: 12 * 0.5,
    BODY: {
        SPEED: 1.8 * base.SPEED,
        DAMAGE: 1.1 * base.DAMAGE,
        FOV: 1.1 * base.FOV,
        DENSITY: 1.4 * base.DENSITY,
    },
    TURRETS: [
        {
            /** SIZE         X             Y         ANGLE        ARC */
            POSITION: [21.5, 0, 0, 0, 360, 0],
            TYPE: "smasherBody",
        },
    ],
    IS_SMASHER: true,
    SKILL_CAP: [12, 0, 0, 0, 0, 12, 12, 12, 12, 12],
    STAT_NAMES: statnames.smasher,
};
// DRIFTER UPGRADES
exports.buncher = {
    PARENT: ["genericTank"],
    LABEL: "Buncher",
    DANGER: 6,
    BODY: {
        FOV: 1.05 * base.FOV,
        SPEED: 2 * base.SPEED,
        ACCELERATION: base.ACCEL * 0.5,
        DENSITY: 2 * base.DENSITY,
    },
    TURRETS: [
        {
            POSITION: [21.5, 0, 0, 0, 360, 0],
            TYPE: "weirdSpikeBody1",
        },
    ],
    IS_SMASHER: true,
    SKILL_CAP: [smshskl, 0, 0, 0, 0, smshskl, smshskl, smshskl, smshskl, smshskl],
    STAT_NAMES: statnames.smasher,
};
// SPIKE UPGRADES
exports.rageSpike = {
    PARENT: ["genericTank"],
    LABEL: "Sawmill",
    DANGER: 7,
    BODY: {
        SPEED: base.SPEED * 1.05,
        DAMAGE: base.DAMAGE * 1.1,
        FOV: base.FOV * 1.05,
        DENSITY: base.DENSITY * 2,
        RAGE_MULTIPLIER: 1,
    },
    IS_SMASHER: true,
    SKILL_CAP: [smshskl, 0, 0, 0, 0, smshskl, smshskl, smshskl, smshskl, smshskl],
    STAT_NAMES: statnames.smasher,
    TURRETS: [
        {
            /** SIZE     X       Y     ANGLE    ARC */
            POSITION: [24.5, 0, 0, 0, 360, 0],
            TYPE: "sawSpikeBody",
        },
        {
            POSITION: [9, 0, 0, 0, 360, 1],
            TYPE: "speedDemonDeco",
        },
    ],
};
// AUTO SMASHER UPGRADES
exports.scorpionSmash = {
    PARENT: ["genericTank"],
    LABEL: "Scorpion",
    DANGER: 6,
    BODY: {
        FOV: 1.05 * base.FOV,
        SPEED: 1 * base.SPEED,
        DENSITY: 2 * base.DENSITY,
    },
    TURRETS: [
        {
            POSITION: [21.5, 0, 0, 0, 360, 0],
            TYPE: "smasherBody",
        },
        {
            POSITION: [10, 0, 0, 0, 360, 1],
            TYPE: "scorpionSeg1",
        },
    ],
    IS_SMASHER: true,
    SKILL_CAP: [smshskl, smshskl, smshskl, smshskl, smshskl, smshskl, smshskl, smshskl, smshskl, smshskl],
    STAT_NAMES: statnames.smasher,
};
// SINGLE UPGRADES
exports.duo = {
    PARENT: ["genericTank"],
    LABEL: "Duo",
    CONTROLLERS: ["zoom"],
    TOOLTIP: "Hold right click to zoom.",
    GUNS: [
        {
            POSITION: [21.5, 8, 1, 0, 4.75, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.single]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [21.5, 8, 1, 0, -4.75, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.single]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [12, 18, -1.1, 0, 0, 0, 0],
        },
    ],
};
exports.sniperSingle = {
    PARENT: ["genericTank"],
    LABEL: "Sharpshooter",
    BODY: {
        FOV: 1.2 * base.FOV,
    },
    CONTROLLERS: ["zoom"],
    TOOLTIP: "Hold right click to zoom.",
    GUNS: [
        {
            POSITION: [25, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.single, g.sniper]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [7.5, 8, -1.8, 6.5, 0, 0, 0],
        },
    ],
};
exports.singlePound = {
    PARENT: ["genericTank"],
    LABEL: "Bruiser",
    CONTROLLERS: ["zoom"],
    TOOLTIP: "Hold right click to zoom.",
    GUNS: [
        {
            POSITION: [20, 12, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.single, g.pound]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [13.25, 12, -1.5, 2, 0, 0, 0],
        },
    ],
};
exports.flankSingle = {
    PARENT: ["genericTank"],
    LABEL: "Ternion",
    CONTROLLERS: ["zoom"],
    TOOLTIP: "Hold right click to zoom.",
    GUNS: [
        {
            POSITION: [19, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.single]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [5.5, 8, -1.8, 6.5, 0, 0, 0],
        },
        {
            POSITION: [19, 8, 1, 0, 0, 120, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.single]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [5.5, 8, -1.8, 6.5, 0, 120, 0],
        },
        {
            POSITION: [19, 8, 1, 0, 0, 240, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.single]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [5.5, 8, -1.8, 6.5, 0, 240, 0],
        },
    ],
};
//DUO UPGRADES
exports.bentSingle = {
    PARENT: ["genericTank"],
    LABEL: 'Bent Single',
    DANGER: 7,
    CONTROLLERS: ["zoom"],
    TOOLTIP: "Hold right click to zoom.",
    GUNS: [{
        POSITION: [19, 8, 1, 0, -2, -20, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.single]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [8.5, 8, -1.7, 3.5, -2, -20, 0]
    }, {
        POSITION: [19, 8, 1, 0, 2, 20, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.single]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [8.5, 8, -1.7, 3.5, 2, 20, 0]
    }, {
        POSITION: [22, 8, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.single]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [8.5, 8, -1.8, 6.5, 0, 0, 0]
    }]
};

// BRUISER UPGRADES
exports.singleDestroy = {
    PARENT: ["genericTank"],
    LABEL: 'Extinctionist',
    DANGER: 7,
    CONTROLLERS: ["zoom"],
    TOOLTIP: "Hold right click to zoom.",
    GUNS: [{
        POSITION: [21, 14, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.single]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [13.25, 14, -1.4, 2, 0, 0, 0]
    }]
};
// HEALER UPGRADES
exports.medic = {
    PARENT: ["genericTank"],
    LABEL: "Medic",
    BODY: {
        FOV: base.FOV * 1.2,
    },
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
            POSITION: [8, 9, -0.5, 16.5, 0, 0, 0],
        },
        {
            POSITION: [22, 10, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.healer]),
                TYPE: "healerBullet",
            },
        },
    ],
};
exports.ambulance = {
    PARENT: ["genericTank"],
    LABEL: "Ambulance",
    BODY: {
        HEALTH: base.HEALTH * 0.8,
        SHIELD: base.SHIELD * 0.8,
        DENSITY: base.DENSITY * 0.6,
    },
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
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.flank,
                    g.tri,
                    g.trifront,
                    g.tonsmorrecoil,
                    g.healer,
                ]),
                TYPE: "healerBullet",
                LABEL: "Front",
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
exports.surgeon = {
    PARENT: ["genericTank"],
    LABEL: "Surgeon",
    STAT_NAMES: statnames.trap,
    BODY: {
        SPEED: base.SPEED * 0.75,
        FOV: base.FOV * 1.15,
    },
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
            POSITION: [5, 11, 1, 10.5, 0, 0, 0],
        },
        {
            POSITION: [3, 14, 1, 15.5, 0, 0, 0],
        },
        {
            POSITION: [2, 14, 1.3, 18, 0, 0, 0],
            PROPERTIES: {
                MAX_CHILDREN: 2,
                SHOOT_SETTINGS: combineStats([g.trap, g.block, g.slow]),
                TYPE: "surgeonPillbox",
                SYNCS_SKILLS: true,
            },
        },
        {
            POSITION: [4, 14, 1, 8, 0, 0, 0],
        },
    ],
};
exports.paramedic = {
    PARENT: ["genericTank"],
    LABEL: "Paramedic",
    BODY: {
        SPEED: base.SPEED * 0.9,
    },
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
            POSITION: [8, 9, -0.5, 10, 0, -17.5, 0.5],
        },
        {
            POSITION: [15.5, 10, 1, 0, 0, -17.5, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.healer]),
                TYPE: "healerBullet",
            },
        },
        {
            POSITION: [8, 9, -0.5, 10, 0, 17.5, 0.5],
        },
        {
            POSITION: [15.5, 10, 1, 0, 0, 17.5, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.healer]),
                TYPE: "healerBullet",
            },
        },
        {
            POSITION: [8, 9, -0.5, 12.5, 0, 0, 0],
        },
        {
            POSITION: [18, 10, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.healer]),
                TYPE: "healerBullet",
            },
        },
    ],
};
// TANK UPGRADE PATHS
exports.basic.UPGRADES_TIER_1 = ["twin", "sniper", "machineGun", "flankGuard", "director", "pounder", "trapper", "minishot", "pelleter", "single", "inceptioner"/* "whirlwind"*/];
    exports.basic.UPGRADES_TIER_2 = [c.SPECIAL_BOSS_SPAWNS ? "healer" : "smasher"];
        exports.smasher.UPGRADES_TIER_3 = ["megaSmasher", "spike", "autoSmasher", "landmine", "bonker", "drifter"];
            exports.spike.UPGRADES_TIER_4 = [];
            exports.drifter.UPGRADES_TIER_4 = ["buncher"];
            exports.bonker.UPGRADES_TIER_4 = ["basher"];
        exports.basic.UPGRADES_TIER_3 = [];
        exports.healer.UPGRADES_TIER_3 = ["medic", "ambulance", "surgeon", "paramedic"]

    exports.twin.UPGRADES_TIER_2 = ["doubleTwin", "tripleShot", "gunner", "hexaTank", "wark", "twinSniper", "duo"];
        exports.twin.UPGRADES_TIER_3 = [];
        exports.doubleTwin.UPGRADES_TIER_3 = ["tripleTwin", "hewnDouble", "autoDouble", "bentDouble", "twin3"];
            exports.tripleTwin.UPGRADES_TIER_4 = ["bentTriple"];
            exports.bentDouble.UPGRADES_TIER_4 = ["bentTriple"];
            exports.autoDouble.UPGRADES_TIER_4 = ["autoHewnDouble"];
            exports.hewnDouble.UPGRADES_TIER_4 = ["autoHewnDouble"];
        exports.tripleShot.UPGRADES_TIER_3 = ["pentaShot", "spreadshot", "bentHybrid", "bentDouble", "triplet", "bentTrapper", "bentSingle"];
            exports.pentaShot.UPGRADES_TIER_4 = ["quintuplet"];
            exports.triplet.UPGRADES_TIER_4 = ["quintuplet"];
        exports.wark.UPGRADES_TIER_3 = ["bentTrapper", "bulwark"];
        exports.twinSniper.UPGRADES_TIER_3 = ["dual", "musket"];

    exports.sniper.UPGRADES_TIER_2 = ["assassin", "hunter", "minigun", "rifle", "gatlingGun", "twinSniper", "demolisher", "borer", "snipetrapper", "sniperSingle"];
        exports.sniper.UPGRADES_TIER_3 = ["bushwhacker"];
        exports.assassin.UPGRADES_TIER_3 = ["ranger", "falcon", "stalker", "autoAssassin", "jackhammer"];
            exports.ranger.UPGRADES_TIER_4 = ["pavingBreaker"];
            exports.autoAssassin.UPGRADES_TIER_4 = ["warden"];
            exports.falcon.UPGRADES_TIER_4 = ["owl"];
            exports.stalker.UPGRADES_TIER_4 = ["owl"];
        exports.hunter.UPGRADES_TIER_3 = ["predator", "xHunter", "poacher", "ordnance", "dual"];
        exports.rifle.UPGRADES_TIER_3 = ["musket", "crossbow", "armsman"];
        exports.demolisher.UPGRADES_TIER_3 = ["jackhammer", "bulldozer", "demobrid", "punisher", "sidewinder", "subverter", "snipeBuilder", "buckshot"];
            exports.jackhammer.UPGRADES_TIER_4 = ["pavingBreaker", "kraken", "warden", "tyrant"];
            exports.bulldozer.UPGRADES_TIER_4 = ["wreckingball", "anchor", "plow", "tyrant", "toppler"];
            exports.punisher.UPGRADES_TIER_4 = ["warden", "plow", "trojan"];
            exports.demobrid.UPGRADES_TIER_4 = ["kraken", "anchor", "trojan"];

    exports.machineGun.UPGRADES_TIER_2 = ["artillery", "minigun", "gunner", "sprayer", "blaster", "gatlingGun", "multishot", "grenadier"];
        exports.minigun.UPGRADES_TIER_3 = ["streamliner", "nailgun", "cropDuster", "barricade", "vulture", "subverter"];
            exports.subverter.UPGRADES_TIER_4 = ["toppler", "miniBuilder"];
        exports.gunner.UPGRADES_TIER_3 = ["autoGunner", "nailgun", "auto4", "machineGunner", "gunnerTrapper", "cyclone", "overgunner", "autoTank", "mecha"];
        exports.sprayer.UPGRADES_TIER_3 = ["redistributor", "phoenix", "atomizer", "focal", "splasher"];
        exports.blaster.UPGRADES_TIER_3 = ["rocketeer", "subverter", "splasher"];
        exports.gatlingGun.UPGRADES_TIER_3 = ["focal", "buckshot"];

        exports.grenadier.UPGRADES_TIER_3 = ["bombardier", "cluster", "swarmGrenadier"];
            exports.bombardier.UPGRADES_TIER_4 = ["nuclearBomb"];

    exports.flankGuard.UPGRADES_TIER_2 = ["hexaTank", "triAngle", "auto3", "trapGuard", "triTrapper", "flankSingle"];
        exports.flankGuard.UPGRADES_TIER_3 = ["tripleTwin"];
        exports.hexaTank.UPGRADES_TIER_3 = ["octoTank", "cyclone", "hexaTrapper"/*, "hexaWhirl"*/];
        exports.triAngle.UPGRADES_TIER_3 = ["fighter", "booster", "falcon", "bomber", "autoTriAngle", "surfer", "eagle", "phoenix", "vulture"];
            exports.booster.UPGRADES_TIER_4 = ["spedDemon"];
        exports.auto3.UPGRADES_TIER_3 = ["auto5", "mega3", "auto4", "banshee", "sniper3", "twin3", "mach3", "autoTank", "crowbar", "single3"/*, "whirl3"*/];
            exports.auto4.UPGRADES_TIER_4 = ["batter4", "swarm4"];
            exports.crowbar.UPGRADES_TIER_4 = ["wrench"];

    exports.director.UPGRADES_TIER_2 = ["overseer", "cruiser", "underseer", "spawner", "honcho", "directordrive"];
        exports.director.UPGRADES_TIER_3 = ["manager"];
        exports.overseer.UPGRADES_TIER_3 = ["overlord", "overtrapper", "overgunner", "banshee", "autoOverseer", "overdrive", "commander"];
            exports.overlord.UPGRADES_TIER_4 = ["overworker"];
            exports.autoOverseer.UPGRADES_TIER_4 = ["autodrive"];
        exports.cruiser.UPGRADES_TIER_3 = ["carrier", "battleship", "fortress", "autoCruiser", "commander"];
        exports.underseer.UPGRADES_TIER_3 = ["necromancer", "maleficitor", "infestor"/*, "prophet"*/];
        exports.spawner.UPGRADES_TIER_3 = ["factory", "autoSpawner", "megaSpawner", "spawnerdrive", "software"];
            exports.software.UPGRADES_TIER_4 = ["stuxnet"];
        exports.honcho.UPGRADES_TIER_3 = ["bigCheese", "honchodrive"];

    exports.pounder.UPGRADES_TIER_2 = ["destroyer", "builder", "artillery", "launcher", "demolisher", "honcho", "megaTrapper", "blaster", "multishot", "nesterTank", "singlePound"];
        exports.pounder.UPGRADES_TIER_3 = ["eagle"];
        exports.destroyer.UPGRADES_TIER_3 = ["conqueror", "annihilator", "hybrid", "construct", "bulldozer", "slinker", "singleDestroy"];
            exports.annihilator.UPGRADES_TIER_4 = ["wreckingball"];
            exports.hybrid.UPGRADES_TIER_4 = ["autoHybrid", "anchor"];
            exports.slinker.UPGRADES_TIER_4 = ["rogueTank"];
        exports.artillery.UPGRADES_TIER_3 = ["mortar", "ordnance", "beekeeper", "fieldGun"/*, "munition"*/];
        exports.launcher.UPGRADES_TIER_3 = ["skimmer", "twister", "swarmer", "sidewinder", "fieldGun", "rocketeer", "cluster", "promenader"/*, "vortex"*/];
            exports.skimmer.UPGRADES_TIER_4 = ["glider"];
            exports.twister.UPGRADES_TIER_4 = ["demoman"];
            exports.sidewinder.UPGRADES_TIER_4 = ["attackMissiler"];
            exports.rocketeer.UPGRADES_TIER_4 = ["glider"];
            exports.promenader.UPGRADES_TIER_4 = ["pather"];
        exports.multishot.UPGRADES_TIER_3 = ["shotgun", "buckshot"];
            exports.buckshot.UPGRADES_TIER_4 = ["shellyTank"];
        exports.nesterTank.UPGRADES_TIER_3 = ["megaNester", "swarmer"/*, "vortex"*/];


    exports.trapper.UPGRADES_TIER_2 = ["builder", "triTrapper", "trapGuard", "mech", "megaTrapper", "pen", "wark", "snipetrapper"];
        exports.trapper.UPGRADES_TIER_3 = ["overtrapper"];
        exports.builder.UPGRADES_TIER_3 = ["construct", "autoBuilder", "engineer", "boomer", "architect", "conqueror", "assembler", "stall", "snipeBuilder"];
        exports.triTrapper.UPGRADES_TIER_3 = ["fortress", "hexaTrapper", "septaTrapper", "architect"];
        exports.trapGuard.UPGRADES_TIER_3 = ["bushwhacker", "gunnerTrapper", "bomber", "conqueror", "bulwark", "peashooter", "mechGuard"/*, "whirlGuard"*/];
            exports.bulwark.UPGRADES_TIER_4 = ["stockade"];
            exports.peashooter.UPGRADES_TIER_4 = ["stockade"];
        exports.snipetrapper.UPGRADES_TIER_3 = ["barricade", "snipeBuilder"];
            exports.barricade.UPGRADES_TIER_4 = ["miniBuilder"];
            exports.snipeBuilder.UPGRADES_TIER_4 = ["miniBuilder"];
        exports.megaTrapper.UPGRADES_TIER_3 = ["construct", "promenader"];
        exports.pen.UPGRADES_TIER_3 = ["stall", "autoPen"];

    exports.single.UPGRADES_TIER_2 = ["duo", "sniperSingle", "flankSingle", "singlePound"];
        exports.duo.UPGRADES_TIER_3 = ["bentSingle"];
        exports.sniperSingle.UPGRADES_TIER_3 = ["xHunter"];
        exports.singlePound.UPGRADES_TIER_3 = ["singleDestroy"];
        exports.flankSingle.UPGRADES_TIER_3 = ["single3"];

    exports.minishot.UPGRADES_TIER_2 = ["artillery", "tripleShot", "pollinator"];
        exports.pollinator.UPGRADES_TIER_3 = ["beekeeper", "swarmer"/*, "vortex"*/];

    exports.pelleter.UPGRADES_TIER_2 = ["gunner", "cruiser", "borer"];
        exports.pelleter.UPGRADES_TIER_3 = ["overgunner", "gunnerTrapper"];
        exports.borer.UPGRADES_TIER_3 = ["nailgun", "autoBorer"];

    exports.inceptioner.UPGRADES_TIER_2 = ["directordrive", "mech"];
        exports.directordrive.UPGRADES_TIER_3 = ["overdrive", "spawnerdrive", "honchodrive"];
            exports.overdrive.UPGRADES_TIER_4 = ["overworker", "autodrive"];
        exports.mech.UPGRADES_TIER_3 = ["engineer", "mechGuard"];
    /*exports.whirlwind.UPGRADES_TIER_2 = ["tornado", "hurricane"],
        exports.whirlwind.UPGRADES_TIER_3 = ["hexaWhirl", "munition", "whirl3", "whirlGuard", "prophet", "vortex"],
        exports.tornado.UPGRADES_TIER_3 = ["megaTornado", "tempest", "thunderbolt"],
        exports.hurricane.UPGRADES_TIER_3 = ["typhoon", "blizzard"],*/

     //if (c.ARMS_RACE) { exports.basic.UPGRADES_TIER_4.push("healer",); }
    if (c.ARMS_RACE) { 
        exports.autodrive.UPGRADES_TIER_5 = ["miniEliteSpawner"];

        exports.autoHybrid.UPGRADES_TIER_5 = ["miniEliteDestroyer"];
    }

  // UNUSED TANK UPGRADE PATHS
            exports.stabilizer.UPGRADES_TIER_4 = ["equilibrator"];
  // BETA TANK UPGRADE PATHS
            exports.wallBuilder.UPGRADES_TIER_4 = ["wallEngineer"];