import { __awaiter } from "tslib";
import { Browser } from '../auth-browser';
import { Plugins, Capacitor } from '@capacitor/core';
export class CapacitorBrowser extends Browser {
    closeWindow() {
        if (!Plugins.Browser)
            throw new Error("Capacitor Browser Is Undefined!");
        if (Capacitor.platform !== 'android') {
            Plugins.Browser.close();
        }
    }
    showWindow(url) {
        return __awaiter(this, void 0, void 0, function* () {
            let options = {
                url: url,
                windowName: '_self'
            };
            if (!Plugins.Browser)
                throw new Error("Capacitor Browser Is Undefined!");
            Plugins.Browser.addListener("browserFinished", (info) => {
                this.onCloseFunction();
            });
            Plugins.Browser.open(options);
            return;
        });
    }
}
