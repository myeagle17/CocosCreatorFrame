import IManager from "./IManager";
import UserManager from "./UserManager";

export default class MGR
{
    public static User:UserManager;
    private static _arrMgr:Array<IManager> = new Array<IManager>();
    public static Init(){
        MGR._arrMgr = new Array<IManager>();
        MGR.User = new UserManager();
        MGR._arrMgr.push(MGR.User);
    }

    public static RegistMgr():void{
        MGR._arrMgr.forEach(iMgr => {
            iMgr.Regist();
        });
    }

    public static unRegistMgr():void{
        MGR._arrMgr.forEach(iMgr => {
            iMgr.Unregist();
        });
    }
}