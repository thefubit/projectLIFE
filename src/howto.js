
var HowToLayer = cc.Layer.extend({
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



        ///////////////////////////////////////////
        //////////////SCRIPT FOR INSTRUCTIONS///////////////
        //each tap will progress the script one line
        //have it smoothly animated
        //important to teach people how to play
        
        /*
        Welcome to the game of 24

        You are dealt four cards

        You must use + - X / to make 24

        In this game...

        J = 11

        Q = 12

        K = 13

        A = 1

        For example...

        **deal 4 cards **

        1 2 3 4

        2 * 1 = 2

        3 * 4 = 12

        12 * 2 = 24

        And that's it!

        Start playing and practice your math skills!




        */
        //////////////SCRIPT//////////////////
        ///////////////////////////////







        ////////////////
        return true;
    },//ctor
});

var ReturnToMainFromHowTo = function(){
    //reset init
    initCheck.MAIN = false;

    cc.director.popScene();
}



//////////////////////////////////////////////
///////////////////////////////////////////////
var HowToScene = cc.Scene.extend({
    onEnter:function () {
        this._super();

        if(initCheck.MAIN == false){
            initCheck.MAIN = true;
            var layer = new HowToLayer();
            this.addChild(layer);
        }
    }
});

