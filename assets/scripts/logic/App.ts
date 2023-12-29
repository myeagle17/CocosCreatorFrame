import { _decorator } from 'cc';
import { Game } from '../engine/Game';
import ExcelConfig from './data/excel/ExcelConfig';
import { UIMgr } from '../engine/ui/UIMgr';
import { UIFormId } from '../engine/ui/UIFormId';
import { MapModule } from './module/map/MapModule';
const { ccclass, property } = _decorator;

@ccclass('App')
export class App extends Game{
    protected onLoad(): void {
        super.onLoad();
        this.runGame();
    }
    public runGame(): void {
        super.runGame();
        ExcelConfig.LoadAll(()=>{
           this.InitModule();
            UIMgr.ins().OpenUIForm(UIFormId.UITipsForm,"hello world");
        })
    }

    private InitModule():void{
        new MapModule("map");
    }
}