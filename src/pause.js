
var PauseLayer = cc.Layer.extend({
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


        //PAUSE TITLE
        var pauseLabel = new cc.LabelBMFont("PAUSE", res.Blockt_BMFont);
        // position the label on the center of the screen
        pauseLabel.x = size.width / 2;
        pauseLabel.y = size.height/4*3;
        pauseLabel.color = cc.color(100,150,150);
        pauseLabel.setScale(normalizescale);
        // add the label as a child to this layer
        this.addChild(pauseLabel, 5);


        //buttons
        var ResumeButton = new cc.MenuItemImage(
            res.ResumeButton_png,
            res.ResumeButtonPressed_png,
            function () {
                Unpause();
            }, this);
        ResumeButton.attr({
            x: size.width/3*2,
            y: size.height/2,
            anchorX: 0.5,
            anchorY: 0.5,
            scale:0.8*normalizescale,
        });

        var MainMenuButton = new cc.MenuItemImage(
            res.HomeButton_png,
            res.HomeButtonPressed_png,
            function(){
                GoToMainMenu();
            },this);
        MainMenuButton.attr({
            x : size.width/3,
            y : size.height/2,
            anchorX : 0.5,
            anchorY : 0.5,
            scale: 0.8*normalizescale,
        });

        var menu = new cc.Menu(ResumeButton,MainMenuButton);
        menu.x = 0;
        menu.y = 0;
        this.addChild(menu,1);

        /////////////////
        return true;
    },//ctor
});

var GoToMainMenu = function(){
    //resetting some stuff
    initCheck.PAUSE = false;
    initCheck.GAME = false;

    //changing to menu scene
    var scene = new MenuScene;
    cc.director.runScene(scene);
};

var Unpause = function(){
    //reset pauseinitialized
    initCheck.PAUSE = false;

    cc.director.popScene();
};


//////////////////////////////////////////////
///////////////////////////////////////////////
var PauseScene = cc.Scene.extend({
    onEnter:function () {
        this._super();

        if (initCheck.PAUSE == false){
            initCheck.PAUSE = true;
            var layer = new PauseLayer();
            this.addChild(layer);
        }
    }
});

