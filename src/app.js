
var UnderLayer = cc.Layer.extend({
    backgroundPic:null,
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();

        /////////////////////////////
        // 2. add a menu item with "X" image, which is clicked to quit the program
        //    you may modify it.
        // ask the window size
        var size = cc.winSize;
        var normalizescale = 0.1;

        //set a background
        this.backgroundPic = new cc.Sprite(res.background_png);
        this.backgroundPic.attr({
            x:size.width/2,
            y:size.height/2,
            scale:1,
        });
        this.addChild(this.backgroundPic,0);

        //start playing background music
        cc.audioEngine.playMusic(res.Background_music,true);
        this.schedule(cc.audioEngine.setMusicVolume(musicVolume),1);


        //directly launch home page
        this.scheduleOnce(GoStraightToMenu(),2);

        ///////////////
        return true;
    },//ctor
});



var GoStraightToMenu = function(){
    var scene = new MenuScene();
    cc.director.pushScene(new cc.TransitionFade(0.5,scene));
};


//////////////////////////////////////////////
///////////////////////////////////////////////
var UnderScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new UnderLayer();
        this.addChild(layer);
    }
});

