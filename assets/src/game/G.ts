import NetManager from "./Net/NetManager"
import EventCenter from "../engine/EventCenter"

export default class G{
   public static Net:NetManager;
   public static Event:EventCenter;

   public static Init(){
        G.Net = new NetManager();
        G.Event = new EventCenter;
    }
}