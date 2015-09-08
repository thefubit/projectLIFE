
var SettingsLayer = cc.Layer.extend({
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

        ////////////////////////////////////////////
        /////////////////BUTTONS//////////////////////
        var MainMenuButton= new cc.MenuItemImage(
            res.HomeButton_png,
            res.HomeButtonPressed_png,
            function () {
                ReturnToMainFromSettings();
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

        //////////////////BUTTONS////////////////////////////
        ///////////////////////////////////////



        //settings title
        var settingsLabel = new cc.LabelBMFont("SETTINGS",res.Blockt_BMFont);
        // position the label on the center of the screen
        settingsLabel.x = size.width / 2;
        settingsLabel.y = size.height/6*5;
        settingsLabel.setScale(normalizescale);
        settingsLabel.color = cc.color(100,150,150);
        // add the label as a child to this layer
        this.addChild(settingsLabel, 5);


        //music symbol
        var MusicSymbol = new cc.Sprite.create(res.MusicSymbol_png);
        MusicSymbol.setAnchorPoint(cc.p(0.5,0.5));
        MusicSymbol.setPosition(cc.p(size.width/10*4,size.height/10*7));
        MusicSymbol.setScale(0.5*normalizescale);
        this.addChild(MusicSymbol,0);

        //music checkbox
        var MusicCheckBox = new ccui.CheckBox();
        MusicCheckBox.loadTextures(res.Unchecked_png, res.UncheckedSelected_png,res.Checked_png,res.CheckedSelected_png,res.CheckedDisabled_png);
        MusicCheckBox.x = (size.width/10*6);
        MusicCheckBox.y = (size.height/10*7);
        MusicCheckBox.setScale(0.5*normalizescale);
        MusicCheckBox.addEventListener(this.selectedEventMusic,this);

        // Checks to see if the music is on, if it is, the checkbox is automatically selected.
        if (musicVolume > 0){
            MusicCheckBox.setSelected(true);
        }                 

        //check for saved settings
        if(ls.getItem("Music")== '1'){
            MusicCheckBox.setSelected(true);
        }
        else if (ls.getItem("Music")=='0'){
            MusicCheckBox.setSelected(false);
        }

        this.addChild(MusicCheckBox);

        ///////////////////
        return true;
    },//

    //music checkbox function
    selectedEventMusic:function(sender,type){
        switch (type){

            case ccui.CheckBox.EVENT_UNSELECTED:
                controls.musicVolume = 0;
                cc.audioEngine.setMusicVolume(controls.musicVolume);
                ls.setItem("Music",'0');
                break;
            case ccui.CheckBox.EVENT_SELECTED:
                controls.musicVolume = 0.5;
                cc.audioEngine.setMusicVolume(controls.musicVolume);
                ls.setItem("Music","1");
                break;



        }//switch
    }//function



});

var ReturnToMainFromSettings = function(){
    //reset settings initialized
    initCheck.SETTINGS = false;
    cc.director.popScene();
}



//////////////////////////////////////////////
///////////////////////////////////////////////
var SettingsScene = cc.Scene.extend({
    onEnter:function () {
        this._super();

        if(initCheck.SETTINGS == false){
            initCheck.SETTINGS = true;
            var layer = new SettingsLayer();
            this.addChild(layer);
        }
    }
});

