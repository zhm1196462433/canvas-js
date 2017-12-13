(function() {

    var Mouse =window.Mouse= function() {

         this.mousetype=[game.R["mouse1"],game.R["mouse2"],game.R["mouse3"],game.R["mouse4"],game.R["mouse5"]];
         this.mousenumber=parseInt(Math.random()*5);
         this.xtype=[143,329,527,114,332,531,108,329,553];
         this.ytype=[154,152,158,245,245,244,342,347,349];

         var self=this;
         do{
            this.xynumber=parseInt(Math.random()*9);
         }while(function(){

            for(var i=0;i<game.mousearr.length;i++){
                     
                if(game.mousearr[i].xynumber==self.xynumber){
                    return true;
                }
            }
            return false;
        }())

    game.mousearr.push(this);
              
              
    }

    Mouse.prototype.update=function(){
             
        for (var i = 0; i < game.mousearr.length; i++) {
                if(game.mousearr[i]==this){
                    game.mousearr.splice(i,1);
                }
            };
    }

    Mouse.prototype.render=function(){
        game.ctx.drawImage(this.mousetype[this.mousenumber], this.xtype[this.xynumber], this.ytype[this.xynumber]);
    }
    
})();