"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server");
const Places_1 = require("./services/Places");
const Weather_1 = require("./services/Weather");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield (0, server_1.setupServer)();
            const weather = yield Weather_1.weatherSDK.getFiveDayForecast({ lat: "20.967244330919197", lng: "-89.62372073234094" });
            // console.log(weather);
            const place = yield Places_1.placesSDK.getPlaceInfo({ city_name: "merida", state: "yucatan", country: "mexico" });
            console.log(place);
        }
        catch (error) {
            console.error(error);
        }
    });
}
main();
//# sourceMappingURL=main.js.map