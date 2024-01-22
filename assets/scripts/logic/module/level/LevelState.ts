import { AFsmState } from "../../../engine/fsm/Fsm";
import { Msg } from "../../../engine/msg/msg";
import EventName from "../../const/EventName";
import GameData from "../../global/GameData";

export class LevelStateReady extends AFsmState{

    public OnEnter(): void {
        Msg.emit(EventName.EVENT_SET_SCORE,0);
        Msg.emit(EventName.EVENT_SET_TIME,GameData.LeftTimeSec);
    }
    public OnUpdate(delta: number): void {
    }
    public OnExit(): void {
    }

}


export class LevelStateRun extends AFsmState{

    public OnEnter(): void {

    }

    public OnUpdate(delta: number): void {

    }

    public OnExit(): void {

    }
}

export class LevelStateEnd extends AFsmState{

    public OnEnter(): void {

    }
    public OnUpdate(delta: number): void {

    }
    public OnExit(): void {
        
    }

}