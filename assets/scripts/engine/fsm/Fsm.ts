import { ActionOne } from '../util/functionDef';

export abstract class AFsmState{
    public Name:string;
    
    public constructor(stateName:string){
        this.Name = stateName;
    }

    public abstract OnEnter():void;
    public abstract OnUpdate(delta:number):void;
    public abstract OnExit():void;
}

// 一个有限状态机
export class Fsm
{
    private stateDict:Map<string,AFsmState>;
    private curState:AFsmState = null;
    public constructor(){
        this.stateDict = new Map();
    }

    public Regist(state:AFsmState):void{
        if(null == state){
            console.error("regist state is null");
            return;
        }
        if(this.stateDict.get(state.Name)!=null){
            console.warn("regist the same state:" + state.Name);
        }
        this.stateDict.set(state.Name,state);
    }

    public ChangeState(stateName:string){
        let nextState = this.stateDict.get(stateName);
        if(null == nextState){
            console.error("can't change state :" + stateName);
            return;
        }
        if(null != this.curState){
            this.curState.OnExit();
        }

        this.curState = nextState;
        this.curState.OnEnter();
    }

    public Update(delta:number):void{
        this.curState?.OnUpdate(delta);
    }
}