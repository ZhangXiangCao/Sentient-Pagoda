gdjs.MenuCode = {};
gdjs.MenuCode.localVariables = [];
gdjs.MenuCode.GDBGObjects1= [];
gdjs.MenuCode.GDBGObjects2= [];
gdjs.MenuCode.GDPlayObjects1= [];
gdjs.MenuCode.GDPlayObjects2= [];
gdjs.MenuCode.GDLightObjects1= [];
gdjs.MenuCode.GDLightObjects2= [];
gdjs.MenuCode.GDDobby_9595Objects1= [];
gdjs.MenuCode.GDDobby_9595Objects2= [];
gdjs.MenuCode.GDNewSpriteObjects1= [];
gdjs.MenuCode.GDNewSpriteObjects2= [];
gdjs.MenuCode.GDNewSprite2Objects1= [];
gdjs.MenuCode.GDNewSprite2Objects2= [];
gdjs.MenuCode.GDDungeonObjects1= [];
gdjs.MenuCode.GDDungeonObjects2= [];
gdjs.MenuCode.GDRoofObjects1= [];
gdjs.MenuCode.GDRoofObjects2= [];
gdjs.MenuCode.GDNoEntryObjects1= [];
gdjs.MenuCode.GDNoEntryObjects2= [];
gdjs.MenuCode.GDMaskObjects1= [];
gdjs.MenuCode.GDMaskObjects2= [];
gdjs.MenuCode.GDDobbyObjects1= [];
gdjs.MenuCode.GDDobbyObjects2= [];
gdjs.MenuCode.GDTeleportObjects1= [];
gdjs.MenuCode.GDTeleportObjects2= [];
gdjs.MenuCode.GDAttack_959501Objects1= [];
gdjs.MenuCode.GDAttack_959501Objects2= [];
gdjs.MenuCode.GDDobby_9595AttackObjects1= [];
gdjs.MenuCode.GDDobby_9595AttackObjects2= [];
gdjs.MenuCode.GDMonster_9595AttackObjects1= [];
gdjs.MenuCode.GDMonster_9595AttackObjects2= [];
gdjs.MenuCode.GDTrapObjects1= [];
gdjs.MenuCode.GDTrapObjects2= [];
gdjs.MenuCode.GD_9523453_9531665Objects1= [];
gdjs.MenuCode.GD_9523453_9531665Objects2= [];
gdjs.MenuCode.GDSentientObjects1= [];
gdjs.MenuCode.GDSentientObjects2= [];
gdjs.MenuCode.GD_9533647_9527700Objects1= [];
gdjs.MenuCode.GD_9533647_9527700Objects2= [];
gdjs.MenuCode.GDYouWinObjects1= [];
gdjs.MenuCode.GDYouWinObjects2= [];
gdjs.MenuCode.GDYouLoseObjects1= [];
gdjs.MenuCode.GDYouLoseObjects2= [];
gdjs.MenuCode.GDBackgRoundObjects1= [];
gdjs.MenuCode.GDBackgRoundObjects2= [];
gdjs.MenuCode.GD_9520877_9527425_9525361_9525112Objects1= [];
gdjs.MenuCode.GD_9520877_9527425_9525361_9525112Objects2= [];
gdjs.MenuCode.GD_9536820_9522238_9520027_9539029Objects1= [];
gdjs.MenuCode.GD_9536820_9522238_9520027_9539029Objects2= [];
gdjs.MenuCode.GDLogoObjects1= [];
gdjs.MenuCode.GDLogoObjects2= [];
gdjs.MenuCode.GDDarkForestObjects1= [];
gdjs.MenuCode.GDDarkForestObjects2= [];
gdjs.MenuCode.GDBoss_9595RoomObjects1= [];
gdjs.MenuCode.GDBoss_9595RoomObjects2= [];


gdjs.MenuCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Play"), gdjs.MenuCode.GDPlayObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDPlayObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDPlayObjects1[i].IsHovered(null) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDPlayObjects1[k] = gdjs.MenuCode.GDPlayObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDPlayObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14554428);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "木槌选择音效.mp3", false, 16, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Play"), gdjs.MenuCode.GDPlayObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDPlayObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDPlayObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDPlayObjects1[k] = gdjs.MenuCode.GDPlayObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDPlayObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "Choose.mp3", false, 80, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level Selection", false);
}}

}


};

gdjs.MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuCode.GDBGObjects1.length = 0;
gdjs.MenuCode.GDBGObjects2.length = 0;
gdjs.MenuCode.GDPlayObjects1.length = 0;
gdjs.MenuCode.GDPlayObjects2.length = 0;
gdjs.MenuCode.GDLightObjects1.length = 0;
gdjs.MenuCode.GDLightObjects2.length = 0;
gdjs.MenuCode.GDDobby_9595Objects1.length = 0;
gdjs.MenuCode.GDDobby_9595Objects2.length = 0;
gdjs.MenuCode.GDNewSpriteObjects1.length = 0;
gdjs.MenuCode.GDNewSpriteObjects2.length = 0;
gdjs.MenuCode.GDNewSprite2Objects1.length = 0;
gdjs.MenuCode.GDNewSprite2Objects2.length = 0;
gdjs.MenuCode.GDDungeonObjects1.length = 0;
gdjs.MenuCode.GDDungeonObjects2.length = 0;
gdjs.MenuCode.GDRoofObjects1.length = 0;
gdjs.MenuCode.GDRoofObjects2.length = 0;
gdjs.MenuCode.GDNoEntryObjects1.length = 0;
gdjs.MenuCode.GDNoEntryObjects2.length = 0;
gdjs.MenuCode.GDMaskObjects1.length = 0;
gdjs.MenuCode.GDMaskObjects2.length = 0;
gdjs.MenuCode.GDDobbyObjects1.length = 0;
gdjs.MenuCode.GDDobbyObjects2.length = 0;
gdjs.MenuCode.GDTeleportObjects1.length = 0;
gdjs.MenuCode.GDTeleportObjects2.length = 0;
gdjs.MenuCode.GDAttack_959501Objects1.length = 0;
gdjs.MenuCode.GDAttack_959501Objects2.length = 0;
gdjs.MenuCode.GDDobby_9595AttackObjects1.length = 0;
gdjs.MenuCode.GDDobby_9595AttackObjects2.length = 0;
gdjs.MenuCode.GDMonster_9595AttackObjects1.length = 0;
gdjs.MenuCode.GDMonster_9595AttackObjects2.length = 0;
gdjs.MenuCode.GDTrapObjects1.length = 0;
gdjs.MenuCode.GDTrapObjects2.length = 0;
gdjs.MenuCode.GD_9523453_9531665Objects1.length = 0;
gdjs.MenuCode.GD_9523453_9531665Objects2.length = 0;
gdjs.MenuCode.GDSentientObjects1.length = 0;
gdjs.MenuCode.GDSentientObjects2.length = 0;
gdjs.MenuCode.GD_9533647_9527700Objects1.length = 0;
gdjs.MenuCode.GD_9533647_9527700Objects2.length = 0;
gdjs.MenuCode.GDYouWinObjects1.length = 0;
gdjs.MenuCode.GDYouWinObjects2.length = 0;
gdjs.MenuCode.GDYouLoseObjects1.length = 0;
gdjs.MenuCode.GDYouLoseObjects2.length = 0;
gdjs.MenuCode.GDBackgRoundObjects1.length = 0;
gdjs.MenuCode.GDBackgRoundObjects2.length = 0;
gdjs.MenuCode.GD_9520877_9527425_9525361_9525112Objects1.length = 0;
gdjs.MenuCode.GD_9520877_9527425_9525361_9525112Objects2.length = 0;
gdjs.MenuCode.GD_9536820_9522238_9520027_9539029Objects1.length = 0;
gdjs.MenuCode.GD_9536820_9522238_9520027_9539029Objects2.length = 0;
gdjs.MenuCode.GDLogoObjects1.length = 0;
gdjs.MenuCode.GDLogoObjects2.length = 0;
gdjs.MenuCode.GDDarkForestObjects1.length = 0;
gdjs.MenuCode.GDDarkForestObjects2.length = 0;
gdjs.MenuCode.GDBoss_9595RoomObjects1.length = 0;
gdjs.MenuCode.GDBoss_9595RoomObjects2.length = 0;

gdjs.MenuCode.eventsList0(runtimeScene);
gdjs.MenuCode.GDBGObjects1.length = 0;
gdjs.MenuCode.GDBGObjects2.length = 0;
gdjs.MenuCode.GDPlayObjects1.length = 0;
gdjs.MenuCode.GDPlayObjects2.length = 0;
gdjs.MenuCode.GDLightObjects1.length = 0;
gdjs.MenuCode.GDLightObjects2.length = 0;
gdjs.MenuCode.GDDobby_9595Objects1.length = 0;
gdjs.MenuCode.GDDobby_9595Objects2.length = 0;
gdjs.MenuCode.GDNewSpriteObjects1.length = 0;
gdjs.MenuCode.GDNewSpriteObjects2.length = 0;
gdjs.MenuCode.GDNewSprite2Objects1.length = 0;
gdjs.MenuCode.GDNewSprite2Objects2.length = 0;
gdjs.MenuCode.GDDungeonObjects1.length = 0;
gdjs.MenuCode.GDDungeonObjects2.length = 0;
gdjs.MenuCode.GDRoofObjects1.length = 0;
gdjs.MenuCode.GDRoofObjects2.length = 0;
gdjs.MenuCode.GDNoEntryObjects1.length = 0;
gdjs.MenuCode.GDNoEntryObjects2.length = 0;
gdjs.MenuCode.GDMaskObjects1.length = 0;
gdjs.MenuCode.GDMaskObjects2.length = 0;
gdjs.MenuCode.GDDobbyObjects1.length = 0;
gdjs.MenuCode.GDDobbyObjects2.length = 0;
gdjs.MenuCode.GDTeleportObjects1.length = 0;
gdjs.MenuCode.GDTeleportObjects2.length = 0;
gdjs.MenuCode.GDAttack_959501Objects1.length = 0;
gdjs.MenuCode.GDAttack_959501Objects2.length = 0;
gdjs.MenuCode.GDDobby_9595AttackObjects1.length = 0;
gdjs.MenuCode.GDDobby_9595AttackObjects2.length = 0;
gdjs.MenuCode.GDMonster_9595AttackObjects1.length = 0;
gdjs.MenuCode.GDMonster_9595AttackObjects2.length = 0;
gdjs.MenuCode.GDTrapObjects1.length = 0;
gdjs.MenuCode.GDTrapObjects2.length = 0;
gdjs.MenuCode.GD_9523453_9531665Objects1.length = 0;
gdjs.MenuCode.GD_9523453_9531665Objects2.length = 0;
gdjs.MenuCode.GDSentientObjects1.length = 0;
gdjs.MenuCode.GDSentientObjects2.length = 0;
gdjs.MenuCode.GD_9533647_9527700Objects1.length = 0;
gdjs.MenuCode.GD_9533647_9527700Objects2.length = 0;
gdjs.MenuCode.GDYouWinObjects1.length = 0;
gdjs.MenuCode.GDYouWinObjects2.length = 0;
gdjs.MenuCode.GDYouLoseObjects1.length = 0;
gdjs.MenuCode.GDYouLoseObjects2.length = 0;
gdjs.MenuCode.GDBackgRoundObjects1.length = 0;
gdjs.MenuCode.GDBackgRoundObjects2.length = 0;
gdjs.MenuCode.GD_9520877_9527425_9525361_9525112Objects1.length = 0;
gdjs.MenuCode.GD_9520877_9527425_9525361_9525112Objects2.length = 0;
gdjs.MenuCode.GD_9536820_9522238_9520027_9539029Objects1.length = 0;
gdjs.MenuCode.GD_9536820_9522238_9520027_9539029Objects2.length = 0;
gdjs.MenuCode.GDLogoObjects1.length = 0;
gdjs.MenuCode.GDLogoObjects2.length = 0;
gdjs.MenuCode.GDDarkForestObjects1.length = 0;
gdjs.MenuCode.GDDarkForestObjects2.length = 0;
gdjs.MenuCode.GDBoss_9595RoomObjects1.length = 0;
gdjs.MenuCode.GDBoss_9595RoomObjects2.length = 0;


return;

}

gdjs['MenuCode'] = gdjs.MenuCode;
