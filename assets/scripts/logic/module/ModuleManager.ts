import { BaseClass } from "../../engine/pattern/BaseClass";
import { ModuleBase } from "../../engine/module/ModuleBase";

export class ModuleManager extends BaseClass {

    public static ins(): ModuleManager {
        return super.ins();
    }

    public InitModule() {
        ModuleBase.update(0);
    }

    public Update(deltaTime: number) {
        ModuleBase.update(deltaTime);
    }
}