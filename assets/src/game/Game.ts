import G from "./G";
import GModule from "./module/GModule"
import GameEvent from "./define/GameEvent";
import Log from "../engine/utils/Log"

export default class Game{
    public static init(){
        G.Init();
        GModule.Init();
        GModule.RegistMgr();
    }

    public static quit(){
        GModule.unRegistMgr();
    }

    public static update(dt:number){
        G.Event.fire(GameEvent.UPDATE , dt);
    }
}