
var InfoLayer = cc.Layer.extend({
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

        //title
        var CreditsLabel = new cc.LabelBMFont("INFORMATION",res.Blockt_BMFont);
        // position the label on the center of the screen
        CreditsLabel.x = size.width / 2;
        CreditsLabel.y = size.height/6*5;
        CreditsLabel.setScale(normalizescale);
        CreditsLabel.color = cc.color(100,150,150);
        // add the label as a child to this layer
        this.addChild(CreditsLabel, 5);


        //text stuff to say
        var EmailUs = new cc.LabelBMFont("Email Us At: ttrcgames@outlook.com",res.Blockt_BMFont);
        EmailUs.x = size.width/2;
        EmailUs.y = size.height/3*2;
        EmailUs.setScale(normalizescale);
        EmailUs.color = cc.color(100,150,150);
        this.addChild(EmailUs);


        //////////////BUTTONS///////////////////////
        var MainMenuButton= new cc.MenuItemImage(
            res.HomeButton_png,
            res.HomeButtonPressed_png,
            function () {
                ReturnToMainFromInfo();
            }, this);
        MainMenuButton.attr({
            x: size.width/2,
            y: size.height/3,
            anchorX: 0.5,
            anchorY: 0.5,
            scale : 0.8*normalizescale,
        });

        var menu = new cc.Menu(MainMenuButton);
        menu.x = 0;
        menu.y = 0;
        this.addChild(menu, 1);
        //////////////BUTTONS////////////////////////
        /////////////////////////////



        ///////////////////
        return true;
    },//ctor
});

var ReturnToMainFromInfo = function(){
    //reset initialized 
    initCheck.INFORMATION = false;

    cc.director.popScene();
}



//////////////////////////////////////////////
///////////////////////////////////////////////
var InfoScene = cc.Scene.extend({
    onEnter:function () {
        this._super();

        if (initCheck.INFORMATION == false){
            initCheck.INFORMATION = true;
            var layer = new InfoLayer();
            this.addChild(layer);
        }
    }
});

