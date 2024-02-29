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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.placesSDK = void 0;
const axios_1 = __importDefault(require("axios"));
class Places {
    getPlaceInfo({ city_name, state, country }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield axios_1.default.get(`https://search.reservamos.mx/api/v2/places?q=${city_name}`);
                const places = res.data;
                const cities = places.filter((place) => place.result_type === "city");
                const bestMatch = cities.find((place) => {
                    const stateNormalizes = place.state.trim().normalize("NFD").toLocaleLowerCase();
                    const countryNormalized = place.country.trim().normalize("NFD").toLocaleLowerCase();
                    return stateNormalizes == state && countryNormalized === country;
                });
                if (!bestMatch)
                    return null;
                console.log(bestMatch);
                return bestMatch;
            }
            catch (error) {
                console.error(error);
                throw error;
            }
        });
    }
}
exports.placesSDK = new Places();
//# sourceMappingURL=Places.js.map