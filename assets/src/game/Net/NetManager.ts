
import NetLog from './NetLog';
import EventCenter from '../../engine/EventCenter';
import NetDef from '../../pub/NetDef';
import  {ISocketPack,LOGIN_Pack} from '../../pub/ISocketDef'

export default class GameNetManager 
{
    public userName:string;
    private _webSocket: WebSocket;
    private _host:string;
    private _event:EventCenter;
    private _uuid:string;

    constructor(){
        NetLog.info("GameNetManager");
        this._event = new EventCenter();
    }

    public setHost(host:string){
        this._host = host;
    }

    public connect(userName:string):void
    {
        this.userName = userName;
        this._webSocket = new WebSocket(this._host);
        this._webSocket.binaryType = "arraybuffer";
        this._webSocket.onopen = this.onOpen.bind(this);
        this._webSocket.onclose = this.onClose.bind(this);
        this._webSocket.onmessage = this.onMessage.bind(this);
        this._webSocket.onerror = this.onError.bind(this);
    }

    public close():void
    {
        if(this._webSocket){
            this._webSocket.close();
            this._webSocket = null;
        }
    }

    public on(netID:string , callback:Function , context:any)
    {
        this._event.register(netID , callback , context);
    }

    public send(netID:string , pack:any)
    {
        NetLog.info("fa");
        let loginPack:LOGIN_Pack = {
            "userName":this.userName,
        }
         let msg:ISocketPack = {
            "id" : NetDef.LOGIN,
            "data":loginPack,
         }
         this._webSocket.send(JSON.stringify(msg));
    }

     /** 事件处理：连接成功时 */
     protected onOpen(): void
     {
        NetLog.info("%c(Socket) 连接成功");
        let loginPack:LOGIN_Pack = {
            "userName":this.userName,
        }
         let msg:ISocketPack = {
            "id" : NetDef.LOGIN,
            "data":loginPack,
         }
         this._webSocket.send(JSON.stringify(msg));
     }
 
     /** 事件处理：连接失败时 */
     protected onError(): void
     {
         NetLog.info("%c(Socket) 连接失败");
         this.close();
     }
 
     /** 事件处理：连接被关闭时 */
     protected onClose(): void
     {
         NetLog.info("%c(Socket) 连接被断开");
         this.close();
     }
 
     /** 事件处理：收到消息时 */
     protected onMessage(e: MessageEvent): void
     {
         try {
            let msgObj:ISocketPack = JSON.parse(e.data);
            this._event.fire(msgObj.id , msgObj.data);
         } catch (error) {
             NetLog.error("接收消息错误：" + error);
         }
     }
}