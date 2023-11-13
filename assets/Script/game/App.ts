import { _decorator, Component, Node } from 'cc';
import { Game } from '../engine/Game';
import { ModuleManager } from '../engine/module/ModuleManager';
const { ccclass, property } = _decorator;

@ccclass('App')
export class App extends Game{
    public runGame(): void {
        super.runGame();
        ModuleManager.ins().InitModule();
    }
}