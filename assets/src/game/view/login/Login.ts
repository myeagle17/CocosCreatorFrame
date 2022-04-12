import SusieComponent from "../../SusieComponent"
import G from "../../G"
import NetDef from "../../../pub/NetDef";
import { LOGIN_RESULT_Pack, NetCode } from "../../../pub/ISocketDef";
import GModule from "../../module/GModule";
import NetLog from "../../Net/NetLog";

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends SusieComponent {

    @property(cc.Button)
    btnOK:cc.Button = null;

    @property(cc.EditBox)
    editBoxName:cc.EditBox = null;

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        NetLog.info("Login");
        this.btnOK.node.on("click" ,this.onBtnOKClick , this);
        G.Net.on(NetDef.LOGIN_RESULT,this.onNetLoginResult ,this);
    }

    start () {

    }

    //Event
    onBtnOKClick(event:any){
        G.Net.setHost("ws://localhost:3000");
        G.Net.close();
        G.Net.connect(this.editBoxName.string);
    }

    onNetLoginResult(data:any) {
        let pack:LOGIN_RESULT_Pack = JSON.parse(data);
        console.log(`login pack = ${pack.userName} + ${pack.error}`);
        if(pack.error == NetCode.SUCCESS){
            GModule.User.userName = pack.userName;
            
        }
    }
}
