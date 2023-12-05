class GamemodeTimer {
    constructor() {
        this.gameActive = true;
        this.gameBreak = false;
        this.timer = 216000; //108000 = 1 HOUR
    }
    timeOut() {
        if (this.gameActive) {
            this.gameActive = false;
            sockets.broadcast('Time out!');
            setTimeout(closeArena, 1500);
        }
    }
    //runs every second
    loop() {
        if (this.timer <= 0) {
          this.timeOut();
        //if the timer has not ran out and there arent any remaining enemies left, decrease the timer
        } else if (this.gameActive) {
            this.timer -= 1 / roomSpeed;
        }
            if (this.timer == 1800) {
                    if (!this.gameBreak) { 
                       this.gameBreak = true;
                       sockets.broadcast('1 minutes before closing the arena!');
                    }
                } else if (this.timer == 9000) {
                    if (!this.gameBreak) { 
                       this.gameBreak = true;
                       sockets.broadcast('5 minutes before closing the arena!');
                    }
                } else if (this.timer == 27000) {
                    if (!this.gameBreak) { 
                       this.gameBreak = true;
                       sockets.broadcast('15 minutes before closing the arena!');
                    }
                } else if (this.timer == 54000) {
                    if (!this.gameBreak) { 
                       this.gameBreak = true;
                       sockets.broadcast('30 minutes before closing the arena!');
                    }
                } else if (this.timer == 108000) {
                    if (!this.gameBreak) { 
                       this.gameBreak = true;
                       sockets.broadcast('60 minutes before closing the arena!');
                    }
                } else { this.gameBreak = false; }
    
  }
}

module.exports = { GamemodeTimer };
