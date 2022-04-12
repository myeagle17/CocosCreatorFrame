import NetDef from "./NetDef"

export function createPack(id:string , data:string|any){
    let result:ISocketPack = {
        "id" :id,
        "data":data
    }
    return result;
}

export enum NetCode{
    SUCCESS = 0,
    FAILED = 1,
}

export interface ISocketPack
{
    /** 消息ID (发为两类：客户端请求服务器并应答时参考RequestId，服务器主动推送时参考ResponseId) */
    id: string,
    /** 数据包的数据体内容 (ACK) */
    data?: string | any,
}

export interface LOGIN_Pack{
    userName:string,
}

export interface LOGIN_RESULT_Pack{
    error:NetCode,
    userName?:string,
}

export interface ENTER_GAME_pack{
    userName:string,
}

export interface OBJ_UPDATE_pack{
    objList:Array<OBJ_INFO>,
}

export interface OBJ_INFO{
    userName:string,
    x:number,
    y:number,
}