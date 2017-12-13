(function(){
    var Score=window.Score=function(){
        this.x = 0;

    }
    Score.prototype.update = function(){
        this.scoreArr= [];
        this.scoreArr = parseInt(game.count).toString().split("");
    }
    Score.prototype.render = function(){
        game.ctx.drawImage(game.R["icon"], 24, 163, 82, 25,600,50,82,25);
        for (var i = 0; i < this.scoreArr.length; i++) {
            game.ctx.drawImage(game.R["icon"],25+(parseInt(this.scoreArr[i])*17.8), 216 , 17.8,25 , 690+i*18, 50,17.8,25 );
        };
        if(game.f == -1){
             game.ctx.fillText( "", 10,  100);
             return;
        }
        // game.ctx.fillStyle="red";
        game.ctx.font = "20px consolas";
        game.ctx.fillText( "倒计时  "+game.f, 10,  70);
    }
    Score.prototype.end = function(){
        if(game.f<0){
            game.sn.enter(2);
        }
    }
})();