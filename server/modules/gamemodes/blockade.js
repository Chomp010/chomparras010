let calculatePoints2 = wave => 2 + wave * 2;
// Each wave has a certain amount of "points" that it can spend on bosses, calculated above.
// Each boss costs an amount of points.
// It will always buy as many bosses until it has no points or else can't spend them.
// It picks a boss to buy by filtering the list of boss choices by if they are affordable.
// Then it picks a boss at random, with all choices being equally likely.

class Blockade {
    constructor() {
        this.bossChoices = [
            // [ cost , definition reference ],

            //elite crashers

            [  2, "eliteDestroyer"],
            [  2, "eliteGunner"],
            [  2, "eliteSprayer"],
            [  2, "eliteBattleship"],
            [  2, "eliteSpawner"],
            [  2, "eliteTrapGuard"],
            [  2, "eliteSpinner"],
            [  1, "eliteBasic"],
            [  3, "eliteRifle"],

            //elite tanks
            [  2, "eliteSkimmer"],

            //mysticals
            [  1, "sorcerer"],
            [  2, "summoner"],
            [  2, "enchantress"],
            [  2, "exorcistor"],
            [  3, "shamanBoss"],
            //imperial
            /*[  1, "variatonEggImperial"],
            [  2, "variatonSquareImperial"],
            [  2, "variatonTriangleImperial"],
            [  2, "variatonPentagonImperial"],
            [  3, "variatonHexagonImperial"],
            //territorials
            [  1, "variatonEggTerritorial"],
            [  2, "variatonSquareTerritorial"],
            [  2, "defender"],
            [  2, "variatonPentagonTerritorial"],
            [  3, "variatonHexagonTerritorial"],*/

            //army sentries
            [ .5, "armySentryTrap"],
            [ .5, "armySentryGun"],
            [ .5, "armySentrySwarm"],
            [ .5, "armySentryRanger"],
            //army soldier
            //[ .5, "armySoldierGun"],
            //[ .5, "armySoldierSwarm"],

            //terrestrials
            [ 15, "ares"],
            [ 15, "gersemi"],
            [ 15, "ezekiel"],
            [ 15, "eris"],
            [ 15, "selene"],
            //titans
            [ 15, "titanHowler"],
            [ 15, "titanGlider"],
            [ 15, "titanInvoker"],
            //celestials
            [ 35, "paladin"],
            [ 35, "freyja"],
            [ 35, "zaphkiel"],
            [ 35, "nyx"],
            [ 35, "theia"],
            [ 35, "kairos"],

            //eternals
            [ 99 /*fucking mid*/, "legionaryCrasher"],
            [100, "kronos"],
            [100, "ragnarok"],
            [100, "hyperion"],
        ];
        this.bossChoicesBobOnly = [
            // [ cost , definition reference ],

            //army sentries
            [ 3, "autoBobBoss"],
            [ 2, "bobBoss"],
            [ 1, "armyBobBoss"],
        ];
        this.titanBossChoices = ["titanHowler", "titanGlider", "titanInvoker"];
        this.terrestrialBossChoices = ["ares", "gersemi", "ezekiel", "eris", "selene"];
        this.bigFodderChoices = ["sentryGun", "sentrySwarm", "sentryTrap", "squareGunSentry", "squareSwarmSentry", "triangleGunSentry"/*, "shinySentryGun"*/];
        this.smallFodderChoices = ["crasher", "bladeCrasher", "eggCrasher"];
        this.waves = this.generateWaves();
        this.waveId = -1;
        this.boltWaveId = 0;
        this.gameActive = true;
        this.phaseBreak = false;
        this.phaseActive = false;
        this.timer = 0;
        this.phaseTimer = 1000;
        this.phaseStep = 0;
        this.statisticTimer = 6000;
        this.remainingBolts = 0;
        this.boltCollected_BLUE = 0;
        this.boltCollected_GREEN = 0;
        this.teamHighBolts = 0;
        this.currentCost = 0;
        this.teamWon = 0;
        this.remainingEnemies = 0;;
    }
    loopStatistic() {
        if (this.statisticTimer <= 0) {
            this.statisticTimer = 6000;
        sockets.broadcast(`Number of bolts stocked by: BLUE: ${this.boltCollected_BLUE} - GREEN: ${this.boltCollected_GREEN}.`);

        //if the timer has not ran out and there arent any remaining enemies left, decrease the timer
        } else if (this.gameActive) {
            this.statisticTimer -= 1 / roomSpeed;
        }
    }
    teamWin(team) {
        if (this.gameActive) {
            this.gameActive = false;
            sockets.broadcast(getTeamName(team) + ' has won the game!');
            setTimeout(closeArena, 3000);
        }
    }
    generateWaves() {
        let waves = [];
        for (let i = 0; i < 100; i++) {
            let wave = [],
                points = calculatePoints2(i),
                selection = ran.chooseChance(10, 0),
                choices = [this.bossChoices, this.bossChoicesBobOnly][selection];

            while (points > 0 && choices.length) {
                choices = choices.filter(([ cost ]) => cost <= points);
                let [ cost, boss ] = ran.choose(choices);
                points -= cost;
                wave.push(boss);
            }

            waves.push(wave);
        }
        return waves;
    }

    spawnDominator(loc, team, type = false) {
    type = type ? type : Class.ikeBase //ran.choose(siegeDominatorTypes)
    let o = new Entity(loc);
    o.define(type);
    o.team = team;
    o.color = getTeamColor(team);
        if (this.gameActive) {
            o.on('dead', () => {
                    if (o.team === -2) { //TEAM_ENEMIES
                        this.spawnDominator(loc, -1, type)
                        room.setType('dom1', loc)
                        sockets.broadcast('A dominator has been captured by BLUE!')
                        this.teamWon = -1;
                    } else {
                        this.spawnDominator(loc, -2, type)
                        room.setType('dom2', loc)
                        sockets.broadcast('A dominator has been captured by GREEN!')
                        this.teamWon = -2;
                    }
                })};
}

    playerResult(result = true) {
        if (this.gameActive) {
            this.gameActive = false;
            let lastresult = (result == true) ? 'won' : 'lost';
            sockets.broadcast(getTeamName(-1) + ' has ' + lastresult + ' the game!');
            setTimeout(closeArena, 1500);
        }
    }
    spawnEnemyWrapper(loc, type, team, spot = false, isTitan = false, level = 1, skillId = 0) {
        spot = spot ? spot : "nest";
        let lv = (1 + (level % 2));
        let sklv = (7 + lv * 2);
        let enemy = new Entity(loc);
        enemy.define(type);
        enemy.team = -team;
        if (isTitan == true) { enemy.SIZE = level <= 5 ? [35, 40, 45, 60, 75][level-1] :  50 * (level * 5)}
        enemy.FOV = 10;
        /*if (isTitan == true) { enemy.HEALTH = 100 + sklv * 100; }
        if (isTitan == true) { enemy.SHIELD = sklv - 7; }
        if (isTitan == true) { enemy.DAMAGE = sklv - 4; }
        if (isTitan == true) { enemy.SPEED = sklv / 10 - 0.15; }
        if (isTitan == true) { enemy.SKILL = [sklv, sklv, sklv, sklv, sklv, sklv, sklv, sklv, sklv, sklv]; }*/
        enemy.refreshBodyAttributes();
        enemy.controllers.push(new ioTypes.blockadeAI(enemy, { spot: spot,}));

        this.remainingEnemies++;
        enemy.on('dead', () => {
            //this enemy has been killed, decrease the remainingEnemies counter
            //if afterwards the counter happens to be 0, announce that the wave has been defeated
            if (!--this.remainingEnemies) {
                sockets.broadcast(`Wave ${this.waveId + 1} is defeated!`);
            }
        });
        
        return enemy;
    }
        spawnCoinWrapper(loc, type) {
        let coin = new Entity(loc);
        coin.define(type);
        coin.team = TEAM_ENEMIES;
        coin.refreshBodyAttributes();

        coin.on('dead', () => {
            //this coin has been killed, decrease the remainingEnemies counter
            let killers = [];
            for (let instance of coin.collisionArray) {
                if (isPlayerTeam(instance.team) && coin.team !== instance.team) {
                    killers.push(instance);
                }
            }

            let killer = ran.choose(killers);
            killer = killer ? killer.master.master : { team: TEAM_ROOM, color: c.TEAM ? 3 : 12 };

            let newTeam = killer.team;
            if (newTeam !== TEAM_ENEMIES) {
              if (newTeam === -1) {
                this.boltCollected_BLUE += 1;
                //killer.sendMessage("Bolts collected by BLUE: " + this.boltCollected_BLUE + ".");
              } else if (newTeam === -2) {
                this.boltCollected_GREEN += 1;
                //killer.sendMessage("Bolts collected by GREEN: " + this.boltCollected_GREEN + ".");
              }
            };
            this.remainingBolts -= 1;
            //if afterwards the counter happens to be 0, announce that the wave has been defeated
            if (!this.remainingBolts) {
                this.statisticTimer -= 3000;
                if (this.boltCollected_BLUE >= 10 || this.boltCollected_GREEN >= 10 && this.phaseActive == false){
                    this.phaseActive = true;
                    sockets.broadcast(`The factory is opened! Collect more bolts to build your titan!`);
                } else {
                    sockets.broadcast(`No bolts has been repaired around the map!`);
                }
            }
        });
        
        return coin;
    }

    spawnWave(waveId, team, cost) {
        //yell at everyone
        sockets.broadcast(`Wave ${waveId + 1} has arrived!`);

        //spawn bosses
        for (let boss of this.waves[waveId]) {
            let spot = null,
                attempts = 0;
            do {
                spot = room.randomType('wav' + team);
            } while (dirtyCheck(spot, 500) && ++attempts < 30);

            let enemy = this.spawnEnemyWrapper(spot, boss, team, ["wav2", "wav1"][team - 1]);
            enemy.define({ DANGER: 25 + enemy.SIZE / 5 });
            enemy.isBoss = true;
        }

        //spawn fodder enemies
        for (let i = 0; i < this.waveId / 5; i++) {
            this.spawnEnemyWrapper(room.randomType('boss'), ran.choose(this.bigFodderChoices), team, ["wav2", "wav1"][team - 1]);
        }
        for (let i = 0; i < this.waveId / 2; i++) {
            this.spawnEnemyWrapper(room.randomType('boss'), ran.choose(this.smallFodderChoices), team, ["wav2", "wav1"][team - 1]);
        }
    }
    spawnCoinWave(amount, type) {
        //spawn bosses
        for (let i = 0; i < amount; i++) {
            let spot = null,
                attempts = 0;
            do {
                spot = room.randomType('nest');
            } while (dirtyCheck(spot, 500) && ++attempts < 30);

            let bolt = this.spawnCoinWrapper(spot, type);
            this.remainingBolts += 1;
        }
        //yell at everyone
        sockets.broadcast(`${this.remainingBolts} bolts has been repaired in the nest!`);
    }
    loopPhase() {
        if (this.phaseTimer <= 0) {
            
         if (this.phaseStep == 0) {
                        this.phaseTimer = 400;
                        this.phaseStep += 1;
                    //yell at everyone
                    if (this.boltCollected_BLUE > this.boltCollected_GREEN) {
                     this.teamHighBolts = 1;
                     this.currentCost = this.boltCollected_BLUE //Math.round(this.boltCollected_BLUE / 10 - 0.49);
                     sockets.broadcast('The factory is now busy! ' + getTeamName(-this.teamHighBolts) + ' has spended ' + this.boltCollected_BLUE + ' Bolts to build a titan!');
                     this.boltCollected_BLUE = 0;
                    } else if (this.boltCollected_BLUE < this.boltCollected_GREEN) {
                     this.teamHighBolts = 2;
                     this.currentCost = this.boltCollected_GREEN //Math.round(this.boltCollected_GREEN / 10  - 0.49);
                     sockets.broadcast('The factory is now busy! ' + getTeamName(-this.teamHighBolts) + ' has spended ' + this.boltCollected_GREEN + ' Bolts to build a titan!');
                     this.boltCollected_GREEN = 0;
                    } else {
                    sockets.broadcast('Both teams are draw! Only the highest amount of bolts can spawn titan!');
                    }
                } else if (this.phaseStep == 1) {
                    this.phaseTimer = 2000;
                    this.phaseStep = 0;
                    this.phaseActive = false;

                    let rb = ['Break time', 'Lunch time', 'Break time'];
                    sockets.broadcast(ran.choose(rb) + '!  We will be right back later!');

                    if (this.teamHighBolts != 0) {
                    let level = Math.round(this.currentCost / 10  - 0.49);
                    let selection = ran.chooseChance(1, 1);
                    let titantype = [ran.choose(this.titanBossChoices), ran.choose(this.terrestrialBossChoices)][selection]
                    sockets.broadcast('The ' + ['titan', 'terrestrial'][selection] + ' level ' + level + ' has been spawned by ' + getTeamName(-this.teamHighBolts) + '!');
                    this.spawnEnemyWrapper(room.randomType('wav' + this.teamHighBolts), titantype, this.teamHighBolts, ["wav2", "wav1"][this.teamHighBolts - 1], true, level, selection);
                    this.waveId++;
                    this.spawnWave(this.waveId, this.teamHighBolts, (this.currentCost % 10) + 1);
                    } else {
                    sockets.broadcast('No request yet! You may grab ur chance next time.');
                    }
                    this.currentCost = 0;
                    this.teamHighBolts = 0;
                }
        //if the timer has not ran out and there arent any remaining enemies left, decrease the timer
        } else if (this.gameActive) {
            this.phaseTimer -= 1 / roomSpeed;
        }
            if (this.phaseTimer == 300 && this.phaseStep == 0) {
                    if (!this.phaseBreak) { 
                       this.phaseBreak = true;
                       sockets.broadcast('10 Seconds remaining before the factory starts!');
                    }
                } else if (this.phaseTimer == 900 && this.phaseStep == 0) {
                    if (!this.phaseBreak) { 
                       this.phaseBreak = true;
                       sockets.broadcast('30 Seconds remaining before the factory starts!');
                    }
                } else if (this.phaseTimer == 1800 && this.phaseStep == 0) {
                    if (!this.phaseBreak) { 
                       this.phaseBreak = true;
                       sockets.broadcast('1 minute remaining before the factory starts!');
                    }
                } else { this.phaseBreak = false; }
    }
    //runs once when the server starts
    init() {
for (let team = 1; team < c.TEAMS + 1; team++) {
    for (let loc of room["dom" + team]) {
        this.spawnDominator(loc, -team);
    }
}
        console.log('Blockade initialized.');
    }

    //runs every second
    loop() {
        //the timer has ran out? reset timer and spawn the next wave
        if (this.teamWon != 0) {
            this.teamWin(this.teamWon);
        }
        if (this.timer <= 0) {
            this.timer = 300;
            this.boltWaveId += 1;
            let chance = this.boltWaveId;
            let selection = ran.chooseChance(chance + 2, chance * 1.1 - 1);
            let boltAmount = Math.round(3 + this.boltWaveId / 5);
            this.spawnCoinWave(boltAmount, [Class.hexagonBolt, Class.hexagonGear][selection]);

        //if the timer has not ran out and there arent any remaining enemies left, decrease the timer
        } else if (!this.remainingBolts) {
            this.timer -= 1 / roomSpeed;
        }
        if (this.phaseActive) {
            this.loopPhase();
        }
        this.loopStatistic();
    }
}

module.exports = { Blockade };
