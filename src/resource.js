

/////////////LOCAL STORAGE//////////////////
var ls = cc.sys.localStorage;
storedHighScore = "0";
if(ls.getItem("highScore")!=null){
	storedHighScore = ls.getItem("highScore");
}
storedMusicVolume = 0.5;
if (ls.getItem("musicVolume")!=null){
	storedMusicVolume = ls.getItem("musicVolume");
}
////////////LOCAL STORAGE/////////////////////

var initCheck = {
	UNDER:false,
	MAIN:false,
	GAME:false,
	HOWTO:false,
	INFORMATION:false,
	SETTINGS:false,
	GAMEOVER:false,
	PAUSE:false,
}

var track = {
	curScore:0,
	highScore:storedHighScore,//need to read from ls
}

var controls = {
	musicVolume = storedMusicVolume,//need to read from ls
}

var deckimg = {
	/*
	Back:

	AS:
	KS:
	QS:
	JS:
	10S:
	9S:
	8S:
	7S:
	6S:
	5S:
	4S:
	3S:
	2S:
	1S:

	AH:
	KH:
	QH:
	JH:
	10H:
	9H:
	8H:
	7H:
	6H:
	5H:
	4H:
	3H:
	2H:
	1H:

	AC:
	KC:
	QC:
	JC:
	10C:
	9C:
	8C:
	7C:
	6C:
	5C:
	4C:
	3C:
	2C:
	1C:

	AD:
	KD:
	QD:
	JD:
	10D:
	9D:
	8D:
	7D:
	6D:
	5D:
	4D:
	3D:
	2D:
	1D:
	*/
}


var res = {

	Background_png : "res/temp/bg.png",
	TTRCGamesLogo_png: "res/temp/bg.png",

	BackgroundMusic_wav: "res/temp/turbobg.wav",
	GameOverSound:"res/temp/normalgreat.wav",

	HomeButton_png: "res/temp/home.png",
	HomeButtonPressed_png:"res/temp/home.png",

	SettingsButton_png:"res/temp/missred.png",
	SettingsButtonPressed_png:"res/temp/missred.png",

	PauseButton_png:"res/temp/pause.png",
	PauseButtonPressed_png:"res/temp/pause.png",

	HowToButton_png:"res/temp/greatpink.png",
	HowToButtonPressed_png:"res/temp/greatpink.png",

	PlayButton_png:"res/temp/perfectgreen.png",
	PlayButtonPressed_png:"res/temp/perfectgreen.png",

	ResumeButton_png:"res/temp/perfectgreen.png",
	ResumeButtonPressed_png:"res/temp/perfectgreen.png",

	InformationButton_png:"res/temp/credits.png",
	InformationButtonPressed_png:"res/temp/credits.png",

	ResetButton_png:"res/temp/greatpink.png",
	ResetButtonPressed_png:"res/temp/greatpink.png",

	SkipButton_png:"res/temp/play.png",
	SkipButtonPressed_png: "res/temp/play.png",

	BackofCard_png : "res/temp/pause.png",

	Checked_png:"res/temp/Checked.png",
	CheckedDisabled_png:"res/temp/Checked.png",
	CheckedSelected_png:"res/temp/Checked.png",
	Unchecked_png:"res/temp/Checked.png",
	UncheckedDisabled_png:"res/temp/Checked.png",
	UncheckedSelected_png:"res/temp/Checked.png",

	Title_png:"res/temp/perfectgreen.png",
	animatedTitle_plist:"res/temp/animatedteal/sprites.plist",
	animatedTitle_png: "res/temp/animatedteal/sprites.png",

	HighScoreSymbol_png : "res/temp/credits.png",
	YourScoreSymbol_png : "res/temp/play.png",

	Blockt_BMFont : "res/temp/BlocktBM.fnt",

    HelloWorld_png : "res/HelloWorld.png",
    CloseNormal_png : "res/CloseNormal.png",
    CloseSelected_png : "res/CloseSelected.png",
};

var g_resources = [];
for (var i in res) {
    g_resources.push(res[i]);
}