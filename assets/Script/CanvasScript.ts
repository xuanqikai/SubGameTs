const {ccclass, property} = cc._decorator;

@ccclass
export default class CanvasScript extends cc.Component {
    // @property(cc.Node)
    // backSprite: cc.Node = null;
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
        // 适配解决方案
        // console.log("winSize: W: "+cc.director.getVisibleSize().width+" H: "+cc.director.getVisibleSize().height);
        let _canvas:cc.Canvas = cc.Canvas.instance;

        //子域中 主域的设计分辨率为目标显示分辨率，而由于主域不能自定义设置子域设计分辨率，所以子域设计分辨率是默认的设备分辨率，要平铺显示到主域上，所以后对子域的canvas进行拉伸平铺，图片被拉伸
        
        // 设计分辨率比
        let _rateR = _canvas.designResolution.height/_canvas.designResolution.width;
        //显示分辨率比
        let _rateV = cc.director.getVisibleSize().height/cc.director.getVisibleSize().width;
        
        // _canvas.node.scaleX =cc.director.getVisibleSize().width /(cc.director.getVisibleSize().height/_canvas.designResolution.height * _canvas.designResolution.width);

        // _canvas.node.scaleX = cc.director.getVisibleSize().width/_canvas.designResolution.width;
        // _canvas.node.scaleY = cc.director.getVisibleSize().height/_canvas.designResolution.height;

        // console.log("winSizeRank: scaleX :"+_canvas.node.scaleX);

        // console.log("winSizeRank: _rateR: "+_rateR+" _rateV: "+_rateV);

        if(_rateV > _rateR)
        {
            console.log("winSizeRank: fitWidth");
        }
        else
        {
            console.log("winSizeRank: fitHeight");
            cc.Canvas.instance.node.setScale(cc.Canvas.instance.node.getContentSize().height/cc.Canvas.instance.designResolution.height);
            
        }
        // cc.Canvas.instance.node.setScale(window.sharedCanvas.width/cc.director.getWinSizeInPixels.width);
        // this.backSprite.setScale(window.sharedCanvas.height/cc.Canvas.instance.designResolution.height);

        // console.log("winSizeRank: sharedCanvas W: "+window.sharedCanvas.width+" H: "+window.sharedCanvas.height);
        // console.log("winSizeRank: cc.director.getVisibleSize W: "+cc.director.getVisibleSize.width+" H: "+cc.director.getVisibleSize.height);
        
        // // this.backSprite.setScale(window.sharedCanvas.width/cc.Canvas.instance.designResolution.width);
        // // cc.Canvas.instance.node.setScale(cc.Canvas.instance.designResolution);
        // console.log("winSizeRank: getContentSize W: "+cc.Canvas.instance.node.getContentSize().width+" H: "+cc.Canvas.instance.node.getContentSize().height);

        // console.log("winSizeRank: designResolution W: "+cc.Canvas.instance.designResolution.width+" H: "+cc.Canvas.instance.designResolution.height);

    }
    start() {

    }
}
