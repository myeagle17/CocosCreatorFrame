import Log from "../../engine/utils/Log"
export default class NetLog
{
    public static NetLogDebug:boolean = true;
    public static info(msg:any)
    {
        if(this.NetLogDebug){
            Log.info(msg);
        }
    }

    public static error(msg:any)
    {
        if(this.NetLogDebug){
            Log.error(msg);
        }
    }
}
