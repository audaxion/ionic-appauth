import { __awaiter } from "tslib";
import { CordovaDocument } from './cordova-document';
import { Requestor } from '@openid/appauth';
import { HTTP } from '@ionic-native/http';
// REQUIRES CORDOVA PLUGINS
// cordova-plugin-advanced-http
export class CordovaRequestor extends Requestor {
    constructor() {
        CordovaDocument.ready(() => HTTP.setDataSerializer('utf8'));
        super();
    }
    xhr(settings) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!settings.method)
                settings.method = "GET";
            yield CordovaDocument.ready();
            switch (settings.method) {
                case "GET":
                    return this.get(settings.url, settings.headers);
                case "POST":
                    return this.post(settings.url, settings.data, settings.headers);
                case "PUT":
                    return this.put(settings.url, settings.data, settings.headers);
                case "DELETE":
                    return this.delete(settings.url, settings.headers);
            }
        });
    }
    get(url, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return HTTP.get(url, undefined, headers).then((response) => JSON.parse(response.data));
        });
    }
    post(url, data, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return HTTP.post(url, data, headers).then((response) => JSON.parse(response.data));
        });
    }
    put(url, data, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return HTTP.put(url, data, headers).then((response) => JSON.parse(response.data));
        });
    }
    delete(url, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return HTTP.delete(url, undefined, headers).then((response) => JSON.parse(response.data));
        });
    }
}
