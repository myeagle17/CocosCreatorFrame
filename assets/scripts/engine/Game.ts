import { _decorator, Node, Component } from 'cc';
import { UIMgr } from './ui/UIMgr';
import { ModuleManager } from './module/ModuleManager';
import { ResAB } from './res/ResAB';


const { ccclass ,property} = _decorator;

@ccclass('Game')
export class Game extends Component {
    private static _ince:Game = null;
    public static ins(): Game {
        return Game._ince;
    }
    @property(Node)
    public initNode: Node;
    @property(Node)
    public uiNode: Node;
    
    protected onLoad(): void {
        Game._ince = this;
    }

    public runGame(){
        UIMgr.ins().init(this.uiNode);
    }

    public update(deltaTime: number){
        ModuleManager.ins().Update(deltaTime);
        UIMgr.ins().updateUIForm(deltaTime);
        ResAB.ins().update(deltaTime);
    }
}

