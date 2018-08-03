const {ccclass, property} = cc._decorator;

@ccclass
export default class RankItem extends cc.Component {

    @property(cc.Node)
    backSprite: cc.Node = null;
    @property(cc.Label)
    rankLabel: cc.Label = null;
    @property(cc.Sprite)
    avatarImgSprite: cc.Sprite = null;
    @property(cc.Label)
    nickLabel: cc.Label = null;
    @property(cc.Label)
    topScoreLabel: cc.Label = null;

    //皇冠
    @property([cc.Sprite])
    Hat: Array<cc.Sprite> = [];

    start() {

    }

    init(rank, data,noBack = false) {
        //适配方案
        // if(data.fitHeight)
        // {
        //     cc.Canvas.instance.fitHeight =true;
        //     cc.Canvas.instance.fitWidth =false;
        // }
        // else{
        //     cc.Canvas.instance.fitHeight = false;
        //     cc.Canvas.instance.fitWidth = true;
        // }
        let avatarUrl = data.avatarUrl;
        // let nick = data.nickname.length <= 10 ? data.nickname : data.nickname.substr(0, 10) + "...";
        let nick = data.nickname;
        let grade = data.KVDataList.length != 0 ? data.KVDataList[0].value : 0;

        if (rank % 2 == 0 && !noBack) {
            // this.backSprite.color = new cc.Color(55, 55, 55, 255);
            this.backSprite.active = true;
        }
        else{
            this.backSprite.active = false;
        }

        // if (rank == 0) {
        //     this.rankLabel.node.color = new cc.Color(255, 0, 0, 255);
        //     this.rankLabel.node.setScale(2);
        // } else if (rank == 1) {
        //     this.rankLabel.node.color = new cc.Color(255, 255, 0, 255);
        //     this.rankLabel.node.setScale(1.6);
        // } else if (rank == 2) {
        //     this.rankLabel.node.color = new cc.Color(100, 255, 0, 255);
        //     this.rankLabel.node.setScale(1.4);
        // }
        for (let index = 0; index < 3; index++) {
            if(index==rank)
            {
                this.Hat[index].node.active = true;
            }
            else
            {
                this.Hat[index].node.active = false;
            }
        }
        if (rank < 3)
        {
            this.rankLabel.node.active = false;
        }
        // else{
        //     this.rankLabel.node.setScale(1.4);
        // }
        this.rankLabel.string = (rank + 1).toString();
        this.createImage(avatarUrl);
        // if(this.avatarImgSprite.node.active)
        // {
        //     // this.avatarImgSprite.node.setScale(1.5);
        //     // for (let index = 0; index < 3; index++) {
        //     //     if(index==rank)
        //     //     {
        //     //         this.Hat[index].node.active = true;
        //     //         this.Hat[index].node.setScale(0.5);
        //     //     }
        //     //     else
        //     //     {
        //     //         this.Hat[index].node.active = false;
        //     //     }
        //     // }
        // }
        this.nickLabel.string = nick;
        this.topScoreLabel.string = grade.toString();
    }

    createImage(avatarUrl) {
        if (CC_WECHATGAME) {
            try {
                let image = wx.createImage();
                image.onload = () => {
                    try {
                        let texture = new cc.Texture2D();
                        texture.initWithElement(image);
                        texture.handleLoadedTexture();
                        this.avatarImgSprite.spriteFrame = new cc.SpriteFrame(texture);
                    } catch (e) {
                        cc.log(e);
                        this.avatarImgSprite.node.active = false;
                    }
                };
                image.src = avatarUrl;
            } catch (e) {
                cc.log(e);
                this.avatarImgSprite.node.active = false;
            }
        } else {
            cc.loader.load({
                url: avatarUrl, type: 'jpg'
            }, (err, texture) => {
                this.avatarImgSprite.spriteFrame = new cc.SpriteFrame(texture);
            });
        }
    }
}
