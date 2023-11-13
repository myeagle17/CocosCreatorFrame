import { _decorator, find, Node, Prefab, director, profiler, assetManager, instantiate, Sprite, ImageAsset, SpriteFrame, Component } from 'cc';
import { BaseClass } from './pattern/BaseClass';
import { UIFormId } from './ui/UIFormId';
import { UIMgr } from './ui/UIMgr';
import { AppBase } from './AppBase';
import { ModuleManager } from './module/ModuleManager';


const { ccclass } = _decorator;

@ccclass('Game')
export class Game extends Component {
    private static _ince:Game = null;
    public static ins(): Game {
        return Game._ince;
    }

    public initNode: Node;
    public cameraNode: Node;
    public roleNode: Node;
    public uiNode: Node;
    
    protected onLoad(): void {
        Game._ince = this;
    }

    public runGame(){
        UIMgr.ins().init();
        
    }

    public update(deltaTime: number){
        ModuleManager.ins().Update(deltaTime);
        UIMgr.ins().updateUIForm(deltaTime);
    }
}