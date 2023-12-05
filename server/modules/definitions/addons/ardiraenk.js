// An addon is guaranteed to run only after all groups are loaded.
// This is helpful, if your group relies on all other definitions already being loaded.
// Addons that are dependant on other addons should be named something like
// "[PARENT ADDON NAME]-[EXTENSION NAME].js", to make sure that it would run after that addon ran.

const { base, statnames, gunCalcNames } = require('../constants.js');
const { combineStats, dereference } = require('../facilitators.js');
const g = require('../gunvals.js');

Math.seed = function(s) {
    var mask = 0xffffffff;
    var m_w  = (123456789 + s) & mask;
    var m_z  = (987654321 - s) & mask;

    return function() {
      m_z = (36969 * (m_z & 65535) + (m_z >>> 16)) & mask;
      m_w = (18000 * (m_w & 65535) + (m_w >>> 16)) & mask;

      var result = ((m_z << 16) + (m_w & 65535)) >>> 0;
      result /= 4294967296;
      return result;
    }
}
var seed = Math.random()*1e16; // can be any number
//console.log('[ardiraenk.js] SEED: '+seed)

module.exports = ({ Class }) => {

	// This addon is disabled by default.
	// You can also disable addons by not making them end with '.js'
	// If you want to enable, simply make the line below just not run.
	//return console.log('[ardiraenk.js] Addon disabled by default');
	let defACCEL = ((Math.random()*seed % 0.5) + 0.75),
	    defSPEED = ((Math.random()*seed % 0.5) + 0.75),
	    defHEALTH = ((Math.random()*seed % 0.5) + 0.75),
	    defDAMAGE = ((Math.random()*seed % 0.5) + 0.75),
	    defPENETRATION = ((Math.random()*seed % 0.5) + 0.75),
	    defSHIELD = ((Math.random()*seed % 0.5) + 0.75),
	    defREGEN = ((Math.random()*seed % 0.5) + 0.75),
	    defFOV = ((Math.random()*seed % 0.5) + 0.75),
	    defDENSITY = ((Math.random()*seed % 0.5) + 0.75),
	    defPUSHABILITY = ((Math.random()*seed % 0.5) + 0.75),
	    defHETERO = ((Math.random()*seed % 4) + 1);
	let genReload = ((Math.random()*seed % 0.5) + 0.75),
	    genRecoil = ((Math.random()*seed % 0.5) + 0.75),
	    genShudder = ((Math.random()*seed % 0.5) + 0.75),
	    genSize = ((Math.random()*seed % 0.5) + 0.75),
	    genHealth = ((Math.random()*seed % 0.5) + 0.75),
	    genDamage = ((Math.random()*seed % 0.5) + 0.75),
	    genPen = ((Math.random()*seed % 0.5) + 0.75),
	    genSpeed = ((Math.random()*seed % 0.5) + 0.75),
	    genMaxSpeed = ((Math.random()*seed % 0.5) + 0.75),
	    genDenstiy = ((Math.random()*seed % 0.5) + 0.75),
	    genSpray = ((Math.random()*seed % 0.5) + 0.75),
	    genResist = ((Math.random()*seed % 0.5) + 0.75);
	let genStats = { reload: genReload, recoil: genRecoil, shudder: genShudder, size: genSize, health: genHealth, damage: genDamage, pen: genPen, speed: genSpeed, maxSpeed: genMaxSpeed, density: genDenstiy, spray: genSpray, resist: genResist };
	let mutateGun = Math.random()*seed,
	    mutateLap = Math.random()*seed,
	    mutateDroneMax = Math.random()*seed;
	// This adds the tank to the definitions and to the fun menu
	Class.ardiraenkBasic = {
		PARENT: ["genericTank"],
		LABEL: "ˈOja",
	    BODY: {
            ACCELERATION: base.ACCEL * defACCEL,
            SPEED: base.SPEED * defSPEED,
            HEALTH: base.HEALTH * defHEALTH,
            DAMAGE: base.DAMAGE * defDAMAGE,
            PENETRATION: base.PENETRATION * defPUSHABILITY,
            SHIELD: base.SHIELD * defSHIELD,
            REGEN: base.REGEN * defREGEN,
            FOV: base.FOV * defFOV,
            DENSITY: base.DENSITY * defDENSITY,
            PUSHABILITY: defPUSHABILITY,
            HETERO: defHETERO,
	    },
		GUNS: [],
	};
	Class.ardiraenkBasic.GUNS.push({
	        POSITION: [5, (mutateLap % 3) + 4, 1, 12, 0, 0, 0],
	    },{
	        POSITION: [5, (mutateGun % 3) + 7, 1, 7, 0, 0, 0],
	    },{
	        POSITION: [5, (mutateGun % 3) + 7, 1, 17, 0, 0, 0],
	        PROPERTIES: {
	            SHOOT_SETTINGS: combineStats([g.basic, genStats]),
	            TYPE: "bullet"
	        },
	    },);
	Class.ardiraenkSniper = {
		PARENT: ["genericTank"],
		LABEL: "Qɨˈmɛŋi",
	    BODY: {
            ACCELERATION: base.ACCEL * defACCEL,
            SPEED: base.SPEED * defSPEED,
            HEALTH: base.HEALTH * defHEALTH,
            DAMAGE: base.DAMAGE * defDAMAGE,
            PENETRATION: base.PENETRATION * defPUSHABILITY,
            SHIELD: base.SHIELD * defSHIELD,
            REGEN: base.REGEN * defREGEN,
            FOV: base.FOV * defFOV * 1.2,
            DENSITY: base.DENSITY * defDENSITY,
            PUSHABILITY: defPUSHABILITY,
            HETERO: defHETERO,
	    },
		GUNS: [],
	};
	Class.ardiraenkSniper.GUNS.push({
	        POSITION: [5, (mutateLap % 3) + 4, 1, 12, 0, 0, 0],
	    },{
	        POSITION: [5, (mutateGun % 3) + 7, 1, 7, 0, 0, 0],
	    },{
	        POSITION: [11, (mutateGun % 3) + 7, 1, 17, 0, 0, 0],
	        PROPERTIES: {
	            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, genStats]),
	            TYPE: "bullet"
	        },
	    },);
	Class.ardiraenkDirector = {
		PARENT: ["genericTank"],
		LABEL: "ˈΧɛˈpuŋi",
        STAT_NAMES: statnames.drone,
	    BODY: {
            ACCELERATION: base.ACCEL * defACCEL,
            SPEED: base.SPEED * defSPEED,
            HEALTH: base.HEALTH * defHEALTH,
            DAMAGE: base.DAMAGE * defDAMAGE,
            PENETRATION: base.PENETRATION * defPUSHABILITY,
            SHIELD: base.SHIELD * defSHIELD,
            REGEN: base.REGEN * defREGEN,
            FOV: base.FOV * defFOV * 1.1,
            DENSITY: base.DENSITY * defDENSITY,
            PUSHABILITY: defPUSHABILITY,
            HETERO: defHETERO,
	    },
		GUNS: [],
	};
	Class.ardiraenkDirector.GUNS.push({
	        POSITION: [4, (mutateLap % 3) + 8, 1.2, 11, 0, 0, 0],
	    },{
	        POSITION: [4, (mutateGun % 3) + 10, -0.9, 7, 0, 0, 0],
	    },{
	        POSITION: [4, (mutateGun % 3) + 12, 1.2, 15, 0, 0, 0],
	        PROPERTIES: {
	            SHOOT_SETTINGS: combineStats([g.drone, genStats]),
	            TYPE: "drone",
	            AUTOFIRE: true,
	            SYNCS_SKILLS: true,
	            WAIT_TO_CYCLE: true,
	            STAT_CALCULATOR: gunCalcNames.drone,
	            MAX_CHILDREN: Math.round(mutateDroneMax % 6) + 4,
	        },
	    },);
	Class.fun.UPGRADES_TIER_0.push("ardiraenkBasic");
	    Class.ardiraenkBasic.UPGRADES_TIER_1 = ["ardiraenkSniper", "ardiraenkDirector"];

	console.log('[ardiraenk] kha diep a yîngî nyangî..'); // A tank has been created..
	console.log('[ardiraenk] ARDIRAENK BODY STAT: '+ Math.round(defACCEL * 100 - 0.5)/100 + ', ' + Math.round(defSPEED * 100 - 0.5)/100 + ', ' + Math.round(defHEALTH * 100 - 0.5)/100 + ', ' + Math.round(defDAMAGE * 100 - 0.5)/100 + ', ' + Math.round(defPENETRATION * 100 - 0.5)/100 + ', ' + Math.round(defSHIELD * 100 - 0.5)/100 + ', ' + Math.round(defREGEN * 100 - 0.5)/100 + ', ' + Math.round(defFOV * 100 - 0.5)/100 + ', ' + Math.round(defDENSITY * 100 - 0.5)/100 + ', ' + Math.round(defPUSHABILITY * 100 - 0.5)/100 + ', ' + Math.round(defHETERO * 100 - 0.5)/100);
	console.log('[ardiraenk] ARDIRAENK GUN STAT: '+ Math.round(genReload * 100 - 0.5)/100 + ', ' + Math.round(genRecoil * 100 - 0.5)/100 + ', ' + Math.round(genShudder * 100 - 0.5)/100 + ', ' + Math.round(genSize * 100 - 0.5)/100 + ', ' + Math.round(genHealth * 100 - 0.5)/100 + ', ' + Math.round(genDamage * 100 - 0.5)/100 + ', ' + Math.round(genPen * 100 - 0.5)/100 + ', ' + Math.round(genSpeed * 100 - 0.5)/100 + ', ' + Math.round(genMaxSpeed * 100 - 0.5)/100 + ', ' + Math.round(genDenstiy * 100 - 0.5)/100 + ', ' + Math.round(genSpray * 100 - 0.5)/100 + ', ' + Math.round(genResist * 100 - 0.5)/100);
};