(function(){
    var SceneManager = window.SceneManager = function(){
        this.bindEvent();
    }
    SceneManager.prototype.enter = function(number){
        game.scene = number;
        switch(game.scene){
            // 游戏首页
            case 0:
            break;
            // 游戏进行时
            case 1:
            //game.mouse = new Mouse();
            game.background = new Background();
            game.hammer = new Hammer();
            game.score = new Score();
            break;
            //游戏结束
            case 2:
            document.getElementById("bg_music").pause();
             document.getElementById("gameover").load();
             document.getElementById("gameover").play();
            break;
            case 3:
            document.getElementById("bg_music").load();
            document.getElementById("bg_music").play();
            if(game.f1 == 0 && game.f ==-1){
                game.f1 = 4;
                game.f = 20;
                game.count = 0;
                game.frame = 0;
                game.mousearr =[];
            }
            game.ctx.drawImage(game.R["bg_canvas"],0,0,game.canvas.width,game.canvas.height);
            break; 
        }
    }
    SceneManager.prototype.updateAndRender = function(){
        switch(game.scene){
            case 0:
            game.ctx.drawImage(game.R["set_board"],0,0,750,550);
            game.ctx.drawImage(game.R["icon"],0,299,303,77,game.canvas.width  - 270,game.canvas.height/2,170,50);
             game.ctx.drawImage(game.R["icon"],14,693,172,65,game.canvas.width - 250,game.canvas.height -220,150,50);
             break;

            case 1:
             game.frame% 50==0 && game.f--;
             //game.f2++;
            game.ctx.drawImage(game.R["bg_canvas"],0,0,game.canvas.width,game.canvas.height);
            //创建老鼠
             game.frame % 50 == 0 && game.mousearr.length<9 &&(new Mouse());
            //删除老鼠
            game.frame % 170 == 0 && game.mousearr[0] && game.mousearr[0].update();
            //渲染所有老鼠
            for(var i = 0 ; i < game.mousearr.length ; i++){
                game.mousearr[i] &&  game.mousearr[i].render();
            }
            game.hammer.update();
            game.hammer.render(game.isPress);
            game.score.update();
            game.score.render();
            game.score.end();
            break;

            case 2:
            game.ctx.drawImage(game.R["bg_gameover"], 0,0,game.canvas.width,game.canvas.height);
            game.ctx.drawImage(game.R["icon"], 24, 163, 82, 25,game.canvas.width/2 -50,game.canvas.height -200,82,25);
            for (var i = 0; i < game.score.scoreArr.length; i++) {
                game.ctx.drawImage(game.R["icon"],25+(parseInt(game.score.scoreArr[i])*17.8), 216 , 17.8,25 , (game.canvas.width / 2 +50)+i*18, (game.canvas.height -200),17.8,25 );
            }
            game.ctx.drawImage(game.R["icon"],0,764,191,69,game.canvas.width/2 -100 ,game.canvas.height -150,191,69);
            break;

            case 3:
            game.frame% 50==0 && game.f1--;
            game.ctx.drawImage(game.R["bg_canvas"],0,0,game.canvas.width,game.canvas.height);
            if(game.f1 == 0){
                this.enter(1);
            }
            var num = game.f1 -1;
            game.ctx.drawImage(game.R["icon"],320+num*60,297,60,84,game.canvas.width/2-30,game.canvas.height/2-30,60,84);
        }
    } 
    SceneManager.prototype.bindEvent = function () {
        var self = this;
        game.canvas.onclick = function (event) {
            switch (game.scene){
                case 0 : 
                    var x = event.offsetX;
                    var y = event.offsetY;
                    if(x > game.canvas.width - 250 && x < game.canvas.width - 250 + 172 && y > game.canvas.height -220 && y < game.canvas.height -220 + 65){
                       document.getElementById("dj").load();
                       document.getElementById("dj").play();
                        self.enter(3);
                    }
                break;
                case 2 : 
                    var x = event.offsetX;
                    var y = event.offsetY;
                    if(x > game.canvas.width/2 -100 && x < game.canvas.width/2 -100 + 191 && y >game.canvas.height -150 && y < game.canvas.height -150 + 69){
                        self.enter(3);
                    }
                    break;
            }
           
        }
    }
})()