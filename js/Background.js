(function(){
    var Background=window.Background=function(){
       
    }
    Background.prototype.render=function(){
        game.ctx.drawImage(game.R["bg_canvas"], 0, 0);
    }
})();