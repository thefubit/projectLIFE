
var MenuLayer = cc.Layer.extend({
    backgroundPic:null,

    //for animated title
    //sprite:null,
    spriteSheet:null,
    animatedAction:null,
    runningAction:null,
    TitleSprite:null,


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


        //////////////////////////////////////////////
        //////////////////BUTTONS//////////////////

        var PlayButton = new cc.MenuItemImage(
            res.PlayButton_png,
            res.PlayButtonPressed_png,
            function(){
                StartGame();
            },this);
        PlayButton.attr({
            x:size.width/2,
            y:size.height/2,
            anchorX:0.5,
            anchorY:0.5,
            scale:normalizescale,
        });

        var HowToButton = new cc.MenuItemImage(
            res.HowToButton_png,
            res.HowToButtonPressed_png,
            function(){
                GoToHowTo();
            },this);
        HowToButton.attr({
            x:size.width/2,
            y:size.height/3,
            anchorX:0.5,
            anchorY:0.5,
            scale: normalizescale,
        });

        var SettingsButton = new cc.MenuItemImage(
            res.SettingsButton_png,
            res.SettingsButtonPressed_png,
            function(){
                GoToSettings();
            },this);
        SettingsButton.attr({
            x:size.width/2,
            y:size.height/4,
            anchorX:0.5,
            anchorY:0.5,
            scale:normalizescale,
        });

        var InfoButton = new cc.MenuItemImage(
            res.InformationButton_png,
            res.InformationButtonPressed_png,
            function(){
                GoToInfo();
            },this);
        InfoButton.attr({
            x:size.width/2,
            y:size.height/5,
            anchorX:0.5,
            anchorY:0.5,
            scale:normalizescale,
        });

        var menu = new cc.Menu(PlayButton,HowToButton,SettingsButton,InfoButton);
        menu.x = 0;
        menu.y = 0;
        this.addChild(menu,1);

        ///////////////BUTTONS///////////////////////
        //////////////////////////////////////////
        ////////////////TITLE/////////////////////////


        /*
        cc.spriteFrameCache.addSpriteFrames(res.animatedTitle_plist);

        this.spriteSheet = new cc.SpriteBatchNode(res.animatedTitle_png);
        this.addChild(this.spriteSheet);

        var animFrames = [];
        for (var i = 1; i< _____________; i++){
            var str = "title"+1+".png";
            var frame = cc.spriteFrameCache.getSpriteFrame(str);
            animFrames.push(frame);
        }

        var animation = new cc.Animation(animFrames, 0.1);

        //repeating forever
        this.runningAction = new cc.RepeatForever(new cc.Animate(animation));
        var filename = "#title1.png";
        this.TitleSprite = new cc.sprite(filename);

        this TitleSprite.attr({
            x:size.width/2, 
            y:size.height/10,
            scale: normalizescale,
        });
        this.TitleSprite.runAction(this.runningAction);
        this.spriteSheet.addchild(this.TitleSprite);
        */

        var temptitle = new cc.Sprite.create(res.Title_png);
        temptitle.attr({
            x:size.width/2,
            y:size.height/10,
            anchorX:0.5,
            anchorY:0.5,
            scale:normalizescale,
        });
        this.addChild(temptitle,0);


        //////////////////TITLE/////////////////////
        /////////////////////////////////////////

        ///////////////////
        return true;
    }//ctor
});

var StartGame = function(){
    //check for initialized= 
    initCheck.MAIN = false;
    var scene = new GameScene();
    cc.director.runScene(new cc.TransitionFade(0.5,scene));
};

var GoToHowTo = function(){
    //check for initialization

    var scene = new HowToScene();
    cc.director.pushScene(scene);


};

var GoToSettings = function(){
    //check for initialization

    var scene = new SettingsScene();
    cc.director.pushScene(scene);

};

var GoToInfo = function(){
    //check for init

    var scene = new InfoScene();
    cc.director.pushScene(scene);
};



//////////////////////////////////////////////
///////////////////////////////////////////////
var MenuScene = cc.Scene.extend({
    onEnter:function () {
        this._super();

        if(initCheck.MAIN == false){
            initCheck.MAIN = true;
            var layer = new MenuLayer();
            this.addChild(layer);
        }
    }
});

