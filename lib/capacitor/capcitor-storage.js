import { __awaiter } from "tslib";
import { Plugins } from '@capacitor/core';
export class CapacitorStorage {
    getItem(name) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!Plugins.Storage)
                throw new Error("Capacitor Storage Is Undefined!");
            let returned = yield Plugins.Storage.get({ key: name });
            return returned.value;
        });
    }
    removeItem(name) {
        if (!Plugins.Storage)
            throw new Error("Capacitor Storage Is Undefined!");
        return Plugins.Storage.remove({ key: name });
    }
    clear() {
        if (!Plugins.Storage)
            throw new Error("Capacitor Storage Is Undefined!");
        return Plugins.Storage.clear();
    }
    setItem(name, value) {
        if (!Plugins.Storage)
            throw new Error("Capacitor Storage Is Undefined!");
        return Plugins.Storage.set({ key: name, value: value });
    }
}
