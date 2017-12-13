(function(){
    var Game=window.Game=function(){
        this.canvas=document.getElementById("canvas");
        this.ctx=this.canvas.getContext("2d");
        this.isPress=false;
        this.count=0;
        this.scene = 0;

        var self=this;
        this.loadresources(function(){
            self.start();
        });
        this.bindEvent();
        document.getElementById("bg_music").load();
        document.getElementById("bg_music").play();
    }

    Game.prototype.loadresources=function(callback){
        this.R={
            "bg_canvas":"images/bg_canvas.png",
            "mouse1":"images/mouse1.png",
            "mouse2":"images/mouse2.png",
            "mouse3":"images/mouse3.png",
            "mouse4":"images/mouse4.png",
            "mouse5":"images/mouse5.png",
            "mouse6":"images/mouse6.png",
            "mouse7":"images/mouse7.png",
            "mouse8":"images/mouse8.png",
            "mouse9":"images/mouse9.png",
            "mouse10":"images/mouse10.png",
            "hammer":"images/hammer.png",
            "icon":"images/icon.png",
            "set_board":"images/set_board.png",
            "bg_gameover":"images/bg_gameover.png",
            "star":"images/star.png"
        }
        var count=0;
        var picAmount=Object.keys(this.R).length;
        for(var k in this.R){
            (function(self,src){
                self.R[k]=new Image();
                self.R[k].src=src;
                self.R[k].onload=function(){
                    count++;
                    self.clear();
                    self.ctx.font="30px 黑体";
                    self.ctx,textAlign="center";
                    self.ctx.fillText("正在加载资源"+count+"/"+picAmount, 300, 200);
                    if(count==picAmount){
                        callback();
                    }
                }
            })(this,this.R[k]);
        }
    }

    Game.prototype.clear = function(){
        this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
    }
    
    Game.prototype.start = function(){
        this.frame = 0;

        this.mousearr=[];
         
        var self = this;
      /*  this.background=new Background();
        this.hammer=new Hammer();
        this.score = new Score();*/
        this.sn = new SceneManager();
        this.sn.enter(0);
        this.f = 20;
        this.f1 = 4;
        // this.f2 = 0;

        this.timer = setInterval(function(){
            self.clear();
            self.frame++;
            // self.frame% 50==0 && self.f--;
            // self.frame% 60==0 && self.f1--;

            //渲染背景
            //self.background.render();

            //创建老鼠
           // self.frame % 50 == 0 && game.mousearr.length<9 &&(new Mouse());
            //删除老鼠
           // self.frame % 170 == 0 && self.mousearr[0] && self.mousearr[0].update();
            
            //渲染所有老鼠
          /*  for(var i = 0 ; i < self.mousearr.length ; i++){
                self.mousearr[i] &&  self.mousearr[i].render();
            }
*/
           /* game.hammer.update();
            game.hammer.render(self.isPress);*/

            self.ctx.fillStyle = "#333";
            self.ctx.textAlign = "left";
            game.ctx.font = "16px consolas";
            // self.ctx.fillText("帧编号" + self.frame , 10 , 20);

           /* self.score.update();
            self.score.render();
            self.score.end();*/
            self.sn.updateAndRender(self.scene);

        },20);
    }
    Game.prototype.bindEvent=function(){
        var self=this;
        document.onmousedown=function(event){
             document.getElementById("qj").load();
             document.getElementById("qj").play();
            self.isPress=true;
            for(i=0;i<self.mousearr.length;i++){
                if(self.hammer.x > self.mousearr[i].xtype[self.mousearr[i].xynumber] && self.hammer.x < self.mousearr[i].xtype[self.mousearr[i].xynumber]+120 && self.hammer.y > self.mousearr[i].ytype[self.mousearr[i].xynumber]+60 && self.hammer.y < self.mousearr[i].ytype[self.mousearr[i].xynumber]+140){
                        self.count++;    
                        document.getElementById("yun").load();
                        document.getElementById("yun").play();
                        self.mousearr[i].update();
                }
            }
        }
        document.onmouseup=function(event){
            self.isPress=false;
        }

    }
})();