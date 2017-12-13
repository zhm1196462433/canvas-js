(function() {

    var Hammer =window.Hammer= function() {
        this.x=150;
        this.y=150;
        this.width = 98;
        this.height = 77;
        this.image = game.R["hammer"];
    }

    Hammer.prototype.update=function(){
        var self = this;
        game.canvas.onmousemove = function(event){
            self.x = event.offsetX;
            self.y = event.offsetY;

        }
    }

    Hammer.prototype.render = function(isPress){
            if(isPress){
                game.ctx.save();          
                game.ctx.translate(this.x, this.y);
                game.ctx.rotate(Math.PI/180*330);
                game.ctx.drawImage(this.image, -29, -78, this.width, this.height);      
                game.ctx.restore();
            }else{
                game.ctx.drawImage(this.image, this.x-29, this.y-78, this.width, this.height);
            }
            
     }

})();