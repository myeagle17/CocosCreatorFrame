import { _decorator, Component, Node } from 'cc';
import { Game } from '../engine/Game';
import { ModuleManager } from '../engine/module/ModuleManager';
import ExcelConfig from './data/excel/ExcelConfig';
import { UIMgr } from '../engine/ui/UIMgr';
import { UIFormId } from '../engine/ui/UIFormId';
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
            ModuleManager.ins().InitModule();

            UIMgr.ins().OpenUIForm(UIFormId.UITipsForm,"hello world");
        })
    }
}