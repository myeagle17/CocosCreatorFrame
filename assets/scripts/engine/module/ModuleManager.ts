import { BaseClass } from "../pattern/BaseClass";
import { ModuleBase } from "./ModuleBase";

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