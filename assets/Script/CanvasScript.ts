const {ccclass, property} = cc._decorator;

@ccclass
export default class CanvasScript extends cc.Component {
    onLoad()
    {
        // let isBackGround = false;
        // cc.game.on(cc.game.EVENT_HIDE, function(event){
        //     if(!isBackGround){
        //         isBackGround = true;
        //         cc.log("切换后台",event);
        //     }
        // });
        // cc.game.on(cc.game.EVENT_SHOW, function(event){
        //     if(isBackGround){
        //         cc.log("切换前台",event);    
        //         isBackGround = false;
        //     }
        // });
        //适配解决方案
        // console.log("winSize: W: "+cc.director.getVisibleSize().width+" H: "+cc.director.getVisibleSize().height);
        let _canvas:cc.Canvas = this.getComponent("cc.Canvas");

        //设计分辨率比
        let _rateR = _canvas.designResolution.height/_canvas.designResolution.width;
        //显示分辨率比
        let _rateV = cc.director.getVisibleSize().height/cc.director.getVisibleSize().width;
        console.log("winSizeRank: _rateR: "+_rateR+" _rateV: "+_rateV);
        if(_rateV > _rateR)
        {
            _canvas.fitHeight = false;
            _canvas.fitWidth = true;
            console.log("winSizeRank: fitWidth");
        }
        else
        {
            _canvas.fitHeight = true;
            _canvas.fitWidth = false;
            console.log("winSizeRank: fitHeight");
            
        }
        
    }
    start() {

    }
}
