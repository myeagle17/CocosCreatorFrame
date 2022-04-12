import IManager from './IManager'
export default class UserManager implements IManager{
    public userName:String;

    constructor(){
        this.resetValue();

    }
    
    Regist(): void {

    }
    Unregist(): void {
        
    }

    private resetValue(){
        this.userName = "";
    }

}