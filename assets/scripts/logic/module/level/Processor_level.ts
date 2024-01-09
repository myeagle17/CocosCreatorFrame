import { processorbase } from "../../../engine/module/ProcessorBase";
import EventName from "../../const/EventName";

export class Processor_level extends processorbase 
{
    public Register(): void {
        super.Register();
        this.RegistEvent(EventName.EVENT_ENTER_LEVEL,this.OnEnterLevel);
    }

    private OnEnterLevel(ev:string,obj:any):void{
        // 初始化地图
        // 初始化主角
        // 初始化敌人
    }
}