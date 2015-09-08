
var GameLayer = cc.Layer.extend({
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

        //initiating a deck
        var deck = {

            AS:1,
            KS:13,
            QS:12,
            JS:11,
            10S:10,
            9S:9,
            8S:8,
            7S:7,
            6S:6,
            5S:5,
            4S:4,
            3S:3,
            2S:2,
            1S:1,

            AH:1,
            KH:13,
            QH:12,
            JH:11,
            10H:10,
            9H:9,
            8H:8,
            7H:7,
            6H:6,
            5H:5,
            4H:4,
            3H:3,
            2H:2,
            1H:1,

            AC:1,
            KC:13,
            QC:12,
            JC:11,
            10C:10,
            9C:9,
            8C:8,
            7C:7,
            6C:6,
            5C:5,
            4C:4,
            3C:3,
            2C:2,
            1C:1,

            AD:1,
            KD:13,
            QD:12,
            JD:11,
            10D:10,
            9D:9,
            8D:8,
            7D:7,
            6D:6,
            5D:5,
            4D:4,
            3D:3,
            2D:2,
            1D:1,
            
        }

        //setting up a deck based on numbers
        var deck = {
            1:AS,
            2:2S,
            3:3S,
            4:4S,
            5:5S,
            6:6S,
            7:7S,
            8:8S,
            9:9S,
            10:10S,
            11:JS,
            12:QS,
            13:KS,

            14: AH,
            15:2H,
            16:3H,
            17:4H,
            18:5H,
            19:6H,
            20:7H,
            21:8H,
            22:9H,
            23:10H,
            24:JH,
            25:QH,
            26:KH,

            27:AC,
            28:2C,
            29:3C,
            30:4C,
            31:5C,
            32:6C,
            33:7C,
            34:8C,
            35:9C,
            36:10C,
            37:JC,
            38:QC,
            39:KC,

            40:AD,
            41:2D,
            42:3D,
            43:4D,
            44:5D,
            45:6D,
            46:7D,
            47:8D,
            48:9D,
            49:10D,
            50:JD,
            51:QD,
            52:KD,
        }

        var shuffledeck = [];

        //randomize an array
        for (i=1;i<53;i++){

        }

        //set a background
        this.backgroundPic = new cc.Sprite(res.background_png);
        this.backgroundPic.attr({
            x:size.width/2,
            y:size.height/2,
            scale:1,
        });
        this.addChild(this.backgroundPic,0);

        //////////////////
        return true;
    },//ctor
});

var PauseGame = function(){
    var scene - new PauseScene();
    cc.director.pushScene(scene);
};

var GameOver = function(){
    //reset some stuff
    initCheck.GAME = false;

    //launch gameover scene
    var scene = new GameOverScene();
    cc.director.runScene(new cc.TransitionFade(0.5,scene));
};

var setHighScore = function(ThisGameScore){
    if (ThisGameScore > track.highScore){
        track.highScore = ""+currentScore;
    }
    //setting local storage
    ls.setItem("highScore",highScore);
};



var findSolution = function (the4Cards){
    //need to iterate through all possible combos
    //the4Cards is an array of 4 numbers
    var firstcard = the4Cards[1];
    var secondcard = the4Cards[2];
    var thirdcard = the4Cards[3];
    var fourthcard = the4Cards[4];

    var allcombos = [];
    var hand = the4Cards;
    for (i = 0;i<256;i++){
        var tempcombo = [];
        for (j=0;j<4;j++){
            var temp1 = hand[j];
            for (k=0;k<3;k++){

                var temp2 = hand[k];
                temp1=[tempcombo[1],tempcombo[2].tempcombo[3]];
                for(l=0;l<2;l++){
                    temp2 = [tempcombo[2],tempcombo[3]];
                    tempcombo = [temp4[j]]//doesn't work because it doesnt delete the items that are first in line
                }
            }
        }

        
        allcombos[i].push(cardcombo);
        
    }

}


var checkAnswer = function(card1,card2, card3, card4, op1, op2 ,op3){

};


//////////////////////////////////////////////
///////////////////////////////////////////////
var GameScene = cc.Scene.extend({
    onEnter:function () {
        this._super();

        if(initCheck.GAME == false){
            initCheck.GAME = true;
            var layer = new GameLayer();
            this.addChild(layer);
        }
    }
});

